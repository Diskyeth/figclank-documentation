"use client";

import { cn } from "@/lib/utils";
import { Link2, Info, AlertTriangle, Lightbulb, CheckCircle } from "lucide-react";
import Image from "next/image";

// ============================================
// Section Component with anchor link
// ============================================
interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  const sectionId = id || title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id={sectionId} className={cn("mb-10 scroll-mt-20", className)}>
      <h2 className="group flex items-center gap-2 text-xl font-semibold mb-4">
        <a
          href={`#${sectionId}`}
          className="hover:text-brand-orange transition-colors"
        >
          {title}
        </a>
        <Link2 className="h-4 w-4 opacity-0 group-hover:opacity-50 transition-opacity" />
      </h2>
      {children}
    </section>
  );
}

// ============================================
// Subsection Component
// ============================================
interface SubsectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Subsection({ id, title, children, className }: SubsectionProps) {
  const sectionId = id || title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div id={sectionId} className={cn("mb-6 scroll-mt-20", className)}>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      {children}
    </div>
  );
}

// ============================================
// Note/Callout Components
// ============================================
type CalloutVariant = "info" | "warning" | "tip" | "success";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    bgColor: "bg-editor-blue/10",
    borderColor: "border-editor-blue/30",
    iconColor: "text-editor-blue",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-brand-orange/10",
    borderColor: "border-brand-orange/30",
    iconColor: "text-brand-orange",
  },
  tip: {
    icon: Lightbulb,
    bgColor: "bg-brand-purple/10",
    borderColor: "border-brand-purple/30",
    iconColor: "text-brand-purple",
  },
  success: {
    icon: CheckCircle,
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
  },
};

export function Callout({
  variant = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const config = calloutConfig[variant];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "rounded-lg border p-4 my-4",
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", config.iconColor)} />
        <div className="flex-1">
          {title && <div className="font-medium mb-1">{title}</div>}
          <div className="text-sm text-foreground-muted">{children}</div>
        </div>
      </div>
    </div>
  );
}

// Convenience components
export const Note = (props: Omit<CalloutProps, "variant">) => (
  <Callout variant="info" {...props} />
);
export const Warning = (props: Omit<CalloutProps, "variant">) => (
  <Callout variant="warning" {...props} />
);
export const Tip = (props: Omit<CalloutProps, "variant">) => (
  <Callout variant="tip" {...props} />
);
export const Success = (props: Omit<CalloutProps, "variant">) => (
  <Callout variant="success" {...props} />
);

// ============================================
// Keyboard Shortcut Component
// ============================================
interface KeyboardShortcutProps {
  keys: string[];
  className?: string;
}

export function KeyboardShortcut({ keys, className }: KeyboardShortcutProps) {
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      {keys.map((key, index) => (
        <span key={index}>
          <kbd className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded bg-grey-100 border border-grey-200 text-xs font-medium">
            {key}
          </kbd>
          {index < keys.length - 1 && (
            <span className="text-foreground-subtle mx-0.5">+</span>
          )}
        </span>
      ))}
    </span>
  );
}

// Single key shortcut
interface ShortcutProps {
  shortcut: string;
  className?: string;
}

export function Shortcut({ shortcut, className }: ShortcutProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded bg-grey-100 border border-grey-200 text-xs font-medium",
        className
      )}
    >
      {shortcut}
    </kbd>
  );
}

// ============================================
// Tool Table Component
// ============================================
interface Tool {
  icon?: string;
  name: string;
  shortcut?: string;
  description: string;
}

interface ToolTableProps {
  tools: Tool[];
  className?: string;
}

