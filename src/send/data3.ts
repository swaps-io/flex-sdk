import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendData3} function.
 *
 * @category Send
 */
export interface FlexEncodeSendData3Params {
  /**
   * Address of ERC-20 token to perform send of _(20 bytes)_.
   */
  token: FlexToHexValue;
}

/**
 * Encodes data #3 for send contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSendData | `FlexSendData`}
 *
 * @param params Function {@link FlexEncodeSendData3Params | parameters}.
 *
 * @returns Send data #3 _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendData3(params: FlexEncodeSendData3Params): FlexHex {
  return flexConcatHex([flexToHex(0, 12), flexToHex(params.token, 20)]);
}
