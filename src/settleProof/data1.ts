import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSettleProofData1} function.
 *
 * @category Settle Proof
 */
export interface FlexEncodeSettleProofData1Params {
  /**
   * Signature (i.e. topic #0) of event that authorizes this settle operation _(32 bytes)_.
   */
  eventSignature: FlexToHexValue;
}

/**
 * Encodes data #1 for settle proof contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleProofData | `FlexSettleProofData`}
 *
 * @param params Function {@link FlexEncodeSettleProofData1Params | parameters}.
 *
 * @returns Settle proof data #1 _(32 bytes)_.
 *
 * @category Settle Proof
 */
export function flexEncodeSettleProofData1(params: FlexEncodeSettleProofData1Params): FlexHex {
  return flexToHex(params.eventSignature, 32);
}
