# Curve Control Points

Control points are the editable handles behind a curve's shape, and this page explains how to show
and hide them.

## Why it matters

Reshaping a curve (or surface) by pulling its underlying points is one of the most common editing
workflows in Rhino. You must display the points before you can select and drag them.

## Key ideas

- **Control point**: a point that defines a NURBS curve's shape. Moving one reshapes the curve; the
  curve does not necessarily pass through it.
- **Control polygon**: the straight-line cage connecting a curve's control points, shown while points
  are on.

## Relevant commands

| Command | Purpose | Notes |
| --- | --- | --- |
| `_PointsOn` | Shows control points on the selected object(s) | Shortcut: `F10`. Works on curves, surfaces, and dimensions. |
| `_PointsOff` | Hides control points on the selected object(s) | Shortcut: `F11`. |

## How it works

1. Select the curve.
2. Run `_PointsOn`, or press `F10`.
   - *Expected result:* control points appear on the curve, connected by the control polygon.
3. Drag a control point (with an object snap or gumball as needed) to reshape the curve.
4. Run `_PointsOff`, or press `F11`, to hide the points again.
   - *Expected result:* the control points and polygon disappear; the reshaped curve remains.

## Pitfalls

- Nothing selected when pressing `F10`: no points appear. Select the curve first.
- Confusing control points with edit points, a separate point set that lies on the curve instead of
  controlling it from off-curve.
  > **Unverified:** the exact Rhino 8 command name for toggling edit points. Check the command line
  > autocomplete before relying on it.

## Related material

- [Dimension associativity](./dimension-associativity.md): same `F10`/`PointsOn` toggle, applied to
  dimension grips instead of curve shape.