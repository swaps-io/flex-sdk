import { flexCalcComponentHash } from '../component';
import { FlexHex, FlexToHexValue } from '../core';

/**
 * Parameters for {@link flexCalcSettleHash} function.
 *
 * @category Settle
 */
export interface FlexCalcSettleHashParams {
  /**
   * Settle domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Settle component data to calculate hash of _(32 bytes each)_.
   */
  data: [FlexToHexValue, FlexToHexValue, FlexToHexValue];
}

/**
 * Calculates hash of settle component data.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * @param params Function {@link FlexCalcSettleHashParams | parameters}.
 *
 * @returns Settle component data hash _(32 bytes)_.
 *
 * @category Settle
 */
export function flexCalcSettleHash(params: FlexCalcSettleHashParams): FlexHex {
  return flexCalcComponentHash(params);
}
