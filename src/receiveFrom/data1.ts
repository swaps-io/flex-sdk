import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeReceiveFromData1Params {
  receiveHash: AsHexValue;
}

export function flexEncodeReceiveFromData1(params: FlexEncodeReceiveFromData1Params): Hex {
  const e = getExternal();

  return e.asHex(params.receiveHash, 32);
}
