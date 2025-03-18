import { FlexHex } from '../core';

import { FlexTree } from './data';

export interface FlexCalcTreeHashParams {
  tree: FlexTree;
}

export function flexCalcTreeHash({ tree }: FlexCalcTreeHashParams): FlexHex {
  return tree.root;
}
