/**
 * Flag value. Nullish is equivalent to `false`.
 *
 * @category Flags
 */
export type FlexFlagValue = boolean | undefined | null;

/**
 * Packs several {@link FlexFlagValue | flags} into one unsigned integer.
 *
 * Each flag gets own single bit in result integer. Index of flag in list corresponds to bit index in packed integer.
 * That is, index #0 is least significant bit, index #1 - next bit by significance after the previous value, and so on.
 * Flag bits can be shifted towards higher bits using optional parameter.
 *
 * Example:
 *
 * ```ts
 * const value = flexPackFlags([
 *   true,      // Flag #0
 *   false,     // Flag #1
 *   true,      // Flag #2
 *   undefined, // Flag #3 (false)
 *   null,      // Flag #4 (false)
 *   true,      // Flag #5
 * ], 7);       // Shift to higher bits (optional)
 * console.log(value); // Logs `5248n`: `0b1010010000000n`
 * ```
 *
 * @param flags Flags to pack into unsigned integer.
 * @param shift Number of bits to shift specified flags by towards higher bits. Can though of as number of `false` flags
 * to append to specified list. Defaults to 0.
 *
 * @returns Unsigned integer containing specified flags.
 *
 * @category Flags
 */
export function flexPackFlags(flags: readonly FlexFlagValue[], shift = 0): bigint {
  let value = 0n;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      value |= 1n << BigInt(i + shift);
    }
  }
  return value;
}
