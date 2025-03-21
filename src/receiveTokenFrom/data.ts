import { FlexHex, FlexToHexValue } from '../core';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeReceiveFromData0, flexEncodeReceiveFromData1 } from '../receiveFrom';

/**
 * Parameters for {@link flexEncodeReceiveTokenFromData} function.
 *
 * @category Receive Token From
 */
export interface FlexEncodeReceiveTokenFromDataParams {
  /**
   * Address of token asset sender _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Should verify sender signature as _contract_ one rather than EOA.
   */
  senderContract: boolean;

  /**
   * Should not wrap sender signed message into EIP-191, i.e. signature is of _raw_ data hash.
   *
   * @default false
   */
  senderNoMessageWrap?: boolean;

  /**
   * Should not fallback to sender signature verification as _contract_ after failed EOA check. In other words,
   * asserts the signature is known to be EOA and should not be attempted as contract one.
   *
   * @default false
   */
  senderNoRetryAsContract?: boolean;

  /**
   * Address of token asset receiver (i.e. caller) _(20 bytes)_.
   */
  receiver: FlexToHexValue;

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
 * Receive token {@link flexEncodeReceiveTokenFromData | encoded} data.
 *
 * @category Receive Token From
 */
export interface FlexReceiveTokenFromData {
  /**
   * Receive core part of the data _(32 bytes each)_.
   */
  receiveData: [FlexHex, FlexHex, FlexHex];

  /**
   * Receive from part of the data _(32 bytes each)_.
   */
  receiveFromData: [FlexHex, FlexHex];

  /**
   * Receive _pack_ data. This data is used in calldata instead of original {@link receiveData | data} for compactness.
   * The original data is then restored on-chain during unpacking process.
   */
  receivePackData: [FlexHex];
}

/**
 * Encodes data for receive token "from" call.
 *
 * Receive token "from" call is performed by _receiver_ using _sender_ signature. ERC-20 token asset is transferred from
 * _sender_ account to the contract during the call. This spends corresponding allowance, which should be granted by
 * _sender_ in advance.
 *
 * Received token asset is locked in contract with {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state until it's
 * settled as {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} or {@link FLEX_RECEIVE_STATE_REFUNDED | "refunded"}
 * after corresponding verification.
 *
 * Related contracts:
 * - {@link !FlexReceiveTokenFromFacet | `FlexReceiveTokenFromFacet`}
 * - {@link !IFlexReceiveTokenFrom | `IFlexReceiveTokenFrom`}
 * - {@link !FlexReceiveTokenFromDomainFacet | `FlexReceiveTokenFromDomainFacet`}
 * - {@link !IFlexReceiveTokenFromDomain | `IFlexReceiveTokenFromDomain`}
 *
 * @param params Function {@link FlexEncodeReceiveTokenFromDataParams | parameters}.
 *
 * @returns Receive token from {@link FlexReceiveTokenFromData | data}.
 *
 * @category Receive Token From
 */
export function flexEncodeReceiveTokenFromData(params: FlexEncodeReceiveTokenFromDataParams): FlexReceiveTokenFromData {
  const receiveData: FlexReceiveTokenFromData['receiveData'] = [
    flexEncodeReceiveData0({
      contractSignature: params.senderContract,
      noMessageSignatureWrap: params.senderNoMessageWrap,
      noRetryAsContractSignature: params.senderNoRetryAsContract,
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

  const receiveFromData: FlexReceiveTokenFromData['receiveFromData'] = [
    flexEncodeReceiveFromData0({
      sender: params.sender,
    }),
    flexEncodeReceiveFromData1({
      receiveHash: flexCalcReceiveHash({ data: receiveData }),
    }),
  ];

  const receivePackData: FlexReceiveTokenFromData['receivePackData'] = [
    flexEncodeReceiveData0({
      contractSignature: params.senderContract,
      noMessageSignatureWrap: params.senderNoMessageWrap,
      noRetryAsContractSignature: params.senderNoRetryAsContract,
      deadline: params.deadline,
      receiver: params.sender, // Replaced with receiver during unpack
      nonce: params.nonce,
    }),
  ];

  const data: FlexReceiveTokenFromData = {
    receiveData,
    receiveFromData,
    receivePackData,
  };
  return data;
}
