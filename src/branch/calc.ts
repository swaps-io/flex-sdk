import { FlexError, FlexHex } from '../core';
import { FlexTree } from '../tree';

import { FlexBranch } from './data';

/**
 * Parameters for {@link flexEncodeAllocateReceiveData0} function.
 *
 * @category Branch
 */
export interface FlexCalcBranchParams {
  /**
   * Tree to calculate branch for.
   */
  tree: FlexTree;

  /**
   * Tree leaf to calculate branch for _(32 bytes)_.
   */
  leaf: FlexHex;
}

/**
 * Calculates [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) {@link FlexBranch | branch} from specified leaf
 * to root of given {@link FlexTree | tree}.
 *
 * Branch provides lightweight way to calculate tree root hash with no need to provide entire tree data.
 *
 * Related contracts:
 * - {@link !FlexHashTree | `FlexHashTree`}
 *
 * @param params Function {@link FlexCalcBranchParams | parameters}.
 *
 * @returns Calculated tree branch _(32 bytes each)_.
 *
 * @category Branch
 */
export function flexCalcBranch(params: FlexCalcBranchParams): FlexBranch {
  const branch: FlexHex[] = [];
  let hash = params.leaf;
  while (hash !== params.tree.root) {
    const parent = params.tree.parents[hash];
    if (!parent) {
      throw new FlexError(`Flex tree has no parent for "${hash}"`);
    }

    const sibling = params.tree.siblings[hash];
    if (!sibling) {
      throw new FlexError(`Flex tree has no sibling for "${hash}"`);
    }

    branch.push(sibling);
    hash = parent;
  }
  return branch;
}
