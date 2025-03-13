import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSettleData2Params {
  receiveHash: AsHexValue;
}

export function flexEncodeSettleData2(params: FlexEncodeSettleData2Params): Hex {
  const e = getExternal();

  return e.asHex(params.receiveHash, 32);
}
