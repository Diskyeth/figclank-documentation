import {
  DocContent,
  Section,
  Subsection,
  Paragraph,
  List,
  CodeBlock,
  MappingTable,
  ToolTable,
  Warning,
} from "@/components/docs";

export default function MCPAgentGuidePage() {
  return (
    <DocContent
      title="FigClank MCP Agent Guide"
      description="A quick reference for AI agents using the FigClank MCP server for design-to-code workflows."
    >
      <Section title="Capabilities">
        <Paragraph>This MCP can:</Paragraph>
        <List
          items={[
            <><strong>Read</strong> nodes, styles, components, and tokens from design documents</>,
            <><strong>Query</strong> nodes by type, name, component, size, and text style</>,
            <><strong>Export</strong> nodes as SVG, PNG, HTML, or CSS</>,
            <><strong>Inspect</strong> screens for layout, component usage, and text content</>,
            <><strong>Mutate</strong> designs: create shapes/text, update nodes, align, distribute, group, wrap in auto layout, create components</>,
          ]}
        />
      </Section>

      <Section title="Quick Start Strategy">
        <CodeBlock
          code={`1. documents_getSnapshot → Get document overview + pin version
2. tokens_get → Load design system tokens early
3. nodes_query → Find target screen/frame
4. nodes_getSubtree → Get screen node tree
5. components_get → Resolve INSTANCE references
6. export_svg / export_css → Export assets or generate styles
7. Generate code using gathered information

For mutations:
8. agent_getSelectionSnapshot → Get selection for planner
9. agent_updateNode, agent_createShape, etc. → Apply changes
10. User clicks Sync from MCP in app to pull updates`}
        />
      </Section>

      <Section title="Recommended Patterns">
        <Subsection title="Always Pin Version">
          <CodeBlock
            language="typescript"
            code={`const snapshot = await call('documents_getSnapshot', { documentId });
const version = snapshot.version;

// Use version in ALL subsequent calls for this document
await call('nodes_get', { documentId, version, nodeId });
await call('tokens_get', { documentId, version });`}
          />
        </Subsection>

        <Subsection title="Use tokens_get Early">
          <Paragraph>
            Design tokens inform all code generation. Load them first:
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={`const { tokens } = await call('tokens_get', { documentId, version });
// tokens.colors, tokens.spacing, tokens.radii, tokens.typography, tokens.shadows`}
          />
        </Subsection>

        <Subsection title="Prefer getSubtree Over Full Snapshots">
          <Paragraph>Never try to load the entire document at once:</Paragraph>
          <CodeBlock
            language="typescript"
            code={`// GOOD: Get specific screen subtree
await call('nodes_getSubtree', {
  nodeId: screenId,
  documentId,
  version,
  depth: 6,
  maxNodes: 500,
  detailLevel: 'full',
});

// BAD: Don't try to load everything
// (No such tool exists intentionally)`}
          />
        </Subsection>

        <Subsection title="Always Resolve INSTANCE via components_get">
          <Paragraph>
            INSTANCE nodes reference components. Get the definition:
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={`for (const instance of instances) {
  if (instance.componentRef?.componentId) {
    const component = await call('components_get', {
      componentId: instance.componentRef.componentId,
      documentId,
      version,
    });
  }
}`}
          />
        </Subsection>

        <Subsection title="Export Only When Necessary">
          <Paragraph>
            Prefer SVG for icons and vectors. Only export when needed:
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={`// Export icons as SVG
if (node.type === 'VECTOR') {
  const { svg } = await call('export_svg', { nodeId: node.id, documentId, version });
}`}
          />
        </Subsection>
      </Section>

      <Section title="Mapping Rules">
        <Subsection title="Typography">
          <MappingTable
            sourceHeader="FigClank Property"
            targetHeader="CSS/React Native"
            rows={[
              { source: "fontName.family", target: "fontFamily" },
              { source: "fontSize", target: "fontSize (px)" },
              { source: "fontName.style", target: "fontWeight, fontStyle" },
              { source: "lineHeight.value (PIXELS)", target: "lineHeight (px)" },
              { source: "lineHeight.value (PERCENT)", target: "lineHeight (em/ratio)" },
              { source: "letterSpacing.value (PIXELS)", target: "letterSpacing (px)" },
              { source: "textAlignHorizontal", target: "textAlign" },
            ]}
          />
        </Subsection>

        <Subsection title="Spacing/Radius">
          <MappingTable
            sourceHeader="FigClank Property"
            targetHeader="CSS Property"
            rows={[
              { source: "layout.padding.top", target: "paddingTop (px)" },
              { source: "layout.itemSpacing", target: "gap (px)" },
              { source: "style.cornerRadius", target: "borderRadius (px)" },
            ]}
          />
        </Subsection>

        <Subsection title="Layout (Auto Layout)">
          <MappingTable
            sourceHeader="FigClank Layout"
            targetHeader="CSS Flexbox"
            rows={[
              { source: "mode: HORIZONTAL", target: "flexDirection: row" },
              { source: "mode: VERTICAL", target: "flexDirection: column" },
              { source: "primaryAxisAlign: MIN", target: "justifyContent: flex-start" },
              { source: "primaryAxisAlign: CENTER", target: "justifyContent: center" },
              { source: "primaryAxisAlign: MAX", target: "justifyContent: flex-end" },
              { source: "primaryAxisAlign: SPACE_BETWEEN", target: "justifyContent: space-between" },
              { source: "counterAxisAlign: MIN", target: "alignItems: flex-start" },
              { source: "counterAxisAlign: CENTER", target: "alignItems: center" },
              { source: "counterAxisAlign: STRETCH", target: "alignItems: stretch" },
              { source: "primaryAxisSizing: AUTO", target: "No explicit width/height" },
              { source: "primaryAxisSizing: FILL", target: "flex: 1" },
            ]}
          />
        </Subsection>

        <Subsection title="Colors">
          <Paragraph>
            FigClank colors are 0-1 floats. Convert to hex:
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={`function colorToHex(color: MCPColor): string {
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  return \`#\${r.toString(16).padStart(2, '0')}\${g.toString(16).padStart(2, '0')}\${b.toString(16).padStart(2, '0')}\`;
}`}
          />
        </Subsection>
      </Section>

      <Section title="Known Limitations">
        <Subsection title="Complex Vectors May Flatten">
          <Paragraph>
            Very complex vector shapes with multiple boolean operations may lose
            some fidelity in SVG export. For complex illustrations, consider
            exporting as PNG (if supported), simplifying in the design, or using
            external asset references.
          </Paragraph>
        </Subsection>

        <Subsection title="Text Overflow Behavior">
          <Paragraph>
            Text overflow and truncation may differ between platforms. FigClank
            uses Figma-style text rendering. Web/iOS/Android have different text
            engines. Test text-heavy components carefully.
          </Paragraph>
        </Subsection>

        <Subsection title="Constraints vs Auto Layout">
          <Paragraph>
            Designs can use either constraints (absolute positioning) or auto
            layout (flexbox). Check <code>node.layout.mode</code> - if not
            &quot;NONE&quot;, it&apos;s auto layout. Check <code>node.constraints</code> for
            positioned elements. Some frames mix both approaches.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="Agent Mutation Tools">
        <Paragraph>
          Agents can mutate designs with these tools:
        </Paragraph>
        <ToolTable
          tools={[
            { name: "agent_getSelectionSnapshot", description: "Compact JSON of selection for planner context" },
            { name: "agent_updateNode", description: "Update fills, effects, width, height, cornerRadius, opacity" },
            { name: "agent_createShape", description: "Create rectangle, ellipse, frame, or triangle" },
            { name: "agent_createText", description: "Create a text node" },
            { name: "agent_wrapInAutoLayout", description: "Wrap selection in auto layout frame" },
            { name: "agent_alignNodes", description: "Align selection (left, center, right, top, middle, bottom)" },
            { name: "agent_distributeNodes", description: "Distribute with even spacing" },
            { name: "agent_groupNodes", description: "Group selection into GROUP" },
            { name: "agent_ungroupNodes", description: "Ungroup a GROUP" },
            { name: "agent_createComponentFromSelection", description: "Convert selection to reusable component" },
          ]}
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
        <Warning>
          If rate limited, wait and retry with exponential backoff.
        </Warning>
      </Section>

      <Section title="Error Handling">
        <Paragraph>Common error codes:</Paragraph>
        <ToolTable
          tools={[
            { name: "NOT_FOUND", description: "Document/node doesn't exist – Check IDs" },
            { name: "FORBIDDEN", description: "No access to resource – Verify permissions" },
            { name: "VALIDATION_ERROR", description: "Invalid parameters – Check input format" },
            { name: "RATE_LIMITED", description: "Too many requests – Wait and retry" },
          ]}
        />
      </Section>
    </DocContent>
  );
}
