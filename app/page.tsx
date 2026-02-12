import Link from "next/link";
import Image from "next/image";
import { Keyboard, Cpu } from "lucide-react";
import { ButtonPrimaryLink, ButtonSecondaryLink } from "@/components/ui/ButtonLink";

const quickLinks = [
  {
    title: "Toolbar",
    description: "Quick access to all design tools",
    href: "/docs/tools/toolbar",
    icon: "/iconsEssentials_/IconEssentials=DesignTool.svg",
  },
  {
    title: "Frames",
    description: "Container elements for organizing content",
    href: "/docs/tools/frames",
    icon: "/iconsToolKit_/ToolBar=Frame.svg",
  },
  {
    title: "Text",
    description: "Add and style text elements",
    href: "/docs/tools/text",
    icon: "/iconsToolKit_/ToolBar=AddText.svg",
  },
  {
    title: "Components",
    description: "Reusable design elements",
    href: "/docs/features/components",
    icon: "/iconsEditor_/IconEditor=component.svg",
  },
  {
    title: "Auto Layout",
    description: "Responsive layouts with auto-sizing",
    href: "/docs/features/auto-layout",
    icon: "/iconsEditor_/IconEditor=PaddingGap.svg",
  },
  {
    title: "3D Extrude",
    description: "Transform 2D shapes into 3D objects",
    href: "/docs/features/3d-extrude",
    icon: "/iconsToolKit_/ToolBar=Extrude3D.svg",
  },
  {
    title: "AI Design Generator",
    description: "Generate designs with AI",
    href: "/docs/features/ai-design-generator",
    icon: "/iconsEssentials_/IconEssentials=AI_Sparks.svg",
  },
  {
    title: "Keyboard Shortcuts",
    description: "Speed up your workflow",
    href: "/docs/getting-started/keyboard-shortcuts",
    icon: "keyboard", // Using Lucide for this one as no keyboard icon exists
  },
];

const mcpLinks = [
  {
    title: "Agent Guide",
    description: "Quick reference for AI agents",
    href: "/docs/mcp/agent-guide",
  },
  {
    title: "Design Contract",
    description: "MCP schema specification",
    href: "/docs/mcp/design-contract",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-dashboard">
      {/* Hero + Quick Start Section */}
      <header>
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Hero - Left Side */}
            <div>
              {/* Logo */}
              <div className="flex mb-6">
                <Image
                  src="/icon.png"
                  alt="FigClank"
                  width={64}
                  height={64}
                  className="rounded-md shadow-card"
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                FigClank: Docs
              </h1>

              {/* Description */}
              <p className="text-xl text-foreground-muted mb-8">
                Learn how to create beautiful designs with FigClank&apos;s powerful
                design tools, components, and AI-powered features.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <ButtonPrimaryLink href="/docs">
                  Get Started
                </ButtonPrimaryLink>
                <ButtonSecondaryLink href="/docs/getting-started/keyboard-shortcuts">
                  Keyboard Shortcuts
                </ButtonSecondaryLink>
              </div>
            </div>

            {/* Quick Start - Right Side */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Quick Start</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group p-4 rounded-md bg-background-card-primary border border-grey-100 hover:border-brand-orange/50 transition-all hover:shadow-card"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-brand-orange/10 group-hover:bg-brand-orange transition-colors">
                        {link.icon === "keyboard" ? (
                          <Keyboard className="h-4 w-4 text-white" />
                        ) : (
                          <Image
                            src={link.icon}
                            alt={link.title}
                            width={16}
                            height={16}
                            className="opacity-90 group-hover:brightness-0 group-hover:invert transition-all"
                          />
                        )}
                      </div>
                      <h3 className="font-medium text-sm">{link.title}</h3>
                    </div>
                    <p className="text-xs text-foreground-muted">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MCP Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-grey-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple">
            <Cpu className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold">MCP Integration</h2>
        </div>
        <p className="text-foreground-muted mb-8 max-w-2xl">
          FigClank provides an MCP server for AI agents to read and mutate design
          documents, export assets, and convert designs to code.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {mcpLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-6 rounded-md bg-background-card-primary border border-grey-100 hover:border-brand-purple/50 transition-all hover:shadow-card"
            >
              <h3 className="font-medium mb-2">{link.title}</h3>
              <p className="text-sm text-foreground-muted">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-grey-100">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground-muted">
          <p>&copy; 2026 FigClank. All rights reserved.</p>
          <p>
            Press{" "}
            <kbd className="px-1.5 py-0.5 bg-grey-100 rounded text-xs">⌘K</kbd>{" "}
            to search
          </p>
        </div>
      </footer>
    </div>
  );
}
