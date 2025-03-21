import { FlexHex } from '../core';
import { FlexCalcSettleNativeProofHashParams, flexCalcSettleNativeProofHash } from '../settleNativeProof';

/**
 * Parameters for {@link flexCalcRefundNativeProofHash} function.
 *
 * @category Refund Native Proof
 */
export type FlexCalcRefundNativeProofHashParams = FlexCalcSettleNativeProofHashParams;

/**
 * Calculates hash of refund native proof component {@link flexEncodeRefundNativeProofData | data}.
 *
 * Related contracts:
 * - {@link !FlexSettleNativeFacet | `FlexSettleNativeFacet`}
 * - {@link !IFlexSettleNative | `IFlexSettleNative`}
 * - {@link !FlexSettleNativeDomainFacet | `FlexSettleNativeDomainFacet`}
 * - {@link !IFlexSettleNativeDomain | `IFlexSettleNativeDomain`}
 *
 * @param params Function {@link FlexCalcRefundNativeProofHashParams | parameters}.
 *
 * @returns Refund native proof component data hash _(32 bytes)_.
 *
 * @category Refund Native Proof
 */
export function flexCalcRefundNativeProofHash(params: FlexCalcRefundNativeProofHashParams): FlexHex {
  return flexCalcSettleNativeProofHash(params);
}
