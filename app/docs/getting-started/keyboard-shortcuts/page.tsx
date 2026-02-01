import {
  DocContent,
  Section,
  ToolTable,
  Note,
  List,
} from "@/components/docs";

export default function KeyboardShortcutsPage() {
  return (
    <DocContent
      title="Keyboard Shortcuts"
      description="Quick reference for tool selection, viewport and zoom, rulers, edit actions, and mouse interactions in FigClank."
    >
      <Section title="Tool Selection">
        <p className="text-foreground-muted mb-4">
          Select tools using these single-letter shortcuts (no modifier keys
          required):
        </p>
        <ToolTable
          tools={[
            {
              icon: "/iconsToolKit_/ToolBar=Cursor.svg",
              name: "Cursor/Select",
              shortcut: "V",
              description: "Select and move objects",
            },
            {
              icon: "/iconsToolKit_/ToolBar=Frame.svg",
              name: "Frame",
              shortcut: "F",
              description: "Create frame containers",
            },
            {
              icon: "/iconsToolKit_/ToolBar=AddText.svg",
              name: "Text",
              shortcut: "T",
              description: "Add text elements",
            },
            {
              icon: "/iconsToolKit_/ToolBar=DrawVector.svg",
              name: "Vector",
              shortcut: "P",
              description: "Draw vector paths",
            },
            {
              icon: "/iconsToolKit_/ToolBar=ShapeCircle.svg",
              name: "Circle",
              shortcut: "O",
              description: "Create circle shapes",
            },
            {
              icon: "/iconsToolKit_/ToolBar=ShapeSquare.svg",
              name: "Square",
              shortcut: "R",
              description: "Create square/rectangle shapes",
            },
            {
              icon: "/iconsToolKit_/ToolBar=ExpandTool.svg",
              name: "Resize",
              shortcut: "K",
              description:
                "Open resize/scale modal for the selected node (single selection only)",
            },
          ]}
        />
      </Section>

      <Section title="Viewport & Zoom">
        <p className="text-foreground-muted mb-4">
          Control the canvas viewport and zoom level:
        </p>
        <ToolTable
          tools={[
            {
              name: "Zoom In",
              shortcut: "+ or =",
              description: "Zoom in at mouse position (or canvas center)",
            },
            {
              name: "Zoom Out",
              shortcut: "- or _",
              description: "Zoom out at mouse position (or canvas center)",
            },
            {
              name: "Fit to Screen",
              shortcut: "0",
              description: "Fit the entire design to the viewport",
            },
            {
              name: "Reset Zoom",
              shortcut: "1",
              description: "Reset zoom to 100% and center at origin",
            },
            {
              name: "Zoom by Dragging",
              shortcut: "Z + Drag",
              description: "Hold Z key and drag to zoom in/out",
            },
          ]}
        />
      </Section>

      <Section title="Rulers">
        <p className="text-foreground-muted mb-4">
          Control ruler visibility and create guide lines:
        </p>
        <ToolTable
          tools={[
            {
              name: "Toggle Rulers",
              shortcut: "⇧R",
              description: "Show or hide rulers and guide lines",
            },
            {
              name: "Create Horizontal Guide",
              shortcut: "Drag from top",
              description:
                "Drag from the top ruler to create a horizontal guide line",
            },
            {
              name: "Create Vertical Guide",
              shortcut: "Drag from left",
              description:
                "Drag from the left ruler to create a vertical guide line",
            },
          ]}
        />
      </Section>

      <Section title="Edit Actions">
        <p className="text-foreground-muted mb-4">
          Undo, redo, copy, paste, and delete operations:
        </p>
        <ToolTable
          tools={[
            {
              name: "Undo",
              shortcut: "⌘Z",
              description: "Undo the last action",
            },
            {
              name: "Redo",
              shortcut: "⌘⇧Z",
              description: "Redo the last undone action",
            },
            {
              name: "Copy",
              shortcut: "⌘C",
              description: "Copy selected objects, text, or frames",
            },
            {
              name: "Paste",
              shortcut: "⌘V",
              description: "Paste copied objects at a new position (offset by 10px)",
            },
            {
              icon: "/iconsEditor_/IconEditor=Group.svg",
              name: "Group",
              shortcut: "⌘G",
              description: "Group selected nodes into a frame (at least 2 nodes)",
            },
            {
              icon: "/iconsEditor_/IconEditor=component.svg",
              name: "Create Component",
              shortcut: "⌥⌘K",
              description: "Convert selected nodes to components",
            },
            {
              name: "Delete",
              shortcut: "⌫",
              description: "Delete selected nodes",
            },
          ]}
        />
        <Note>
          Shortcuts are disabled when typing in input fields or text areas, or
          when editing text nodes on the canvas.
        </Note>
      </Section>

      <Section title="Mouse Interactions">
        <p className="text-foreground-muted mb-4">
          While not keyboard shortcuts, these mouse interactions are available:
        </p>
        <List
          items={[
            <><strong>Click:</strong> Select objects</>,
            <><strong>Drag:</strong> Move selected objects or pan the canvas (when no selection)</>,
            <><strong>Double-click:</strong> Edit text nodes</>,
            <><strong>Scroll wheel:</strong> Zoom in/out at mouse position</>,
            <><strong>Right-click:</strong> Context menu (shows available shortcuts)</>,
          ]}
        />
      </Section>
    </DocContent>
  );
}
