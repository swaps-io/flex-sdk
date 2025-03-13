import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexCalcReceiveHashParams {
  data: [AsHexValue, AsHexValue] | [AsHexValue, AsHexValue, AsHexValue];
}

export function flexCalcReceiveHash(params: FlexCalcReceiveHashParams): Hex {
  const e = getExternal();

  return e.keccak256(e.concatHex(params.data.map((d) => e.asHex(d, 32))));
}
