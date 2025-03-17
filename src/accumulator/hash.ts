import { FlexHex, FlexToHexValue, flexCalcHash, flexConcatHex, flexSliceHex, flexToHex } from '../core';

export interface FlexCalcAccumulatorHashParams {
  hashBefore: FlexToHexValue;
  hashToAdd: FlexToHexValue;
}

export function flexCalcAccumulatorHash(params: FlexCalcAccumulatorHashParams): FlexHex {
  return flexSliceHex(
    flexCalcHash(flexConcatHex([flexToHex(params.hashBefore, 20), flexToHex(0, 12), flexToHex(params.hashToAdd, 32)])),
    0,
    20,
  );
}
