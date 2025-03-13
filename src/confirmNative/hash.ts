import { Hex } from '../external/inner';
import { FlexCalcSettleNativeHashParams, flexCalcSettleNativeHash } from '../settleNative';

export type FlexCalcConfirmNativeHashParams = FlexCalcSettleNativeHashParams;

export function flexCalcConfirmNativeHash(params: FlexCalcConfirmNativeHashParams): Hex {
  return flexCalcSettleNativeHash(params);
}
