import { FlexHex, FlexToHexValue, flexCalcHash, flexConcatHex, flexToHex } from '../core';

import { flexAssignComponentDomain } from './domain';

/**
 * Parameters for {@link flexCalcComponentHash} function.
 *
 * @category Component
 */
export interface FlexCalcComponentHashParams {
  /**
   * Component domain to assign to {@link data} for hash calculation _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Component data ({@link domain} will be overwritten) _(32 bytes each)_.
   */
  data: readonly [FlexToHexValue, ...FlexToHexValue[]];
}

/**
 * Calculates {@link flexCalcHash | hash} of component data {@link flexAssignComponentDomain | assigning} domain to it
 * prior.
 *
 * Related contracts:
 * - {@link !FlexEfficientHash | `FlexEfficientHash`}
 *
 * @param params Function {@link FlexCalcComponentHashParams | parameters}.
 *
 * @returns Domain-aware component data hash.
 *
 * @category Component
 */
export function flexCalcComponentHash(params: FlexCalcComponentHashParams): FlexHex {
  return flexCalcHash(
    flexConcatHex([
      flexAssignComponentDomain({ domain: params.domain, data: params.data[0] }),
      ...params.data.slice(1).map((d) => flexToHex(d, 32)),
    ]),
  );
}
