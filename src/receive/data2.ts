import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeReceiveData2Params {
  token: FlexToHexValue;
}

export function flexEncodeReceiveData2(params: FlexEncodeReceiveData2Params): FlexHex {
  return flexConcatHex([flexToHex(0, 12), flexToHex(params.token, 20)]);
}
