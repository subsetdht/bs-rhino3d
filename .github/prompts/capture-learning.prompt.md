---
name: capture-learning
description: Capture what we just figured out into the Rhino knowledge base as documentation, a tutorial, or an exercise.
---

Review this conversation and capture everything that was learned into the repository.

Follow `.github/copilot-instructions.md`. Delegate the writing to the `doc-scribe` agent unless the
change is a one-line correction.

Specifically:

1. List the distinct learnings from this session — concepts, procedures, pitfalls, and corrections.
2. For each, search `docs/`, `tutorials/`, and `exercises/` for an existing home. Prefer updating or
   consolidating over creating a near-duplicate page.
3. Write or revise the material using the templates in `.github/templates/`, aimed at a motivated
   beginner who was not part of this conversation.
4. Update `docs/index.md` and add relative cross-links in both directions.
5. Mark anything not actually verified as `> **Unverified:**` instead of stating it as fact.
6. Report which files were created or changed, and list any open questions worth confirming in Rhino.
