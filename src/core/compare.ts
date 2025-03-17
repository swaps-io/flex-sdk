import { FlexHex } from './hex';

export function flexCompareHex(left: FlexHex, right: FlexHex): number {
  const diff = BigInt(left) - BigInt(right);
  return diff > 0 ? 1 : diff < 0 ? -1 : 0;
}
