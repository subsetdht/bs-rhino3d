# Join vs Group

`_Join` merges compatible geometry into one object, `_Group` only creates a selection relationship,
and this page explains when to use each.

## Why it matters

Both make several objects behave as a unit, but only one changes the geometry. Picking the wrong one
either destroys editability or fails to produce a true single object.

## Key ideas

- **Join**: merges compatible touching geometry into a single object. Curves need shared endpoints,
  surfaces need shared edges.
- **Group**: a selection relationship only. Geometry is unchanged and members keep their own identity.

## Comparison

| | `_Join` | `_Group` |
| --- | --- | --- |
| Changes geometry | Yes, becomes one object | No |
| Members stay separately editable | No | Yes |
| Requires touching geometry | Yes | No |
| Requires same object type | Yes, compatible types | No, any mix |
| Reverse with | `_Explode` | `_Ungroup` |

## When to use each

- Use `_Join` when the parts should become one editable object, for example surfaces forming a closed
  solid.
- Use `_Group` when the parts should stay separate geometry but be selected and transformed together.

## Pitfalls

- `_Join` silently does nothing if the geometry does not actually touch. Check the object count after.
- Grouped objects can still be sub-selected, so a group is not protection against editing a member.

## Related material

- [Explode](./explode.md)
