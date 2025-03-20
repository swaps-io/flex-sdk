import { FlexHex, flexCalcHash, flexCompareHex, flexConcatHex } from '../core';

/**
 * Calculates commutative hash of {@link flexConcatHex | concatenation} of {@link FlexHex | hex} values.
 *
 * Commutative means same hash will be produced for the same set of values in different order.
 *
 * > [!WARNING]
 * >
 * > The hex values are assumed to be of _same size_. Otherwise {@link flexCompareHex | hex comparison} may lead to
 * > unstable hash result. Example: values `0x1234` and `0x00001234` are equal, yet can be sorted in two ways.
 *
 * @param values List of hex values to calculate hash of.
 *
 * @returns Commutative hash of values _(32 bytes)_.
 *
 * @category Commutative
 */
export function flexCalcCommutativeHash(values: readonly FlexHex[]): FlexHex {
  const sorted = [...values].sort(flexCompareHex);
  const concat = flexConcatHex(sorted);
  const hash = flexCalcHash(concat);
  return hash;
}
