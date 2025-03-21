import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveFromHash } from '../receiveFrom';

import { FlexReceiveNativeData } from './data';

/**
 * Parameters for {@link flexCalcReceiveNativeHash} function.
 *
 * @category Receive Native
 */
export interface FlexCalcReceiveNativeHashParams {
  /**
   * Receive native domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Receive native component data to calculate hash of _(32 bytes each)_.
   */
  data: Pick<FlexReceiveNativeData, 'receiveFromData'>;
}

/**
 * Calculates hash of receive native component {@link flexEncodeReceiveNativeData | data}.
 *
 * Related contracts:
 * - {@link !FlexReceiveNativeFacet | `FlexReceiveNativeFacet`}
 * - {@link !IFlexReceiveNative | `IFlexReceiveNative`}
 *
 * @param params Function {@link FlexCalcReceiveNativeHashParams | parameters}.
 *
 * @returns Receive native component data hash _(32 bytes)_.
 *
 * @category Receive Native
 */
export function flexCalcReceiveNativeHash(params: FlexCalcReceiveNativeHashParams): FlexHex {
  return flexCalcReceiveFromHash({ domain: params.domain, data: params.data.receiveFromData });
}
