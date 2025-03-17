import { FlexHex } from '../core';
import { FlexCalcSettleNativeProofHashParams, flexCalcSettleNativeProofHash } from '../settleNativeProof';

export type FlexCalcConfirmNativeProofHashParams = FlexCalcSettleNativeProofHashParams;

export function flexCalcConfirmNativeProofHash(params: FlexCalcConfirmNativeProofHashParams): FlexHex {
  return flexCalcSettleNativeProofHash(params);
}
