import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSendHash } from '../send';

import { FlexSendNativeData } from './data';

export interface FlexCalcSendNativeHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexSendNativeData, 'sendData'>;
}

export function flexCalcSendNativeHash(params: FlexCalcSendNativeHashParams): FlexHex {
  return flexCalcSendHash({ domain: params.domain, data: params.data.sendData });
}
