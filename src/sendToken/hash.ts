import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSendHash } from '../send';

import { FlexSendTokenData } from './data';

export interface FlexCalcSendTokenHashParams {
  domain: FlexToHexValue;
  data: Pick<FlexSendTokenData, 'sendData'>;
}

export function flexCalcSendTokenHash(params: FlexCalcSendTokenHashParams): FlexHex {
  return flexCalcSendHash({ domain: params.domain, data: params.data.sendData });
}
