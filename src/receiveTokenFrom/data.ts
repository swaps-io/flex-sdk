import { FlexHex, FlexToHexValue } from '../core';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeReceiveFromData0, flexEncodeReceiveFromData1 } from '../receiveFrom';

export interface FlexEncodeReceiveTokenFromDataParams {
  sender: FlexToHexValue;
  senderContract: boolean;
  senderNoMessageWrap?: boolean;
  senderNoRetryAsContract?: boolean;
  receiver: FlexToHexValue;
  token: FlexToHexValue;
  amount: FlexToHexValue;
  deadline: FlexToHexValue;
  nonce: FlexToHexValue;
}

export interface FlexReceiveTokenFromData {
  receiveData: [FlexHex, FlexHex, FlexHex];
  receiveFromData: [FlexHex, FlexHex];
  receivePackData: [FlexHex];
}

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
