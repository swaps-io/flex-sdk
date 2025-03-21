import { FlexToHexValue } from '../core';
import {
  FlexEncodeSettleTokenProofDataParams,
  FlexSettleTokenProofData,
  flexEncodeSettleTokenProofData,
} from '../settleTokenProof';

/**
 * Parameters for {@link flexEncodeConfirmTokenProofData} function.
 *
 * @category Confirm Token Proof
 */
export interface FlexEncodeConfirmTokenProofDataParams
  extends Omit<FlexEncodeSettleTokenProofDataParams, 'confirm' | 'settleReceiver'> {
  /**
   * Address of asset receiver as result of confirm _(20 bytes)_.
   */
  confirmReceiver: FlexToHexValue;
}

/**
 * Confirm token proof {@link flexEncodeConfirmTokenProofData | encoded} data.
 *
 * @category Confirm Token Proof
 */
export type FlexConfirmTokenProofData = FlexSettleTokenProofData;

/**
 * Encodes data for confirm token proof call.
 *
 * Confirm call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} state with authorization based on verified proof (likely
 * cross-chain).
 *
 * Related contracts:
 * - {@link !FlexSettleTokenProofFacet | `FlexSettleTokenProofFacet`}
 * - {@link !IFlexSettleTokenProof | `IFlexSettleTokenProof`}
 * - {@link !FlexSettleTokenProofDomainFacet | `FlexSettleTokenProofDomainFacet`}
 * - {@link !IFlexSettleTokenProofDomain | `IFlexSettleTokenProofDomain`}
 *
 * @param params Function {@link FlexEncodeConfirmTokenProofDataParams | parameters}.
 *
 * @returns Confirm token proof {@link FlexConfirmTokenProofData | data}.
 *
 * @category Confirm Token Proof
 */
export function flexEncodeConfirmTokenProofData(
  params: FlexEncodeConfirmTokenProofDataParams,
): FlexConfirmTokenProofData {
  return flexEncodeSettleTokenProofData({
    ...params,
    confirm: true,
    settleReceiver: params.confirmReceiver,
  });
}
