import { FlexHex, FlexToHexValue } from '../core';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeSettleData0, flexEncodeSettleData1, flexEncodeSettleData2 } from '../settle';

/**
 * Parameters for {@link flexEncodeSettleTokenData} function.
 *
 * @category Settle Token
 */
export interface FlexEncodeSettleTokenDataParams {
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

  /**
   * Hash of key that _authorizes_ this settle operation _(32 bytes)_.
   */
  keyHash: FlexToHexValue;

  /**
   * Should settle as confirmed. Otherwise considered refunded.
   *
   * Depending on this flag, different event is emitted: `FlexConfirm` or `FlexRefund` respectively.
   */
  confirm: boolean;

  /**
   * Address of asset receiver as result of settlement _(20 bytes)_.
   */
  settleReceiver: FlexToHexValue;
}

/**
 * Settle token {@link flexEncodeSettleTokenData | encoded} data.
 *
 * @category Settle Token
 */
export interface FlexSettleTokenData {
  /**
   * Receive core part of the data _(32 bytes each)_.
   */
  receiveData: [FlexHex, FlexHex, FlexHex];

  /**
   * Settle data _(32 bytes each)_.
   */
  settleData: [FlexHex, FlexHex, FlexHex];
}

/**
 * Encodes data for settle token call.
 *
 * Settle call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} or {@link FLEX_RECEIVE_STATE_REFUNDED | "refunded"} state
 * with authorization based on key reveal.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenFacet | `FlexSettleTokenFacet`}
 * - {@link !IFlexSettleToken | `IFlexSettleToken`}
 * - {@link !FlexSettleTokenDomainFacet | `FlexSettleTokenDomainFacet`}
 * - {@link !IFlexSettleTokenDomain | `IFlexSettleTokenDomain`}
 *
 * @param params Function {@link FlexEncodeSettleTokenDataParams | parameters}.
 *
 * @returns Settle token {@link FlexSettleTokenData | data}.
 *
 * @category Settle Token
 */
export function flexEncodeSettleTokenData(params: FlexEncodeSettleTokenDataParams): FlexSettleTokenData {
  const receiveData: FlexSettleTokenData['receiveData'] = [
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

  const settleData: FlexSettleTokenData['settleData'] = [
    flexEncodeSettleData0({
      confirm: params.confirm,
      receiver: params.settleReceiver,
    }),
    flexEncodeSettleData1({
      keyHash: params.keyHash,
    }),
    flexEncodeSettleData2({
      receiveHash: flexCalcReceiveHash({ data: receiveData }),
    }),
  ];

  const data: FlexSettleTokenData = {
    receiveData,
    settleData,
  };
  return data;
}
