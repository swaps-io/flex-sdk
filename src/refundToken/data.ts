import { FlexToHexValue } from '../core';
import { FlexEncodeSettleTokenDataParams, FlexSettleTokenData, flexEncodeSettleTokenData } from '../settleToken';

export interface FlexEncodeRefundTokenDataParams
  extends Omit<FlexEncodeSettleTokenDataParams, 'confirm' | 'settleReceiver'> {
  refundReceiver: FlexToHexValue;
}

export type FlexRefundTokenData = FlexSettleTokenData;

export function flexEncodeRefundTokenData(params: FlexEncodeRefundTokenDataParams): FlexRefundTokenData {
  return flexEncodeSettleTokenData({
    ...params,
    confirm: false,
    settleReceiver: params.refundReceiver,
  });
}
