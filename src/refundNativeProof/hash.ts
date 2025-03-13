import { Hex } from '../external/inner';
import { FlexCalcSettleNativeProofHashParams, flexCalcSettleNativeProofHash } from '../settleNativeProof';

export type FlexCalcRefundNativeProofHashParams = FlexCalcSettleNativeProofHashParams;

export function flexCalcRefundNativeProofHash(params: FlexCalcRefundNativeProofHashParams): Hex {
  return flexCalcSettleNativeProofHash(params);
}
