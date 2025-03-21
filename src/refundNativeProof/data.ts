import { FlexToHexValue } from '../core';
import {
  FlexEncodeSettleNativeProofDataParams,
  FlexSettleNativeProofData,
  flexEncodeSettleNativeProofData,
} from '../settleNativeProof';

/**
 * Parameters for {@link flexEncodeRefundNativeProofData} function.
 *
 * @category Refund Native Proof
 */
export interface FlexEncodeRefundNativeProofDataParams
  extends Omit<FlexEncodeSettleNativeProofDataParams, 'confirm' | 'settleReceiver'> {
  /**
   * Address of asset receiver as result of refund _(20 bytes)_.
   */
  refundReceiver: FlexToHexValue;
}

/**
 * Refund native proof {@link flexEncodeRefundNativeProofData | encoded} data.
 *
 * @category Refund Native Proof
 */
export type FlexRefundNativeProofData = FlexSettleNativeProofData;

/**
 * Encodes data for refund native proof call.
 *
 * Refund call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_CONFIRMED | "refunded"} state with authorization based on verified proof (likely
 * cross-chain).
 *
 * Related contracts:
 * - {@link !FlexSettleNativeProofFacet | `FlexSettleNativeProofFacet`}
 * - {@link !IFlexSettleNativeProof | `IFlexSettleNativeProof`}
 * - {@link !FlexSettleNativeProofDomainFacet | `FlexSettleNativeProofDomainFacet`}
 * - {@link !IFlexSettleNativeProofDomain | `IFlexSettleNativeProofDomain`}
 *
 * @param params Function {@link FlexEncodeRefundNativeProofDataParams | parameters}.
 *
 * @returns Refund native proof {@link FlexRefundNativeProofData | data}.
 *
 * @category Refund Native Proof
 */
export function flexEncodeRefundNativeProofData(
  params: FlexEncodeRefundNativeProofDataParams,
): FlexRefundNativeProofData {
  return flexEncodeSettleNativeProofData({
    ...params,
    confirm: false,
    settleReceiver: params.refundReceiver,
  });
}
