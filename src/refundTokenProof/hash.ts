import { Hex } from '../external';
import { FlexCalcSettleTokenProofHashParams, flexCalcSettleTokenProofHash } from '../settleTokenProof';

export type FlexCalcRefundTokenProofHashParams = FlexCalcSettleTokenProofHashParams;

export function flexCalcRefundTokenProofHash(params: FlexCalcRefundTokenProofHashParams): Hex {
  return flexCalcSettleTokenProofHash(params);
}
