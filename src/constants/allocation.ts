/**
 * Hash value stored in slot when it's not allocated/used yet _(20 bytes)_.
 *
 * Related contracts:
 * - {@link !FlexStateAllocation | `FlexStateAllocation`}
 *
 * @category Constants • Allocation
 */
export const FLEX_UNALLOCATED_HASH = '0x0000000000000000000000000000000000000000';

/**
 * Hash value stored in slot after successful allocation _(20 bytes)_.
 *
 * Related contracts:
 * - {@link !FlexStateAllocation | `FlexStateAllocation`}
 *
 * @category Constants • Allocation
 */
export const FLEX_ALLOCATED_HASH = '0x1111111111111111111111111111111111111111';
