import { FlexHex, FlexToHexValue, flexToHex } from '../core';

export interface FlexEncodeReceiveFromData1Params {
  receiveHash: FlexToHexValue;
}

export function flexEncodeReceiveFromData1(params: FlexEncodeReceiveFromData1Params): FlexHex {
  return flexToHex(params.receiveHash, 32);
}
