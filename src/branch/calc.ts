import { FlexHex } from '../core';
import { FlexTree } from '../tree';

import { FlexBranch } from './data';

export interface FlexCalcBranchParams {
  tree: FlexTree;
  leaf: FlexHex;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function flexCalcBranch({ tree, leaf }: FlexCalcBranchParams): FlexBranch {
  return []; // TODO - implement branch calc
}