export function ToolTable({ tools, className }: ToolTableProps) {
  return (
    <div className={cn("overflow-x-auto my-4", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-grey-100">
            {tools.some((t) => t.icon) && (
              <th className="text-left py-3 px-4 font-medium text-foreground-muted">
                Icon
              </th>
            )}
            <th className="text-left py-3 px-4 font-medium text-foreground-muted">
              Tool
            </th>
            <th className="text-left py-3 px-4 font-medium text-foreground-muted">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr
              key={index}
              className="border-b border-grey-100/50 hover:bg-grey-100/30 transition-colors"
            >
              {tools.some((t) => t.icon) && (
                <td className="py-3 px-4">
                  {tool.icon && (
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  )}
                </td>
              )}
              <td className="py-3 px-4">
                <span className="font-medium">{tool.name}</span>
                {tool.shortcut && (
                  <Shortcut shortcut={tool.shortcut} className="ml-2" />
                )}
              </td>
              <td className="py-3 px-4 text-foreground-muted">
                {tool.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================
// Code Block Component
// ============================================
interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export function CodeBlock({
  code,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  language = "typescript",
  title,
  className,
}: CodeBlockProps) {
  return (
    <div className={cn("my-4 rounded-lg overflow-hidden", className)}>
      {title && (
        <div className="bg-grey-100 px-4 py-2 text-sm text-foreground-muted border-b border-grey-200">
          {title}
        </div>
      )}
      <pre className="bg-background-tertiary p-4 overflow-x-auto">
        <code className="text-sm leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}

// ============================================
// Paragraph Component
// ============================================
interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={cn("text-foreground-muted leading-relaxed mb-4", className)}>
      {children}
    </p>
  );
}

// ============================================
// List Components
// ============================================
interface ListProps {
  items: (string | React.ReactNode)[];
  ordered?: boolean;
  className?: string;
}

export function List({ items, ordered = false, className }: ListProps) {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag
      className={cn(
        "my-4 pl-6 space-y-2 text-foreground-muted",
        ordered ? "list-decimal" : "list-disc",
        className
      )}
    >
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ListTag>
  );
}

// ============================================
// Property Table Component
// ============================================
interface Property {
  name: string;
  type?: string;
  description: string;
}

interface PropertyTableProps {
  properties: Property[];
  className?: string;
}

export function PropertyTable({ properties, className }: PropertyTableProps) {
  return (
    <div className={cn("overflow-x-auto my-4", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-grey-100">
            <th className="text-left py-3 px-4 font-medium text-foreground-muted">
              Property
            </th>
            {properties.some((p) => p.type) && (
              <th className="text-left py-3 px-4 font-medium text-foreground-muted">
                Type
              </th>
            )}
            <th className="text-left py-3 px-4 font-medium text-foreground-muted">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop, index) => (
            <tr
              key={index}
              className="border-b border-grey-100/50 hover:bg-grey-100/30 transition-colors"
            >
              <td className="py-3 px-4">
                <code className="text-brand-orange">{prop.name}</code>
              </td>
              {properties.some((p) => p.type) && (
                <td className="py-3 px-4">
                  <code className="text-foreground-subtle">{prop.type}</code>
                </td>
              )}
              <td className="py-3 px-4 text-foreground-muted">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================
// Mapping Table Component (for FigClank to CSS mappings)
// ============================================
interface MappingRow {
  source: string;
  target: string;
}

interface MappingTableProps {
  title?: string;
  sourceHeader?: string;
  targetHeader?: string;
  rows: MappingRow[];
  className?: string;
}

export function MappingTable({
  title,
  sourceHeader = "FigClank Property",
  targetHeader = "CSS Property",
  rows,
  className,
}: MappingTableProps) {
  return (
    <div className={cn("my-4", className)}>
      {title && <h4 className="text-base font-medium mb-3">{title}</h4>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-grey-100">
              <th className="text-left py-3 px-4 font-medium text-foreground-muted">
                {sourceHeader}
              </th>
              <th className="text-left py-3 px-4 font-medium text-foreground-muted">
                {targetHeader}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-grey-100/50 hover:bg-grey-100/30 transition-colors"
              >
                <td className="py-3 px-4">
                  <code className="text-brand-orange">{row.source}</code>
                </td>
                <td className="py-3 px-4">
                  <code className="text-brand-purple">{row.target}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
