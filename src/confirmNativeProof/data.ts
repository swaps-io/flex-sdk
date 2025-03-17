import { FlexToHexValue } from '../core';
import {
  FlexEncodeSettleNativeProofDataParams,
  FlexSettleNativeProofData,
  flexEncodeSettleNativeProofData,
} from '../settleNativeProof';

export interface FlexEncodeConfirmNativeProofDataParams
  extends Omit<FlexEncodeSettleNativeProofDataParams, 'confirm' | 'settleReceiver'> {
  confirmReceiver: FlexToHexValue;
}

export type FlexConfirmNativeProofData = FlexSettleNativeProofData;

export function flexEncodeConfirmNativeProofData(
  params: FlexEncodeConfirmNativeProofDataParams,
): FlexConfirmNativeProofData {
  return flexEncodeSettleNativeProofData({
    ...params,
    confirm: true,
    settleReceiver: params.confirmReceiver,
  });
}
