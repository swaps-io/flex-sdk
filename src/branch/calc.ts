import { Hex, getExternal } from '../external/inner';
import { FlexTree } from '../tree';

import { FlexBranch } from './data';

export interface FlexCalcBranchParams {
  tree: FlexTree;
  leaf: Hex;
}

export function flexCalcBranch({ tree, leaf }: FlexCalcBranchParams): FlexBranch {
  const e = getExternal();

  const proof = e.createProof(tree.inner, leaf);
  return proof;
}
