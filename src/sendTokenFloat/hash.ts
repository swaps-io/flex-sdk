import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSendHash } from '../send';

import { FlexSendTokenFloatData } from './data';

/**
 * Parameters for {@link flexCalcSendTokenFloatHash} function.
 *
 * @category Send Token Float
 */
export interface FlexCalcSendTokenFloatHashParams {
  /**
   * Send token float domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Send token float component data to calculate hash of.
   */
  data: Pick<FlexSendTokenFloatData, 'sendData'>;
}

/**
 * Calculates hash of send token "float" component {@link flexEncodeSendTokenFloatData | data}.
 *
 * Related contracts:
 * - {@link !FlexSendTokenFloatFacet | `FlexSendTokenFloatFacet`}
 * - {@link !IFlexSendTokenFloat | `IFlexSendTokenFloat`}
 * - {@link !FlexSendTokenFloatDomainFacet | `FlexSendTokenFloatDomainFacet`}
 * - {@link !IFlexSendTokenFloatDomain | `IFlexSendTokenFloatDomain`}
 *
 * @param params Function {@link FlexCalcSendTokenFloatHashParams | parameters}.
 *
 * @returns Send token float component data hash _(32 bytes)_.
 *
 * @category Send Token Float
 */
export function flexCalcSendTokenFloatHash(params: FlexCalcSendTokenFloatHashParams): FlexHex {
  return flexCalcSendHash({ domain: params.domain, data: params.data.sendData });
}
