# Explode

`_Explode` separates a joined or composite object into its component parts, and what you get back
depends on what you exploded.

## Why it matters

Explode is the standard way to get at sub-objects for editing. The result differs by object type, so
knowing what you lose matters before you run it.

## Key ideas

- **Polysurface**: multiple surfaces joined into one object.
- **Block instance**: a placed reference to a block definition, carrying its own position, rotation,
  and scale.

## What Explode produces

| You explode | You get | What you lose |
| --- | --- | --- |
| Polysurface | Its individual surfaces (faces) | The join relationship. Geometry stays in place. |
| Block instance | Ordinary Rhino objects from the block definition, placed at the instance's transform | The instance/reference link to the block definition. |
| Polyline or curve | Its individual segments | The join between segments. |

## Relevant commands

| Command | Purpose | Notes |
| --- | --- | --- |
| `_Explode` | Separates a composite object into components | Works on polysurfaces, blocks, polylines, and groups. |
| `_Join` | Rejoins compatible components | Reverses an exploded polysurface if the edges still match. |

## Pitfalls

- Exploding a block breaks the reference. Editing the block definition no longer updates those
  objects.
- `_Join` does not undo a block explode. It rejoins geometry, it does not recreate the instance.
- Exploding is not always reversible. Use `_Undo` if you exploded by mistake.

## Related material

- [Join vs Group](./join-vs-group.md)
- [Curve control points](./curve-control-points.md)
