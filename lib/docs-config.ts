export interface DocPage {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface DocSection {
  title: string;
  pages: DocPage[];
}

export const docsConfig: DocSection[] = [
  {
    title: "Getting Started",
    pages: [
      {
        title: "Introduction",
        href: "/docs",
        description: "Welcome to FigClank docs",
      },
      {
        title: "Keyboard Shortcuts",
        href: "/docs/getting-started/keyboard-shortcuts",
        description: "Learn all the keyboard shortcuts for faster design",
      },
    ],
  },
  {
    title: "Tools",
    pages: [
      {
        title: "Toolbar",
        href: "/docs/tools/toolbar",
        description: "Quick access to all design tools",
      },
      {
        title: "Frames",
        href: "/docs/tools/frames",
        description: "Container elements for organizing content",
      },
      {
        title: "Text",
        href: "/docs/tools/text",
        description: "Add and style text elements",
      },
      {
        title: "Alignment",
        href: "/docs/tools/alignment",
        description: "Align and distribute objects on the canvas",
      },
    ],
  },
  {
    title: "Features",
    pages: [
      {
        title: "Components",
        href: "/docs/features/components",
        description: "Reusable design elements",
      },
      {
        title: "Auto Layout",
        href: "/docs/features/auto-layout",
        description: "Responsive layouts with auto-sizing",
      },
      {
        title: "Fills",
        href: "/docs/features/fills",
        description: "Solid colors, gradients, and image fills",
      },
      {
        title: "Effects",
        href: "/docs/features/effects",
        description: "Shadows, blur, and other effects",
      },
      {
        title: "3D Extrude",
        href: "/docs/features/3d-extrude",
        description: "Transform 2D shapes into 3D objects",
      },
      {
        title: "AI Design Generator",
        href: "/docs/features/ai-design-generator",
        description: "Generate designs with AI",
      },
    ],
  },
  {
    title: "MCP Integration",
    pages: [
      {
        title: "Agent Guide",
        href: "/docs/mcp/agent-guide",
        description: "Guide for AI agents using FigClank MCP",
      },
      {
        title: "Design Contract",
        href: "/docs/mcp/design-contract",
        description: "MCP design contract specification",
      },
      {
        title: "Design to Code Workflow",
        href: "/docs/mcp/design-to-code-workflow",
        description: "Converting designs to code with MCP",
      },
    ],
  },
];

export function getAllPages(): DocPage[] {
  return docsConfig.flatMap((section) => section.pages);
}

export function getPageByHref(href: string): DocPage | undefined {
  return getAllPages().find((page) => page.href === href);
}

export function getSectionByPage(href: string): DocSection | undefined {
  return docsConfig.find((section) =>
    section.pages.some((page) => page.href === href)
  );
}
