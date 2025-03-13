import { AsHexValue, Hex, asHex } from '../external';

export interface FlexEncodeSettleData1Params {
  keyHash: AsHexValue;
}

export function flexEncodeSettleData1(params: FlexEncodeSettleData1Params): Hex {
  return asHex(params.keyHash, 32);
}
