import { AsHexValue, Hex } from '../external';
import {
  flexCalcReceiveHash,
  flexEncodeReceiveData0,
  flexEncodeReceiveData1,
  flexEncodeReceiveData2,
} from '../receive';
import { flexEncodeSettleProofData0, flexEncodeSettleProofData1, flexEncodeSettleProofData2 } from '../settleProof';

export interface FlexEncodeSettleTokenProofDataParams {
  receiver: AsHexValue;
  receiverContract: boolean;
  receiverNoMessageWrap?: boolean;
  receiverNoRetryAsContract?: boolean;
  token: AsHexValue;
  amount: AsHexValue;
  deadline: AsHexValue;
  nonce: AsHexValue;
  eventChain: AsHexValue;
  eventSignature: AsHexValue;
  confirm: boolean;
  settleReceiver: AsHexValue;
}

export interface FlexSettleTokenProofData {
  receiveData: [Hex, Hex, Hex];
  settleProofData: [Hex, Hex, Hex];
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
