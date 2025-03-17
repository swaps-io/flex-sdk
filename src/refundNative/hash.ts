import { FlexHex } from '../core';
import { FlexCalcSettleNativeHashParams, flexCalcSettleNativeHash } from '../settleNative';

export type FlexCalcRefundNativeHashParams = FlexCalcSettleNativeHashParams;

export function flexCalcRefundNativeHash(params: FlexCalcRefundNativeHashParams): FlexHex {
  return flexCalcSettleNativeHash(params);
}
