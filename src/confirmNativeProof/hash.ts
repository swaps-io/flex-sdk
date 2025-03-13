import { Hex } from '../external';
import { FlexCalcSettleNativeProofHashParams, flexCalcSettleNativeProofHash } from '../settleNativeProof';

export type FlexCalcConfirmNativeProofHashParams = FlexCalcSettleNativeProofHashParams;

export function flexCalcConfirmNativeProofHash(params: FlexCalcConfirmNativeProofHashParams): Hex {
  return flexCalcSettleNativeProofHash(params);
}
