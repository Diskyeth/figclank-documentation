import {
  DocContent,
  Section,
  Paragraph,
  List,
  ToolTable,
} from "@/components/docs";

export default function TextPage() {
  return (
    <DocContent
      title="Text"
      description="Add and style text with the text tool. Choose fonts, weights, alignment, and spacing."
    >
      <Section title="Adding Text">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=AddText.svg",
              name: "Add Text",
              shortcut: "T",
              description: "Add text elements to the canvas. Double-click to edit inline.",
            },
          ]}
        />
      </Section>

      <Section title="Typography">
        <List
          items={[
            "Choose from extensive font library",
            "Font styles: Regular, Bold, Italic",
            "Adjustable font size",
            "Font weights: Normal, Semibold, Bold",
          ]}
        />
      </Section>

      <Section title="Text Alignment">
        <Paragraph>Control horizontal and vertical alignment:</Paragraph>
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=Text Left Align.svg",
              name: "Align Left",
              description: "Align text to the left edge",
            },
            {
              icon: "/iconsEditor_/IconEditor=Text Center Align.svg",
              name: "Align Center",
              description: "Center text horizontally",
            },
            {
              icon: "/iconsEditor_/IconEditor=Text Right Align.svg",
              name: "Align Right",
              description: "Align text to the right edge",
            },
          ]}
        />
      </Section>

      <Section title="Text Sizing">
        <Paragraph>Control how text boxes resize:</Paragraph>
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=TextDirection_AutoWidth.svg",
              name: "Auto Width",
              description: "Text box grows horizontally to fit content",
            },
            {
              icon: "/iconsEditor_/IconEditor=TextDirection_AutoHeight.svg",
              name: "Auto Height",
              description: "Text box grows vertically to fit content",
            },
            {
              icon: "/iconsEditor_/IconEditor=TextDirection_FixedSize.svg",
              name: "Fixed Size",
              description: "Text box maintains fixed dimensions",
            },
          ]}
        />
      </Section>

      <Section title="Spacing Controls">
        <List
          items={[
            "Letter spacing and line height controls",
            "Paragraph spacing options",
            "Word spacing adjustments",
          ]}
        />
      </Section>
    </DocContent>
  );
}
