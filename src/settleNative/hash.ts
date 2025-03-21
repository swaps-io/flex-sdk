import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSettleHash } from '../settle';

import { FlexSettleNativeData } from './data';

/**
 * Parameters for {@link flexCalcSettleNativeHash} function.
 *
 * @category Settle Native
 */
export interface FlexCalcSettleNativeHashParams {
  /**
   * Settle native domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Settle native component data to calculate hash of.
   */
  data: Pick<FlexSettleNativeData, 'settleData'>;
}

/**
 * Calculates hash of settle native component {@link flexEncodeSettleNativeData | data}.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleNativeFacet | `FlexSettleNativeFacet`}
 * - {@link !IFlexSettleNative | `IFlexSettleNative`}
 * - {@link !FlexSettleNativeDomainFacet | `FlexSettleNativeDomainFacet`}
 * - {@link !IFlexSettleNativeDomain | `IFlexSettleNativeDomain`}
 *
 * @param params Function {@link FlexCalcSettleNativeHashParams | parameters}.
 *
 * @returns Settle native component data hash _(32 bytes)_.
 *
 * @category Settle Native
 */
export function flexCalcSettleNativeHash(params: FlexCalcSettleNativeHashParams): FlexHex {
  return flexCalcSettleHash({ domain: params.domain, data: params.data.settleData });
}
