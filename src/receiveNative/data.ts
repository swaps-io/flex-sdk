import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveHash, flexEncodeReceiveData0, flexEncodeReceiveData1 } from '../receive';
import { flexEncodeReceiveFromData0, flexEncodeReceiveFromData1 } from '../receiveFrom';

/**
 * Parameters for {@link flexEncodeReceiveNativeData} function.
 *
 * @category Receive Native
 */
export interface FlexEncodeReceiveNativeDataParams {
  /**
   * Address of native asset sender (i.e. caller) _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Address of native asset receiver _(20 bytes)_.
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
   * Amount of native asset to receive _(32 bytes)_.
   */
  amount: FlexToHexValue;

  /**
   * Deadline of receive native operation, i.e. time after which attempt to call receive operation will fail
   * _(6 bytes)_.
   *
   * Should not exceed {@link FLEX_MAX_RECEIVE_DEADLINE | max supported value}.
   */
  deadline: FlexToHexValue;

  /**
   * Nonce of receive native operation selected by {@link receiver} _(6 bytes)_.
   */
  nonce: FlexToHexValue;
}

/**
 * Receive native {@link flexEncodeReceiveNativeData | encoded} data.
 *
 * @category Receive Native
 */
export interface FlexReceiveNativeData {
  /**
   * Receive core part of the data _(32 bytes each)_.
   */
  receiveData: [FlexHex, FlexHex];

  /**
   * Receive from part of the data _(32 bytes each)_.
   */
  receiveFromData: [FlexHex, FlexHex];
}

/**
 * Encodes data for receive native call.
 *
 * Receive native call is performed by _sender_ using _receiver_ signature. Native asset is passed from _sender_ account
 * to contract as `msg.value` during the contract call.
 *
 * Received native asset is locked in contract with {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state until it's
 * settled as {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} or {@link FLEX_RECEIVE_STATE_REFUNDED | "refunded"}
 * after corresponding verification.
 *
 * Related contracts:
 * - {@link !FlexReceiveNativeFacet | `FlexReceiveNativeFacet`}
 * - {@link !IFlexReceiveNative | `IFlexReceiveNative`}
 * - {@link !FlexReceiveNativeDomainFacet | `FlexReceiveNativeDomainFacet`}
 * - {@link !IFlexReceiveNativeDomain | `IFlexReceiveNativeDomain`}
 *
 * @param params Function {@link FlexEncodeReceiveNativeDataParams | parameters}.
 *
 * @returns Receive native {@link FlexReceiveNativeData | data}.
 *
 * @category Receive Native
 */
export function flexEncodeReceiveNativeData(params: FlexEncodeReceiveNativeDataParams): FlexReceiveNativeData {
  const receiveData: FlexReceiveNativeData['receiveData'] = [
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
  ];

  const receiveFromData: FlexReceiveNativeData['receiveFromData'] = [
    flexEncodeReceiveFromData0({
      sender: params.sender,
    }),
    flexEncodeReceiveFromData1({
      receiveHash: flexCalcReceiveHash({ data: receiveData }),
    }),
  ];

  const data: FlexReceiveNativeData = {
    receiveData,
    receiveFromData,
  };
  return data;
}
