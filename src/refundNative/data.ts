import { FlexToHexValue } from '../core';
import { FlexEncodeSettleNativeDataParams, FlexSettleNativeData, flexEncodeSettleNativeData } from '../settleNative';

/**
 * Parameters for {@link flexEncodeRefundNativeData} function.
 *
 * @category Refund Native
 */
export interface FlexEncodeRefundNativeDataParams
  extends Omit<FlexEncodeSettleNativeDataParams, 'confirm' | 'settleReceiver'> {
  /**
   * Address of asset receiver as result of refund _(20 bytes)_.
   */
  refundReceiver: FlexToHexValue;
}

/**
 * Refund native {@link flexEncodeRefundNativeData | encoded} data.
 *
 * @category Refund Native
 */
export type FlexRefundNativeData = FlexSettleNativeData;

/**
 * Encodes data for refund native call.
 *
 * Refund call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_REFUNDED | "refunded"} state with authorization based on key reveal.
 *
 * Related contracts:
 * - {@link !FlexSettleNativeFacet | `FlexSettleNativeFacet`}
 * - {@link !IFlexSettleNative | `IFlexSettleNative`}
 * - {@link !FlexSettleNativeDomainFacet | `FlexSettleNativeDomainFacet`}
 * - {@link !IFlexSettleNativeDomain | `IFlexSettleNativeDomain`}
 *
 * @param params Function {@link FlexEncodeRefundNativeDataParams | parameters}.
 *
 * @returns Refund native {@link FlexRefundNativeData | data}.
 *
 * @category Refund Native
 */
export function flexEncodeRefundNativeData(params: FlexEncodeRefundNativeDataParams): FlexRefundNativeData {
  return flexEncodeSettleNativeData({
    ...params,
    confirm: false,
    settleReceiver: params.refundReceiver,
  });
}
