import {
  DocContent,
  Section,
  Paragraph,
  List,
  ToolTable,
} from "@/components/docs";

export default function AutoLayoutPage() {
  return (
    <DocContent
      title="Auto Layout"
      description="Auto Layout automatically arranges and spaces child elements within frames, components, and instances."
    >
      <Paragraph>
        Auto Layout automatically arranges and spaces child elements within
        frames, components, and instances. It helps create responsive designs
        that adjust automatically as content changes.
      </Paragraph>

      <Section title="Adding Auto Layout">
        <ToolTable
          tools={[
            {
              icon: "/iconsEssentials_/IconEssentials=Add.svg",
              name: "Add Auto Layout",
              description: "Click the Add button with the plus icon to add Auto Layout to frames, components, and instances.",
            },
          ]}
        />
      </Section>

      <Section title="Flow Direction">
        <Paragraph>Choose how child elements are arranged:</Paragraph>
        <List
          items={[
            <><strong>Wrap Vertical:</strong> Arrange items vertically with wrapping to new columns</>,
            <><strong>Vertical:</strong> Arrange items top to bottom in a single column</>,
            <><strong>Horizontal:</strong> Arrange items left to right in a single row</>,
            <><strong>Wrap Horizontal / Grid:</strong> Arrange items horizontally with wrapping to new rows (grid layout)</>,
          ]}
        />
      </Section>

      <Section title="Resizing">
        <Paragraph>Control how the frame sizes itself:</Paragraph>
        <List
          items={[
            <><strong>Width (W):</strong> Toggle between <code>Hug</code> (sizes to content) and <code>Fill</code> (fills available space)</>,
            <><strong>Height (H):</strong> Toggle between <code>Hug</code> (sizes to content) and <code>Fill</code> (fills available space)</>,
          ]}
        />
      </Section>

      <Section title="Alignment">
        <Paragraph>
          Control how child elements align within the frame using a 3×3 grid.
          Click any position in the grid to align items. The center position
          represents center/center alignment. Rows control primary axis alignment,
          columns control counter axis alignment.
        </Paragraph>
      </Section>

      <Section title="Gap">
        <Paragraph>
          Controls spacing between child elements. Enter a value to set the gap.
        </Paragraph>
      </Section>

      <Section title="Padding">
        <Paragraph>Control internal spacing around child elements:</Paragraph>
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=PaddingHorizontal.svg",
              name: "Horizontal Padding",
              description: "Sets left and right padding simultaneously",
            },
            {
              icon: "/iconsEditor_/IconEditor=PaddingVertical.svg",
              name: "Vertical Padding",
              description: "Sets top and bottom padding simultaneously",
            },
          ]}
        />
      </Section>

      <Section title="Clip Content">
        <Paragraph>
          Checkbox option to hide any child elements that overflow the frame
          boundaries. Useful for creating clean, contained layouts.
        </Paragraph>
      </Section>
    </DocContent>
  );
}
