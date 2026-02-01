import {
  DocContent,
  Section,
  Paragraph,
  List,
  ToolTable,
} from "@/components/docs";

export default function FillsPage() {
  return (
    <DocContent
      title="Fills"
      description="Apply solid colors, gradients (linear, radial, angular, diamond), or image fills to shapes and frames."
    >
      <Section title="Fill Types">
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=ColorFill.svg",
              name: "Solid Color",
              description: "Choose colors with the color picker. Adjust opacity for transparency.",
            },
            {
              icon: "/iconsEditor_/IconEditor=GradientFill.svg",
              name: "Gradient",
              description: "Linear, radial, angular, or diamond gradients with multiple color stops.",
            },
            {
              icon: "/iconsEditor_/IconEditor=ImageFill.svg",
              name: "Image Fill",
              description: "Fill shapes with images using Fill, Fit, Crop, or Tile modes.",
            },
          ]}
        />
      </Section>

      <Section title="Gradients">
        <List
          items={[
            <><strong>Linear:</strong> Directional gradients with adjustable angle</>,
            <><strong>Radial:</strong> Circular gradients from center point</>,
            <><strong>Angular:</strong> Rotating color transitions</>,
            <><strong>Diamond:</strong> Four-corner color transitions</>,
          ]}
        />
      </Section>

      <Section title="Image Fill">
        <Paragraph>
          Image fill has a few style options: Fill, Fit, Crop, and Tile. Load
          images from URLs and adjust opacity.
        </Paragraph>
      </Section>
    </DocContent>
  );
}
