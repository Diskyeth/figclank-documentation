"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { docsConfig, type DocSection } from "@/lib/docs-config";
import { cn } from "@/lib/utils";

interface SidebarSectionProps {
  section: DocSection;
  currentPath: string;
}

function SidebarSection({ section, currentPath }: SidebarSectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _isActive = section.pages.some((page) => page.href === currentPath);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className="flex w-full items-center justify-between py-2 text-sm font-medium text-foreground-muted hover:text-white transition-colors">
        <span>{section.title}</span>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </Collapsible.Trigger>
      <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
        <ul className="ml-2 border-l border-grey-200 pl-4 py-1 space-y-1">
          {section.pages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className={cn(
                  "block py-1.5 text-sm transition-colors",
                  currentPath === page.href
                    ? "text-brand-orange font-medium"
                    : "text-foreground-muted hover:text-white"
                )}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-30 h-screen w-64 border-r border-grey-100 bg-background-dashboard">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-grey-100">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="FigClank"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-semibold text-lg text-white">FigClank Docs</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-6">
        <div className="space-y-6">
          {docsConfig.map((section) => (
            <SidebarSection
              key={section.title}
              section={section}
              currentPath={pathname}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}
