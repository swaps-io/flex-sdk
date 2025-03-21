import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendData0} function.
 *
 * @category Send
 */
export interface FlexEncodeSendData0Params {
  /**
   * Address of expected send caller _(20 bytes)_.
   */
  sender: FlexToHexValue;
}

/**
 * Encodes data #0 for send contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSendData | `FlexSendData`}
 *
 * @param params Function {@link FlexEncodeSendData0Params | parameters}.
 *
 * @returns Send data #0 _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendData0(params: FlexEncodeSendData0Params): FlexHex {
  return flexConcatHex([flexToHex(0, 12), flexToHex(params.sender, 20)]);
}
