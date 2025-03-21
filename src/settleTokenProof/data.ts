import { FlexHex, FlexToHexValue } from '../core';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeSettleProofData0, flexEncodeSettleProofData1, flexEncodeSettleProofData2 } from '../settleProof';

/**
 * Parameters for {@link flexEncodeSettleTokenProofData} function.
 *
 * @category Settle Token Proof
 */
export interface FlexEncodeSettleTokenProofDataParams {
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
   * Chain ID of proof event that authorizes this settle operation _(4 bytes)_.
   *
   * Should not exceed {@link FLEX_MAX_PROOF_CHAIN | max supported value}.
   */
  eventChain: FlexToHexValue;

  /**
   * Signature (i.e. topic #0) of event that authorizes this settle operation _(32 bytes)_.
   */
  eventSignature: FlexToHexValue;

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
 * Settle token proof {@link flexEncodeSettleTokenData | encoded} data.
 *
 * @category Settle Token Proof
 */
export interface FlexSettleTokenProofData {
  /**
   * Receive core part of the data _(32 bytes each)_.
   */
  receiveData: [FlexHex, FlexHex, FlexHex];

  /**
   * Settle proof data _(32 bytes each)_.
   */
  settleProofData: [FlexHex, FlexHex, FlexHex];
}

/**
 * Encodes data for settle token proof call.
 *
 * Settle call provides ability to transit from {@link FLEX_RECEIVE_STATE_RECEIVED | "received"} state to
 * {@link FLEX_RECEIVE_STATE_CONFIRMED | "confirmed"} or {@link FLEX_RECEIVE_STATE_REFUNDED | "refunded"} state
 * with authorization based on verified proof (likely cross-chain).
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenProofFacet | `FlexSettleTokenProofFacet`}
 * - {@link !IFlexSettleTokenProof | `IFlexSettleTokenProof`}
 * - {@link !FlexSettleTokenProofDomainFacet | `FlexSettleTokenProofDomainFacet`}
 * - {@link !IFlexSettleTokenProofDomain | `IFlexSettleTokenProofDomain`}
 *
 * @param params Function {@link FlexEncodeSettleTokenProofDataParams | parameters}.
 *
 * @returns Settle token proof {@link FlexSettleTokenProofData | data}.
 *
 * @category Settle Token Proof
 */
export function flexEncodeSettleTokenProofData(params: FlexEncodeSettleTokenProofDataParams): FlexSettleTokenProofData {
  const receiveData: FlexSettleTokenProofData['receiveData'] = [
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

  const settleProofData: FlexSettleTokenProofData['settleProofData'] = [
    flexEncodeSettleProofData0({
      confirm: params.confirm,
      receiver: params.settleReceiver,
      eventChain: params.eventChain,
    }),
    flexEncodeSettleProofData1({
      eventSignature: params.eventSignature,
    }),
    flexEncodeSettleProofData2({
      receiveHash: flexCalcReceiveHash({ data: receiveData }),
    }),
  ];

  const data: FlexSettleTokenProofData = {
    receiveData,
    settleProofData,
  };
  return data;
}
