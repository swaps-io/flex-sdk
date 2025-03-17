import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeSendSaveStateBucketParams {
  saver: FlexToHexValue;
  slot: FlexToHexValue;
}

export function flexEncodeSendSaveStateBucket(params: FlexEncodeSendSaveStateBucketParams): FlexHex {
  return flexConcatHex([flexToHex(params.saver, 20), flexToHex(params.slot, 12)]);
}
