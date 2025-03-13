import { Hex, getExternal } from '../external/inner';

import { FlexTree } from './data';

export interface FlexCalcTreeParams {
  leaves: readonly Hex[];
}

export function flexCalcTree({ leaves }: FlexCalcTreeParams): FlexTree {
  const e = getExternal();

  const uniqueLeaves = new Set(leaves.map((leaf) => leaf.toLowerCase()));
  if (uniqueLeaves.size < leaves.length) {
    throw new Error('Flex tree must have unique leaves');
  }

  const inner = e.createTree(leaves);
  const tree = new FlexTree(inner);
  return tree;
}
