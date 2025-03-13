import { Hex, getExternal } from '../external/inner';

import { FlexBranch } from './data';

export interface FlexCalcAccumulatorBranchParams {
  branch: Readonly<FlexBranch>;
  hashBefore: Hex;
  hashesAfter: readonly Hex[];
}

export function flexCalcAccumulatorBranch({
  branch,
  hashBefore,
  hashesAfter,
}: FlexCalcAccumulatorBranchParams): FlexBranch {
  const e = getExternal();

  const offset = 1 + hashesAfter.length;
  const header = e.concatHex([e.asHex(hashBefore, 20), e.asHex(offset, 12)]);
  const accumulatorBranch: Hex[] = [header, ...hashesAfter, ...branch];
  return accumulatorBranch;
}
