import {
  DocContent,
  Section,
  Subsection,
  Paragraph,
  List,
  CodeBlock,
  MappingTable,
  Tip,
} from "@/components/docs";

export default function MCPDesignToCodeWorkflowPage() {
  return (
    <DocContent
      title="Design-to-Code Workflow"
      description="Recommended workflow for AI agents to convert FigClank designs into application code."
    >
      <Section title="Overview">
        <Paragraph>
          The FigClank MCP provides read and write access to design documents,
          enabling agents to:
        </Paragraph>
        <List
          ordered
          items={[
            "Understand document structure",
            "Extract design system information",
            "Query specific nodes",
            "Export assets",
            "Generate code",
          ]}
        />
      </Section>

      <Section title="Workflow Steps">
        <Subsection title="Step 1: Select Target Screen">
          <Paragraph>
            First, get a lightweight snapshot of the document and find the target
            screen.
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={`// Get document snapshot
const snapshot = await mcp.call('documents_getSnapshot', {
  documentId: 'your-document-id',
});

// Query for the target frame/screen
const screens = await mcp.call('nodes_query', {
  documentId: 'your-document-id',
  version: snapshot.version, // Pin version for consistency
  query: {
    type: 'FRAME',
    nameContains: 'Login', // or exact name: 'Login Screen'
  },
  limit: 10,
  detailLevel: 'min',
});

// Select the target screen
const targetScreen = screens.items[0];`}
          />
        </Subsection>

        <Subsection title="Step 2: Pull the Screen Subtree">
          <Paragraph>
            Get the full node tree for the selected screen with layout and style
            information.
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={`// Get subtree with depth limit
const subtree = await mcp.call('nodes_getSubtree', {
  documentId: 'your-document-id',
  version: snapshot.version,
  nodeId: targetScreen.id,
  depth: 6,
  maxNodes: 500,
  fields: ['id', 'name', 'type', 'layout', 'style', 'text', 'componentRef'],
  detailLevel: 'full',
});`}
          />
        </Subsection>

        <Subsection title="Step 3: Resolve Component Instances">
          <Paragraph>
            For each INSTANCE node, get the component definition to understand
            reusable patterns.
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={`// Find all INSTANCE nodes in the subtree
const instances = subtree.nodes.filter(n => n.type === 'INSTANCE');

// Resolve each component
for (const instance of instances) {
  if (instance.componentRef?.componentId) {
    const component = await mcp.call('components_get', {
      documentId: 'your-document-id',
      version: snapshot.version,
      componentId: instance.componentRef.componentId,
    });
  }
}`}
          />
        </Subsection>

        <Subsection title="Step 4: Get Design Tokens and Styles">
          <Paragraph>Extract the design system for consistent theming.</Paragraph>
          <CodeBlock
            language="typescript"
            code={`// Get design tokens
const tokens = await mcp.call('tokens_get', {
  documentId: 'your-document-id',
  version: snapshot.version,
});

// Get text styles
const textStyles = await mcp.call('styles_list', {
  documentId: 'your-document-id',
  version: snapshot.version,
  type: 'TEXT',
});

// Get color/fill styles
const fillStyles = await mcp.call('styles_list', {
  documentId: 'your-document-id',
  version: snapshot.version,
  type: 'FILL',
});`}
          />
        </Subsection>

        <Subsection title="Step 5: Export Assets">
          <Paragraph>Export icons and images as needed.</Paragraph>
          <CodeBlock
            language="typescript"
            code={`// Export icon as SVG
const iconSvg = await mcp.call('export_svg', {
  documentId: 'your-document-id',
  version: snapshot.version,
  nodeId: iconNodeId,
});

// Note: PNG export has limited server-side support
// Prefer SVG for icons and vector graphics`}
          />
        </Subsection>

        <Subsection title="Step 6: Generate Code">
          <Paragraph>
            With all the information gathered, generate the code:
          </Paragraph>
          <List
            items={[
              <><strong>tokens.ts</strong> - Design tokens (colors, spacing, typography, shadows)</>,
              <><strong>components/</strong> - Reusable component library based on COMPONENT definitions</>,
              <><strong>screens/</strong> - Screen/page components based on FRAME structures</>,
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Component Mapping">
        <MappingTable
          sourceHeader="Design Node Type"
          targetHeader="Code Component"
          rows={[
            { source: "FRAME with auto layout", target: "Flex container (div, View)" },
            { source: "FRAME with fixed", target: "Absolute container" },
            { source: "TEXT", target: "Typography component" },
            { source: "RECTANGLE", target: "Styled div, View, or Box" },
            { source: "INSTANCE", target: "Mapped component" },
            { source: "VECTOR/ELLIPSE", target: "SVG or icon component" },
          ]}
        />
      </Section>

      <Section title="Best Practices">
        <Subsection title="1. Always Pin Version">
          <Paragraph>
            Use the <code>version</code> parameter for all document-scoped calls
            to ensure consistency.
          </Paragraph>
        </Subsection>

        <Subsection title="2. Use Field Projection">
          <Paragraph>Request only the fields you need to reduce payload size.</Paragraph>
          <CodeBlock
            language="typescript"
            code={`// For initial discovery, use 'min' detail level
await mcp.call('nodes_query', { ..., detailLevel: 'min' });

// For actual generation, use 'full' or specific fields
await mcp.call('nodes_getSubtree', { ..., detailLevel: 'full' });`}
          />
        </Subsection>

        <Subsection title="3. Get Tokens Early">
          <Paragraph>
            Load design tokens at the start to inform all subsequent code
            generation.
          </Paragraph>
        </Subsection>

        <Subsection title="4. Batch Component Resolution">
          <Paragraph>
            Resolve all unique components once, then reference the cached
            definitions.
          </Paragraph>
        </Subsection>

        <Subsection title="5. Export Assets Sparingly">
          <Paragraph>Only export assets when actually needed for the code.</Paragraph>
        </Subsection>
      </Section>

      <Section title="Handling Large Designs">
        <Paragraph>For designs with many nodes:</Paragraph>
        <List
          items={[
            <><strong>Paginate:</strong> Use cursor and limit parameters</>,
            <><strong>Depth limit:</strong> Set reasonable depth (6-10) for getSubtree</>,
            <><strong>Max nodes:</strong> Set maxNodes to prevent huge responses</>,
            <><strong>Query first:</strong> Use nodes_query to find specific elements</>,
          ]}
        />
        <Tip>
          Use <code>inspect_screenSummary</code> for quick analysis before diving
          deep. It includes layout sections, components used, colors used,
          typography used, and total node count.
        </Tip>
      </Section>
    </DocContent>
  );
}
