import { flexCalcCommutativeHash } from '../commutative';
import { FlexHex } from '../core';

import { FlexBranch } from './data';

/**
 * Parameters for {@link flexCalcBranchHash} function.
 *
 * @category Branch
 */
export interface FlexCalcBranchHashParams {
  /**
   * Leaf corresponding to {@link branch} to calculate root hash for _(32 bytes)_.
   */
  leaf: FlexHex;

  /**
   * Branch of leaf to calculate root hash for _(32 bytes each)_.
   */
  branch: Readonly<FlexBranch>;
}

/**
 * Calculates {@link FlexTree | tree} root hash from leaf and its {@link FlexBranch | branch}.
 *
 * Related contracts:
 * - {@link !FlexHashTree | `FlexHashTree`}
 *
 * @param params Function {@link FlexCalcBranchHashParams | parameters}.
 *
 * @returns Root hash of tree _(32 bytes)_.
 *
 * @category Branch
 */
export function flexCalcBranchHash(params: FlexCalcBranchHashParams): FlexHex {
  let hash = params.leaf;
  for (const node of params.branch) {
    hash = flexCalcCommutativeHash([hash, node]);
  }
  return hash;
}
