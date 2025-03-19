import { FlexHex } from './hex';

/**
 * Concatenates (i.e. joins) list of {@link FlexHex | hex} values into one hex string.
 *
 * Example: concatenating `0x1234`, `0x`, `0xab76cd`, and `0x8f` produces `0x1234ab76cd8f`.
 *
 * @param values Hex string values to concatenate into single one.
 *
 * @returns Hex string that is concatenation of hex values.
 *
 * @category Core
 */
export function flexConcatHex(values: readonly FlexHex[]): FlexHex {
  let concat: FlexHex = '0x';
  for (const value of values) {
    concat += value.slice(2); // '0x'
  }
  return concat;
}
