import { flexCalcComponentHash } from '../component';
import { AsHexValue, Hex } from '../external/inner';

export interface FlexCalcSettleProofHashParams {
  domain: AsHexValue;
  data: [AsHexValue, AsHexValue, AsHexValue];
}

export function flexCalcSettleProofHash(params: FlexCalcSettleProofHashParams): Hex {
  return flexCalcComponentHash(params);
}
