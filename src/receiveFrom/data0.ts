import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeReceiveFromData0Params {
  sender: FlexToHexValue;
}

export function flexEncodeReceiveFromData0(params: FlexEncodeReceiveFromData0Params): FlexHex {
  return flexConcatHex([flexToHex(0, 12), flexToHex(params.sender, 20)]);
}
