import { FlexHex, FlexToHexValue, flexCalcHash, flexConcatHex, flexSliceHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexCalcAccumulatorHash} function.
 *
 * @category Accumulator
 */
export interface FlexCalcAccumulatorHashParams {
  /**
   * Accumulator hash before _(20 bytes)_.
   */
  hashBefore: FlexToHexValue;

  /**
   * Hash to add to accumulator _(32 bytes)_.
   */
  hashToAdd: FlexToHexValue;
}

/**
 * Calculates new accumulator hash from accumulator hash before and arbitrary hash to add.
 *
 * Related contracts:
 * - {@link !FlexHashAccumulator | `FlexHashAccumulator`}
 * - {@link !FlexHashTree | `FlexHashTree`}
 *
 * @param params Function {@link FlexCalcAccumulatorHashParams | parameters}.
 *
 * @returns New accumulator hash _(20 bytes)_.
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
