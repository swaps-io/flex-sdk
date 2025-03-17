import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeAllocateReceiveData0Params {
  receiver: FlexToHexValue;
  startNonce: FlexToHexValue;
  totalBuckets: FlexToHexValue;
}

export function flexEncodeAllocateReceiveData0(params: FlexEncodeAllocateReceiveData0Params): FlexHex {
  return flexConcatHex([
    flexToHex(params.totalBuckets, 6),
    flexToHex(params.startNonce, 6),
    flexToHex(params.receiver, 20),
  ]);
}
