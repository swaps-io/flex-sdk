import { FlexHex } from '../core';

import { FlexTree } from './data';

export interface FlexCalcTreeHashParams {
  tree: FlexTree;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function flexCalcTreeHash({ tree }: FlexCalcTreeHashParams): FlexHex {
  return '0x'; // TODO - implement tree hash calc
}
