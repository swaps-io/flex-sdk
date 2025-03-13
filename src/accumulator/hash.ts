import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexCalcAccumulatorHashParams {
  hashBefore: AsHexValue;
  hashToAdd: AsHexValue;
}

export function flexCalcAccumulatorHash(params: FlexCalcAccumulatorHashParams): Hex {
  const e = getExternal();

  return e.sliceHex(
    e.keccak256(e.concatHex([e.asHex(params.hashBefore, 20), e.asHex(0, 12), e.asHex(params.hashToAdd, 32)])),
    0,
    20,
  );
}
