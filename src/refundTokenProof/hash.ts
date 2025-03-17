import { FlexHex } from '../core';
import { FlexCalcSettleTokenProofHashParams, flexCalcSettleTokenProofHash } from '../settleTokenProof';

export type FlexCalcRefundTokenProofHashParams = FlexCalcSettleTokenProofHashParams;

export function flexCalcRefundTokenProofHash(params: FlexCalcRefundTokenProofHashParams): FlexHex {
  return flexCalcSettleTokenProofHash(params);
}
