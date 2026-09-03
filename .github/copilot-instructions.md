# Copilot Instructions — Rhino 3D Learning Repository

This repository is a living knowledge base for learning Rhino 3D. Its purpose is not just to answer
questions, but to **convert every answered question into durable, reusable documentation** that would
help a stranger learn the same thing.

## Core rule: capture every learning

Whenever a question is asked and answered, a problem is solved, or a workflow is figured out during a
session, you MUST capture it in the repository before ending the turn. Do not wait to be asked.

A "learning" is anything that took investigation or explanation:

- How a Rhino command, tool, or setting works
- A modeling workflow, technique, or sequence of steps
- A troubleshooting fix, or a mistake and its recovery
- A concept, term, or mental model that was clarified
- A comparison between approaches and when to use each

Trivial exchanges (pure chit-chat, restating something already documented) do not require a new file —
but if existing documentation was wrong, incomplete, or unclear, update it.

## Where things go

- `docs/` — durable concept and reference notes. Explain *what* something is and *why* it works.
- `tutorials/` — guided, step-by-step lessons. Explain *how* to accomplish a concrete outcome.
- `exercises/` — practice prompts with worked solutions that reinforce docs and tutorials.

| The learning is mostly... | Put it in |
| --- | --- |
| A concept, definition, or reference detail | `docs/` |
| A repeatable procedure with a concrete end result | `tutorials/` |
| Something best learned by doing | `exercises/` |

Use kebab-case filenames that name the topic, not the date or the session
(`nurbs-surface-continuity.md`, not `2026-09-03-notes.md`).

## Writing standards

Write for a motivated beginner who was not part of the conversation.

- Start each file with a one-sentence summary of what the reader will learn.
- Define Rhino-specific vocabulary the first time it appears.
- Give exact command names as typed in Rhino's command line (e.g. `_BlendSrf`), and note relevant
  options, prompts, and gumball/osnap settings.
- Prefer numbered steps with the expected result after each meaningful step.
- Record pitfalls, error messages, and how to recover from them.
- Note the Rhino version and platform when behavior depends on them.
- Never invent commands, options, menu paths, or behavior. Mark anything unverified as
  `> **Unverified:**` rather than presenting it as fact.

Templates live in `.github/templates/`. Follow them.

## Keeping the knowledge base cohesive

The collection must get *more* integrated over time, not just larger.

- Before creating a file, search `docs/`, `tutorials/`, and `exercises/` for an existing home. Prefer
  extending or correcting an existing file over creating a near-duplicate.
- Cross-link related material in both directions using relative Markdown links.
- Keep `docs/index.md` current as the map of the knowledge base.
- When several small notes cover one subject, consolidate them into a single coherent page and
  repoint the links.
- Fix stale or contradictory statements when you notice them.

## Session workflow

1. Answer the user's question directly and conversationally first.
2. Identify what was actually learned.
3. Search for existing coverage; decide create vs. update vs. consolidate.
4. Write or revise the file(s) using the appropriate template.
5. Update `docs/index.md` and add cross-links.
6. Tell the user, in one or two lines, what was captured and where.

For anything beyond a small edit, delegate the capture work to the `doc-scribe` agent.

## Commits

Commit captured knowledge with a clear message describing the topic, for example
`docs: explain surface continuity levels (G0/G1/G2)`.

**No attribution in commits.** Do not add `Co-authored-by` trailers, "Generated with" lines, tool or
model names, or any other authorship attribution to commit messages. Commit messages describe the
change only.

Do not commit Rhino working files
(`.3dm`, `.3dmbak`, `.rhl`) unless they are curated teaching assets under an `assets/` directory.
