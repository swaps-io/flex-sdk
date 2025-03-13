import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeAllocateSendData0Params {
  sender: AsHexValue;
  startGroup: AsHexValue;
  totalBuckets: AsHexValue;
}

export function flexEncodeAllocateSendData0(params: FlexEncodeAllocateSendData0Params): Hex {
  const e = getExternal();
  return e.concatHex([e.asHex(params.totalBuckets, 6), e.asHex(params.startGroup, 6), e.asHex(params.sender, 20)]);
}
