import { FlexError } from './error';
import { bytesToHex } from './external';

export type FlexHex = `0x${string}`;
export type FlexToHexValue = FlexHex | number | bigint | Uint8Array;

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
