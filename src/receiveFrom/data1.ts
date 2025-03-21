import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeReceiveFromData1} function.
 *
 * @category Receive From
 */
export interface FlexEncodeReceiveFromData1Params {
  /**
   * Receive core component data hash _(32 bytes)_.
   */
  receiveHash: FlexToHexValue;
}

/**
 * Encodes data #1 for receive from contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexReceiveFromData | `FlexReceiveFromData`}
 *
 * @param params Function {@link FlexEncodeReceiveFromData1Params | parameters}.
 *
 * @returns Receive from data #1 _(32 bytes)_.
 *
 * @category Receive From
 */
export function flexEncodeReceiveFromData1(params: FlexEncodeReceiveFromData1Params): FlexHex {
  return flexToHex(params.receiveHash, 32);
}
