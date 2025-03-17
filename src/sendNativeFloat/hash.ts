import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSendHash } from '../send';

import { FlexSendNativeFloatData } from './data';

export interface FlexCalcSendNativeFloatHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexSendNativeFloatData, 'sendData'>;
}

export function flexCalcSendNativeFloatHash(params: FlexCalcSendNativeFloatHashParams): FlexHex {
  return flexCalcSendHash({ domain: params.domain, data: params.data.sendData });
}
