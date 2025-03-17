import { FlexHex, FlexToHexValue } from '../core';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeSettleData0, flexEncodeSettleData1, flexEncodeSettleData2 } from '../settle';

export interface FlexEncodeSettleTokenDataParams {
  receiver: FlexToHexValue;
  receiverContract: boolean;
  receiverNoMessageWrap?: boolean;
  receiverNoRetryAsContract?: boolean;
  token: FlexToHexValue;
  amount: FlexToHexValue;
  deadline: FlexToHexValue;
  nonce: FlexToHexValue;
  keyHash: FlexToHexValue;
  confirm: boolean;
  settleReceiver: FlexToHexValue;
}

export interface FlexSettleTokenData {
  receiveData: [FlexHex, FlexHex, FlexHex];
  settleData: [FlexHex, FlexHex, FlexHex];
}

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
