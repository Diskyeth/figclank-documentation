import {
  DocContent,
  Section,
  Paragraph,
  ToolTable,
} from "@/components/docs";

const nodes = [
  {
    name: "New Input",
    description:
      "A little notebook. You type words into it—maybe \"I want a login button\" or \"Make a blue header.\" It holds your ideas in text form.",
    connectsFrom: "Nothing (you type directly)",
    connectsTo: "Simple Output, Create a Plan, WireFrame, The Architect, and more",
    outcome:
      "Your words travel to the next node, which uses them to do something smart.",
  },
  {
    name: "Create a Plan",
    description:
      "A friendly teacher. You give it a big idea (\"I want to build a shopping app\"), and it writes a plan for you—step by step, like a recipe.",
    connectsFrom: "New Input",
    connectsTo: "Generate Steps",
    outcome:
      "A written plan in markdown. One output handle sends the whole plan.",
  },
  {
    name: "Generate Steps",
    description:
      "A checklist maker. It takes a plan and breaks it into smaller steps. Each step is one thing to build.",
    connectsFrom: "Create a Plan",
    connectsTo: "WireFrame (each step), Generate Image (each step)",
    outcome:
      "A list of steps. Each step has its own output handle.",
  },
  {
    name: "Simple Output",
    description:
      "Reads your words and picks out the important parts. \"I want a blue header, a login button, and a footer\" → turns that into a neat list.",
    connectsFrom: "New Input",
    connectsTo: "WireFrame (each item)",
    outcome:
      "A clean list of ideas. Each item has its own output handle.",
  },
  {
    name: "WireFrame",
    description:
      "A sketch artist. You give it one idea (from Simple Output or Generate Steps), and it draws a simple wireframe—boxes, buttons, lines. No fancy colors yet.",
    connectsFrom: "Simple Output, Generate Steps, Architect Styling (for color overrides)",
    connectsTo: "Enhance Frame, Export Designs, Heatmap, Architect Styling, Color Info",
    outcome:
      "A simple HTML wireframe you can enhance, export, or style.",
  },
  {
    name: "Generate Image",
    description:
      "A magic art box. You describe what you want in words (or connect from Generate Steps), and it draws a picture for you.",
    connectsFrom: "Generate Steps (one step at a time)",
    connectsTo: "Extract Colors, The Architect, Heatmap",
    outcome:
      "A new image. You can extract colors, feed to The Architect, or run Heatmap.",
  },
  {
    name: "Enhance Frame",
    description:
      "A polish helper. It takes a plain wireframe and makes it nicer—adds better styling, improves how it looks.",
    connectsFrom: "WireFrame (optionally with colors from Create Palette)",
    connectsTo: "Export Designs, Heatmap",
    outcome:
      "A prettier version of the wireframe. You can export or run a UX audit.",
  },
  {
    name: "Upload Image",
    description:
      "A photo frame. You pick a picture from your computer—a screenshot, a drawing, or any image you want to use.",
    connectsFrom: "Nothing (you upload directly)",
    connectsTo: "Extract Colors, The Architect, Generate Image, Heatmap",
    outcome:
      "The picture travels to the next node. Extract Colors finds main colors. The Architect turns it into a design. Heatmap shows saliency and UX insights.",
  },
  {
    name: "Add Screenshot",
    description:
      "A special camera. It takes a picture of a screen (website or app) and shows you a heat map—where people's eyes go first. Hot colors mean \"look here a lot!\" Cool colors mean \"not so much.\"",
    connectsFrom: "Nothing (you capture or paste a screenshot)",
    connectsTo: "The Architect, Extract Colors, Heatmap",
    outcome:
      "The screenshot gets analyzed. The Architect can turn it into a design. Extract Colors pulls colors. Heatmap shows saliency and UX insights.",
  },
  {
    name: "The Architect",
    description:
      "The big helper. It looks at a screenshot or picture and says \"I can build that!\" It turns what it sees into a real, working design—HTML you can see in a browser.",
    connectsFrom: "Upload Image, Add Screenshot, Generate Image, Architect Input",
    connectsTo: "Architect Styling, Components, Architect Input",
    outcome:
      "The picture becomes a real design. You can style it, pull out components, or chat with Architect Input for more screens.",
  },
  {
    name: "Architect Input",
    description:
      "A chat bubble next to The Architect. You type things like \"Add a login screen\" or \"Make the header bigger.\" It talks to The Architect and gets new screens or changes built.",
    connectsFrom: "The Architect",
    connectsTo: "Nothing (it receives from Architect)",
    outcome:
      "New designs appear based on your words. The Architect keeps a history of what you asked for.",
  },
  {
    name: "Create Palette",
    description:
      "A paint box with five slots. You can shake it to get random colors, or lock some and shake again for new ones that match. You can also connect colors from other nodes.",
    connectsFrom: "Nothing (you generate or lock colors)",
    connectsTo: "WireFrame, Architect Styling, Color Info (via the \"+\" bubble when you drag a color row)",
    outcome:
      "Your palette travels to other nodes so they can use those colors in designs.",
  },
  {
    name: "Mini App",
    description:
      "A little TV window. You type a website address (URL) and it shows that website inside the card. You can see it, test it, and connect it for analysis.",
    connectsFrom: "Nothing (you type the URL)",
    connectsTo: "Heatmap (for UX audit), Export Designs",
    outcome:
      "The live mini app can be captured and analyzed or exported.",
  },
  {
    name: "Architect Styling",
    description:
      "A color picker for The Architect's designs. It shows the design and lets you change colors on parts—\"make this button blue\" or \"make that header green.\" Connect colors from Create Palette or Color Info.",
    connectsFrom: "The Architect",
    connectsTo: "WireFrame (each item can receive a color override from Color Info)",
    outcome:
      "A styled version of the Architect's design. You can tweak colors on specific elements.",
  },
  {
    name: "Extract Colors",
    description:
      "A color detective. You give it a picture, and it finds the main colors—usually six. Shows them as swatches. Click one for details, or drag one out to create a Color Info card.",
    connectsFrom: "Upload Image, Add Screenshot, Generate Image",
    connectsTo: "WireFrame (each color), Color Info (via the \"+\" bubble when you drag a color row)",
    outcome:
      "A palette of colors from the image. Each color has its own output handle.",
  },
  {
    name: "Color Info",
    description:
      "A color fact card. It shows one color and tells you everything—hex, RGB, HSL, and more. Usually created by dragging a color from Extract Colors or Create Palette onto the \"+\" bubble.",
    connectsFrom: "Extract Colors (one color row), Create Palette (one color row)",
    connectsTo: "WireFrame (to a specific part like \"Button\" or \"Header\"), Architect Styling",
    outcome:
      "That one color gets applied to a specific part of a wireframe or design.",
  },
  {
    name: "Components",
    description:
      "A parts drawer. The Architect builds a design, and Components pulls out the reusable pieces—buttons, cards, headers. You can save them to your design library.",
    connectsFrom: "The Architect",
    connectsTo: "Nothing (it receives from Architect)",
    outcome:
      "A list of Figma components you can add to your canvas.",
  },
  {
    name: "Export Designs",
    description:
      "A delivery truck. It takes wireframes (plain or enhanced) and sends them to your Figma canvas as real frames.",
    connectsFrom: "WireFrame, Enhance Frame, Mini App",
    connectsTo: "Nothing (it exports to Figma)",
    outcome:
      "Your wireframes appear on the main canvas as Figma frames.",
  },
  {
    name: "Heatmap",
    description:
      "An attention checker. Connect an image (Add Screenshot, Upload Image, Generate Image) or a wireframe/enhanced frame/mini app. For images: saliency heat map and UX insights. For wireframes: captures a screenshot and runs a UX audit with tips.",
    connectsFrom: "Add Screenshot, Upload Image, Generate Image, WireFrame, Enhance Frame, Export Designs, Mini App",
    connectsTo: "Nothing (it receives and analyzes)",
    outcome:
      "For images: heat map and saliency insights. For wireframes: creates Add Screenshot, runs UX analysis, shows strengths and recommendations.",
  },
];

export default function VisualNodesNodeReferencePage() {
  return (
    <DocContent
      title="Node Reference"
      description="Complete reference for all 19 visual nodes in the Design Agent canvas, in workflow order."
    >
      <Section title="Overview">
        <Paragraph>
          Each node is a specialized helper. Connect them with wires and data
          flows from outputs to inputs. The nodes below are listed in a typical
          workflow order—from idea to export.
        </Paragraph>
      </Section>

      {nodes.map((node, index) => (
        <Section key={node.name} id={node.name.toLowerCase().replace(/\s+/g, "-")} title={`${index + 1}. ${node.name}`}>
          <Paragraph>{node.description}</Paragraph>
          <ToolTable
            tools={[
              { name: "Connects from", description: node.connectsFrom },
              { name: "Connects to", description: node.connectsTo },
              { name: "Outcome", description: node.outcome },
            ]}
          />
        </Section>
      ))}
    </DocContent>
  );
}
