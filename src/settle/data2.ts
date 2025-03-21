import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSettleData2} function.
 *
 * @category Settle
 */
export interface FlexEncodeSettleData2Params {
  /**
   * Hash of receive core component to settle _(32 bytes)_.
   */
  receiveHash: FlexToHexValue;
}

/**
 * Encodes data #2 for settle contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleData | `FlexSettleData`}
 *
 * @param params Function {@link FlexEncodeSettleData2Params | parameters}.
 *
 * @returns Settle data #2 _(32 bytes)_.
 *
 * @category Settle
 */
export function flexEncodeSettleData2(params: FlexEncodeSettleData2Params): FlexHex {
  return flexToHex(params.receiveHash, 32);
}
