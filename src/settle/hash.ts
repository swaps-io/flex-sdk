import { flexCalcComponentHash } from '../component';
import { AsHexValue, Hex } from '../external/inner';

export interface FlexCalcSettleHashParams {
  domain: AsHexValue;
  data: [AsHexValue, AsHexValue, AsHexValue];
}

export function flexCalcSettleHash(params: FlexCalcSettleHashParams): Hex {
  return flexCalcComponentHash(params);
}
