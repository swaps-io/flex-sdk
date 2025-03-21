import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendData2} function.
 *
 * @category Send
 */
export interface FlexEncodeSendData2Params {
  /**
   * Amount of asset to send _(32 bytes)_.
   */
  amount: FlexToHexValue;
}

/**
 * Encodes data #2 for send contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSendData | `FlexSendData`}
 *
 * @param params Function {@link FlexEncodeSendData2Params | parameters}.
 *
 * @returns Send data #2 _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendData2(params: FlexEncodeSendData2Params): FlexHex {
  return flexToHex(params.amount, 32);
}
