import {
  DocContent,
  Section,
  Paragraph,
  Subsection,
  ToolTable,
} from "@/components/docs";

export default function VisualNodesToolsMenusPage() {
  return (
    <DocContent
      title="Tools & Menus"
      description="Helper tools for the Design Agent canvas: connector wires, context menu, toolbar, and pie menu."
    >
      <Section title="Connector Wires">
        <Paragraph>
          These are the stretchy lines that connect nodes. When you drag from a
          blue circle (output) to a gray circle (input), a wire appears. You can
          see data flowing along them. They have a little bounce animation and a
          shockwave when you connect.
        </Paragraph>
      </Section>

      <Section title="Context Menu">
        <Subsection title="How to Open">
          <Paragraph>
            Right-click on the canvas or on a node card to open the context
            menu.
          </Paragraph>
        </Subsection>
        <Paragraph>
          The context menu is a quick way to add new nodes or change a
          card&apos;s type. It shows all the helpers you can add to the canvas.
        </Paragraph>
      </Section>

      <Section title="Canvas Toolbar">
        <Paragraph>
          The bar at the bottom of the screen has buttons for the most common
          nodes—The Architect, New Input, WireFrame, and more. Click one to add
          that node to the canvas.
        </Paragraph>
      </Section>

      <Section title="Pie Menu">
        <Paragraph>
          A circular menu with 9 slots (1 on top, 4 on the left, 4 on the right)
          for fast node creation.
        </Paragraph>
        <ToolTable
          tools={[
            {
              name: "Actions menu",
              description:
                "Press Space to open. Options: The Architect, New Input, Upload Image, Generate Image, Add Screenshot, Heatmap, Extract Colors, Create Palette, Export Designs.",
            },
            {
              name: "Responses menu",
              description:
                "Right-click (or Shift+right-click) on empty canvas. Options: Color Info, Simple Output, Create Plan, Generate Steps, Enhance Frame, WireFrame.",
            },
          ]}
        />
      </Section>

      <Section title="Agent Prompt">
        <Paragraph>
          A smart assistant where you type what you want in plain words—e.g.
          &quot;I need a new input and a wireframe&quot;—and it figures out
          which nodes to add and connects them for you. Great for quick setup.
        </Paragraph>
      </Section>
    </DocContent>
  );
}
