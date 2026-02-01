import Image from "next/image";
import {
  DocContent,
  Section,
  Subsection,
  Paragraph,
  List,
  Note,
  ToolTable,
} from "@/components/docs";

export default function ComponentsPage() {
  return (
    <DocContent
      title="Components"
      description="Reusable design elements that keep your designs consistent. Update a component once and all instances (siblings) update automatically."
    >
      <Paragraph>
        Components are reusable design elements that help you maintain
        consistency across your designs. When you update a component, all
        instances (called &quot;component siblings&quot;) automatically update to match.
      </Paragraph>

      {/* Visual Diagram */}
      <div className="rounded-lg border border-grey-100 bg-background-tertiary p-6 my-6">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Component (Master) */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center rounded bg-editor-component">
                <Image
                  src="/iconsEditor_/IconEditor=component.svg"
                  alt="Component Icon"
                  width={14}
                  height={14}
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-xs font-medium text-editor-component">Component</span>
            </div>
            <div className="w-24 h-24 rounded-lg border-2 border-editor-component bg-white/10 flex items-center justify-center">
              <div className="w-12 h-12 rounded bg-brand-purple"></div>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-foreground-muted text-2xl">→</div>

          {/* Siblings */}
          <div className="flex items-center gap-4">
            {/* Sibling 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded bg-editor-component/70">
                  <Image
                    src="/iconsEditor_/IconEditor=Component-Sibling.svg"
                    alt="Sibling Icon"
                    width={14}
                    height={14}
                    className="brightness-0 invert"
                  />
                </div>
                <span className="text-xs font-medium text-editor-component/70">Sibling</span>
              </div>
              <div className="w-20 h-20 rounded-lg border-2 border-editor-component/50 bg-white/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded bg-brand-purple"></div>
              </div>
            </div>
            {/* Sibling 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded bg-editor-component/70">
                  <Image
                    src="/iconsEditor_/IconEditor=Component-Sibling.svg"
                    alt="Sibling Icon"
                    width={14}
                    height={14}
                    className="brightness-0 invert"
                  />
                </div>
                <span className="text-xs font-medium text-editor-component/70">Sibling</span>
              </div>
              <div className="w-20 h-20 rounded-lg border-2 border-editor-component/50 bg-white/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded bg-brand-purple"></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-foreground-muted text-center mt-4">
          One component can have multiple siblings that automatically sync when the component is updated
        </p>
      </div>

      <Section title="What are Components?">
        <ToolTable
          tools={[
            {
              icon: "/iconsEditor_/IconEditor=component.svg",
              name: "Component",
              description: "Master design elements that serve as templates for reusable UI elements.",
            },
            {
              icon: "/iconsEditor_/IconEditor=Component-Sibling.svg",
              name: "Component Sibling",
              description: "Linked instances that automatically sync when the component is updated.",
            },
          ]}
        />
        <Paragraph>
          Components are master design elements that serve as templates. They can
          be any design element or group of elements:
        </Paragraph>
        <List
          items={[
            "Buttons, cards, or UI elements",
            "Icons or logos",
            "Complex nested structures with multiple layers",
            "Any design element you want to reuse",
          ]}
        />
        <Paragraph>
          Components appear in the layers panel with a special component icon and
          are highlighted in a distinct color to make them easy to identify.
        </Paragraph>
      </Section>

      <Section title="Creating Components">
        <Paragraph>To create a component from existing design elements:</Paragraph>
        <List
          ordered
          items={[
            "Select one or more elements on the canvas",
            "Press ⌥⌘K (Mac) or Alt+Ctrl+K (Windows/Linux)",
            "The selected elements are converted into a component",
          ]}
        />
        <Note>
          Elements that are already components will be skipped. You cannot
          convert the root page node into a component.
        </Note>
      </Section>

      <Section title="What are Component Siblings?">
        <Paragraph>
          Component siblings (also called instances) are copies of a component
          that are linked to the original. They:
        </Paragraph>
        <List
          items={[
            "Automatically sync when you edit the original component",
            "Maintain their own position and can be moved independently",
            'Are named with a "Sibling" suffix (e.g., "Button Sibling")',
            "Appear in the layers panel with a sibling icon",
          ]}
        />
        <Paragraph>
          When you update a component&apos;s properties (colors, text, size, effects,
          etc.), all of its siblings automatically update to reflect those
          changes.
        </Paragraph>
      </Section>

      <Section title="Using Components">
        <Subsection title="Viewing Components">
          <Paragraph>
            Open the left sidebar and click the &quot;Components&quot; tab to see all
            components in your design. Each component shows a preview thumbnail
            and its name.
          </Paragraph>
        </Subsection>

        <Subsection title="Creating Siblings">
          <List
            ordered
            items={[
              "Open the Components tab in the left sidebar",
              "Drag a component from the sidebar onto the canvas",
              "A new sibling instance is created at the drop location",
            ]}
          />
        </Subsection>

        <Subsection title="Editing Components">
          <Paragraph>
            When you edit a component (change colors, text, size, effects, etc.),
            all of its siblings automatically update to match. This includes
            changes to nested elements within the component.
          </Paragraph>
        </Subsection>

        <Subsection title="Identifying Components and Siblings">
          <List
            items={[
              "Components show a component icon and are highlighted in a special color",
              'Siblings show a sibling icon and have "Sibling" in their name',
              "Both types are easy to spot in the layer hierarchy",
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Best Practices">
        <List
          items={[
            <><strong>Create components for reusable elements:</strong> Buttons, cards, icons, and other UI elements that appear multiple times</>,
            <><strong>Use siblings for consistency:</strong> When you need multiple copies of the same element, create siblings instead of duplicating</>,
            <><strong>Edit the component, not siblings:</strong> To update all instances at once, edit the original component</>,
            <><strong>Organize with clear names:</strong> Give components descriptive names to make them easy to find in the Components tab</>,
          ]}
        />
      </Section>
    </DocContent>
  );
}
