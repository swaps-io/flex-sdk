import { Hex } from '../external';
import { FlexCalcSettleTokenHashParams, flexCalcSettleTokenHash } from '../settleToken';

export type FlexCalcRefundTokenHashParams = FlexCalcSettleTokenHashParams;

export function flexCalcRefundTokenHash(params: FlexCalcRefundTokenHashParams): Hex {
  return flexCalcSettleTokenHash(params);
}
