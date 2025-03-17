import { flexCalcComponentHash } from '../component';
import { FlexHex, FlexToHexValue } from '../core';

export interface FlexCalcReceiveFromHashParams {
  domain: FlexToHexValue;
  data: [FlexToHexValue, FlexToHexValue];
}

export function flexCalcReceiveFromHash(params: FlexCalcReceiveFromHashParams): FlexHex {
  return flexCalcComponentHash(params);
}
