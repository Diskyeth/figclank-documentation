"use client";

import { cn } from "@/lib/utils";

interface DocContentProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function DocContent({
  title,
  description,
  children,
  className,
}: DocContentProps) {
  return (
    <article className={cn("max-w-3xl", className)}>
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        {description && (
          <p className="text-lg text-foreground-muted">{description}</p>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none">{children}</div>
    </article>
  );
}
