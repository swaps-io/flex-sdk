import { AsHexValue, Hex, asHex, concatHex } from '../external';

export interface FlexEncodeSendSaveStateBucketParams {
  saver: AsHexValue;
  slot: AsHexValue;
}

export function flexEncodeSendSaveStateBucket(params: FlexEncodeSendSaveStateBucketParams): Hex {
  return concatHex([asHex(params.saver, 20), asHex(params.slot, 12)]);
}
