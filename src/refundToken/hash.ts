import { FlexHex } from '../core';
import { FlexCalcSettleTokenHashParams, flexCalcSettleTokenHash } from '../settleToken';

export type FlexCalcRefundTokenHashParams = FlexCalcSettleTokenHashParams;

export function flexCalcRefundTokenHash(params: FlexCalcRefundTokenHashParams): FlexHex {
  return flexCalcSettleTokenHash(params);
}
