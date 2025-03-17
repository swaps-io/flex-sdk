import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeSendData0Params {
  sender: FlexToHexValue;
}

export function flexEncodeSendData0(params: FlexEncodeSendData0Params): FlexHex {
  return flexConcatHex([flexToHex(0, 12), flexToHex(params.sender, 20)]);
}
