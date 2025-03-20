import { flexCalcAccumulatorHash } from '../accumulator';
import { FlexHex, FlexToHexValue, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeReceiveAccumulatorHash} function.
 *
 * @category Receive
 */
export interface FlexEncodeReceiveAccumulatorHashParams {
  /**
   * Received order hash to encode into receive accumulator {@link flexCalcAccumulatorHash | addable} hash _(32 bytes)_.
   */
  orderHash: FlexToHexValue;
}

/**
 * Encodes hash {@link flexCalcAccumulatorHash | addable} to receive accumulator from corresponding receive data.
 *
 * > [!TIP]
 * >
 * > Consider using higher-level {@link flexCalcReceiveAccumulatorHash}.
 *
 * Related contract:
 * - {@link !FlexReceiveStateUpdate | `FlexReceiveStateUpdate`}
 *
 * @param params Function {@link FlexEncodeReceiveAccumulatorHashParams | parameters}.
 *
 * @returns Hash addable to receive accumulator _(32 bytes)_.
 *
 * @category Receive
 */
export function flexEncodeReceiveAccumulatorHash(params: FlexEncodeReceiveAccumulatorHashParams): FlexHex {
  return flexToHex(params.orderHash, 32);
}

/**
 * Parameters for {@link flexCalcReceiveAccumulatorHash} function.
 *
 * @category Receive
 */
export interface FlexCalcReceiveAccumulatorHashParams {
  /**
   * Receive accumulator hash before _(20 bytes)_.
   */
  hashBefore: FlexToHexValue;

  /**
   * Received order hash to add to accumulator _(32 bytes)_.
   */
  orderHash: FlexToHexValue;
}

/**
 * Calculates new receive accumulator hash from receive accumulator hash before and receive data to add.
 *
 * @param params Function {@link FlexCalcReceiveAccumulatorHashParams | parameters}.
 *
 * @returns New receive accumulator hash _(20 bytes)_.
 *
 * @category Receive
 */
export function flexCalcReceiveAccumulatorHash(params: FlexCalcReceiveAccumulatorHashParams): FlexHex {
  const hashToAdd = flexEncodeReceiveAccumulatorHash({ orderHash: params.orderHash });
  return flexCalcAccumulatorHash({ hashBefore: params.hashBefore, hashToAdd });
}
