import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveFromHash } from '../receiveFrom';

import { FlexReceiveTokenData } from './data';

/**
 * Parameters for {@link flexCalcReceiveTokenHash} function.
 *
 * @category Receive Token
 */
export interface FlexCalcReceiveTokenHashParams {
  /**
   * Receive token domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Receive token component data to calculate hash of _(32 bytes each)_.
   */
  data: Pick<FlexReceiveTokenData, 'receiveFromData'>;
}

/**
 * Calculates hash of receive token component {@link flexEncodeReceiveTokenData | data}.
 *
 * Related contracts:
 * - {@link !FlexReceiveTokenFacet | `FlexReceiveTokenFacet`}
 * - {@link !IFlexReceiveToken | `IFlexReceiveToken`}
 *
 * @param params Function {@link FlexCalcReceiveTokenHashParams | parameters}.
 *
 * @returns Receive token component data hash _(32 bytes)_.
 *
 * @category Receive Token
 */
export function flexCalcReceiveTokenHash(params: FlexCalcReceiveTokenHashParams): FlexHex {
  return flexCalcReceiveFromHash({ domain: params.domain, data: params.data.receiveFromData });
}
