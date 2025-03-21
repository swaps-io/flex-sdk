import { FlexToHexValue } from '../core';
import { FlexEncodeSettleNativeDataParams, FlexSettleNativeData, flexEncodeSettleNativeData } from '../settleNative';

/**
 * Parameters for {@link flexEncodeConfirmNativeData} function.
 *
 * @category Confirm Native
 */
export interface FlexEncodeConfirmNativeDataParams
  extends Omit<FlexEncodeSettleNativeDataParams, 'confirm' | 'settleReceiver'> {
  /**
   * Address of asset receiver as result of confirm _(20 bytes)_.
   */
  confirmReceiver: FlexToHexValue;
}

/**
 * Confirm native {@link flexEncodeConfirmNativeData | encoded} data.
 *
 * @category Confirm Native
 */
export type FlexConfirmNativeData = FlexSettleNativeData;

/**
 * Encodes data for confirm native call.
 *
 * Confirm call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} state with authorization based on key reveal.
 *
 * Related contracts:
 * - {@link !FlexSettleNativeFacet | `FlexSettleNativeFacet`}
 * - {@link !IFlexSettleNative | `IFlexSettleNative`}
 * - {@link !FlexSettleNativeDomainFacet | `FlexSettleNativeDomainFacet`}
 * - {@link !IFlexSettleNativeDomain | `IFlexSettleNativeDomain`}
 *
 * @param params Function {@link FlexEncodeConfirmNativeDataParams | parameters}.
 *
 * @returns Confirm native {@link FlexConfirmNativeData | data}.
 *
 * @category Confirm Native
 */
export function flexEncodeConfirmNativeData(params: FlexEncodeConfirmNativeDataParams): FlexConfirmNativeData {
  return flexEncodeSettleNativeData({
    ...params,
    confirm: true,
    settleReceiver: params.confirmReceiver,
  });
}
