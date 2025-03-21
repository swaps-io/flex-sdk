import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSendHash } from '../send';

import { FlexSendNativeData } from './data';

/**
 * Parameters for {@link flexCalcSendNativeHash} function.
 *
 * @category Send Native
 */
export interface FlexCalcSendNativeHashParams {
  /**
   * Send native domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Send native component data to calculate hash of.
   */
  data: Pick<FlexSendNativeData, 'sendData'>;
}

/**
 * Calculates hash of send native component {@link flexEncodeSendNativeData | data}.
 *
 * Related contracts:
 * - {@link !FlexSendNativeFacet | `FlexSendNativeFacet`}
 * - {@link !IFlexSendNative | `IFlexSendNative`}
 * - {@link !FlexSendNativeDomainFacet | `FlexSendNativeDomainFacet`}
 * - {@link !IFlexSendNativeDomain | `IFlexSendNativeDomain`}
 *
 * @param params Function {@link FlexCalcSendNativeHashParams | parameters}.
 *
 * @returns Send native component data hash _(32 bytes)_.
 *
 * @category Send Native
 */
export function flexCalcSendNativeHash(params: FlexCalcSendNativeHashParams): FlexHex {
  return flexCalcSendHash({ domain: params.domain, data: params.data.sendData });
}
