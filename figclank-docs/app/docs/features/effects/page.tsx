import Image from "next/image";
import {
  DocContent,
  Section,
  Subsection,
  Paragraph,
  List,
  ToolTable,
} from "@/components/docs";

export default function EffectsPage() {
  return (
    <DocContent
      title="Effects"
      description="Add shadow effects to elements using Visual mode for interactive multi-layered shadows or Form mode for precise numerical control."
    >
      <Section title="Shadow Effects">
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=DropShadow.svg",
              name: "Shadow Effect",
              description:
                "Two tools for creating shadows. Switch between them using the tabs at the top of the shadow effect modal.",
            },
          ]}
        />

        <Subsection title="Visual Mode">
          <div className="flex flex-col md:flex-row gap-6 my-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/FAQ/FAQ_Shadows_Visual_.png"
                alt="Visual Shadow Effect Tool"
                width={280}
                height={280}
                className="rounded-lg border border-grey-100"
              />
            </div>
            <div className="flex-1">
              <Paragraph>
                Interactive tool for creating beautiful, multi-layered shadows with a
                natural look.
              </Paragraph>
              <List
                items={[
                  <><strong>Interactive Preview:</strong> Drag the light source indicator (pink circle) to position your shadow. Shadow is cast opposite to light source.</>,
                  <><strong>Distance:</strong> How far shadow extends (0–80px). Higher = longer shadows.</>,
                  <><strong>Elevation:</strong> Blur intensity (0+). Higher = softer shadows.</>,
                  <><strong>Layers:</strong> Number of shadow layers (3–8). More = smoother, more realistic.</>,
                  <><strong>Color:</strong> Choose color and adjust opacity (brightness) as percentage.</>,
                  <><strong>Apply Button:</strong> Click to apply. Generates multiple shadow layers automatically.</>,
                ]}
              />
            </div>
          </div>
        </Subsection>

        <Subsection title="Form Mode">
          <div className="flex flex-col md:flex-row gap-6 my-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/FAQ/FAQ_Shadows_Form_.png"
                alt="Form Shadow Effect Tool"
                width={280}
                height={280}
                className="rounded-lg border border-grey-100"
              />
            </div>
            <div className="flex-1">
              <Paragraph>
                Precise numerical control for matching existing designs or achieving
                specific shadow values.
              </Paragraph>
              <List
                items={[
                  <><strong>Type:</strong> &quot;Drop shadow&quot; (external) or &quot;Inner shadow&quot; (internal).</>,
                  <><strong>Position:</strong> X and Y offset values. Positive Y moves shadow down.</>,
                  <><strong>Blur:</strong> Blur radius (0+). Higher values = softer shadows.</>,
                  <><strong>Spread:</strong> Expand or contract shadow. Positive = larger.</>,
                  <><strong>Color:</strong> Choose color and adjust opacity (0–100%).</>,
                  <><strong>Live Updates:</strong> Changes apply immediately as you adjust values.</>,
                ]}
              />
            </div>
          </div>
        </Subsection>
      </Section>
    </DocContent>
  );
}
