import { FlexHex, FlexToHexValue, flexToHex } from '../core';

export interface FlexEncodeSettleProofData1Params {
  eventSignature: FlexToHexValue;
}

export function flexEncodeSettleProofData1(params: FlexEncodeSettleProofData1Params): FlexHex {
  return flexToHex(params.eventSignature, 32);
}
