import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeReceiveFromData0Params {
  sender: AsHexValue;
}

export function flexEncodeReceiveFromData0(params: FlexEncodeReceiveFromData0Params): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(0, 12), e.asHex(params.sender, 20)]);
}
