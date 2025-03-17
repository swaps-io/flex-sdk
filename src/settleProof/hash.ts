import { flexCalcComponentHash } from '../component';
import { FlexHex, FlexToHexValue } from '../core';

export interface FlexCalcSettleProofHashParams {
  domain: FlexToHexValue;
  data: [FlexToHexValue, FlexToHexValue, FlexToHexValue];
}

export function flexCalcSettleProofHash(params: FlexCalcSettleProofHashParams): FlexHex {
  return flexCalcComponentHash(params);
}
