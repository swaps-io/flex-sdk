import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeReceiveData2} function.
 *
 * @category Receive
 */
export interface FlexEncodeReceiveData2Params {
  /**
   * Address of ERC-20 token to perform receive of.
   */
  token: FlexToHexValue;
}

/**
 * Encodes data #2 for receive contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexReceiveData | `FlexReceiveData`}
 *
 * @param params Function {@link FlexEncodeReceiveData2Params | parameters}.
 *
 * @returns Receive data #2 _(32 bytes)_.
 *
 * @category Receive
 */
export function flexEncodeReceiveData2(params: FlexEncodeReceiveData2Params): FlexHex {
  return flexConcatHex([flexToHex(0, 12), flexToHex(params.token, 20)]);
}
