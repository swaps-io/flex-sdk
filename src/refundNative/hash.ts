import { FlexHex } from '../core';
import { FlexCalcSettleNativeHashParams, flexCalcSettleNativeHash } from '../settleNative';

/**
 * Parameters for {@link flexCalcRefundNativeHash} function.
 *
 * @category Refund Native
 */
export type FlexCalcRefundNativeHashParams = FlexCalcSettleNativeHashParams;

/**
 * Calculates hash of refund native component {@link flexEncodeRefundNativeData | data}.
 *
 * Related contracts:
 * - {@link !FlexSettleNativeFacet | `FlexSettleNativeFacet`}
 * - {@link !IFlexSettleNative | `IFlexSettleNative`}
 * - {@link !FlexSettleNativeDomainFacet | `FlexSettleNativeDomainFacet`}
 * - {@link !IFlexSettleNativeDomain | `IFlexSettleNativeDomain`}
 *
 * @param params Function {@link FlexCalcRefundNativeHashParams | parameters}.
 *
 * @returns Refund native component data hash _(32 bytes)_.
 *
 * @category Refund Native
 */
export function flexCalcRefundNativeHash(params: FlexCalcRefundNativeHashParams): FlexHex {
  return flexCalcSettleNativeHash(params);
}
