# Dimension Associativity

Rhino dimensions link to geometry through associativity, not History, and this page explains what that means, what creates it, and what breaks it.

## Why it matters

Users expect dimensions to update with the model and reach for History, the wrong mechanism. Knowing dimensions use associativity prevents lost links and stale measurements.

## Key ideas

- **Associativity**: a link between a dimension and the geometry it measures, so the value auto-updates when the geometry changes.
- **History**: the separate record-history mechanism used by commands like `Loft` and `Sweep`. Dimensions do not use it.
- **Definition points**: the dimension's attachment points, snapped to the geometry. Moving them off the geometry breaks the link.
- **`DimAssoc`**: setting that controls whether newly created dimensions are associative.

## How it works

Association is created when a dimension's definition points are snapped to real geometry with object snaps. Dimension without snapping and there is nothing to associate to. Once linked, editing the geometry updates the dimension value.

## Relevant commands

| Command | Purpose | Notes |
| --- | --- | --- |
| `DimAssoc` | Controls associativity of new dimensions | `DimAssoc=Yes` makes new dims associative (linked, auto-updating). Applies to dims created after the change. |
| `PointsOn` | Turns on control points/grips | Same as selecting the dimension and pressing `F10`. Use grips to reposition without breaking the link. |
| `DimRecenterText` | Returns moved dimension text to its default position | Exists in Rhino 8. |

## Checking association

- Select the dimension and turn on grips (`F10` or `PointsOn`).
- The definition-point grips sit on the measured geometry.
- Change the geometry and confirm the value updates. If it does not, the dimension is non-associative.

## Pitfalls

- Reaching for History to make dimensions update. Dimensions use associativity; set `DimAssoc=Yes` instead.
- Dragging definition-point grips off the geometry. That detaches the dimension and stops updates.
- Dimensioning without object snaps. No snap means no association is ever created.

> **Unverified:** Whether a command exists in Rhino 8 to re-associate a broken dimension to geometry. Needs checking. Reliable recovery is to delete the dimension and re-create it with object snaps on.

## Related material

- [Reposition a dimension without breaking associativity](../tutorials/reposition-dimension-without-breaking-associativity.md)
- [Curve control points](./curve-control-points.md): the same `F10`/`PointsOn` toggle, applied to curve shape instead of dimension grips.
