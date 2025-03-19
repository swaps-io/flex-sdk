import { FlexHex, flexConcatHex, flexToHex } from '../core';

import { FlexBranch } from './data';

/**
 * Parameters for {@link flexCalcAccumulatorBranch} function.
 *
 * @category Branch
 */
export interface FlexCalcAccumulatorBranchParams {
  /**
   * Base branch to include into accumulator branch _(32 bytes each)_.
   */
  branch: Readonly<FlexBranch>;

  /**
   * Accumulator hash before tree root hash of base branch _(20 bytes)_.
   */
  hashBefore: FlexHex;

  /**
   * Accumulator hashes after tree root hash of base branch _(32 bytes each)_.
   */
  hashesAfter: readonly FlexHex[];
}

/**
 * Calculates _accumulator_ branch by combining base {@link FlexBranch | branch} and accumulator data.
 *
 * This special type of branch is intended to put tree root hash corresponding to base branch as hash sandwiched between
 * accumulator state before and hashes added after to it.
 *
 * Related contracts:
 * - {@link !FlexHashTree | `FlexHashTree`}
 *
 * @param params Function {@link FlexCalcAccumulatorBranchParams | parameters}.
 *
 * @returns Combined accumulator branch.
 *
 * @category Branch
 */
export function flexCalcAccumulatorBranch(params: FlexCalcAccumulatorBranchParams): FlexBranch {
  const offset = 1 + params.hashesAfter.length;
  const header = flexConcatHex([flexToHex(params.hashBefore, 20), flexToHex(offset, 12)]);
  const accumulatorBranch: FlexHex[] = [header, ...params.hashesAfter, ...params.branch];
  return accumulatorBranch;
}
