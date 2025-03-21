import { FLEX_SEND_FLOAT_MAX_AMOUNT } from '../constants';
import { FlexError, FlexHex, FlexToHexValue, flexToHex } from '../core';
import { flexPackFlags } from '../flags';

/**
 * Parameters for {@link flexEncodeSendFloatData2} function.
 *
 * @category Send Float
 */
export interface FlexEncodeSendFloatData2Params {
  /**
   * Amount of asset to send _(32 bytes)_.
   *
   * Should not exceed {@link FLEX_SEND_FLOAT_MAX_AMOUNT | max supported value}.
   */
  amount: FlexToHexValue;

  /**
   * Should skip axillary `FlexSendAmount` event emit or not.
   *
   * The event contains info about actual native amount sent (i.e. ≥ {@link amount}).
   *
   * @default false
   */
  skipAmountEmit?: boolean;
}

/**
 * Encodes data #2 for send "float" contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSendFloatData | `FlexSendFloatData`}
 *
 * @param params Function {@link FlexEncodeSendFloatData2Params | parameters}.
 *
 * @returns Send float data #2 _(32 bytes)_.
 *
 * @category Send Float
 */
export function flexEncodeSendFloatData2(params: FlexEncodeSendFloatData2Params): FlexHex {
  const amount = BigInt(flexToHex(params.amount, 32));
  if (amount > FLEX_SEND_FLOAT_MAX_AMOUNT) {
    throw new FlexError('Flex send float amount exceeds max value');
  }

  return flexToHex(flexPackFlags([params.skipAmountEmit], 255) | amount, 32);
}
