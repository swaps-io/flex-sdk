import { Hex } from '../external/inner';
import { FlexCalcSettleNativeProofHashParams, flexCalcSettleNativeProofHash } from '../settleNativeProof';

export type FlexCalcConfirmNativeProofHashParams = FlexCalcSettleNativeProofHashParams;

export function flexCalcConfirmNativeProofHash(params: FlexCalcConfirmNativeProofHashParams): Hex {
  return flexCalcSettleNativeProofHash(params);
}
