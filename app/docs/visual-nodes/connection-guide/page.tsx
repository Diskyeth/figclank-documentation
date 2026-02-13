import {
  DocContent,
  Section,
  Paragraph,
  List,
  Subsection,
} from "@/components/docs";

const connectionRows = [
  { from: "New Input", to: "Simple Output", what: "Your words get analyzed into a list" },
  { from: "New Input", to: "Create a Plan", what: "Your idea becomes a step-by-step plan" },
  { from: "New Input", to: "The Architect", what: "(via Architect Input) Your words guide new designs" },
  { from: "Create a Plan", to: "Generate Steps", what: "Your plan becomes a checklist" },
  { from: "Simple Output (item)", to: "WireFrame", what: "That item becomes a wireframe" },
  { from: "Generate Steps (step)", to: "WireFrame", what: "That step becomes a wireframe" },
  { from: "Generate Steps (step)", to: "Generate Image", what: "That step becomes an AI image" },
  { from: "Upload Image", to: "Extract Colors", what: "Picture gets its colors extracted" },
  { from: "Upload Image", to: "The Architect", what: "Picture becomes a design" },
  { from: "Upload Image", to: "Heatmap", what: "Picture gets saliency heat map and UX insights" },
  { from: "Add Screenshot", to: "The Architect", what: "Screenshot becomes a design" },
  { from: "Add Screenshot", to: "Extract Colors", what: "Screenshot gets its colors extracted" },
  { from: "Add Screenshot", to: "Heatmap", what: "Screenshot gets saliency heat map and UX insights" },
  { from: "Generate Image", to: "Extract Colors", what: "Generated image gets colors extracted" },
  { from: "Generate Image", to: "The Architect", what: "Generated image becomes a design" },
  { from: "Generate Image", to: "Heatmap", what: "Generated image gets saliency heat map and UX insights" },
  { from: "The Architect", to: "Architect Styling", what: "Design gets styleable parts" },
  { from: "The Architect", to: "Components", what: "Design gets reusable pieces" },
];

export default function VisualNodesConnectionGuidePage() {
  return (
    <DocContent
      title="Connection Guide"
      description="How visual nodes connect and special rules for wiring the Design Agent canvas."
    >
      <Section title="Connection Summary">
        <Paragraph>
          Use this table as a quick reference for valid connections between
          nodes. Drag from the source node&apos;s output handle to the target
          node&apos;s input handle.
        </Paragraph>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-grey-100">
                <th className="text-left py-3 px-4 font-medium text-foreground-muted">
                  From (Source)
                </th>
                <th className="text-left py-3 px-4 font-medium text-foreground-muted">
                  To (Target)
                </th>
                <th className="text-left py-3 px-4 font-medium text-foreground-muted">
                  What Happens
                </th>
              </tr>
            </thead>
            <tbody>
              {connectionRows.map((row, index) => {
                const prevFrom = connectionRows[index - 1]?.from;
                const isFirstInGroup = prevFrom !== row.from;
                const span = isFirstInGroup
                  ? connectionRows
                      .slice(index)
                      .filter((r) => r.from === row.from).length
                  : 0;

                return (
                  <tr
                    key={index}
                    className="border-b border-grey-100/50 hover:bg-grey-100/30 transition-colors"
                  >
                    {isFirstInGroup ? (
                      <td className="py-3 px-4 align-top" rowSpan={span}>
                        <code className="text-brand-orange">{row.from}</code>
                      </td>
                    ) : null}
                    <td className="py-3 px-4">
                      <code className="text-brand-purple">{row.to}</code>
                    </td>
                    <td className="py-3 px-4 text-foreground-muted">{row.what}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Special Rules">
        <Subsection title="WireFrame">
          <Paragraph>
            WireFrame can only connect to: another WireFrame (for style
            linking), Export Designs, Enhance Frame, or Heatmap. It cannot
            connect to other types.
          </Paragraph>
        </Subsection>
        <Subsection title="Color Info">
          <Paragraph>
            Color Info can connect to WireFrame labels: drag from Color Info to
            a specific part label on a WireFrame to color that part.
          </Paragraph>
        </Subsection>
        <Subsection title="Export Designs">
          <Paragraph>
            Export Designs receives from WireFrame, Enhance Frame, or Mini App.
            It exports to Figma.
          </Paragraph>
        </Subsection>
        <Subsection title="Heatmap">
          <Paragraph>
            Heatmap creates an Add Screenshot when you connect WireFrame,
            Enhance Frame, Export Designs, or Mini App to it—then runs a UX
            audit.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="Tips">
        <List
          items={[
            "Each node may have multiple output handles—one per item or step",
            "Connect one output to multiple inputs to reuse the same data",
            "Some nodes (e.g. New Input, Upload Image) have no inputs—they are entry points",
            "Export Designs and Heatmap are typically end nodes—they receive but don't forward",
          ]}
        />
      </Section>
    </DocContent>
  );
}
