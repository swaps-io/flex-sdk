import { FlexHex, FlexToHexValue, flexCalcHash, flexConcatHex, flexSliceHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexCalcAccumulatorHash} function.
 *
 * @category Accumulator
 */
export interface FlexCalcAccumulatorHashParams {
  /**
   * Accumulator hash before (20 bytes).
   */
  hashBefore: FlexToHexValue;

  /**
   * Hash to add to accumulator (32 bytes).
   */
  hashToAdd: FlexToHexValue;
}

/**
 * Calculates new accumulator hash from accumulator hash before and arbitrary hash to add.
 *
 * @param params Function {@link FlexCalcAccumulatorHashParams | parameters}.
 *
 * @returns New accumulator hash (20 bytes).
 *
 * @category Accumulator
 */
export function flexCalcAccumulatorHash(params: FlexCalcAccumulatorHashParams): FlexHex {
  return flexSliceHex(
    flexCalcHash(flexConcatHex([flexToHex(params.hashBefore, 20), flexToHex(0, 12), flexToHex(params.hashToAdd, 32)])),
    0,
    20,
  );
}
