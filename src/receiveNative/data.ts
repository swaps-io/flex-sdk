import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveHash, flexEncodeReceiveData0, flexEncodeReceiveData1 } from '../receive';
import { flexEncodeReceiveFromData0, flexEncodeReceiveFromData1 } from '../receiveFrom';

export interface FlexEncodeReceiveNativeDataParams {
  sender: FlexToHexValue;
  receiver: FlexToHexValue;
  receiverContract: boolean;
  receiverNoMessageWrap?: boolean;
  receiverNoRetryAsContract?: boolean;
  amount: FlexToHexValue;
  deadline: FlexToHexValue;
  nonce: FlexToHexValue;
}

export interface FlexReceiveNativeData {
  receiveData: [FlexHex, FlexHex];
  receiveFromData: [FlexHex, FlexHex];
}

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
