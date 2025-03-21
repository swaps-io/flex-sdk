import { FlexHex, FlexToHexValue } from '../core';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeReceiveFromData0, flexEncodeReceiveFromData1 } from '../receiveFrom';

/**
 * Parameters for {@link flexEncodeReceiveTokenData} function.
 *
 * @category Receive Token
 */
export interface FlexEncodeReceiveTokenDataParams {
  /**
   * Address of token asset sender (i.e. caller) _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Address of token asset receiver _(20 bytes)_.
   */
  receiver: FlexToHexValue;

  /**
   * Should verify receiver signature as _contract_ one rather than EOA.
   */
  receiverContract: boolean;

  /**
   * Should not wrap receiver signed message into EIP-191, i.e. signature is of _raw_ data hash.
   *
   * @default false
   */
  receiverNoMessageWrap?: boolean;

  /**
   * Should not fallback to receiver signature verification as _contract_ after failed EOA check. In other words,
   * asserts the signature is known to be EOA and should not be attempted as contract one.
   *
   * @default false
   */
  receiverNoRetryAsContract?: boolean;

  /**
   * Address of ERC-20 token to perform receive of _(20 bytes)_.
   */
  token: FlexToHexValue;

  /**
   * Amount of token asset to receive _(32 bytes)_.
   */
  amount: FlexToHexValue;

  /**
   * Deadline of receive token operation, i.e. time after which attempt to call receive operation will fail
   * _(6 bytes)_.
   *
   * Should not exceed {@link FLEX_MAX_RECEIVE_DEADLINE | max supported value}.
   */
  deadline: FlexToHexValue;

  /**
   * Nonce of receive token operation selected by {@link receiver} _(6 bytes)_.
   */
  nonce: FlexToHexValue;
}

/**
 * Receive token {@link flexEncodeReceiveTokenData | encoded} data.
 *
 * @category Receive Token
 */
export interface FlexReceiveTokenData {
  /**
   * Receive core part of the data _(32 bytes each)_.
   */
  receiveData: [FlexHex, FlexHex, FlexHex];

  /**
   * Receive from part of the data _(32 bytes each)_.
   */
  receiveFromData: [FlexHex, FlexHex];
}

/**
 * Encodes data for receive token call.
 *
 * Receive token call is performed by _sender_ using _receiver_ signature. ERC-20 token asset is transferred from
 * _sender_ account to the contract during the call. This spends corresponding allowance, which should be granted by
 * _sender_ in advance.
 *
 * Received token asset is locked in contract with {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state until it's
 * settled as {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} or {@link FLEX_RECEIVE_STATE_REFUNDED | "refunded"}
 * after corresponding verification.
 *
 * Related contracts:
 * - {@link !FlexReceiveTokenFacet | `FlexReceiveTokenFacet`}
 * - {@link !IFlexReceiveToken | `IFlexReceiveToken`}
 * - {@link !FlexReceiveTokenDomainFacet | `FlexReceiveTokenDomainFacet`}
 * - {@link !IFlexReceiveTokenDomain | `IFlexReceiveTokenDomain`}
 *
 * @param params Function {@link FlexEncodeReceiveTokenDataParams | parameters}.
 *
 * @returns Receive token {@link FlexReceiveTokenData | data}.
 *
 * @category Receive Token
 */
export function flexEncodeReceiveTokenData(params: FlexEncodeReceiveTokenDataParams): FlexReceiveTokenData {
  const receiveData: FlexReceiveTokenData['receiveData'] = [
    flexEncodeReceiveData0({
      contractSignature: params.receiverContract,
      noMessageSignatureWrap: params.receiverNoMessageWrap,
      noRetryAsContractSignature: params.receiverNoRetryAsContract,
      deadline: params.deadline,
      receiver: params.receiver,
      nonce: params.nonce,
    }),
    flexEncodeReceiveData1({
      amount: params.amount,
    }),
    flexEncodeReceiveData2({
      token: params.token,
    }),
  ];

  const receiveFromData: FlexReceiveTokenData['receiveFromData'] = [
    flexEncodeReceiveFromData0({
      sender: params.sender,
    }),
    flexEncodeReceiveFromData1({
      receiveHash: flexCalcReceiveHash({ data: receiveData }),
    }),
  ];

  const data: FlexReceiveTokenData = {
    receiveData,
    receiveFromData,
  };
  return data;
}
