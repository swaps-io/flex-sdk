import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSettleProofData1Params {
  eventSignature: AsHexValue;
}

export function flexEncodeSettleProofData1(params: FlexEncodeSettleProofData1Params): Hex {
  const e = getExternal();

  return e.asHex(params.eventSignature, 32);
}
