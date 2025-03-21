import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSettleData1} function.
 *
 * @category Settle
 */
export interface FlexEncodeSettleData1Params {
  /**
   * Hash of key that _authorizes_ this settle operation _(32 bytes)_.
   */
  keyHash: FlexToHexValue;
}

/**
 * Encodes data #1 for settle contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleData | `FlexSettleData`}
 *
 * @param params Function {@link FlexEncodeSettleData1Params | parameters}.
 *
 * @returns Settle data #1 _(32 bytes)_.
 *
 * @category Settle
 */
export function flexEncodeSettleData1(params: FlexEncodeSettleData1Params): FlexHex {
  return flexToHex(params.keyHash, 32);
}
