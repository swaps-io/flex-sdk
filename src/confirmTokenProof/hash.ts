import { FlexHex } from '../core';
import { FlexCalcSettleTokenProofHashParams, flexCalcSettleTokenProofHash } from '../settleTokenProof';

export type FlexCalcConfirmTokenProofHashParams = FlexCalcSettleTokenProofHashParams;

export function flexCalcConfirmTokenProofHash(params: FlexCalcConfirmTokenProofHashParams): FlexHex {
  return flexCalcSettleTokenProofHash(params);
}
