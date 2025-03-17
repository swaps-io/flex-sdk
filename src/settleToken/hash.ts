import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSettleHash } from '../settle';

import { FlexSettleTokenData } from './data';

export interface FlexCalcSettleTokenHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexSettleTokenData, 'settleData'>;
}

export function flexCalcSettleTokenHash(params: FlexCalcSettleTokenHashParams): FlexHex {
  return flexCalcSettleHash({ domain: params.domain, data: params.data.settleData });
}
