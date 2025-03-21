import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveHash, flexEncodeReceiveData0, flexEncodeReceiveData1 } from '../receive';
import { flexEncodeSettleProofData0, flexEncodeSettleProofData1, flexEncodeSettleProofData2 } from '../settleProof';

/**
 * Parameters for {@link flexEncodeSettleNativeProofData} function.
 *
 * @category Settle Native Proof
 */
export interface FlexEncodeSettleNativeProofDataParams {
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
 * Settle native proof {@link flexEncodeSettleNativeData | encoded} data.
 *
 * @category Settle Native Proof
 */
export interface FlexSettleNativeProofData {
  /**
   * Receive core part of the data _(32 bytes each)_.
   */
  receiveData: [FlexHex, FlexHex];

  /**
   * Settle proof data _(32 bytes each)_.
   */
  settleProofData: [FlexHex, FlexHex, FlexHex];
}

/**
 * Encodes data for settle native proof call.
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
 * - {@link !FlexSettleNativeProofFacet | `FlexSettleNativeProofFacet`}
 * - {@link !IFlexSettleNativeProof | `IFlexSettleNativeProof`}
 * - {@link !FlexSettleNativeProofDomainFacet | `FlexSettleNativeProofDomainFacet`}
 * - {@link !IFlexSettleNativeProofDomain | `IFlexSettleNativeProofDomain`}
 *
 * @param params Function {@link FlexEncodeSettleNativeProofDataParams | parameters}.
 *
 * @returns Settle native proof {@link FlexSettleNativeProofData | data}.
 *
 * @category Settle Native Proof
 */
export function flexEncodeSettleNativeProofData(
  params: FlexEncodeSettleNativeProofDataParams,
): FlexSettleNativeProofData {
  const receiveData: FlexSettleNativeProofData['receiveData'] = [
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

  const settleProofData: FlexSettleNativeProofData['settleProofData'] = [
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

  const data: FlexSettleNativeProofData = {
    receiveData,
    settleProofData,
  };
  return data;
}
