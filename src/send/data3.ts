import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeSendData3Params {
  token: FlexToHexValue;
}

export function flexEncodeSendData3(params: FlexEncodeSendData3Params): FlexHex {
  return flexConcatHex([flexToHex(0, 12), flexToHex(params.token, 20)]);
}
