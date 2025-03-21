import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSendHash } from '../send';

import { FlexSendNativeFloatData } from './data';

/**
 * Parameters for {@link flexCalcSendNativeFloatHash} function.
 *
 * @category Send Native Float
 */
export interface FlexCalcSendNativeFloatHashParams {
  /**
   * Send native float domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Send native float component data to calculate hash of.
   */
  data: Pick<FlexSendNativeFloatData, 'sendData'>;
}

/**
 * Calculates hash of send native "float" component {@link flexEncodeSendNativeFloatData | data}.
 *
 * Related contracts:
 * - {@link !FlexSendNativeFloatFacet | `FlexSendNativeFloatFacet`}
 * - {@link !IFlexSendNativeFloat | `IFlexSendNativeFloat`}
 * - {@link !FlexSendNativeFloatDomainFacet | `FlexSendNativeFloatDomainFacet`}
 * - {@link !IFlexSendNativeFloatDomain | `IFlexSendNativeFloatDomain`}
 *
 * @param params Function {@link FlexCalcSendNativeFloatHashParams | parameters}.
 *
 * @returns Send native float component data hash _(32 bytes)_.
 *
 * @category Send Native Float
 */
export function flexCalcSendNativeFloatHash(params: FlexCalcSendNativeFloatHashParams): FlexHex {
  return flexCalcSendHash({ domain: params.domain, data: params.data.sendData });
}
