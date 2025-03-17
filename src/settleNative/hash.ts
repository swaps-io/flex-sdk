import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSettleHash } from '../settle';

import { FlexSettleNativeData } from './data';

export interface FlexCalcSettleNativeHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexSettleNativeData, 'settleData'>;
}

export function flexCalcSettleNativeHash(params: FlexCalcSettleNativeHashParams): FlexHex {
  return flexCalcSettleHash({ domain: params.domain, data: params.data.settleData });
}
