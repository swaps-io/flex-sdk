import { bytesToHex, hexToBytes, keccak_256 } from './external';
import { FlexHex } from './hex';

export function flexCalcHash(data: FlexHex): FlexHex {
  const bytes = hexToBytes(data.slice(2)); // '0x'
  const hash: FlexHex = `0x${bytesToHex(keccak_256(bytes))}`;
  return hash;
}
