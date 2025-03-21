import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSendHash } from '../send';

import { FlexSendTokenData } from './data';

/**
 * Parameters for {@link flexCalcSendTokenHash} function.
 *
 * @category Send Token
 */
export interface FlexCalcSendTokenHashParams {
  /**
   * Send token domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Send token component data to calculate hash of.
   */
  data: Pick<FlexSendTokenData, 'sendData'>;
}

/**
 * Calculates hash of send token component {@link flexEncodeSendTokenData | data}.
 *
 * Related contracts:
 * - {@link !FlexSendTokenFacet | `FlexSendTokenFacet`}
 * - {@link !IFlexSendToken | `IFlexSendToken`}
 * - {@link !FlexSendTokenDomainFacet | `FlexSendTokenDomainFacet`}
 * - {@link !IFlexSendTokenDomain | `IFlexSendTokenDomain`}
 *
 * @param params Function {@link FlexCalcSendTokenHashParams | parameters}.
 *
 * @returns Send token component data hash _(32 bytes)_.
 *
 * @category Send Token
 */
export function flexCalcSendTokenHash(params: FlexCalcSendTokenHashParams): FlexHex {
  return flexCalcSendHash({ domain: params.domain, data: params.data.sendData });
}
