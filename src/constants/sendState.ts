/**
 * `FlexSendState.None` enum member _(1 byte)_.
 *
 * Represents send operation that hasn't started.
 *
 * Transits to:
 * - {@link FLEX_SEND_STATE_SENT | `FlexSendState.Sent`}
 *
 * Related contacts:
 * - {@link !FlexSendState | `FlexSendState`}
 *
 * @category Constants • Send State
 */
export const FLEX_SEND_STATE_NONE = 0;

/**
 * `FlexSendState.Sent` enum member _(1 byte)_.
 *
 * Represents send operation that has been successfully sent.
 *
 * Transits from:
 * - {@link FLEX_SEND_STATE_NONE | `FlexSendState.None`}
 *
 * Related contacts:
 * - {@link !FlexSendState | `FlexSendState`}
 *
 * @category Constants • Send State
 */
export const FLEX_SEND_STATE_SENT = 1;
