import { AsHexValue, Hex, asHex, concatHex, keccak256 } from '../external';

export interface FlexCalcReceiveHashParams {
  data: [AsHexValue, AsHexValue] | [AsHexValue, AsHexValue, AsHexValue];
}

export function flexCalcReceiveHash(params: FlexCalcReceiveHashParams): Hex {
  return keccak256(concatHex(params.data.map((d) => asHex(d, 32))));
}
