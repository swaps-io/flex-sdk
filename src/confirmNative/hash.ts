import { FlexHex } from '../core';
import { FlexCalcSettleNativeHashParams, flexCalcSettleNativeHash } from '../settleNative';

/**
 * Parameters for {@link flexCalcConfirmNativeHash} function.
 *
 * @category Confirm Native
 */
export type FlexCalcConfirmNativeHashParams = FlexCalcSettleNativeHashParams;

/**
 * Calculates hash of confirm native component {@link flexEncodeConfirmNativeData | data}.
 *
 * Related contracts:
 * - {@link !FlexSettleNativeFacet | `FlexSettleNativeFacet`}
 * - {@link !IFlexSettleNative | `IFlexSettleNative`}
 * - {@link !FlexSettleNativeDomainFacet | `FlexSettleNativeDomainFacet`}
 * - {@link !IFlexSettleNativeDomain | `IFlexSettleNativeDomain`}
 *
 * @param params Function {@link FlexCalcConfirmNativeHashParams | parameters}.
 *
 * @returns Confirm native component data hash _(32 bytes)_.
 *
 * @category Confirm Native
 */
export function flexCalcConfirmNativeHash(params: FlexCalcConfirmNativeHashParams): FlexHex {
  return flexCalcSettleNativeHash(params);
}
