import { FlexToHexValue } from '../core';
import {
  FlexEncodeSettleNativeProofDataParams,
  FlexSettleNativeProofData,
  flexEncodeSettleNativeProofData,
} from '../settleNativeProof';

/**
 * Parameters for {@link flexEncodeConfirmNativeProofData} function.
 *
 * @category Confirm Native Proof
 */
export interface FlexEncodeConfirmNativeProofDataParams
  extends Omit<FlexEncodeSettleNativeProofDataParams, 'confirm' | 'settleReceiver'> {
  /**
   * Address of asset receiver as result of confirm _(20 bytes)_.
   */
  confirmReceiver: FlexToHexValue;
}

/**
 * Confirm native proof {@link flexEncodeConfirmNativeProofData | encoded} data.
 *
 * @category Confirm Native Proof
 */
export type FlexConfirmNativeProofData = FlexSettleNativeProofData;

/**
 * Encodes data for confirm native proof call.
 *
 * Confirm call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} state with authorization based on verified proof (likely
 * cross-chain).
 *
 * Related contracts:
 * - {@link !FlexSettleNativeProofFacet | `FlexSettleNativeProofFacet`}
 * - {@link !IFlexSettleNativeProof | `IFlexSettleNativeProof`}
 * - {@link !FlexSettleNativeProofDomainFacet | `FlexSettleNativeProofDomainFacet`}
 * - {@link !IFlexSettleNativeProofDomain | `IFlexSettleNativeProofDomain`}
 *
 * @param params Function {@link FlexEncodeConfirmNativeProofDataParams | parameters}.
 *
 * @returns Confirm native proof {@link FlexConfirmNativeProofData | data}.
 *
 * @category Confirm Native Proof
 */
export function flexEncodeConfirmNativeProofData(
  params: FlexEncodeConfirmNativeProofDataParams,
): FlexConfirmNativeProofData {
  return flexEncodeSettleNativeProofData({
    ...params,
    confirm: true,
    settleReceiver: params.confirmReceiver,
  });
}
