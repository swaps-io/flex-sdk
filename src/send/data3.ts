import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSendData3Params {
  token: AsHexValue;
}

export function flexEncodeSendData3(params: FlexEncodeSendData3Params): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(0, 12), e.asHex(params.token, 20)]);
}
