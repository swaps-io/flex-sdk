import { AsHexValue, Hex } from '../external/inner';
import { flexCalcReceiveFromHash } from '../receiveFrom';

import { FlexReceiveTokenData } from './data';

export interface FlexCalcReceiveTokenHashParams {
  domain: AsHexValue;
  data: Pick<FlexReceiveTokenData, 'receiveFromData'>;
}

export function flexCalcReceiveTokenHash(params: FlexCalcReceiveTokenHashParams): Hex {
  return flexCalcReceiveFromHash({ domain: params.domain, data: params.data.receiveFromData });
}
