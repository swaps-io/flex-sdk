import { FlexHex, FlexToHexValue, flexCalcHash, flexConcatHex, flexToHex } from '../core';

export interface FlexCalcReceiveHashParams {
  data: [FlexToHexValue, FlexToHexValue] | [FlexToHexValue, FlexToHexValue, FlexToHexValue];
}

export function flexCalcReceiveHash(params: FlexCalcReceiveHashParams): FlexHex {
  return flexCalcHash(flexConcatHex(params.data.map((d) => flexToHex(d, 32))));
}
