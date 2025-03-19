import { FlexHex } from '../core';

import { FlexTree } from './data';

/**
 * Parameters for {@link flexCalcTreeHash} function.
 *
 * @category Tree
 */
export interface FlexCalcTreeHashParams {
  /**
   * Tree to calculate root hash of.
   */
  tree: FlexTree;
}

/**
 * Calculates root hash of {@link FlexTree | tree}.
 *
 * Root hash uniquely identifies {@link flexCalcTree | content} of entire tree.
 *
 * @param params Function {@link FlexCalcTreeHashParams | parameters}.
 *
 * @returns Root hash of tree _(32 bytes)_.
 *
 * @category Tree
 */
export function flexCalcTreeHash(params: FlexCalcTreeHashParams): FlexHex {
  return params.tree.root;
}
