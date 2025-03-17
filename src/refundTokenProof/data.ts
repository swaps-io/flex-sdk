import { FlexToHexValue } from '../core';
import {
  FlexEncodeSettleTokenProofDataParams,
  FlexSettleTokenProofData,
  flexEncodeSettleTokenProofData,
} from '../settleTokenProof';

export interface FlexEncodeRefundTokenProofDataParams
  extends Omit<FlexEncodeSettleTokenProofDataParams, 'confirm' | 'settleReceiver'> {
  refundReceiver: FlexToHexValue;
}

export type FlexRefundTokenProofData = FlexSettleTokenProofData;

export function flexEncodeRefundTokenProofData(params: FlexEncodeRefundTokenProofDataParams): FlexRefundTokenProofData {
  return flexEncodeSettleTokenProofData({
    ...params,
    confirm: false,
    settleReceiver: params.refundReceiver,
  });
}
