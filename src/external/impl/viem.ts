import { AsHexValue, FlexExternal, Hex } from '../types';

export type FlexViemExternal = Pick<FlexExternal, 'asHex' | 'concatHex' | 'sliceHex' | 'keccak256'>;

export async function flexInitViemExternal(): Promise<FlexViemExternal> {
  const { isHex, toHex, padHex, concatHex, sliceHex, keccak256 } = await import('viem');

  function asHex(value: AsHexValue, size: number): Hex {
    if (!isHex(value, { strict: false })) {
      return toHex(value, { size });
    }

    return padHex(value, { dir: 'left', size });
  }

  const external: FlexViemExternal = {
    asHex,
    concatHex,
    sliceHex,
    keccak256,
  };
  return external;
}
