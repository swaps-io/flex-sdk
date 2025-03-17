import { FlexHex, FlexToHexValue } from '../core';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeReceiveFromData0, flexEncodeReceiveFromData1 } from '../receiveFrom';

export interface FlexEncodeReceiveTokenDataParams {
  sender: FlexToHexValue;
  receiver: FlexToHexValue;
  receiverContract: boolean;
  receiverNoMessageWrap?: boolean;
  receiverNoRetryAsContract?: boolean;
  token: FlexToHexValue;
  amount: FlexToHexValue;
  deadline: FlexToHexValue;
  nonce: FlexToHexValue;
}

export interface FlexReceiveTokenData {
  receiveData: [FlexHex, FlexHex, FlexHex];
  receiveFromData: [FlexHex, FlexHex];
}

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
