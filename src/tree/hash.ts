import { Hex, getExternal } from '../external/inner';

import { FlexTree } from './data';

export interface FlexCalcTreeHashParams {
  tree: FlexTree;
}

export function flexCalcTreeHash({ tree }: FlexCalcTreeHashParams): Hex {
  const e = getExternal();

  return e.processTree(tree.inner);
}
