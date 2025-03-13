import { flexCalcComponentHash } from '../component';
import { AsHexValue, Hex } from '../external';

export interface FlexCalcReceiveFromHashParams {
  domain: AsHexValue;
  data: [AsHexValue, AsHexValue];
}

export function flexCalcReceiveFromHash(params: FlexCalcReceiveFromHashParams): Hex {
  return flexCalcComponentHash(params);
}
