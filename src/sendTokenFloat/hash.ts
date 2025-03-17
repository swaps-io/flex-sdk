import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSendHash } from '../send';

import { FlexSendTokenFloatData } from './data';

export interface FlexCalcSendTokenFloatHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexSendTokenFloatData, 'sendData'>;
}

export function flexCalcSendTokenFloatHash(params: FlexCalcSendTokenFloatHashParams): FlexHex {
  return flexCalcSendHash({ domain: params.domain, data: params.data.sendData });
}
