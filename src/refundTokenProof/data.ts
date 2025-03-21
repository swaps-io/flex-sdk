import { FlexToHexValue } from '../core';
import {
  FlexEncodeSettleTokenProofDataParams,
  FlexSettleTokenProofData,
  flexEncodeSettleTokenProofData,
} from '../settleTokenProof';

/**
 * Parameters for {@link flexEncodeRefundTokenProofData} function.
 *
 * @category Refund Token Proof
 */
export interface FlexEncodeRefundTokenProofDataParams
  extends Omit<FlexEncodeSettleTokenProofDataParams, 'confirm' | 'settleReceiver'> {
  /**
   * Address of asset receiver as result of refund _(20 bytes)_.
   */
  refundReceiver: FlexToHexValue;
}

/**
 * Refund token proof {@link flexEncodeRefundTokenProofData | encoded} data.
 *
 * @category Refund Token Proof
 */
export type FlexRefundTokenProofData = FlexSettleTokenProofData;

/**
 * Encodes data for refund token proof call.
 *
 * Refund call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_CONFIRMED | "refunded"} state with authorization based on verified proof (likely
 * cross-chain).
 *
 * Related contracts:
 * - {@link !FlexSettleTokenProofFacet | `FlexSettleTokenProofFacet`}
 * - {@link !IFlexSettleTokenProof | `IFlexSettleTokenProof`}
 * - {@link !FlexSettleTokenProofDomainFacet | `FlexSettleTokenProofDomainFacet`}
 * - {@link !IFlexSettleTokenProofDomain | `IFlexSettleTokenProofDomain`}
 *
 * @param params Function {@link FlexEncodeRefundTokenProofDataParams | parameters}.
 *
 * @returns Refund token proof {@link FlexRefundTokenProofData | data}.
 *
 * @category Refund Token Proof
 */
export function flexEncodeRefundTokenProofData(params: FlexEncodeRefundTokenProofDataParams): FlexRefundTokenProofData {
  return flexEncodeSettleTokenProofData({
    ...params,
    confirm: false,
    settleReceiver: params.refundReceiver,
  });
}
