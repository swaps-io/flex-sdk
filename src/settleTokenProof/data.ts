import { FlexHex, FlexToHexValue } from '../core';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeSettleProofData0, flexEncodeSettleProofData1, flexEncodeSettleProofData2 } from '../settleProof';

export interface FlexEncodeSettleTokenProofDataParams {
  receiver: FlexToHexValue;
  receiverContract: boolean;
  receiverNoMessageWrap?: boolean;
  receiverNoRetryAsContract?: boolean;
  token: FlexToHexValue;
  amount: FlexToHexValue;
  deadline: FlexToHexValue;
  nonce: FlexToHexValue;
  eventChain: FlexToHexValue;
  eventSignature: FlexToHexValue;
  confirm: boolean;
  settleReceiver: FlexToHexValue;
}

export interface FlexSettleTokenProofData {
  receiveData: [FlexHex, FlexHex, FlexHex];
  settleProofData: [FlexHex, FlexHex, FlexHex];
}

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
