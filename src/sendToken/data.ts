import { FlexHex, FlexToHexValue } from '../core';
import { flexEncodeSendData0, flexEncodeSendData1, flexEncodeSendData2, flexEncodeSendData3 } from '../send';

/**
 * Parameters for {@link flexEncodeSendTokenData} function.
 *
 * @category Send Token
 */
export interface FlexEncodeSendTokenDataParams {
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
   * Amount of token asset to send _(32 bytes)_.
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
   * Send group index selected by the {@link sender} _(6 bytes)_.
   */
  group: FlexToHexValue;
}

/**
 * Send token {@link flexEncodeSendTokenData | encoded} data.
 *
 * @category Send Token
 */
export interface FlexSendTokenData {
  /**
   * Send token data _(32 bytes each)_.
   */
  sendData: [FlexHex, FlexHex, FlexHex, FlexHex];
}

/**
 * Encodes data for send token call.
 *
 * Send token call is performed by _sender_. ERC-20 token asset is transferred from _sender_ account to _receiver_
 * during the call. This spends corresponding allowance, which should be granted by _sender_ in advance.
 *
 * Send token operation can be used as requirement for transiting {@link FLEX_RECEIVE_STATE_RECEIVED | "received"}
 * state to {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} in other network.
 *
 * Related contracts:
 * - {@link !FlexSendTokenFacet | `FlexSendTokenFacet`}
 * - {@link !IFlexSendToken | `IFlexSendToken`}
 * - {@link !FlexSendTokenDomainFacet | `FlexSendTokenDomainFacet`}
 * - {@link !IFlexSendTokenDomain | `IFlexSendTokenDomain`}
 *
 * @param params Function {@link FlexEncodeSendTokenDataParams | parameters}.
 *
 * @returns Send token {@link FlexSendTokenData | data}.
 *
 * @category Send Token
 */
export function flexEncodeSendTokenData(params: FlexEncodeSendTokenDataParams): FlexSendTokenData {
  const sendData: FlexSendTokenData['sendData'] = [
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
    flexEncodeSendData3({
      token: params.token,
    }),
  ];

  const data: FlexSendTokenData = {
    sendData,
  };
  return data;
}
