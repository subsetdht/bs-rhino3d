# Copilot Instructions: Rhino 3D Learning Repository

A living knowledge base for learning Rhino 3D. Purpose: convert every answered question into durable
documentation that helps a stranger learn the same thing.

## Core rule: capture every learning

When a question is answered, a problem solved, or a workflow figured out, capture it in the repository
before ending the turn. Do not wait to be asked.

A "learning" is anything that took investigation or explanation:

- How a Rhino command, tool, or setting works
- A modeling workflow, technique, or sequence of steps
- A troubleshooting fix, or a mistake and its recovery
- A concept, term, or mental model that was clarified
- A comparison between approaches and when to use each

Skip chit-chat and anything already documented. If existing documentation is wrong, incomplete, or
unclear, update it.

## Target environment

**Rhino 8 on Windows.** Ground every answer, command, menu path, and screenshot reference in Rhino 8
for Windows unless the user says otherwise.

- Do not describe Rhino 5/6/7 behavior as current. If a workflow changed, say what Rhino 8 does.
- Do not give Rhino for Mac UI paths. Mac differences belong in a "Platform notes" line only when
  relevant.
- Prefer Rhino 8 features where they are the better answer (SubD, ShrinkWrap, Grasshopper 1 in Rhino 8,
  the Rhino 8 layout and display pipeline).
- Note plugin or tier requirements when a command is not in stock Rhino 8.
- If unsure whether something exists or behaves this way in Rhino 8, mark it `> **Unverified:**` and
  say what to check.

Files only need a version note when behavior is version-sensitive or differs from earlier releases.
Rhino 8 on Windows is the assumed baseline.

## Where things go

- `docs/`: durable concept and reference notes. Explain *what* something is and *why* it works.
- `tutorials/`: guided, step-by-step lessons. Explain *how* to accomplish a concrete outcome.
- `exercises/`: practice prompts with worked solutions that reinforce docs and tutorials.

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
- Note the Rhino version and platform when behavior depends on them.- Never invent commands, options, menu paths, or behavior. Mark anything unverified as
  `> **Unverified:**` rather than presenting it as fact.

**Be terse.** Favor brevity over completeness of prose. Include every detail the reader needs to
succeed, and nothing more.

- No long paragraphs. Three sentences is a ceiling, not a target.
- Use lists, tables, and short steps instead of narrative.
- Cut preamble, restatement, filler, and motivational text.
- One idea per bullet. If a bullet needs a semicolon, split it.
- Link to an existing page instead of re-explaining it.
- Terse does not mean vague: keep exact commands, values, settings, and expected results.

**Use simple punctuation.** Do not use em dashes (`—`) or en dashes (`–`) anywhere in this repository,
including documentation, commit messages, and chat responses. Use a comma, a colon, parentheses, or a
separate sentence instead. Prefer plain ASCII punctuation over typographic characters generally: use
straight quotes rather than curly quotes, and "..." rather than an ellipsis character.

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

Commit with a clear message naming the topic, e.g. `docs: explain surface continuity levels (G0/G1/G2)`.

**No attribution in commits.** No `Co-authored-by` trailers, "Generated with" lines, tool or model
names, or any other authorship attribution. Describe the change only.

Do not commit Rhino working files (`.3dm`, `.3dmbak`, `.rhl`) unless they are curated teaching assets
under `assets/`.
