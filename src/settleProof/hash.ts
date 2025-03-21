import { flexCalcComponentHash } from '../component';
import { FlexHex, FlexToHexValue } from '../core';

/**
 * Parameters for {@link flexCalcSettleProofHash} function.
 *
 * @category Settle Proof
 */
export interface FlexCalcSettleProofHashParams {
  /**
   * Settle proof domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Settle proof component data to calculate hash of _(32 bytes each)_.
   */
  data: [FlexToHexValue, FlexToHexValue, FlexToHexValue];
}

/**
 * Calculates hash of settle proof component data.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * @param params Function {@link FlexCalcSettleProofHashParams | parameters}.
 *
 * @returns Settle component data hash _(32 bytes)_.
 *
 * @category Settle Proof
 */
export function flexCalcSettleProofHash(params: FlexCalcSettleProofHashParams): FlexHex {
  return flexCalcComponentHash(params);
}
