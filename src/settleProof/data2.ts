import { FlexHex, FlexToHexValue, flexToHex } from '../core';

export interface FlexEncodeSettleProofData2Params {
  receiveHash: FlexToHexValue;
}

export function flexEncodeSettleProofData2(params: FlexEncodeSettleProofData2Params): FlexHex {
  return flexToHex(params.receiveHash, 32);
}
