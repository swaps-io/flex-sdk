import { Hex } from '../external/inner';
import { FlexCalcSettleTokenProofHashParams, flexCalcSettleTokenProofHash } from '../settleTokenProof';

export type FlexCalcConfirmTokenProofHashParams = FlexCalcSettleTokenProofHashParams;

export function flexCalcConfirmTokenProofHash(params: FlexCalcConfirmTokenProofHashParams): Hex {
  return flexCalcSettleTokenProofHash(params);
}
