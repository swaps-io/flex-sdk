import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcReceiveFromHash } from '../receiveFrom';

import { FlexReceiveNativeData } from './data';

export interface FlexCalcReceiveNativeHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexReceiveNativeData, 'receiveFromData'>;
}

export function flexCalcReceiveNativeHash(params: FlexCalcReceiveNativeHashParams): FlexHex {
  return flexCalcReceiveFromHash({ domain: params.domain, data: params.data.receiveFromData });
}
