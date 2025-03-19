/**
 * Max amount of asset that can be sent using float components _(32 bytes)_.
 *
 * Related contracts:
 * - {@link !FlexSendFloatData | `FlexSendFloatData`}
 *
 * @category Constants • Send Float
 */
export const FLEX_SEND_FLOAT_MAX_AMOUNT = (1n << 255n) - 1n;
