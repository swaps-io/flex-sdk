import { FlexError, FlexHex } from '../core';
import { FlexTree } from '../tree';

import { FlexBranch } from './data';

export interface FlexCalcBranchParams {
  tree: FlexTree;
  leaf: FlexHex;
}

export function flexCalcBranch({ tree, leaf }: FlexCalcBranchParams): FlexBranch {
  const branch: FlexHex[] = [];
  while (leaf !== tree.root) {
    const parent = tree.parents[leaf];
    if (!parent) {
      throw new FlexError(`Flex tree has no parent for "${leaf}"`);
    }

    const sibling = tree.siblings[leaf];
    if (!sibling) {
      throw new FlexError(`Flex tree has no sibling for "${leaf}"`);
    }

    branch.push(sibling);
    leaf = parent;
  }
  return branch;
}
