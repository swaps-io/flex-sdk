import { flexCalcComponentHash } from '../component';
import { FlexHex, FlexToHexValue } from '../core';

/**
 * Parameters for {@link flexCalcSendHash} function.
 *
 * @category Send
 */
export interface FlexCalcSendHashParams {
  /**
   * Send domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Send component data to calculate hash of _(32 bytes each)_.
   */
  data:
    | [FlexToHexValue, FlexToHexValue, FlexToHexValue]
    | [FlexToHexValue, FlexToHexValue, FlexToHexValue, FlexToHexValue];
}

/**
 * Calculates hash of send component data.
 *
 * Generic version that supports both native (3 elements) and token (4 elements) data.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * @param params Function {@link FlexCalcSendHashParams | parameters}.
 *
 * @returns Send component data hash _(32 bytes)_.
 *
 * @category Send
 */
export function flexCalcSendHash(params: FlexCalcSendHashParams): FlexHex {
  return flexCalcComponentHash(params);
}
