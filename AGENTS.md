# AGENTS.md

Agent instructions for this repository.

The full ruleset lives in [`.github/copilot-instructions.md`](.github/copilot-instructions.md). Read it
before doing anything. The essentials are repeated here because this file is the one agents discover
most reliably.

## What this repository is

A living knowledge base for learning Rhino 3D. Purpose: convert every answered question into durable
documentation that helps a stranger learn the same thing.

## Target environment

**Rhino 8 for Windows.** Ground every command, menu path, and workflow in it. Never present Rhino
5/6/7 behavior as current. Never give Rhino for Mac UI paths.

## Core rule: capture every learning

When a question is answered, a problem solved, or a workflow figured out, capture it in the repository
before ending the turn. Do not wait to be asked.

Capture concepts, procedures, pitfalls, corrections, and comparisons. Skip chit-chat and anything
already documented. If existing documentation is wrong or unclear, fix it.

Delegate anything beyond a small edit to the `doc-scribe` agent
([`.github/agents/doc-scribe.md`](.github/agents/doc-scribe.md)).

## Where things go

- `docs/`: concepts and reference. What something is and why.
- `tutorials/`: step-by-step lessons with a concrete outcome. How to do it.
- `exercises/`: practice tasks with worked solutions.

Kebab-case, topic-named filenames. Never dated or session-named. Update
[`docs/index.md`](docs/index.md) and cross-link in both directions.

Templates: [`.github/templates/`](.github/templates/).

## Writing standards

- For a motivated beginner who was not part of the conversation.
- Exact commands as typed (`_BlendSrf`), with relevant options and prompts.
- Numbered steps stating the expected result.
- Record pitfalls, error messages, and recovery.
- Never invent behavior. Mark uncertainty `> **Unverified:**`.
- **Terse.** No long paragraphs (three sentences is a ceiling). Lists and tables over narrative. Cut
  preamble and filler. Terse does not mean vague: keep exact commands, values, and expected results.
- **Simple punctuation.** No em dashes or en dashes. Use commas, colons, parentheses, or separate
  sentences. Plain ASCII over typographic characters.

## Commits

Clear message naming the topic, e.g. `docs: explain dimension associativity`.

**No attribution.** No `Co-authored-by` trailers, "Generated with" lines, tool or model names, or any
other authorship attribution. Describe the change only.

Do not commit Rhino working files (`.3dm`, `.3dmbak`, `.rhl`) unless they are curated teaching assets
under `assets/`.
