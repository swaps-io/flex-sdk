import { FlexHex, FlexToHexValue, flexToHex } from '../core';

export interface FlexEncodeSendData2Params {
  amount: FlexToHexValue;
}

export function flexEncodeSendData2(params: FlexEncodeSendData2Params): FlexHex {
  return flexToHex(params.amount, 32);
}
