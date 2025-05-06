import { flexCalcAccumulatorHash } from '../accumulator';
import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendAccumulatorHash} function.
 *
 * @category Send
 */
export interface FlexEncodeSendAccumulatorHashParams {
  /**
   * Sent order hash to encode into send accumulator {@link flexCalcAccumulatorHash | addable} hash _(32 bytes)_.
   */
  orderHash: FlexToHexValue;
}

/**
 * Encodes hash {@link flexCalcAccumulatorHash | addable} to send accumulator from corresponding send data.
 *
 * > [!TIP]
 * >
 * > Consider using higher-level {@link flexCalcSendAccumulatorHash}.
 *
 * Related contract:
 * - {@link !FlexSendStateUpdate | `FlexSendStateUpdate`}
 *
 * @param params Function {@link FlexEncodeSendAccumulatorHashParams | parameters}.
 *
 * @returns Hash addable to send accumulator _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendAccumulatorHash(params: FlexEncodeSendAccumulatorHashParams): FlexHex {
  return flexToHex(params.orderHash, 32);
}

/**
 * Parameters for {@link flexCalcSendAccumulatorHash} function.
 *
 * @category Send
 */
export interface FlexCalcSendAccumulatorHashParams {
  /**
   * Send accumulator hash before _(20 bytes)_.
   */
  hashBefore: FlexToHexValue;

  /**
   * Sent order hash to add to accumulator _(32 bytes)_.
   */
  orderHash: FlexToHexValue;
}

/**
 * Calculates new send accumulator hash from send accumulator hash before and send data to add.
 *
 * @param params Function {@link FlexCalcSendAccumulatorHashParams | parameters}.
 *
 * @returns New send accumulator hash _(20 bytes)_.
 *
 * @category Send
 */
export function flexCalcSendAccumulatorHash(params: FlexCalcSendAccumulatorHashParams): FlexHex {
  const hashToAdd = flexEncodeSendAccumulatorHash({ orderHash: params.orderHash });
  return flexCalcAccumulatorHash({ hashBefore: params.hashBefore, hashToAdd });
}
