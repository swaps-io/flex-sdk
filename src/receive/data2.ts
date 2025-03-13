import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeReceiveData2Params {
  token: AsHexValue;
}

export function flexEncodeReceiveData2(params: FlexEncodeReceiveData2Params): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(0, 12), e.asHex(params.token, 20)]);
}
