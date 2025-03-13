import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeReceiveData1Params {
  amount: AsHexValue;
}

export function flexEncodeReceiveData1(params: FlexEncodeReceiveData1Params): Hex {
  const e = getExternal();

  return e.asHex(params.amount, 32);
}
