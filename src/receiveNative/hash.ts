import { AsHexValue, Hex } from '../external/inner';
import { flexCalcReceiveFromHash } from '../receiveFrom';

import { FlexReceiveNativeData } from './data';

export interface FlexCalcReceiveNativeHashParams {
  domain: AsHexValue;
  data: Pick<FlexReceiveNativeData, 'receiveFromData'>;
}

export function flexCalcReceiveNativeHash(params: FlexCalcReceiveNativeHashParams): Hex {
  return flexCalcReceiveFromHash({ domain: params.domain, data: params.data.receiveFromData });
}
