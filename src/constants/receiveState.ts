/**
 * `FlexReceiveState.None` enum member _(1 byte)_.
 *
 * Represents receive operation that hasn't started.
 *
 * Transits to:
 * - {@link FLEX_RECEIVE_STATE_RECEIVED | `FlexReceiveState.Received`}
 *
 * Related contacts:
 * - {@link !FlexReceiveState | `FlexReceiveState`}
 *
 * @category Constants • Receive State
 */
export const FLEX_RECEIVE_STATE_NONE = 0;

/**
 * `FlexReceiveState.Received` enum member _(1 byte)_.
 *
 * Represents receive operation that started yet not settled (i.e. pending).
 *
 * Transits from:
 * - {@link FLEX_RECEIVE_STATE_NONE | `FlexReceiveState.None`}
 *
 * Transits to:
 * - {@link FLEX_RECEIVE_STATE_CONFIRMED | `FlexReceiveState.Confirmed`}
 * - {@link FLEX_RECEIVE_STATE_REFUNDED | `FlexReceiveState.Refunded`}
 *
 * Related contacts:
 * - {@link !FlexReceiveState | `FlexReceiveState`}
 *
 * @category Constants • Receive State
 */
export const FLEX_RECEIVE_STATE_RECEIVED = 1;

/**
 * `FlexReceiveState.Confirmed` enum member _(1 byte)_.
 *
 * Represents receive operation that settled as confirmed (i.e. success).
 *
 * Transits from:
 * - {@link FLEX_RECEIVE_STATE_RECEIVED | `FlexReceiveState.Received`}
 *
 * Related contacts:
 * - {@link !FlexReceiveState | `FlexReceiveState`}
 *
 * @category Constants • Receive State
 */
export const FLEX_RECEIVE_STATE_CONFIRMED = 2;

/**
 * `FlexReceiveState.Refunded` enum member _(1 byte)_.
 *
 * Represents receive operation that settled as refunded (i.e. failure).
 *
 * Transits from:
 * - {@link FLEX_RECEIVE_STATE_RECEIVED | `FlexReceiveState.Received`}
 *
 * Related contacts:
 * - {@link !FlexReceiveState | `FlexReceiveState`}
 *
 * @category Constants • Receive State
 */
export const FLEX_RECEIVE_STATE_REFUNDED = 3;
