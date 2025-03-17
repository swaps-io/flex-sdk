import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveHash, flexEncodeReceiveData0, flexEncodeReceiveData1 } from '../receive';
import { flexEncodeSettleData0, flexEncodeSettleData1, flexEncodeSettleData2 } from '../settle';

export interface FlexEncodeSettleNativeDataParams {
  receiver: FlexToHexValue;
  receiverContract: boolean;
  receiverNoMessageWrap?: boolean;
  receiverNoRetryAsContract?: boolean;
  amount: FlexToHexValue;
  deadline: FlexToHexValue;
  nonce: FlexToHexValue;
  keyHash: FlexToHexValue;
  confirm: boolean;
  settleReceiver: FlexToHexValue;
}

export interface FlexSettleNativeData {
  receiveData: [FlexHex, FlexHex];
  settleData: [FlexHex, FlexHex, FlexHex];
}

export function flexEncodeSettleNativeData(params: FlexEncodeSettleNativeDataParams): FlexSettleNativeData {
  const receiveData: FlexSettleNativeData['receiveData'] = [
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

  const settleData: FlexSettleNativeData['settleData'] = [
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

  const data: FlexSettleNativeData = {
    receiveData,
    settleData,
  };
  return data;
}
