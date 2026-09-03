// Force-loads this repository's agent instructions into every session.
//
// The runtime does not reliably pick up .github/copilot-instructions.md or AGENTS.md
// on its own, so this extension reads AGENTS.md from disk and injects it as hidden
// context at session start and on every user prompt.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { joinSession } from "@github/copilot-sdk/extension";

const INSTRUCTION_FILES = ["AGENTS.md", ".github/copilot-instructions.md"];

function loadInstructions(cwd) {
    const parts = [];
    for (const rel of INSTRUCTION_FILES) {
        const full = join(cwd, rel);
        if (!existsSync(full)) continue;
        try {
            const body = readFileSync(full, "utf8").trim();
            if (body) parts.push(`===== ${rel} =====\n\n${body}`);
        } catch {
            // Unreadable file is not worth failing the session over.
        }
    }
    if (parts.length === 0) return null;

    return [
        "REPOSITORY INSTRUCTIONS (mandatory, loaded from disk).",
        "These are the operating rules for this repository. Follow them for the entire session.",
        "",
        parts.join("\n\n"),
        "",
        "MANDATORY END-OF-TURN CHECK. Before you end this turn, answer this question to yourself:",
        "did this turn answer a Rhino question, solve a problem, or figure out a workflow?",
        "",
        "If yes, you are NOT done. You must, in this same turn:",
        "  1. Search docs/, tutorials/, and exercises/ for an existing home for the topic.",
        "  2. Create or update the file(s) using the templates in .github/templates/.",
        "  3. Update docs/index.md and cross-link related pages.",
        "  4. Commit the change (no attribution trailers).",
        "  5. Tell the user in one line what was captured and where.",
        "",
        "Answering the user in chat does NOT satisfy this. Chat is ephemeral, the repository is the",
        "deliverable. Do not defer the capture to a later turn and do not ask permission first.",
        "",
        "ANTI-HALLUCINATION RULE. Never claim you captured, wrote, updated, indexed, or committed",
        "anything unless you actually called the tools to do it in this turn. Writing a file requires a",
        "create or edit tool call. Committing requires a shell tool call. If you did not make those",
        "calls, the work did not happen, and saying otherwise is a fabrication. Before you state what",
        "you captured, confirm the files exist and `git status` is clean.",
    ].join("\n");
}

const session = await joinSession({
    tools: [],
    hooks: {
        onSessionStart: async (input) => {
            const context = loadInstructions(input.workingDirectory);
            if (!context) return;
            await session.log("Rhino KB instructions loaded", { ephemeral: true });
            return { additionalContext: context };
        },
        onUserPromptSubmitted: async (input) => {
            const context = loadInstructions(input.workingDirectory);
            if (!context) return;
            return { additionalContext: context };
        },
    },
});
