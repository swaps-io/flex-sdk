import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSendStateBucketParams {
  sender: AsHexValue;
  group: AsHexValue;
}

export function flexEncodeSendStateBucket(params: FlexEncodeSendStateBucketParams): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(params.sender, 20), e.asHex(params.group, 12)]);
}

export interface FlexEncodeSendBucketStateDataParams {
  hash: AsHexValue;
  time: AsHexValue;
}

export function flexEncodeSendBucketStateData(params: FlexEncodeSendBucketStateDataParams): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(params.hash, 20), e.asHex(0, 6), e.asHex(params.time, 6)]);
}
