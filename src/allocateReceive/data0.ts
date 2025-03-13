import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeAllocateReceiveData0Params {
  receiver: AsHexValue;
  startNonce: AsHexValue;
  totalBuckets: AsHexValue;
}

export function flexEncodeAllocateReceiveData0(params: FlexEncodeAllocateReceiveData0Params): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(params.totalBuckets, 6), e.asHex(params.startNonce, 6), e.asHex(params.receiver, 20)]);
}
