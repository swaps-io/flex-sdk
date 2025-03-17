import { FlexHex } from '../core';
import { FlexCalcSettleTokenHashParams, flexCalcSettleTokenHash } from '../settleToken';

export type FlexCalcConfirmTokenHashParams = FlexCalcSettleTokenHashParams;

export function flexCalcConfirmTokenHash(params: FlexCalcConfirmTokenHashParams): FlexHex {
  return flexCalcSettleTokenHash(params);
}
