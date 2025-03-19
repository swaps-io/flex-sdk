import { FlexHex } from '../core';

/**
 * {@link flexCalcTree | Calculated} tree data.
 *
 * @category Tree
 */
export interface FlexTree {
  /**
   * Root hash of tree _(32 bytes)_.
   *
   * Uniquely identifies content of entire tree.
   */
  root: FlexHex;

  /**
   * Map of parent relations in tree:
   * - _key_: leaf or node hash _(32 bytes)_
   * - _value_: its parent node hash _(32 bytes)_
   *
   * Parent node is result of hashing two {@link siblings} together, i.e. two nodes are expected to have same parent.
   * Only {@link root} node doesn't have any parent.
   */
  parents: Record<FlexHex, FlexHex>;

  /**
   * Map of sibling relations in tree:
   * - _key_: leaf or node hash _(32 bytes)_
   * - _value_: its sibling leaf or node hash _(32 bytes)_
   *
   * Two sibling nodes are hashed together to produce single {@link parents | parent}. Siblings reference each other
   * via this map. {@link root | Root} node doesn't have any sibling.
   */
  siblings: Record<FlexHex, FlexHex>;
}
