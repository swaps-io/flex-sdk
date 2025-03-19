import { FlexHex } from './hex';

/**
 * Slices {@link FlexHex | hex} string value into new string. New hex string starts including specified start byte and
 * ends on byte before one specified by end (i.e. excluding end byte). The defaults for these parameters are beginning
 * of hex value and its end respectively.
 *
 * @param value Hex string value to slice.
 * @param start Slice start byte index (included). Expected to be ≥ 0. Defaults to 0.
 * @param end Slice end byte index (excluded). Expected to be ≥ 0. Defaults to size.
 *
 * @returns Hex string slice of value.
 *
 * @category Core
 */
export function flexSliceHex(value: FlexHex, start = 0, end = value.length): FlexHex {
  return `0x${value.slice(2 + start * 2, 2 + end * 2)}`; // '0x'
}
