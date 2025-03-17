import { FlexHex } from '../core';
import { FlexCalcSettleNativeHashParams, flexCalcSettleNativeHash } from '../settleNative';

export type FlexCalcConfirmNativeHashParams = FlexCalcSettleNativeHashParams;

export function flexCalcConfirmNativeHash(params: FlexCalcConfirmNativeHashParams): FlexHex {
  return flexCalcSettleNativeHash(params);
}
