import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSettleData1Params {
  keyHash: AsHexValue;
}

export function flexEncodeSettleData1(params: FlexEncodeSettleData1Params): Hex {
  const e = getExternal();
  return e.asHex(params.keyHash, 32);
}
