/**
 * Number of nonce records that fits into each receive bucket _(1 byte)_.
 *
 * Related contracts:
 * - {@link !FlexReceiveStateBucket | `FlexReceiveStateBucket`}
 *
 * @category Constants • Receive
 */
export const FLEX_RECEIVE_NONCES_PER_BUCKET = 48n;

/**
 * Max deadline value in seconds accepted by receive components _(6 bytes)_.
 *
 * Related contracts:
 * - {@link !FlexReceiveData | `FlexReceiveData`}
 *
 * @category Constants • Receive
 */
export const FLEX_MAX_RECEIVE_DEADLINE = (1n << 45n) - 1n;
