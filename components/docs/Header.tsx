"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  onSearchClick?: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-20 h-16 border-b border-grey-100 bg-background-dashboard/80 backdrop-blur-lg">
      <div className="flex h-full items-center justify-between px-6">
        {/* Breadcrumb placeholder */}
        <div className="text-sm text-foreground-muted">Documentation</div>

        {/* Search button */}
        <button
          onClick={onSearchClick}
          className="flex items-center gap-2 rounded-lg bg-background-tertiary px-3 py-2 text-sm text-foreground-muted hover:text-white transition-colors"
        >
          <Search className="h-4 w-4" />
          <span>Search</span>
          {mounted && (
            <kbd className="ml-2 hidden rounded bg-grey-100 px-1.5 py-0.5 text-xs sm:inline-block">
              ⌘K
            </kbd>
          )}
        </button>
      </div>
    </header>
  );
}
