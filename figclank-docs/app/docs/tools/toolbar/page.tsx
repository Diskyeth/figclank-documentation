import {
  DocContent,
  Section,
  ToolTable,
  List,
} from "@/components/docs";

export default function ToolbarPage() {
  return (
    <DocContent
      title="Toolbar"
      description="Quick access to all design tools. Click any tool icon to select it, or use keyboard shortcuts for faster access."
    >
      <Section title="Selection Tool">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=Cursor.svg",
              name: "Cursor/Select",
              shortcut: "V",
              description: "Select and move objects on the canvas",
            },
          ]}
        />
      </Section>

      <Section title="Frame Tool">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=Frame.svg",
              name: "Frame",
              shortcut: "F",
              description:
                "Create frame containers. Opens template selection modal when selected.",
            },
          ]}
        />
      </Section>

      <Section title="Text Tool">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=AddText.svg",
              name: "Add Text",
              shortcut: "T",
              description: "Add text elements to the canvas",
            },
          ]}
        />
      </Section>

      <Section title="Vector Tool">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=DrawVector.svg",
              name: "Draw Vector",
              shortcut: "P",
              description: "Draw custom vector paths and shapes",
            },
          ]}
        />
      </Section>

      <Section title="Shape Tools">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=ShapeCircle.svg",
              name: "Circle",
              shortcut: "O",
              description: "Create perfect circular shapes",
            },
            {
              icon: "/iconsToolKit_/ToolBar=ShapeSquare.svg",
              name: "Square",
              shortcut: "R",
              description: "Create rectangular shapes with adjustable dimensions",
            },
            {
              icon: "/iconsToolKit_/ToolBar=ShapeTriangle.svg",
              name: "Triangle",
              shortcut: "",
              description: "Create triangular shapes",
            },
          ]}
        />
      </Section>

      <Section title="3D Tool">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=Extrude3D.svg",
              name: "3D Extrude",
              shortcut: "",
              description:
                "Transform 2D shapes into 3D objects with depth and rotation. See 3D Tool for details.",
            },
          ]}
        />
      </Section>

      <Section title="Help Button">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=FAQ.svg",
              name: "Help & Features",
              shortcut: "",
              description:
                "Open the help modal to learn about features and shortcuts",
            },
          ]}
        />
      </Section>

      <Section title="Shape Properties">
        <p className="text-foreground-muted mb-4">
          All shapes support the following properties:
        </p>
        <List
          items={[
            "Corner radius – Round the corners",
            "Dimensions – Adjustable width and height",
            "Rotation – Rotate by degrees",
            "Opacity – Control transparency (0–100%)",
          ]}
        />
      </Section>
    </DocContent>
  );
}
