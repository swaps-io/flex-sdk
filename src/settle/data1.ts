import { FlexHex, FlexToHexValue, flexToHex } from '../core';

export interface FlexEncodeSettleData1Params {
  keyHash: FlexToHexValue;
}

export function flexEncodeSettleData1(params: FlexEncodeSettleData1Params): FlexHex {
  return flexToHex(params.keyHash, 32);
}
