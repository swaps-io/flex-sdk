import { flexCalcComponentHash } from '../component';
import { AsHexValue, Hex } from '../external/inner';

export interface FlexCalcSendHashParams {
  domain: AsHexValue;
  data: [AsHexValue, AsHexValue, AsHexValue] | [AsHexValue, AsHexValue, AsHexValue, AsHexValue];
}

export function flexCalcSendHash(params: FlexCalcSendHashParams): Hex {
  return flexCalcComponentHash(params);
}
