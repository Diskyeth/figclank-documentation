import {
  DocContent,
  Section,
  Paragraph,
  List,
  Tip,
  ToolTable,
} from "@/components/docs";

export default function FramesPage() {
  return (
    <DocContent
      title="Frames"
      description="Container elements for organizing content. Use frame templates for Mini Apps, phone, tablet, and desktop sizes."
    >
      <Section title="Frame Basics">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=Frame.svg",
              name: "Frame",
              shortcut: "F",
              description: "Create frame containers for organizing content",
            },
          ]}
        />
      </Section>

      <Section title="Frame Templates">
        <Paragraph>
          When you press <kbd className="px-1.5 py-0.5 bg-grey-100 rounded text-xs">F</kbd> to
          select the Frame tool, a templates modal opens automatically. Choose from
          pre-configured frame sizes organized by category:
        </Paragraph>
        <List
          items={[
            <><strong>Mini Apps:</strong> Farcaster Mini App templates (Light and Dark) with pre-built UI components and structure</>,
            <><strong>Phone:</strong> Various iPhone and Android device sizes (iPhone 16, iPhone 16 Pro, Android Compact, etc.)</>,
            <><strong>Tablet:</strong> iPad sizes (iPad Pro 12.9&quot;, iPad Pro 11&quot;, iPad Air, iPad Mini)</>,
            <><strong>Desktop:</strong> Standard desktop resolutions (HD, 4K, 1440p)</>,
          ]}
        />
        <Tip>
          Mini App templates load complete designs with pre-configured components,
          while other templates create empty frames with the correct dimensions for
          your target device or screen size.
        </Tip>
      </Section>
    </DocContent>
  );
}
