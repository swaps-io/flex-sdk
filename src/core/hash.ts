import { bytesToHex, hexToBytes, keccak_256 } from './external';
import { FlexHex } from './hex';

/**
 * Calculates `keccak256` hash of data represented as {@link FlexHex | hex}.
 *
 * @param data Data to calculate hash of.
 *
 * @returns Hex hash of data _(32 bytes)_.
 *
 * @category Core
 */
export function flexCalcHash(data: FlexHex): FlexHex {
  const bytes = hexToBytes(data.slice(2)); // '0x'
  const hash: FlexHex = `0x${bytesToHex(keccak_256(bytes))}`;
  return hash;
}
