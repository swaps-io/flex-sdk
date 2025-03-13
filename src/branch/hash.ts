import { Hex, getExternal } from '../external/inner';

import { FlexBranch } from './data';

export interface FlexCalcBranchHashParams {
  leaf: Hex;
  branch: Readonly<FlexBranch>;
}

export function flexCalcBranchHash({ leaf, branch }: FlexCalcBranchHashParams): Hex {
  const e = getExternal();
  const hash = e.processProof(leaf, branch);
  return hash;
}
