import { FlexToHexValue } from '../core';
import { FlexEncodeSettleTokenDataParams, FlexSettleTokenData, flexEncodeSettleTokenData } from '../settleToken';

/**
 * Parameters for {@link flexEncodeRefundTokenData} function.
 *
 * @category Refund Token
 */
export interface FlexEncodeRefundTokenDataParams
  extends Omit<FlexEncodeSettleTokenDataParams, 'confirm' | 'settleReceiver'> {
  /**
   * Address of asset receiver as result of refund _(20 bytes)_.
   */
  refundReceiver: FlexToHexValue;
}

/**
 * Refund token {@link flexEncodeRefundTokenData | encoded} data.
 *
 * @category Refund Token
 */
export type FlexRefundTokenData = FlexSettleTokenData;

/**
 * Encodes data for refund token call.
 *
 * Refund call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_REFUNDED | "refunded"} state with authorization based on key reveal.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenFacet | `FlexSettleTokenFacet`}
 * - {@link !IFlexSettleToken | `IFlexSettleToken`}
 * - {@link !FlexSettleTokenDomainFacet | `FlexSettleTokenDomainFacet`}
 * - {@link !IFlexSettleTokenDomain | `IFlexSettleTokenDomain`}
 *
 * @param params Function {@link FlexEncodeRefundTokenDataParams | parameters}.
 *
 * @returns Refund token {@link FlexRefundTokenData | data}.
 *
 * @category Refund Token
 */
export function flexEncodeRefundTokenData(params: FlexEncodeRefundTokenDataParams): FlexRefundTokenData {
  return flexEncodeSettleTokenData({
    ...params,
    confirm: false,
    settleReceiver: params.refundReceiver,
  });
}
