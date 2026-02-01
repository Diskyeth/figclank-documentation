"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Search, X, FileText } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { getAllPages, type DocPage } from "@/lib/docs-config";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const allPages = useMemo(() => getAllPages(), []);

  const filteredPages = useMemo(() => {
    if (!query.trim()) return allPages;
    const lowerQuery = query.toLowerCase();
    return allPages.filter(
      (page) =>
        page.title.toLowerCase().includes(lowerQuery) ||
        page.description?.toLowerCase().includes(lowerQuery)
    );
  }, [query, allPages]);

  // Reset selection when filtered pages change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredPages]);

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredPages.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (filteredPages[selectedIndex]) {
          navigateTo(filteredPages[selectedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        onOpenChange(false);
        break;
    }
  };

  const navigateTo = (page: DocPage) => {
    router.push(page.href);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2 rounded-xl border border-grey-100 bg-background-tertiary shadow-card data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2">
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-grey-100 px-4 py-3">
            <Search className="h-5 w-5 text-foreground-muted" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white placeholder:text-foreground-subtle outline-none"
              autoFocus
            />
            <Dialog.Close className="rounded-md p-1 text-foreground-muted hover:bg-grey-100 hover:text-white transition-colors">
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredPages.length === 0 ? (
              <div className="py-8 text-center text-foreground-muted">
                No results found for &quot;{query}&quot;
              </div>
            ) : (
              <ul className="space-y-1">
                {filteredPages.map((page, index) => (
                  <li key={page.href}>
                    <button
                      onClick={() => navigateTo(page)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors",
                        index === selectedIndex
                          ? "bg-brand-orange/20 text-white"
                          : "text-foreground-muted hover:bg-grey-100 hover:text-white"
                      )}
                    >
                      <FileText className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{page.title}</div>
                        {page.description && (
                          <div className="text-sm text-foreground-subtle line-clamp-1">
                            {page.description}
                          </div>
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 border-t border-grey-100 px-4 py-2 text-xs text-foreground-subtle">
            <span>
              <kbd className="rounded bg-grey-100 px-1.5 py-0.5 mr-1">↵</kbd>
              to select
            </span>
            <span>
              <kbd className="rounded bg-grey-100 px-1.5 py-0.5 mr-1">↑↓</kbd>
              to navigate
            </span>
            <span>
              <kbd className="rounded bg-grey-100 px-1.5 py-0.5 mr-1">esc</kbd>
              to close
            </span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
