import { FlexHex } from './hex';

/**
 * Represents result of comparing two values:
 * - `0` is `=`
 * - `1` is `>`
 * - `-1` is `<`
 *
 * @category Core
 */
export type FlexCompareResult = 0 | 1 | -1;

/**
 * Compares two {@link FlexHex | hex} values as big-endian positive integers.
 *
 * The {@link FlexCompareResult | result} can be used for sorting hex values in ascending order.
 *
 * > [!TIP]
 * >
 * > Function can be passed as `compareFn` to `Array.sort` implementation to sort hex values in ascending order.
 *
 * @param left Left hex value to compare.
 * @param right Right hex value to compare.
 *
 * @returns Hex value comparison result.
 *
 * @category Core
 */
export function flexCompareHex(left: FlexHex, right: FlexHex): FlexCompareResult {
  const diff = BigInt(left) - BigInt(right);
  return diff > 0n ? 1 : diff < 0n ? -1 : 0;
}
