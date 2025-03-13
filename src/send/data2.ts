import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSendData2Params {
  amount: AsHexValue;
}

export function flexEncodeSendData2(params: FlexEncodeSendData2Params): Hex {
  const e = getExternal();

  return e.asHex(params.amount, 32);
}
