import Image from "next/image";
import {
  DocContent,
  Section,
  Subsection,
  Paragraph,
  List,
  ToolTable,
} from "@/components/docs";

export default function ThreeDExtrudePage() {
  return (
    <DocContent
      title="3D Tool"
      description="Transform 2D shapes into 3D objects with the 3D Extrusion tool."
    >
      <Paragraph>
        The 3D Extrusion tool transforms 2D shapes into 3D objects by extruding
        them along a depth axis. This creates realistic 3D representations that
        can be rotated and viewed from different angles.
      </Paragraph>

      <Section title="Workflow">
        <div className="rounded-lg border border-grey-100 bg-background-tertiary p-4 my-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Input Image */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/FAQ/FAQ_3DExtrude_InputExample_.png"
                alt="2D Input Shape"
                width={120}
                height={120}
                className="rounded-lg"
              />
              <span className="text-xs text-foreground-muted">Input Shape</span>
            </div>
            {/* Arrow */}
            <div className="text-foreground-muted text-2xl">→</div>
            {/* Modal Image */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/FAQ/FAQ_3DExtrude_Modal_.png"
                alt="3D Extrude Modal"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <span className="text-xs text-foreground-muted">3D Extrude Modal</span>
            </div>
            {/* Arrow */}
            <div className="text-foreground-muted text-2xl">→</div>
            {/* Output Image */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/FAQ/FAQ_3DExtrude_OutputExample_.png"
                alt="3D Output"
                width={140}
                height={140}
                className="rounded-lg"
              />
              <span className="text-xs text-foreground-muted">3D Output</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Accessing the Tool">
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=Extrude3D.svg",
              name: "3D Extrude Button",
              description:
                "Located in the toolbar. Click to open the 3D extrusion modal.",
            },
          ]}
        />
      </Section>

      <Section title="Supported Shapes">
        <Paragraph>The 3D tool works with the following shape types:</Paragraph>
        <List
          items={[
            <><strong>Rectangles:</strong> Creates a rectangular prism with front, back, and four side faces</>,
            <><strong>Circles/Ellipses:</strong> Creates a cylindrical extrusion with front, back, and curved side faces</>,
            <><strong>Vectors:</strong> Basic vector path support (simplified extrusion)</>,
          ]}
        />
      </Section>

      <Section title="Controls">
        <Subsection title="Depth">
          <Paragraph>
            Adjust the extrusion depth (1–500px). This determines how far the
            shape extends in the Z-axis, creating the 3D effect.
          </Paragraph>
        </Subsection>

        <Subsection title="Rotation">
          <Paragraph>Set rotation angles for each axis:</Paragraph>
          <List
            items={[
              <><strong>X-axis:</strong> Rotate around horizontal axis (pitch)</>,
              <><strong>Y-axis:</strong> Rotate around vertical axis (yaw)</>,
              <><strong>Z-axis:</strong> Rotate around depth axis (roll)</>,
            ]}
          />
          <Paragraph>
            Values are in degrees (0–360°). You can also drag the preview to
            adjust rotation interactively.
          </Paragraph>
        </Subsection>
      </Section>
    </DocContent>
  );
}
