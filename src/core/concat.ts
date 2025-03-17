import { FlexHex } from './hex';

export function flexConcatHex(hexes: readonly FlexHex[]): FlexHex {
  let concat: FlexHex = '0x';
  for (const hex of hexes) {
    concat += hex.slice(2); // '0x'
  }
  return concat;
}
