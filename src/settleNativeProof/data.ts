import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveHash, flexEncodeReceiveData0, flexEncodeReceiveData1 } from '../receive';
import { flexEncodeSettleProofData0, flexEncodeSettleProofData1, flexEncodeSettleProofData2 } from '../settleProof';

export interface FlexEncodeSettleNativeProofDataParams {
  receiver: FlexToHexValue;
  receiverContract: boolean;
  receiverNoMessageWrap?: boolean;
  receiverNoRetryAsContract?: boolean;
  amount: FlexToHexValue;
  deadline: FlexToHexValue;
  nonce: FlexToHexValue;
  eventChain: FlexToHexValue;
  eventSignature: FlexToHexValue;
  confirm: boolean;
  settleReceiver: FlexToHexValue;
}

export interface FlexSettleNativeProofData {
  receiveData: [FlexHex, FlexHex];
  settleProofData: [FlexHex, FlexHex, FlexHex];
}

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
