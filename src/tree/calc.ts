import { FlexHex } from '../core';

import { FlexTree } from './data';

export interface FlexCalcTreeParams {
  leaves: readonly FlexHex[];
}

export function flexCalcTree({ leaves }: FlexCalcTreeParams): FlexTree {
  const uniqueLeaves = new Set(leaves.map((leaf) => leaf.toLowerCase()));
  if (uniqueLeaves.size < leaves.length) {
    throw new Error('Flex tree must have unique leaves');
  }

  const tree = new FlexTree(); // TODO - implement tree calc
  return tree;
}
