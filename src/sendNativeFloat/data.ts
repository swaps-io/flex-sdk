import { FlexHex, FlexToHexValue } from '../core';
import { flexEncodeSendData0, flexEncodeSendData1 } from '../send';
import { flexEncodeSendFloatData2 } from '../sendFloat';

/**
 * Parameters for {@link flexEncodeSendNativeFloatData} function.
 *
 * @category Send Native Float
 */
export interface FlexEncodeSendNativeFloatDataParams {
  /**
   * Address of native asset sender (i.e. caller) _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Address of native asset receiver _(20 bytes)_.
   */
  receiver: FlexToHexValue;

  /**
   * _Min_ amount of native asset to send _(32 bytes)_.
   *
   * Should not exceed {@link FLEX_SEND_FLOAT_MAX_AMOUNT | max supported value}.
   */
  amount: FlexToHexValue;

  /**
   * Deadline of send native operation, i.e. time after which attempt to perform send operation will fail _(6 bytes)_.
   */
  deadline: FlexToHexValue;

  /**
   * Nonce of send native operation selected by {@link sender} _(6 bytes)_.
   */
  nonce: FlexToHexValue;

  /**
   * Should skip axillary `FlexSendAmount` event emit or not.
   *
   * The event contains info about actual native amount sent (i.e. ≥ {@link amount}).
   *
   * @default false
   */
  skipAmountEmit?: boolean;
}

/**
 * Send native float {@link flexEncodeSendNativeFloatData | encoded} data.
 *
 * @category Send Native Float
 */
export interface FlexSendNativeFloatData {
  /**
   * Send native float data _(32 bytes each)_.
   */
  sendData: [FlexHex, FlexHex, FlexHex];
}

/**
 * Encodes data for send native "float" call.
 *
 * Send native call is performed by _sender_. Native asset is passed from _sender_ account to _receiver_ account as
 * `msg.value` during the contract call.
 *
 * _Float_ variant of send native component allows to send same amount as specified in data _or more_ than that (not
 * less). Emits axillary `FlexSendAmount` event containing actual amount sent info that can be disabled.
 *
 * Send native operation can be used as requirement for transiting {@link FLEX_RECEIVE_STATE_RECEIVED | "received"}
 * state to {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} in other network.
 *
 * Related contracts:
 * - {@link !FlexSendNativeFloatFacet | `FlexSendNativeFloatFacet`}
 * - {@link !IFlexSendNativeFloat | `IFlexSendNativeFloat`}
 * - {@link !FlexSendNativeFloatDomainFacet | `FlexSendNativeFloatDomainFacet`}
 * - {@link !IFlexSendNativeFloatDomain | `IFlexSendNativeFloatDomain`}
 * - {@link !FlexSendAmount | `FlexSendAmount`}
 *
 * @param params Function {@link FlexEncodeSendNativeFloatDataParams | parameters}.
 *
 * @returns Send native float {@link FlexSendNativeFloatData | data}.
 *
 * @category Send Native Float
 */
export function flexEncodeSendNativeFloatData(params: FlexEncodeSendNativeFloatDataParams): FlexSendNativeFloatData {
  const sendData: FlexSendNativeFloatData['sendData'] = [
    flexEncodeSendData0({
      sender: params.sender,
    }),
    flexEncodeSendData1({
      deadline: params.deadline,
      nonce: params.nonce,
      receiver: params.receiver,
    }),
    flexEncodeSendFloatData2({
      amount: params.amount,
      skipAmountEmit: params.skipAmountEmit,
    }),
  ];

  const data: FlexSendNativeFloatData = {
    sendData,
  };
  return data;
}
