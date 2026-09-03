# Reposition a Dimension Without Breaking Associativity

Move a dimension's text or line offset by dragging its grips, keeping the link to the geometry intact.

## Goal

The dimension sits where you want it and still updates when the measured geometry changes.

## Prerequisites

- Rhino 8 for Windows
- Concepts: [Dimension associativity](../docs/dimension-associativity.md)
- Starting file: an object with an associative linear dimension already applied

## Steps

1. Select the dimension and press `F10` (or run `PointsOn`) to show its grips.
   - *Expected result:* grips appear on the dimension text, dimension line, and definition points.
2. Drag the middle text grip to move the dimension text.
   - *Expected result:* text moves; the definition points stay on the geometry.
3. Drag a dimension-line grip to change the offset distance from the geometry.
   - *Expected result:* the line offset changes; the link is preserved.
4. For fine control, select a grip and use the arrow keys to `Nudge`.
   - *Expected result:* the grip moves in small increments.
5. Hold `Shift` or enable `Ortho` while dragging to constrain the direction.
   - *Expected result:* movement is locked to an axis.
6. Do NOT drag the definition-point grips (the ones on the object's endpoints) off the geometry.
   - *Expected result:* leaving them attached keeps the dimension associative.

## Set values numerically instead of dragging

- Open the Properties panel, Dimension page, to enter text position and offsets as numbers.
- More precise and repeatable than dragging.

> **Unverified:** Whether running `Move` or `Drag` on the whole dimension object breaks associativity. It should not, since the definition points move with it, but test before relying on it.

## Verify your result

- Change the measured geometry and confirm the dimension value updates.
- If it stopped updating, association is broken.

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Text drifted far from the dimension | Text grip moved too far | Run `DimRecenterText` to return text to its default position. |
| Value no longer updates | A definition-point grip was pulled off the geometry | Delete the dimension and re-dimension with object snaps on. |

## Related material

- [Dimension associativity](../docs/dimension-associativity.md)
