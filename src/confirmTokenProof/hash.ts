import { Hex } from '../external';
import { FlexCalcSettleTokenProofHashParams, flexCalcSettleTokenProofHash } from '../settleTokenProof';

export type FlexCalcConfirmTokenProofHashParams = FlexCalcSettleTokenProofHashParams;

export function flexCalcConfirmTokenProofHash(params: FlexCalcConfirmTokenProofHashParams): Hex {
  return flexCalcSettleTokenProofHash(params);
}
