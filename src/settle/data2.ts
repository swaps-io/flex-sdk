import { FlexHex, FlexToHexValue, flexToHex } from '../core';

export interface FlexEncodeSettleData2Params {
  receiveHash: FlexToHexValue;
}

export function flexEncodeSettleData2(params: FlexEncodeSettleData2Params): FlexHex {
  return flexToHex(params.receiveHash, 32);
}
