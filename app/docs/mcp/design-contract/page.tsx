import {
  DocContent,
  Section,
  Subsection,
  Paragraph,
  List,
  CodeBlock,
  ToolTable,
  Note,
} from "@/components/docs";

export default function MCPDesignContractPage() {
  return (
    <DocContent
      title="FigClank MCP Design Contract"
      description="The stable contract for the FigClank read-only MCP server."
    >
      <Section title="Overview">
        <List
          items={[
            <><strong>Mode:</strong> Read-only. No mutations are allowed via MCP.</>,
            <><strong>Auth:</strong> Wallet-based authentication. All document-scoped tools require user authentication.</>,
            <><strong>Units:</strong> All dimensions are in <strong>pixels (px)</strong> unless otherwise noted.</>,
            <><strong>IDs:</strong> All identifiers (nodeId, documentId, componentId, styleId) are strings.</>,
          ]}
        />
      </Section>

      <Section title="Node Types">
        <CodeBlock
          language="typescript"
          code={`type NodeType =
  | "PAGE"
  | "FRAME"
  | "RECTANGLE"
  | "TEXT"
  | "COMPONENT"
  | "INSTANCE"
  | "GROUP"
  | "VECTOR"
  | "ELLIPSE"
  | "LINE"
  | "POLYGON"
  | "STAR"
  | "BOOLEAN_OPERATION";`}
        />
      </Section>

      <Section title="Core Schemas">
        <Subsection title="MCPNode">
          <Paragraph>
            The canonical node schema exposed by the MCP. All fields use
            consistent types and units.
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={`interface MCPNode {
  // Identity
  id: string;
  name: string;
  type: NodeType;
  parentId: string | null;

  // Transform (all in px)
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number; // degrees

  // Visibility
  visible?: boolean;
  locked?: boolean;
  opacity?: number; // 0-1

  // Layout (Auto Layout)
  layout?: {
    mode: "NONE" | "HORIZONTAL" | "VERTICAL";
    primaryAxisAlign: "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN";
    counterAxisAlign: "MIN" | "CENTER" | "MAX" | "STRETCH";
    primaryAxisSizing: "FIXED" | "AUTO" | "FILL";
    counterAxisSizing: "FIXED" | "AUTO" | "FILL";
    padding: { top: number; right: number; bottom: number; left: number; };
    itemSpacing: number | "AUTO";
    wrap?: boolean;
  };

  // Style
  style?: {
    fills?: MCPFill[];
    strokes?: MCPStroke[];
    effects?: MCPEffect[];
    cornerRadius?: number;
    clipsContent?: boolean;
    blendMode?: string;
  };

  // Text (for TEXT nodes)
  text?: {
    characters: string;
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
    textAlignHorizontal: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    textAlignVertical: "TOP" | "CENTER" | "BOTTOM";
    autoResize: "WIDTH_AND_HEIGHT" | "HEIGHT" | "NONE";
  };

  // Component reference (for INSTANCE nodes)
  componentRef?: {
    componentId: string;
    componentKey?: string;
  };
}`}
          />
        </Subsection>

        <Subsection title="MCPFill">
          <CodeBlock
            language="typescript"
            code={`interface MCPFill {
  type: "SOLID" | "GRADIENT_LINEAR" | "GRADIENT_RADIAL" | "GRADIENT_ANGULAR" | "GRADIENT_DIAMOND" | "IMAGE";
  visible?: boolean;
  opacity?: number; // 0-1
  blendMode?: string;

  // For SOLID
  color?: MCPColor;

  // For gradients
  gradientStops?: Array<{ position: number; color: MCPColor; }>;

  // For IMAGE
  imageRef?: string;
  scaleMode?: "FILL" | "FIT" | "CROP" | "TILE";
}`}
          />
        </Subsection>

        <Subsection title="MCPColor">
          <CodeBlock
            language="typescript"
            code={`interface MCPColor {
  r: number; // 0-1
  g: number; // 0-1
  b: number; // 0-1
  a: number; // 0-1
}`}
          />
        </Subsection>

        <Subsection title="MCPEffect">
          <CodeBlock
            language="typescript"
            code={`interface MCPEffect {
  type: "DROP_SHADOW" | "INNER_SHADOW" | "LAYER_BLUR" | "BACKGROUND_BLUR";
  visible?: boolean;
  radius?: number; // px
  color?: MCPColor;
  offset?: { x: number; y: number }; // px
  spread?: number; // px
}`}
          />
        </Subsection>
      </Section>

      <Section title="Tool Categories">
        <Subsection title="Discovery">
          <ToolTable
            tools={[
              { name: "auth.whoami", description: "Get current user info" },
              { name: "workspace.listProjects", description: "List user's projects/designs" },
              { name: "documents.list", description: "List documents in a project" },
              { name: "documents.get", description: "Get document metadata" },
            ]}
          />
        </Subsection>

        <Subsection title="Snapshots & History">
          <ToolTable
            tools={[
              { name: "documents.getSnapshot", description: "Get lightweight snapshot summary" },
              { name: "history.listVersions", description: "List document versions" },
            ]}
          />
        </Subsection>

        <Subsection title="Node Inspection">
          <ToolTable
            tools={[
              { name: "nodes.get", description: "Get single node" },
              { name: "nodes.listChildren", description: "List children of a node" },
              { name: "nodes.getSubtree", description: "Get subtree with depth limit" },
              { name: "nodes.query", description: "Query nodes by criteria" },
            ]}
          />
        </Subsection>

        <Subsection title="Design System">
          <ToolTable
            tools={[
              { name: "components.list", description: "List components" },
              { name: "components.get", description: "Get component definition" },
              { name: "styles.list", description: "List styles" },
              { name: "tokens.get", description: "Get design tokens" },
            ]}
          />
        </Subsection>

        <Subsection title="Export / Render">
          <ToolTable
            tools={[
              { name: "render.thumbnail", description: "Get node thumbnail" },
              { name: "export.svg", description: "Export node as SVG" },
              { name: "export.png", description: "Export node as PNG" },
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Read-Only Guarantee">
        <Note title="Important">
          This MCP server is <strong>strictly read-only</strong>. No tools
          modify document state. No tools create, update, or delete nodes. No
          tools change styles, components, or tokens. All operations are
          idempotent. To edit designs, use the FigClank web application.
        </Note>
      </Section>

      <Section title="Error Codes">
        <ToolTable
          tools={[
            { name: "NOT_FOUND", description: "Resource does not exist (404)" },
            { name: "FORBIDDEN", description: "User lacks permission (403)" },
            { name: "VALIDATION_ERROR", description: "Invalid input parameters (400)" },
            { name: "RATE_LIMITED", description: "Too many requests (429)" },
            { name: "INTERNAL_ERROR", description: "Server error (500)" },
          ]}
        />
      </Section>

      <Section title="Version Pinning">
        <Paragraph>
          All document-scoped tools accept an optional <code>version</code> parameter:
        </Paragraph>
        <CodeBlock
          language="typescript"
          code={`// Load a specific version (deterministic)
nodes.get({ nodeId, documentId, version: 42 })

// Load latest (may change between calls)
nodes.get({ nodeId, documentId })`}
        />
        <Paragraph>
          Agents should pass <code>version</code> for reproducible codegen workflows.
        </Paragraph>
      </Section>
    </DocContent>
  );
}
