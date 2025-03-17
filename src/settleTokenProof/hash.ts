import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSettleProofHash } from '../settleProof';

import { FlexSettleTokenProofData } from './data';

export interface FlexCalcSettleTokenProofHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexSettleTokenProofData, 'settleProofData'>;
}

export function flexCalcSettleTokenProofHash(params: FlexCalcSettleTokenProofHashParams): FlexHex {
  return flexCalcSettleProofHash({ domain: params.domain, data: params.data.settleProofData });
}
