# Knowledge Base Index

The map of everything captured in this repository. Every new page should be listed here.

Baseline environment: Rhino 8 for Windows.

## Concepts and reference (`docs/`)

- [Dimension associativity](dimension-associativity.md): why dimensions use associativity not History, what creates the link, and what breaks it.
- [Curve control points](curve-control-points.md): what control points are and how to show/hide them with `PointsOn`/`PointsOff` (`F10`/`F11`).

## Tutorials (`tutorials/`)

- [Reposition a dimension without breaking associativity](../tutorials/reposition-dimension-without-breaking-associativity.md): drag grips to move dimension text and line offset while keeping the link.

## Exercises (`exercises/`)

_Nothing captured yet._

## Open questions

Things believed but not yet verified in Rhino. Confirm and then promote into the pages above.

- Does running `Move` or `Drag` on a whole dimension object break associativity? Believed no (definition points move with it), untested.
- Does Rhino 8 have a command to re-associate a broken dimension to geometry? Not confirmed to exist. Current fallback: delete and re-dimension with object snaps on.
