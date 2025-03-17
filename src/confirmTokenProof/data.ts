import { FlexToHexValue } from '../core';
import {
  FlexEncodeSettleTokenProofDataParams,
  FlexSettleTokenProofData,
  flexEncodeSettleTokenProofData,
} from '../settleTokenProof';

export interface FlexEncodeConfirmTokenProofDataParams
  extends Omit<FlexEncodeSettleTokenProofDataParams, 'confirm' | 'settleReceiver'> {
  confirmReceiver: FlexToHexValue;
}

export type FlexConfirmTokenProofData = FlexSettleTokenProofData;

export function flexEncodeConfirmTokenProofData(
  params: FlexEncodeConfirmTokenProofDataParams,
): FlexConfirmTokenProofData {
  return flexEncodeSettleTokenProofData({
    ...params,
    confirm: true,
    settleReceiver: params.confirmReceiver,
  });
}
