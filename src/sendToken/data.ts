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
   * Deadline of send token operation, i.e. time after which attempt to perform send operation will fail _(6 bytes)_.
   */
  deadline: FlexToHexValue;

  /**
   * Nonce of send token operation selected by {@link sender} _(6 bytes)_.
   */
  nonce: FlexToHexValue;
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
      deadline: params.deadline,
      nonce: params.nonce,
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
