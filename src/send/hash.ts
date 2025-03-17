import { flexCalcComponentHash } from '../component';
import { FlexHex, FlexToHexValue } from '../core';

export interface FlexCalcSendHashParams {
  domain: FlexToHexValue;
  data:
    | [FlexToHexValue, FlexToHexValue, FlexToHexValue]
    | [FlexToHexValue, FlexToHexValue, FlexToHexValue, FlexToHexValue];
}

export function flexCalcSendHash(params: FlexCalcSendHashParams): FlexHex {
  return flexCalcComponentHash(params);
}
