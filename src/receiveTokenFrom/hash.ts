import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveFromHash } from '../receiveFrom';

import { FlexReceiveTokenFromData } from './data';

/**
 * Parameters for {@link flexCalcReceiveTokenFromHash} function.
 *
 * @category Receive Token From
 */
export interface FlexCalcReceiveTokenFromHashParams {
  /**
   * Receive token from domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Receive token from component data to calculate hash of.
   */
  data: Pick<FlexReceiveTokenFromData, 'receiveFromData'>;
}

/**
 * Calculates hash of receive token "from" component {@link flexEncodeReceiveTokenFromData | data}.
 *
 * Related contracts:
 * - {@link !FlexReceiveTokenFromFacet | `FlexReceiveTokenFromFacet`}
 * - {@link !IFlexReceiveTokenFrom | `IFlexReceiveTokenFrom`}
 * - {@link !FlexReceiveTokenFromDomainFacet | `FlexReceiveTokenFromDomainFacet`}
 * - {@link !IFlexReceiveTokenFromDomain | `IFlexReceiveTokenFromDomain`}
 *
 * @param params Function {@link FlexCalcReceiveTokenFromHashParams | parameters}.
 *
 * @returns Receive token from component data hash _(32 bytes)_.
 *
 * @category Receive Token From
 */
export function flexCalcReceiveTokenFromHash(params: FlexCalcReceiveTokenFromHashParams): FlexHex {
  return flexCalcReceiveFromHash({ domain: params.domain, data: params.data.receiveFromData });
}
