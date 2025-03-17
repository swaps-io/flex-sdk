import { FlexHex } from '../core';
import { FlexCalcSettleNativeProofHashParams, flexCalcSettleNativeProofHash } from '../settleNativeProof';

export type FlexCalcRefundNativeProofHashParams = FlexCalcSettleNativeProofHashParams;

export function flexCalcRefundNativeProofHash(params: FlexCalcRefundNativeProofHashParams): FlexHex {
  return flexCalcSettleNativeProofHash(params);
}
