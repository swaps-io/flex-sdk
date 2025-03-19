import { flexCalcCommutativeHash } from '../commutative';
import { FlexError, FlexHex } from '../core';

import { FlexTree } from './data';

/**
 * Parameters for {@link flexCalcTree} function.
 *
 * @category Tree
 */
export interface FlexCalcTreeParams {
  /**
   * List of leaves calculated tree should include _(32 bytes each)_.
   */
  leaves: readonly FlexHex[];
}

/**
 * Calculates [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) containing all specified leaves.
 *
 * Calculated tree allows to extract {@link flexCalcBranch | branches} for every provided leaf for efficient tree
 * inclusion verification.
 *
 * Leaves are expected to be component {@link flexCalcHash | hashes} (i.e. _32 bytes_ each, normalized to lowercase).
 *
 * At least one leaf must be presented. No leaf should have duplicate in list. If any of these is not true -
 * {@link FlexError | error} is thrown.
 *
 * Related contracts:
 * - {@link !FlexHashTree | `FlexHashTree`}
 *
 * @param params Function {@link FlexCalcTreeParams | parameters}.
 *
 * @returns Calculated tree data.
 *
 * @category Tree
 */
export function flexCalcTree(params: FlexCalcTreeParams): FlexTree {
  if (params.leaves.length < 1) {
    throw new FlexError('Flex tree must have at least one leaf');
  }

  if (new Set(params.leaves).size < params.leaves.length) {
    throw new FlexError('Flex tree must have unique leaves');
  }

  const parents: Record<FlexHex, FlexHex> = {};
  const siblings: Record<FlexHex, FlexHex> = {};

  function calc(leaves: readonly FlexHex[]): FlexHex {
    if (leaves.length === 1) {
      return leaves[0];
    }

    const middle = Math.ceil(leaves.length / 2);
    const leftHash = calc(leaves.slice(0, middle));
    const rightHash = calc(leaves.slice(middle));
    const hash = flexCalcCommutativeHash([leftHash, rightHash]);
    parents[leftHash] = hash;
    parents[rightHash] = hash;
    siblings[leftHash] = rightHash;
    siblings[rightHash] = leftHash;
    return hash;
  }

  const tree: FlexTree = {
    root: calc(params.leaves),
    parents,
    siblings,
  };
  return tree;
}
