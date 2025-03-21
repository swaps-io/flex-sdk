import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSettleProofData2} function.
 *
 * @category Settle Proof
 */
export interface FlexEncodeSettleProofData2Params {
  /**
   * Hash of receive core component to settle _(32 bytes)_.
   */
  receiveHash: FlexToHexValue;
}

/**
 * Encodes data #2 for settle proof contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleProofData | `FlexSettleProofData`}
 *
 * @param params Function {@link FlexEncodeSettleProofData2Params | parameters}.
 *
 * @returns Settle proof data #2 _(32 bytes)_.
 *
 * @category Settle Proof
 */
export function flexEncodeSettleProofData2(params: FlexEncodeSettleProofData2Params): FlexHex {
  return flexToHex(params.receiveHash, 32);
}
