import { FlexHex, FlexToHexValue, flexCalcHash, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexCalcReceiveHash} function.
 *
 * @category Receive
 */
export interface FlexCalcReceiveHashParams {
  /**
   * Receive core component data to calculate hash of _(32 bytes each)_.
   */
  data: [FlexToHexValue, FlexToHexValue] | [FlexToHexValue, FlexToHexValue, FlexToHexValue];
}

/**
 * Calculates hash of receive _core_ component data.
 *
 * Generic version that supports both native (2 elements) and token (3 elements) data.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * @param params Function {@link FlexCalcReceiveHashParams | parameters}.
 *
 * @returns Receive core component data hash _(32 bytes)_.
 *
 * @category Receive
 */
export function flexCalcReceiveHash(params: FlexCalcReceiveHashParams): FlexHex {
  return flexCalcHash(flexConcatHex(params.data.map((d) => flexToHex(d, 32))));
}
