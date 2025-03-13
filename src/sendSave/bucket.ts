import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSendSaveStateBucketParams {
  saver: AsHexValue;
  slot: AsHexValue;
}

export function flexEncodeSendSaveStateBucket(params: FlexEncodeSendSaveStateBucketParams): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(params.saver, 20), e.asHex(params.slot, 12)]);
}
