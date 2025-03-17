import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveFromHash } from '../receiveFrom';

import { FlexReceiveTokenData } from './data';

export interface FlexCalcReceiveTokenHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexReceiveTokenData, 'receiveFromData'>;
}

export function flexCalcReceiveTokenHash(params: FlexCalcReceiveTokenHashParams): FlexHex {
  return flexCalcReceiveFromHash({ domain: params.domain, data: params.data.receiveFromData });
}
