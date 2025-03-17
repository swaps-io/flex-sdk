import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeSendStateBucketParams {
  sender: FlexToHexValue;
  group: FlexToHexValue;
}

export function flexEncodeSendStateBucket(params: FlexEncodeSendStateBucketParams): FlexHex {
  return flexConcatHex([flexToHex(params.sender, 20), flexToHex(params.group, 12)]);
}

export interface FlexEncodeSendBucketStateDataParams {
  hash: FlexToHexValue;
  time: FlexToHexValue;
}

export function flexEncodeSendBucketStateData(params: FlexEncodeSendBucketStateDataParams): FlexHex {
  return flexConcatHex([flexToHex(params.hash, 20), flexToHex(0, 6), flexToHex(params.time, 6)]);
}
