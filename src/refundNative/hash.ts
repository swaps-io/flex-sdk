import { Hex } from '../external';
import { FlexCalcSettleNativeHashParams, flexCalcSettleNativeHash } from '../settleNative';

export type FlexCalcRefundNativeHashParams = FlexCalcSettleNativeHashParams;

export function flexCalcRefundNativeHash(params: FlexCalcRefundNativeHashParams): Hex {
  return flexCalcSettleNativeHash(params);
}
