import { FlexHex, flexConcatHex, flexToHex } from '../core';

import { FlexBranch } from './data';

export interface FlexCalcAccumulatorBranchParams {
  branch: Readonly<FlexBranch>;
  hashBefore: FlexHex;
  hashesAfter: readonly FlexHex[];
}

export function flexCalcAccumulatorBranch({
  branch,
  hashBefore,
  hashesAfter,
}: FlexCalcAccumulatorBranchParams): FlexBranch {
  const offset = 1 + hashesAfter.length;
  const header = flexConcatHex([flexToHex(hashBefore, 20), flexToHex(offset, 12)]);
  const accumulatorBranch: FlexHex[] = [header, ...hashesAfter, ...branch];
  return accumulatorBranch;
}
