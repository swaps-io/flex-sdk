import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSendData0Params {
  sender: AsHexValue;
}

export function flexEncodeSendData0(params: FlexEncodeSendData0Params): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(0, 12), e.asHex(params.sender, 20)]);
}
