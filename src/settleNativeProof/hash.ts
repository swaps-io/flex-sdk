import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSettleProofHash } from '../settleProof';

import { FlexSettleNativeProofData } from './data';

export interface FlexCalcSettleNativeProofHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexSettleNativeProofData, 'settleProofData'>;
}

export function flexCalcSettleNativeProofHash(params: FlexCalcSettleNativeProofHashParams): FlexHex {
  return flexCalcSettleProofHash({ domain: params.domain, data: params.data.settleProofData });
}
