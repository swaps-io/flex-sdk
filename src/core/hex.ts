import { FlexError } from './error';
import { bytesToHex } from './external';

/**
 * Hexadecimal string (e.g. `0x0123456789abcdef`) that represents some encoded data.
 *
 * Required to starts with `0x` and contain hexadecimal (`0`-`9`, `a`-`f`, `A`-`F`) characters after (lowercase
 * preferred). Even number of characters is expected most of the time, i.e. string is byte-aligned. Total number of
 * bytes encoded may vary depending on usage: 0 (`0x`), 1 (e.g. `0x1a`), 2 (e.g. `0x2b3c`), etc.
 *
 * @category Core
 */
export type FlexHex = `0x${string}`;

/**
 * Value that can be {@link flexToHex | converted} into {@link FlexHex | hex string}.
 *
 * @category Core
 */
export type FlexToHexValue = FlexHex | number | bigint | Uint8Array;

/**
 * Converts {@link FlexToHexValue | value} into {@link FlexHex | hex string} of specified size in bytes.
 *
 * Values smaller in size are left-padded with zeros. Throws {@link FlexError | error} for values that don't fit into
 * specified size.
 *
 * For number-like values only non-negative integers are supported. Fraction parts are omitted, and negative values
 * trigger error throw.
 *
 * @param value Value to convert into hex string.
 * @param size Size in bytes of output hex string.
 *
 * @returns Hex string of specified size in bytes.
 *
 * @category Core
 */
export function flexToHex(value: FlexToHexValue, size: number): FlexHex {
  if (typeof value === 'number') {
    value = BigInt(value);
  }

  if (typeof value === 'bigint') {
    if (value < 0n) {
      throw new FlexError(`Flex hex met negative number (${value})`);
    }
    value = `0x${value.toString(16)}`;
  } else if (value instanceof Uint8Array) {
    value = `0x${bytesToHex(value)}`;
  }

  const sizeLength = 2 + size * 2; // '0x'
  if (value.length > sizeLength) {
    const extraSize = (value.length - sizeLength) / 2;
    throw new FlexError(`Flex hex size exceeded (${size} by ${extraSize})`);
  }

  if (value.length < sizeLength) {
    value = `0x${'0'.repeat(sizeLength - value.length)}${value.slice(2)}`; // '0x'
  }
  return value;
}
