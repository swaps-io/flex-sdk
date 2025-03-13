import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSettleProofData2Params {
  receiveHash: AsHexValue;
}

export function flexEncodeSettleProofData2(params: FlexEncodeSettleProofData2Params): Hex {
  const e = getExternal();

  return e.asHex(params.receiveHash, 32);
}
