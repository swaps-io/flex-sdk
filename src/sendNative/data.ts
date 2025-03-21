import { FlexHex, FlexToHexValue } from '../core';
import { flexEncodeSendData0, flexEncodeSendData1, flexEncodeSendData2 } from '../send';

/**
 * Parameters for {@link flexEncodeSendNativeData} function.
 *
 * @category Send Native
 */
export interface FlexEncodeSendNativeDataParams {
  /**
   * Address of native asset sender (i.e. caller) _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Address of native asset receiver _(20 bytes)_.
   */
  receiver: FlexToHexValue;

  /**
   * Amount of native asset to send _(32 bytes)_.
   */
  amount: FlexToHexValue;

  /**
   * Start of send native operation _(6 bytes)_.
   *
   * Send operation cannot be performed earlier than this time. Also serves for controlling send operations
   * _chronological_ order.
   */
  start: FlexToHexValue;

  /**
   * Duration of send native operation _(6 bytes)_.
   *
   * Forms _deadline_ when added to {@link start}. Attempt to perform send operation after the deadline will fail.
   */
  duration: FlexToHexValue;

  /**
   * Send native group index selected by the {@link sender} _(6 bytes)_.
   */
  group: FlexToHexValue;
}

/**
 * Send native {@link flexEncodeSendNativeData | encoded} data.
 *
 * @category Send Native
 */
export interface FlexSendNativeData {
  /**
   * Send native data _(32 bytes each)_.
   */
  sendData: [FlexHex, FlexHex, FlexHex];
}

/**
 * Encodes data for send native call.
 *
 * Send native call is performed by _sender_. Native asset is passed from _sender_ account to _receiver_ account as
 * `msg.value` during the contract call.
 *
 * Send native operation can be used as requirement for transiting {@link FLEX_RECEIVE_STATE_RECEIVED | "received"}
 * state to {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} in other network.
 *
 * Related contracts:
 * - {@link !FlexSendNativeFacet | `FlexSendNativeFacet`}
 * - {@link !IFlexSendNative | `IFlexSendNative`}
 * - {@link !FlexSendNativeDomainFacet | `FlexSendNativeDomainFacet`}
 * - {@link !IFlexSendNativeDomain | `IFlexSendNativeDomain`}
 *
 * @param params Function {@link FlexEncodeSendNativeDataParams | parameters}.
 *
 * @returns Send native {@link FlexSendNativeData | data}.
 *
 * @category Send Native
 */
export function flexEncodeSendNativeData(params: FlexEncodeSendNativeDataParams): FlexSendNativeData {
  const sendData: FlexSendNativeData['sendData'] = [
    flexEncodeSendData0({
      sender: params.sender,
    }),
    flexEncodeSendData1({
      start: params.start,
      duration: params.duration,
      group: params.group,
      receiver: params.receiver,
    }),
    flexEncodeSendData2({
      amount: params.amount,
    }),
  ];

  const data: FlexSendNativeData = {
    sendData,
  };
  return data;
}
