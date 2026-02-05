import {
  DocContent,
  Section,
  Subsection,
  Paragraph,
  List,
  CodeBlock,
  ToolTable,
  Warning,
  MCPInstallCards,
} from "@/components/docs";

export default function MCPGuidePage() {
  return (
    <DocContent
      title="FigClank MCP Guide"
      description="A comprehensive guide to the FigClank MCP server—how it works, what it can do, and how to install it for AI-powered design-to-code workflows."
    >
      <Section title="What is the FigClank MCP?">
        <Paragraph>
          The FigClank MCP is a server that exposes your FigClank designs to AI
          assistants. It lets AI agents:
        </Paragraph>
        <List
          items={[
            <><strong>Read</strong> your design documents, node trees, components, styles, and tokens</>,
            <><strong>Query</strong> nodes by type, name, component, size, and text style</>,
            <><strong>Export</strong> nodes as SVG, PNG, HTML, or CSS</>,
            <><strong>Inspect</strong> screens for layout, component usage, and text content</>,
            <><strong>Mutate</strong> designs with create, update, align, group, and more</>,
          ]}
        />
      </Section>

      <Section title="How It Works">
        <Paragraph>
          The FigClank app pushes your current canvas to the MCP server whenever
          it changes. AI agents connect to the server and use the pushed document
          for all tools.
        </Paragraph>
      </Section>

      <Section title="Installation">
        <Subsection title="Add MCP to your IDE">
          <Paragraph>
            Click the button below to add the FigClank MCP server to Cursor,
            Claude, or VS Code. When Cursor connects, you&apos;ll be prompted to
            sign in via OAuth.
          </Paragraph>
          <div className="my-6">
            <MCPInstallCards />
          </div>
        </Subsection>

        <Subsection title="Manual configuration">
          <Paragraph>
            For Cursor, open or create <code>.cursor/mcp.json</code> in your
            project (or user config):
          </Paragraph>
          <CodeBlock
            code={`{
  "mcpServers": {
    "figclank": {
      "url": "https://mcp.figclank.design"
    }
  }
}`}
          />
          <Paragraph>
            For VS Code, create <code>.vscode/mcp.json</code> with{" "}
            <code>servers</code> (VS Code uses <code>servers</code>, Cursor uses{" "}
            <code>mcpServers</code>):
          </Paragraph>
          <CodeBlock
            code={`{
  "servers": {
    "figclank": {
      "type": "http",
      "url": "https://mcp.figclank.design",
      "headers": {}
    }
  }
}`}
          />
        </Subsection>

        <Subsection title="Enable MCP in the FigClank app">
          <List
            items={[
              "Open a design at studio.figclank.design",
              "Click the main menu (hamburger) in the top-left",
              "Toggle MCP On to push your canvas to the server",
              "Optionally click Push to MCP to push immediately",
              "After AI changes, click Sync from MCP to pull updates (or wait for the 10-second auto-poll)",
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Features">
        <Subsection title="Discovery">
          <ToolTable
            tools={[
              { name: "auth_whoami", description: "Get authenticated user info (user ID, wallet address, permissions)" },
              { name: "workspace_listProjects", description: "List all design projects for the user" },
              { name: "documents_list", description: "List documents with pagination" },
              { name: "documents_get", description: "Get document metadata (name, timestamps, pages)" },
            ]}
          />
        </Subsection>

        <Subsection title="Node Inspection">
          <ToolTable
            tools={[
              { name: "nodes_get", description: "Get a single node with optional field projection" },
              { name: "nodes_listChildren", description: "List children of a node (paginated)" },
              { name: "nodes_getSubtree", description: "Get subtree with depth and node count limits" },
              { name: "nodes_query", description: "Query nodes by type, name, component, size, text style" },
            ]}
          />
        </Subsection>

        <Subsection title="Design System">
          <ToolTable
            tools={[
              { name: "components_list", description: "List all components in a document" },
              { name: "components_get", description: "Get component definition by ID" },
              { name: "styles_list", description: "List styles (text, fill, stroke, effect)" },
              { name: "tokens_get", description: "Get design tokens (colors, spacing, radii, typography, shadows)" },
            ]}
          />
        </Subsection>

        <Subsection title="Inspect Helpers">
          <ToolTable
            tools={[
              { name: "inspect_screenSummary", description: "Summarize a screen/frame (layout sections, components, colors, typography)" },
              { name: "inspect_componentUsage", description: "Find all places where a component is used" },
              { name: "inspect_textContent", description: "Extract all text content from a node subtree" },
            ]}
          />
        </Subsection>

        <Subsection title="Export & Render">
          <ToolTable
            tools={[
              { name: "render_thumbnail", description: "Get thumbnail URL for a design" },
              { name: "export_svg", description: "Export a node and its children as SVG" },
              { name: "export_png", description: "Export a node as PNG" },
              { name: "export_html", description: "Export a frame as HTML (Neynar mini-apps or web)" },
              { name: "export_css", description: "Generate CSS, Tailwind classes, or React Native styles from a node" },
              { name: "resolve_asset_url", description: "Resolve image reference to a public URL" },
            ]}
          />
        </Subsection>

        <Subsection title="Agent Mutation Tools">
          <ToolTable
            tools={[
              { name: "agent_getSelectionSnapshot", description: "Get compact JSON of selected nodes for planner context" },
              { name: "agent_updateNode", description: "Update node properties (fills, effects, width, height, cornerRadius, opacity)" },
              { name: "agent_createShape", description: "Create rectangle, ellipse, frame, or triangle" },
              { name: "agent_createText", description: "Create a text node" },
              { name: "agent_wrapInAutoLayout", description: "Wrap selected nodes in an auto layout frame" },
              { name: "agent_alignNodes", description: "Align selection (left, center, right, top, middle, bottom)" },
              { name: "agent_distributeNodes", description: "Distribute nodes with even spacing (horizontal/vertical)" },
              { name: "agent_groupNodes", description: "Group selection into a GROUP" },
              { name: "agent_ungroupNodes", description: "Ungroup a GROUP node" },
              { name: "agent_createComponentFromSelection", description: "Convert selection into a reusable component" },
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Field Projection">
        <Paragraph>
          Node-returning tools support field projection to reduce payload size:
        </Paragraph>
        <CodeBlock
          language="typescript"
          code={`// Option 1: Specific fields
fields: ["id", "name", "type", "layout", "style"]

// Option 2: Detail level
detailLevel: "min" | "default" | "full"
// min: id, name, type, parentId only
// default: + transform, visibility, layout, constraints
// full: all fields including style, text, vector`}
        />
      </Section>

      <Section title="Version Pinning">
        <Paragraph>
          Always pin the document version for reproducible workflows:
        </Paragraph>
        <CodeBlock
          language="typescript"
          code={`const snapshot = await call('documents_getSnapshot', { documentId });
const version = snapshot.version;

// Use version in ALL subsequent calls
await call('nodes_get', { documentId, version, nodeId });
await call('tokens_get', { documentId, version });`}
        />
      </Section>

      <Section title="Rate Limits">
        <ToolTable
          tools={[
            { name: "General API calls", description: "100/min" },
            { name: "export_svg", description: "20/min" },
            { name: "nodes_getSubtree", description: "30/min" },
            { name: "nodes_query", description: "60/min" },
          ]}
        />
        <Warning>If rate limited, wait and retry with exponential backoff.</Warning>
      </Section>

      <Section title="Error Codes">
        <ToolTable
          tools={[
            { name: "NOT_FOUND", description: "Document/node doesn't exist – Check IDs" },
            { name: "FORBIDDEN", description: "No access to resource – Verify permissions" },
            { name: "VALIDATION_ERROR", description: "Invalid parameters – Check input format" },
            { name: "RATE_LIMITED", description: "Too many requests – Wait and retry" },
            { name: "INTERNAL_ERROR", description: "Server error – Retry or report" },
          ]}
        />
      </Section>

      <Section title="Limitations">
        <Paragraph>When using browser-pushed documents:</Paragraph>
        <List
          items={[
            <><strong>Single document:</strong> Only the most recently pushed document is available per wallet. Pushing a new design overwrites the previous one.</>,
            <><strong>No history:</strong> history_listVersions returns only the current version.</>,
            <><strong>Asset URLs:</strong> resolve_asset_url may return null for images.</>,
            <><strong>Thumbnails:</strong> render_thumbnail may return null for pushed documents.</>,
            <><strong>Real-time:</strong> Updates are debounced (default 1 second). The MCP server sees changes shortly after you edit.</>,
          ]}
        />
      </Section>

    </DocContent>
  );
}
