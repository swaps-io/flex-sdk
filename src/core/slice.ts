import { FlexHex } from './hex';

// Dev note - we use `.length` here as value that's bigger than `hex` size in bytes
export function flexSliceHex(hex: FlexHex, start = 0, end = hex.length): FlexHex {
  return `0x${hex.slice(2 + start * 2, 2 + end * 2)}`; // '0x'
}
