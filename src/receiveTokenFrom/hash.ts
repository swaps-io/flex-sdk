import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveFromHash } from '../receiveFrom';

import { FlexReceiveTokenFromData } from './data';

export interface FlexCalcReceiveTokenFromHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexReceiveTokenFromData, 'receiveFromData'>;
}

export function flexCalcReceiveTokenFromHash(params: FlexCalcReceiveTokenFromHashParams): FlexHex {
  return flexCalcReceiveFromHash({ domain: params.domain, data: params.data.receiveFromData });
}
