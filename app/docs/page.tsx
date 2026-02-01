import { DocContent, Section, Paragraph, List, Tip } from "@/components/docs";

export default function DocsIntroPage() {
  return (
    <DocContent
      title="Welcome to FigClank"
      description="A powerful Figma-like design tool for creating beautiful interfaces"
    >
      <Section title="What is FigClank?">
        <Paragraph>
          FigClank is a browser-based design tool that enables you to create,
          edit, and export UI designs with ease. Whether you&apos;re building
          Mini Apps, mobile interfaces, or desktop applications, FigClank
          provides the tools you need.
        </Paragraph>
      </Section>

      <Section title="Key Features">
        <List
          items={[
            "Canvas-based design with frames, shapes, and text",
            "Components and component siblings for reusable elements",
            "Auto Layout for responsive designs",
            "AI-powered design generation",
            "3D extrusion for creating depth effects",
            "MCP integration for design-to-code workflows",
            "Real-time collaboration features",
          ]}
        />
      </Section>

      <Section title="Getting Started">
        <Paragraph>
          New to FigClank? Here&apos;s how to get started:
        </Paragraph>
        <List
          ordered
          items={[
            "Learn the basic tools in the Toolbar guide",
            "Understand Frames and how to organize your designs",
            "Master Keyboard Shortcuts for faster workflows",
            "Explore Components to create reusable elements",
            "Try the AI Design Generator for rapid prototyping",
          ]}
        />
      </Section>

      <Tip title="Pro Tip">
        Press <kbd className="px-1.5 py-0.5 bg-grey-100 rounded text-xs">⌘K</kbd> or{" "}
        <kbd className="px-1.5 py-0.5 bg-grey-100 rounded text-xs">Ctrl+K</kbd> anywhere
        to quickly search the documentation.
      </Tip>
    </DocContent>
  );
}
