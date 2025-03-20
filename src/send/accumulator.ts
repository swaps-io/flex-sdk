import { flexCalcAccumulatorHash } from '../accumulator';
import { FlexHex, FlexToHexValue, flexConcatHex, flexSliceHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendAccumulatorData} function.
 *
 * @category Send
 */
export interface FlexEncodeSendAccumulatorDataParams {
  /**
   * Sent order hash to encode into send accumulator {@link flexCalcAccumulatorHash | addable} hash _(32 bytes)_.
   */
  orderHash: FlexToHexValue;

  /**
   * Sent order start time to encode into send accumulator {@link flexCalcAccumulatorHash | addable} hash _(32 bytes)_.
   */
  start: FlexToHexValue;
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
 * @param params Function {@link FlexEncodeSendAccumulatorDataParams | parameters}.
 *
 * @returns Hash addable to send accumulator _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendAccumulatorData(params: FlexEncodeSendAccumulatorDataParams): FlexHex {
  return flexConcatHex([flexSliceHex(flexToHex(params.orderHash, 32), 0, 26), flexToHex(params.start, 6)]);
}

/**
 * Parameters for {@link flexCalcSendAccumulatorHash} function.
 *
 * @category Send
 */
export interface FlexCalcSendAccumulatorHashParams {
  hashBefore: FlexToHexValue;
  orderHash: FlexToHexValue;
  start: FlexToHexValue;
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
  const hashToAdd = flexEncodeSendAccumulatorData({ orderHash: params.orderHash, start: params.start });
  return flexCalcAccumulatorHash({ hashBefore: params.hashBefore, hashToAdd });
}
