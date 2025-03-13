import { Hex } from '../external';
import { FlexCalcSettleTokenHashParams, flexCalcSettleTokenHash } from '../settleToken';

export type FlexCalcConfirmTokenHashParams = FlexCalcSettleTokenHashParams;

export function flexCalcConfirmTokenHash(params: FlexCalcConfirmTokenHashParams): Hex {
  return flexCalcSettleTokenHash(params);
}
