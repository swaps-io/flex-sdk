import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeAllocateSendData0Params {
  sender: FlexToHexValue;
  startGroup: FlexToHexValue;
  totalBuckets: FlexToHexValue;
}

export function flexEncodeAllocateSendData0(params: FlexEncodeAllocateSendData0Params): FlexHex {
  return flexConcatHex([
    flexToHex(params.totalBuckets, 6),
    flexToHex(params.startGroup, 6),
    flexToHex(params.sender, 20),
  ]);
}
