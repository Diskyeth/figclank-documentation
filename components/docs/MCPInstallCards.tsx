"use client";

import Image from "next/image";

const MCP_SERVER_URL = "https://mcp.figclank.design";

const cursorConfig = {
  url: MCP_SERVER_URL,
  headers: {},
};
const cursorConfigBase64 =
  typeof window !== "undefined"
    ? btoa(JSON.stringify(cursorConfig))
    : Buffer.from(JSON.stringify(cursorConfig)).toString("base64");

const vscodeConfig = {
  name: "figclank",
  type: "http",
  url: MCP_SERVER_URL,
  headers: {},
};

const MCP_TOOLS = [
  "auth_whoami",
  "workspace_listProjects",
  "documents_list",
  "documents_get",
  "documents_getSnapshot",
  "history_listVersions",
  "nodes_get",
  "nodes_listChildren",
  "nodes_getSubtree",
  "nodes_query",
  "components_list",
  "components_get",
  "styles_list",
  "tokens_get",
  "inspect_screenSummary",
  "inspect_componentUsage",
  "inspect_textContent",
  "export_svg",
  "export_png",
  "export_html",
  "export_css",
  "render_thumbnail",
  "resolve_asset_url",
  "agent_getSelectionSnapshot",
  "agent_updateNode",
  "agent_createShape",
  "agent_createText",
  "agent_wrapInAutoLayout",
  "agent_alignNodes",
  "agent_distributeNodes",
  "agent_groupNodes",
  "agent_ungroupNodes",
  "agent_createComponentFromSelection",
];

export function MCPInstallCards() {
  const handleAddToCursor = () => {
    const deeplink = `cursor://anysphere.cursor-deeplink/mcp/install?name=FigClank&config=${cursorConfigBase64}`;
    window.location.href = deeplink;
  };

  const handleAddToClaude = () => {
    window.open(
      "https://studio.figclank.design/docs/mcp/claude",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleAddToVSCode = () => {
    const deeplink = `vscode:mcp/install?${encodeURIComponent(JSON.stringify(vscodeConfig))}`;
    window.location.href = deeplink;
  };

  return (
    <div className="space-y-6">
      {/* Install Cards */}
      <div className="flex flex-wrap gap-4">
        <div
          className="aspect-square w-[200px] flex flex-col rounded-xl p-5"
          style={{ backgroundColor: "var(--color-background-card-primary)" }}
        >
          <div className="flex flex-1 flex-col">
            <div className="relative mb-3 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black">
              <Image
                src="/iconsBranding/mcp_/Icon_Cursor-256x256.avif"
                alt="Cursor"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <h4 className="mb-2 text-sm font-semibold text-white">Cursor</h4>
            <ul className="mb-3 flex-1 space-y-1">
              <li className="flex items-start gap-1.5 text-xs text-foreground-muted">
                <span className="text-primary-grey-300">•</span>
                <span>FigClank Design documents</span>
              </li>
              <li className="flex items-start gap-1.5 text-xs text-foreground-muted">
                <span className="text-primary-grey-300">•</span>
                <span>Remote and local servers</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={handleAddToCursor}
              className="inline-flex h-8 items-center justify-center rounded-lg border border-grey-200 bg-transparent px-3 text-xs font-medium text-white transition-colors hover:bg-grey-100/30"
            >
              Add MCP to Cursor
            </button>
          </div>
        </div>

        <div
          className="aspect-square w-[200px] flex flex-col rounded-xl p-5"
          style={{ backgroundColor: "var(--color-background-card-primary)" }}
        >
          <div className="flex flex-1 flex-col">
            <div className="relative mb-3 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black">
              <Image
                src="/iconsBranding/mcp_/Icon_Claude-256x256.avif"
                alt="Claude"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <h4 className="mb-2 text-sm font-semibold text-white">Claude</h4>
            <ul className="mb-3 flex-1 space-y-1">
              <li className="flex items-start gap-1.5 text-xs text-foreground-muted">
                <span className="text-primary-grey-300">•</span>
                <span>FigClank Design documents</span>
              </li>
              <li className="flex items-start gap-1.5 text-xs text-foreground-muted">
                <span className="text-primary-grey-300">•</span>
                <span>Remote servers</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={handleAddToClaude}
              className="inline-flex h-8 items-center justify-center rounded-lg border border-grey-200 bg-transparent px-3 text-xs font-medium text-white transition-colors hover:bg-grey-100/30"
            >
              Add MCP to Claude
            </button>
          </div>
        </div>

        <div
          className="aspect-square w-[200px] flex flex-col rounded-xl p-5"
          style={{ backgroundColor: "var(--color-background-card-primary)" }}
        >
          <div className="flex flex-1 flex-col">
            <div className="relative mb-3 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black">
              <Image
                src="/iconsBranding/mcp_/Icon_VSCode-256x256.avif"
                alt="VS Code"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <h4 className="mb-2 text-sm font-semibold text-white">VS Code</h4>
            <ul className="mb-3 flex-1 space-y-1">
              <li className="flex items-start gap-1.5 text-xs text-foreground-muted">
                <span className="text-primary-grey-300">•</span>
                <span>FigClank Design documents</span>
              </li>
              <li className="flex items-start gap-1.5 text-xs text-foreground-muted">
                <span className="text-primary-grey-300">•</span>
                <span>Remote and local servers</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={handleAddToVSCode}
              className="inline-flex h-8 items-center justify-center rounded-lg border border-grey-200 bg-transparent px-3 text-xs font-medium text-white transition-colors hover:bg-grey-100/30"
            >
              Add MCP to VS Code
            </button>
          </div>
        </div>
      </div>

      {/* Tag Cloud */}
      <div>
        <h4 className="mb-2 text-sm font-semibold text-white">
          Available Tools
        </h4>
        <div className="flex flex-wrap gap-2">
          {MCP_TOOLS.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono text-white"
              style={{ backgroundColor: "var(--color-background-card-tag)" }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
