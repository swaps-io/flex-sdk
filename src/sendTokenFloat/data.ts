import { FlexHex, FlexToHexValue } from '../core';
import { flexEncodeSendData0, flexEncodeSendData1, flexEncodeSendData3 } from '../send';
import { flexEncodeSendFloatData2 } from '../sendFloat';

/**
 * Parameters for {@link flexEncodeSendTokenFloatData} function.
 *
 * @category Send Token Float
 */
export interface FlexEncodeSendTokenFloatDataParams {
  /**
   * Address of token asset sender (i.e. caller) _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Address of token asset receiver _(20 bytes)_.
   */
  receiver: FlexToHexValue;

  /**
   * Address of ERC-20 token to perform send of _(20 bytes)_.
   */
  token: FlexToHexValue;

  /**
   * _Min_ amount of token asset to send _(32 bytes)_.
   *
   * Should not exceed {@link FLEX_SEND_FLOAT_MAX_AMOUNT | max supported value}.
   */
  amount: FlexToHexValue;

  /**
   * Start of send token operation _(6 bytes)_.
   *
   * Send operation cannot be performed earlier than this time. Also serves for controlling send operations
   * _chronological_ order.
   */
  start: FlexToHexValue;

  /**
   * Duration of send token operation _(6 bytes)_.
   *
   * Forms _deadline_ when added to {@link start}. Attempt to perform send operation after the deadline will fail.
   */
  duration: FlexToHexValue;

  /**
   * Send token group index selected by the {@link sender} _(6 bytes)_.
   */
  group: FlexToHexValue;

  /**
   * Should skip axillary `FlexSendAmount` event emit or not.
   *
   * The event contains info about actual token amount sent (i.e. ≥ {@link amount}).
   *
   * @default false
   */
  skipAmountEmit?: boolean;
}

/**
 * Send token float {@link flexEncodeSendTokenFloatData | encoded} data.
 *
 * @category Send Token Float
 */
export interface FlexSendTokenFloatData {
  /**
   * Send token float data _(32 bytes each)_.
   */
  sendData: [FlexHex, FlexHex, FlexHex, FlexHex];
}

/**
 * Encodes data for send token "float" call.
 *
 * Send token call is performed by _sender_. ERC-20 token asset is transferred from _sender_ account to _receiver_
 * during the call. This spends corresponding allowance, which should be granted by _sender_ in advance.
 *
 * _Float_ variant of send token component allows to send same amount as specified in data _or more_ than that (not
 * less). Emits axillary `FlexSendAmount` event containing actual amount sent info that can be disabled.
 *
 * Send token operation can be used as requirement for transiting {@link FLEX_RECEIVE_STATE_RECEIVED | "received"}
 * state to {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} in other network.
 *
 * Related contracts:
 * - {@link !FlexSendTokenFloatFacet | `FlexSendTokenFloatFacet`}
 * - {@link !IFlexSendTokenFloat | `IFlexSendTokenFloat`}
 * - {@link !FlexSendTokenFloatDomainFacet | `FlexSendTokenFloatDomainFacet`}
 * - {@link !IFlexSendTokenFloatDomain | `IFlexSendTokenFloatDomain`}
 * - {@link !FlexSendAmount | `FlexSendAmount`}
 *
 * @param params Function {@link FlexEncodeSendTokenFloatDataParams | parameters}.
 *
 * @returns Send token float {@link FlexSendTokenFloatData | data}.
 *
 * @category Send Token Float
 */
export function flexEncodeSendTokenFloatData(params: FlexEncodeSendTokenFloatDataParams): FlexSendTokenFloatData {
  const sendData: FlexSendTokenFloatData['sendData'] = [
    flexEncodeSendData0({
      sender: params.sender,
    }),
    flexEncodeSendData1({
      start: params.start,
      duration: params.duration,
      group: params.group,
      receiver: params.receiver,
    }),
    flexEncodeSendFloatData2({
      amount: params.amount,
      skipAmountEmit: params.skipAmountEmit,
    }),
    flexEncodeSendData3({
      token: params.token,
    }),
  ];

  const data: FlexSendTokenFloatData = {
    sendData,
  };
  return data;
}
