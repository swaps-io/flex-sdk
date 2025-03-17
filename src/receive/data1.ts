import { FlexHex, FlexToHexValue, flexToHex } from '../core';

export interface FlexEncodeReceiveData1Params {
  amount: FlexToHexValue;
}

export function flexEncodeReceiveData1(params: FlexEncodeReceiveData1Params): FlexHex {
  return flexToHex(params.amount, 32);
}
