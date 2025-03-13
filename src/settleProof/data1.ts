import { AsHexValue, Hex, asHex } from '../external';

export interface FlexEncodeSettleProofData1Params {
  eventSignature: AsHexValue;
}

export function flexEncodeSettleProofData1(params: FlexEncodeSettleProofData1Params): Hex {
  return asHex(params.eventSignature, 32);
}
