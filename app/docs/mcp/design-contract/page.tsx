import {
  DocContent,
  Section,
  Subsection,
  Paragraph,
  List,
  CodeBlock,
  ToolTable,
} from "@/components/docs";

export default function MCPDesignContractPage() {
  return (
    <DocContent
      title="FigClank MCP Design Contract"
      description="The stable contract for the FigClank MCP server."
    >
      <Section title="Overview">
        <List
          items={[
            <><strong>Mode:</strong> Read and write. Supports read operations and write operations via agent_* mutation tools.</>,
            <><strong>Auth:</strong> OAuth 2.1. All document-scoped tools require user authentication.</>,
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
              { name: "auth_whoami", description: "Get authenticated user info" },
              { name: "workspace_listProjects", description: "List user's projects/designs" },
              { name: "documents_list", description: "List documents with pagination" },
              { name: "documents_get", description: "Get document metadata" },
            ]}
          />
        </Subsection>

        <Subsection title="Snapshots & History">
          <ToolTable
            tools={[
              { name: "documents_getSnapshot", description: "Get lightweight snapshot summary (pin version)" },
              { name: "history_listVersions", description: "List document versions" },
            ]}
          />
        </Subsection>

        <Subsection title="Node Inspection">
          <ToolTable
            tools={[
              { name: "nodes_get", description: "Get single node" },
              { name: "nodes_listChildren", description: "List children of a node" },
              { name: "nodes_getSubtree", description: "Get subtree with depth limit" },
              { name: "nodes_query", description: "Query nodes by criteria" },
            ]}
          />
        </Subsection>

        <Subsection title="Design System">
          <ToolTable
            tools={[
              { name: "components_list", description: "List components" },
              { name: "components_get", description: "Get component definition" },
              { name: "styles_list", description: "List styles" },
              { name: "tokens_get", description: "Get design tokens" },
            ]}
          />
        </Subsection>

        <Subsection title="Export / Render">
          <ToolTable
            tools={[
              { name: "render_thumbnail", description: "Get node thumbnail" },
              { name: "export_svg", description: "Export node as SVG" },
              { name: "export_png", description: "Export node as PNG" },
              { name: "export_html", description: "Export frame as HTML" },
              { name: "export_css", description: "Generate CSS, Tailwind, or React Native styles" },
              { name: "resolve_asset_url", description: "Resolve image reference to public URL" },
            ]}
          />
        </Subsection>

        <Subsection title="Agent Mutation">
          <ToolTable
            tools={[
              { name: "agent_getSelectionSnapshot", description: "Get selection for planner" },
              { name: "agent_updateNode", description: "Update node properties" },
              { name: "agent_createShape", description: "Create rectangle, ellipse, frame, triangle" },
              { name: "agent_createText", description: "Create text node" },
              { name: "agent_wrapInAutoLayout", description: "Wrap selection in auto layout" },
              { name: "agent_alignNodes", description: "Align selection" },
              { name: "agent_distributeNodes", description: "Distribute nodes" },
              { name: "agent_groupNodes", description: "Group selection" },
              { name: "agent_ungroupNodes", description: "Ungroup GROUP" },
              { name: "agent_createComponentFromSelection", description: "Convert selection to component" },
            ]}
          />
        </Subsection>
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
call('nodes_get', { nodeId, documentId, version: 42 })

// Load latest (may change between calls)
call('nodes_get', { nodeId, documentId })`}
        />
        <Paragraph>
          Agents should pass <code>version</code> for reproducible codegen workflows.
        </Paragraph>
      </Section>
    </DocContent>
  );
}
