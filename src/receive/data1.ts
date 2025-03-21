import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeReceiveData1} function.
 *
 * @category Receive
 */
export interface FlexEncodeReceiveData1Params {
  /**
   * Amount of asset to receive _(32 bytes)_.
   */
  amount: FlexToHexValue;
}

/**
 * Encodes data #1 for receive contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexReceiveData | `FlexReceiveData`}
 *
 * @param params Function {@link FlexEncodeReceiveData1Params | parameters}.
 *
 * @returns Receive data #1 _(32 bytes)_.
 *
 * @category Receive
 */
export function flexEncodeReceiveData1(params: FlexEncodeReceiveData1Params): FlexHex {
  return flexToHex(params.amount, 32);
}
