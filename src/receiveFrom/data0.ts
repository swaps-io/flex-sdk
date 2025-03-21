import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeReceiveFromData0} function.
 *
 * @category Receive From
 */
export interface FlexEncodeReceiveFromData0Params {
  /**
   * Address of receive sender (i.e. receive "from" party) _(20 bytes)_.
   */
  sender: FlexToHexValue;
}

/**
 * Encodes data #0 for receive from contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexReceiveFromData | `FlexReceiveFromData`}
 *
 * @param params Function {@link FlexEncodeReceiveFromData0Params | parameters}.
 *
 * @returns Receive from data #0 _(32 bytes)_.
 *
 * @category Receive From
 */
export function flexEncodeReceiveFromData0(params: FlexEncodeReceiveFromData0Params): FlexHex {
  return flexConcatHex([flexToHex(0, 12), flexToHex(params.sender, 20)]);
}
