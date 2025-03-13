import { AsHexValue } from '../external';
import { FlexEncodeSettleNativeDataParams, FlexSettleNativeData, flexEncodeSettleNativeData } from '../settleNative';

export interface FlexEncodeRefundNativeDataParams
  extends Omit<FlexEncodeSettleNativeDataParams, 'confirm' | 'settleReceiver'> {
  refundReceiver: AsHexValue;
}

export type FlexRefundNativeData = FlexSettleNativeData;

export function flexEncodeRefundNativeData(params: FlexEncodeRefundNativeDataParams): FlexRefundNativeData {
  return flexEncodeSettleNativeData({
    ...params,
    confirm: false,
    settleReceiver: params.refundReceiver,
  });
}
