import { flexCalcComponentHash } from '../component';
import { FlexHex, FlexToHexValue } from '../core';

/**
 * Parameters for {@link flexCalcReceiveFromHash} function.
 *
 * @category Receive From
 */
export interface FlexCalcReceiveFromHashParams {
  /**
   * Receive from domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Receive from component data to calculate hash of _(32 bytes each)_.
   */
  data: [FlexToHexValue, FlexToHexValue];
}

/**
 * Calculates hash of receive from component data.
 *
 * Receive from data is receive core data extended with from party info (i.e. sender).
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * @param params Function {@link FlexCalcReceiveFromHashParams | parameters}.
 *
 * @returns Receive from component data hash _(32 bytes)_.
 *
 * @category Receive From
 */
export function flexCalcReceiveFromHash(params: FlexCalcReceiveFromHashParams): FlexHex {
  return flexCalcComponentHash(params);
}
