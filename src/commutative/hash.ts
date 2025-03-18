import { FlexHex, flexCalcHash, flexCompareHex, flexConcatHex } from '../core';

export function flexCalcCommutativeHash(hexes: readonly FlexHex[]): FlexHex {
  const sorted = [...hexes].sort(flexCompareHex);
  const data = flexConcatHex(sorted);
  const hash = flexCalcHash(data);
  return hash;
}
