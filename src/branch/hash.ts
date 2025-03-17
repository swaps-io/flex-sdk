import { FlexHex, flexCalcHash, flexCompareHex, flexConcatHex } from '../core';

import { FlexBranch } from './data';

export interface FlexCalcBranchHashParams {
  leaf: FlexHex;
  branch: Readonly<FlexBranch>;
}

export function flexCalcBranchHash({ leaf, branch }: FlexCalcBranchHashParams): FlexHex {
  let hash = leaf;
  for (const node of branch) {
    const nodes = [hash, node].sort(flexCompareHex);
    const data = flexConcatHex(nodes);
    hash = flexCalcHash(data);
  }
  return hash;
}
