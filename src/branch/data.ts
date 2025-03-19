import { FlexHex } from '../core';

/**
 * {@link flexCalcBranch | Calculated} tree branch data.
 *
 * Branch is sequence of hashes describing "path" from leaf to tree root _(32 bytes each)_.
 *
 * @category Branch
 */
export type FlexBranch = FlexHex[];
