import { FlexHex } from '../core';
import { FlexCalcSettleNativeProofHashParams, flexCalcSettleNativeProofHash } from '../settleNativeProof';

/**
 * Parameters for {@link flexCalcConfirmNativeProofHash} function.
 *
 * @category Confirm Native Proof
 */
export type FlexCalcConfirmNativeProofHashParams = FlexCalcSettleNativeProofHashParams;

/**
 * Calculates hash of confirm native proof component {@link flexEncodeConfirmNativeProofData | data}.
 *
 * Related contracts:
 * - {@link !FlexSettleNativeFacet | `FlexSettleNativeFacet`}
 * - {@link !IFlexSettleNative | `IFlexSettleNative`}
 * - {@link !FlexSettleNativeDomainFacet | `FlexSettleNativeDomainFacet`}
 * - {@link !IFlexSettleNativeDomain | `IFlexSettleNativeDomain`}
 *
 * @param params Function {@link FlexCalcConfirmNativeProofHashParams | parameters}.
 *
 * @returns Confirm native proof component data hash _(32 bytes)_.
 *
 * @category Confirm Native Proof
 */
export function flexCalcConfirmNativeProofHash(params: FlexCalcConfirmNativeProofHashParams): FlexHex {
  return flexCalcSettleNativeProofHash(params);
}
