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
        "REMINDER: the capture rule is not optional. If this turn answered a question, solved a",
        "problem, or figured out a workflow, write it into the repository before ending the turn.",
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
