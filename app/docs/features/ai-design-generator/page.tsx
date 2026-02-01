import Image from "next/image";
import {
  DocContent,
  Section,
  Paragraph,
  List,
  ToolTable,
} from "@/components/docs";

export default function AIDesignGeneratorPage() {
  return (
    <DocContent
      title="Design a Mini App with AI"
      description="Use the AI input from the toolbar to generate mini app screens from a text description."
    >
      <Paragraph>
        Use the AI input from the toolbar to generate mini app screens from a
        text description. Describe the screen you want, and the AI will create a
        frame with layout, components, and styling for you.
      </Paragraph>

      <Section title="Enable the AI Input">
        <ToolTable
          tools={[
            {
              icon: "/iconsEssentials_/IconEssentials=AI_Sparks.svg",
              name: "AI Input Toggle",
              description:
                "In the toolbar at the bottom of the screen, tap the AI (sparks) icon to show or hide the AI input panel.",
            },
          ]}
        />
        <Paragraph>
          When the AI input is on, the icon is highlighted and a floating panel
          appears just above the toolbar with a text area and a Generate button.
        </Paragraph>
      </Section>

      <Section title="Describe Your Mini App Screen">
        <div className="rounded-lg border border-grey-100 overflow-hidden my-4">
          <Image
            src="/images/FAQ/FAQ_Ai_Create.png"
            alt="AI Create input panel with describe your mini app screen and Generate button"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <Paragraph>
          In the text area, describe the mini app screen you want the AI to
          design. Be specific about:
        </Paragraph>
        <List
          items={[
            "The purpose of the screen (e.g., login, profile, feed, settings)",
            "Key elements you want (buttons, inputs, images, lists)",
            "Tone or style if it matters (minimal, playful, professional)",
          ]}
        />
        <Paragraph>
          Then click <strong>Generate</strong>. The AI will create a frame and
          add it to your canvas. Generation can take up to a minute.
        </Paragraph>
      </Section>

      <Section title="Example Prompts">
        <List
          items={[
            <><strong>Login:</strong> &quot;Create a mini app login screen with email and password fields and a sign-in button.&quot;</>,
            <><strong>Profile:</strong> &quot;Create a user profile screen with avatar, name, bio, and a follow button.&quot;</>,
            <><strong>Feed:</strong> &quot;Create a feed screen with a list of cards, each with an image, title, and short description.&quot;</>,
            <><strong>Settings:</strong> &quot;Create a settings screen with toggles for notifications and theme, and a logout button.&quot;</>,
          ]}
        />
      </Section>

      <Section title="After Generation">
        <Paragraph>
          The generated frame is added to your canvas. You can select it, move
          it, and edit any of its layers (text, shapes, layout) using the same
          tools and sidebar as with manually created content.
        </Paragraph>
      </Section>
    </DocContent>
  );
}
