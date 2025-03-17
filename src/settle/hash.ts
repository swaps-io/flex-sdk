import { flexCalcComponentHash } from '../component';
import { FlexHex, FlexToHexValue } from '../core';

export interface FlexCalcSettleHashParams {
  domain: FlexToHexValue;
  data: [FlexToHexValue, FlexToHexValue, FlexToHexValue];
}

export function flexCalcSettleHash(params: FlexCalcSettleHashParams): FlexHex {
  return flexCalcComponentHash(params);
}
