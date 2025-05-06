import { FLEX_RECEIVE_NONCES_PER_BUCKET } from '../constants';
import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeReceiveStateBucket} function.
 *
 * @category Receive
 */
export interface FlexEncodeReceiveStateBucketParams {
  /**
   * Address of receiver who uses bucket _(20 bytes)_.
   */
  receiver: FlexToHexValue;

  /**
   * Receive nonce to determine bucket for _(12 bytes)_.
   *
   * {@link FLEX_RECEIVE_NONCES_PER_BUCKET | Multiple} nonces can fit into one bucket.
   */
  nonce: FlexToHexValue;
}

/**
 * Encodes receive bucket (i.e. mapping key).
 *
 * Bucket is owned by receiver and can hold {@link FLEX_RECEIVE_NONCES_PER_BUCKET | multiple} nonces.
 *
 * Related contracts:
 * - {@link !FlexReceiveStateBucket | `FlexReceiveStateBucket`}
 *
 * @param params Function {@link FlexEncodeReceiveStateBucketParams | parameters}.
 *
 * @returns Receive bucket _(32 bytes)_.
 *
 * @category Receive
 */
export function flexEncodeReceiveStateBucket(params: FlexEncodeReceiveStateBucketParams): FlexHex {
  const nonce = BigInt(flexToHex(params.nonce, 12));
  const nonceBucket = nonce / FLEX_RECEIVE_NONCES_PER_BUCKET;
  return flexConcatHex([flexToHex(params.receiver, 20), flexToHex(nonceBucket, 12)]);
}

/**
 * Parameters for {@link flexEncodeReceiveStateOffset} function.
 *
 * @category Receive
 */
export interface FlexEncodeReceiveStateOffsetParams {
  /**
   * Nonce to calculate receive state offset in bucket for _(12 bytes)_.
   */
  nonce: FlexToHexValue;
}

/**
 * Encodes receive bucket state bitmap offset value (i.e. mapping value internals).
 *
 * Helps to find exact position of given nonce state in {@link flexEncodeReceiveStateBucket | calculated bucket} value
 * that holds {@link FLEX_RECEIVE_NONCES_PER_BUCKET | multiple} nonces.
 *
 * Related contracts:
 * - {@link !FlexReceiveStateBucket | `FlexReceiveStateBucket`}
 *
 * @param params Function {@link FlexEncodeReceiveStateOffsetParams | parameters}.
 *
 * @returns Receive state offset in bucket bitmap _(1 byte)_.
 *
 * @category Receive
 */
export function flexEncodeReceiveStateOffset(params: FlexEncodeReceiveStateOffsetParams): bigint {
  const nonce = BigInt(flexToHex(params.nonce, 12));
  const nonceOffset = nonce % FLEX_RECEIVE_NONCES_PER_BUCKET << 1n;
  return nonceOffset;
}

/**
 * Parameters for {@link flexEncodeReceiveBucketStateData} function.
 *
 * @category Receive
 */
export interface FlexEncodeReceiveBucketStateDataParams {
  /**
   * Receive bucket hash, i.e current receive accumulator state _(20 bytes)_.
   */
  hash: FlexToHexValue;

  /**
   * Receive bucket bitmap of multiple receive operation states _(12 bytes)_.
   */
  state: FlexToHexValue;
}

/**
 * Encodes receive bucket state data (i.e. mapping value).
 *
 * Related contracts:
 * - {@link !FlexReceiveBucketStateData | `FlexReceiveBucketStateData`}
 *
 * @param params Function {@link FlexEncodeReceiveBucketStateDataParams | parameters}.
 *
 * @returns Encoded receive bucket state data _(32 bytes)_.
 *
 * @category Receive
 */
export function flexEncodeReceiveBucketStateData(params: FlexEncodeReceiveBucketStateDataParams): FlexHex {
  return flexConcatHex([flexToHex(params.hash, 20), flexToHex(params.state, 12)]);
}
