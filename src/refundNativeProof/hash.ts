import { Hex } from '../external';
import { FlexCalcSettleNativeProofHashParams, flexCalcSettleNativeProofHash } from '../settleNativeProof';

export type FlexCalcRefundNativeProofHashParams = FlexCalcSettleNativeProofHashParams;

export function flexCalcRefundNativeProofHash(params: FlexCalcRefundNativeProofHashParams): Hex {
  return flexCalcSettleNativeProofHash(params);
}
