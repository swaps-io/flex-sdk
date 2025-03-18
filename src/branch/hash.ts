import { flexCalcCommutativeHash } from '../commutative';
import { FlexHex } from '../core';

import { FlexBranch } from './data';

export interface FlexCalcBranchHashParams {
  leaf: FlexHex;
  branch: Readonly<FlexBranch>;
}

export function flexCalcBranchHash({ leaf, branch }: FlexCalcBranchHashParams): FlexHex {
  let hash = leaf;
  for (const node of branch) {
    hash = flexCalcCommutativeHash([hash, node]);
  }
  return hash;
}
