import { FlexToHexValue } from '../core';
import { FlexEncodeSettleTokenDataParams, FlexSettleTokenData, flexEncodeSettleTokenData } from '../settleToken';

/**
 * Parameters for {@link flexEncodeConfirmTokenData} function.
 *
 * @category Confirm Token
 */
export interface FlexEncodeConfirmTokenDataParams
  extends Omit<FlexEncodeSettleTokenDataParams, 'confirm' | 'settleReceiver'> {
  /**
   * Address of asset receiver as result of confirm _(20 bytes)_.
   */
  confirmReceiver: FlexToHexValue;
}

/**
 * Confirm token {@link flexEncodeConfirmTokenData | encoded} data.
 *
 * @category Confirm Token
 */
export type FlexConfirmTokenData = FlexSettleTokenData;

/**
 * Encodes data for confirm token call.
 *
 * Confirm call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} state with authorization based on key reveal.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenFacet | `FlexSettleTokenFacet`}
 * - {@link !IFlexSettleToken | `IFlexSettleToken`}
 * - {@link !FlexSettleTokenDomainFacet | `FlexSettleTokenDomainFacet`}
 * - {@link !IFlexSettleTokenDomain | `IFlexSettleTokenDomain`}
 *
 * @param params Function {@link FlexEncodeConfirmTokenDataParams | parameters}.
 *
 * @returns Confirm token {@link FlexConfirmTokenData | data}.
 *
 * @category Confirm Token
 */
export function flexEncodeConfirmTokenData(params: FlexEncodeConfirmTokenDataParams): FlexConfirmTokenData {
  return flexEncodeSettleTokenData({
    ...params,
    confirm: true,
    settleReceiver: params.confirmReceiver,
  });
}
