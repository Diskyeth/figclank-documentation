import {
  DocContent,
  Section,
  Paragraph,
  ToolTable,
  List,
} from "@/components/docs";

export default function AlignmentPage() {
  return (
    <DocContent
      title="Alignment & Distribution"
      description="Use alignment and distribution tools to precisely arrange multiple elements on the canvas."
    >
      <Paragraph>
        Alignment and distribution tools help you precisely arrange multiple
        elements on the canvas. Select two or more elements to access these
        options in the right sidebar.
      </Paragraph>

      <Section title="Horizontal Alignment">
        <Paragraph>Align selected elements along the horizontal axis:</Paragraph>
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=Align Left.svg",
              name: "Align Left",
              description:
                "Align all selected elements to the left edge of the leftmost element",
            },
            {
              icon: "/iconsEditor_/IconEditor=Align Center.svg",
              name: "Align Center (Horizontal)",
              description:
                "Align all selected elements to the horizontal center of the selection",
            },
            {
              icon: "/iconsEditor_/IconEditor=Align Right.svg",
              name: "Align Right",
              description:
                "Align all selected elements to the right edge of the rightmost element",
            },
          ]}
        />
      </Section>

      <Section title="Vertical Alignment">
        <Paragraph>Align selected elements along the vertical axis:</Paragraph>
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=Align Top.svg",
              name: "Align Top",
              description:
                "Align all selected elements to the top edge of the topmost element",
            },
            {
              icon: "/iconsEditor_/IconEditor=Align Middle.svg",
              name: "Align Middle (Vertical)",
              description:
                "Align all selected elements to the vertical center of the selection",
            },
            {
              icon: "/iconsEditor_/IconEditor=Align Bottom.svg",
              name: "Align Bottom",
              description:
                "Align all selected elements to the bottom edge of the bottommost element",
            },
          ]}
        />
      </Section>

      <Section title="Distribution">
        <Paragraph>
          Distribute three or more elements with equal spacing between them. The
          first and last elements remain fixed, while the elements in between are
          repositioned to create even gaps.
        </Paragraph>
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=Distribute-Horizontally.svg",
              name: "Distribute Horizontally",
              description:
                "Space elements evenly along the horizontal axis with equal gaps between bounding boxes",
            },
            {
              icon: "/iconsEditor_/IconEditor=Distribute-Vetically.svg",
              name: "Distribute Vertically",
              description:
                "Space elements evenly along the vertical axis with equal gaps between bounding boxes",
            },
          ]}
        />
      </Section>

      <Section title="Usage Tips">
        <List
          items={[
            <><strong>Alignment:</strong> Select 2 or more elements to enable alignment buttons</>,
            <><strong>Distribution:</strong> Select 3 or more elements to enable distribution buttons</>,
            <><strong>Undo:</strong> All alignment and distribution actions can be undone with ⌘Z / Ctrl+Z</>,
            <><strong>Mixed sizes:</strong> Distribution creates equal gaps regardless of element sizes</>,
          ]}
        />
      </Section>
    </DocContent>
  );
}
