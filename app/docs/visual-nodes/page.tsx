import {
  DocContent,
  Section,
  Paragraph,
  List,
  Tip,
} from "@/components/docs";
import Link from "next/link";

export default function VisualNodesOverviewPage() {
  return (
    <DocContent
      title="Visual Nodes Overview"
      description="Introduction to the Design Agent canvas—a node-based workflow for creating designs from text, images, and wireframes."
    >
      <Section title="What Are Visual Nodes?">
        <Paragraph>
          Imagine you have a big table with little cards on it. Each card is like
          a helper that does one job. You can connect them with stretchy wires.
          When you connect the right helpers together, they pass things along and
          create something new—like a picture, a list, or a whole design.
        </Paragraph>
        <Paragraph>
          The Design Agent canvas is a node-based workflow. Each node is a
          specialized tool: some take your text ideas, some turn images into
          designs, some extract colors, and some export to Figma. Connect them
          in the right order and you can go from &quot;I want a login
          button&quot; to a polished wireframe in minutes.
        </Paragraph>
      </Section>

      <Section title="How It Works">
        <Paragraph>
          Nodes have input and output handles (blue circles for outputs, gray
          for inputs). Drag from an output to an input to create a connection.
          Data flows along the wires—text, images, wireframes, colors—and each
          node transforms or uses that data in a specific way.
        </Paragraph>
        <List
          items={[
            "Start with New Input or Upload Image to bring in your ideas",
            "Use Create a Plan and Generate Steps to break big ideas into steps",
            "Connect to WireFrame, Generate Image, or The Architect to produce designs",
            "Use Extract Colors, Create Palette, and Color Info to style your work",
            "Export to Figma or run Heatmap for UX insights",
          ]}
        />
      </Section>

      <Section title="Quick Links">
        <Paragraph>
          Explore the full reference to understand every node and how they work
          together:
        </Paragraph>
        <List
          items={[
            <>
              <Link
                href="/docs/visual-nodes/node-reference"
                className="text-brand-orange hover:underline"
              >
                Node Reference
              </Link>
              — All 19 nodes explained in workflow order
            </>,
            <>
              <Link
                href="/docs/visual-nodes/tools-menus"
                className="text-brand-orange hover:underline"
              >
                Tools & Menus
              </Link>
              — Connector wires, context menu, toolbar, and pie menu
            </>,
            <>
              <Link
                href="/docs/visual-nodes/connection-guide"
                className="text-brand-orange hover:underline"
              >
                Connection Guide
              </Link>
              — Connection summary and special rules
            </>,
          ]}
        />
      </Section>

      <Tip title="Pro Tip">
        Use the Agent Prompt to describe what you want in plain words—e.g.
        &quot;I need a new input and a wireframe&quot;—and it will add the
        right nodes and connect them for you.
      </Tip>
    </DocContent>
  );
}
