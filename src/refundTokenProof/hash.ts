import { Hex } from '../external/inner';
import { FlexCalcSettleTokenProofHashParams, flexCalcSettleTokenProofHash } from '../settleTokenProof';

export type FlexCalcRefundTokenProofHashParams = FlexCalcSettleTokenProofHashParams;

export function flexCalcRefundTokenProofHash(params: FlexCalcRefundTokenProofHashParams): Hex {
  return flexCalcSettleTokenProofHash(params);
}
