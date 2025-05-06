import { FLEX_SEND_NONCES_PER_BUCKET } from '../constants';
import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendStateBucket} function.
 *
 * @category Send
 */
export interface FlexEncodeSendStateBucketParams {
  /**
   * Address of sended who uses bucket _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Send nonce to determine bucket for _(12 bytes)_.
   *
   * {@link FLEX_SEND_NONCES_PER_BUCKET | Multiple} nonces can fit into one bucket.
   */
  nonce: FlexToHexValue;
}

/**
 * Encodes send bucket (i.e. mapping key).
 *
 * Bucket is owned by sender and can hold {@link FLEX_SEND_NONCES_PER_BUCKET | multiple} nonces.
 *
 * Related contracts:
 * - {@link !FlexSendStateBucket | `FlexSendStateBucket`}
 *
 * @param params Function {@link FlexEncodeSendStateBucketParams | parameters}.
 *
 * @returns Send bucket _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendStateBucket(params: FlexEncodeSendStateBucketParams): FlexHex {
  const nonce = BigInt(flexToHex(params.nonce, 12));
  const nonceBucket = nonce / FLEX_SEND_NONCES_PER_BUCKET;
  return flexConcatHex([flexToHex(params.sender, 20), flexToHex(nonceBucket, 12)]);
}

/**
 * Parameters for {@link flexEncodeSendStateOffset} function.
 *
 * @category Send
 */
export interface FlexEncodeSendStateOffsetParams {
  /**
   * Nonce to calculate send state offset in bucket for _(12 bytes)_.
   */
  nonce: FlexToHexValue;
}

/**
 * Encodes send bucket state bitmap offset value (i.e. mapping value internals).
 *
 * Helps to find exact position of given nonce state in {@link flexEncodeSendStateBucket | calculated bucket} value
 * that holds {@link FLEX_SEND_NONCES_PER_BUCKET | multiple} nonces.
 *
 * Related contracts:
 * - {@link !FlexSendStateBucket | `FlexSendStateBucket`}
 *
 * @param params Function {@link FlexEncodeSendStateOffsetParams | parameters}.
 *
 * @returns Send state offset in bucket bitmap _(1 byte)_.
 *
 * @category Send
 */
export function flexEncodeSendStateOffset(params: FlexEncodeSendStateOffsetParams): bigint {
  const nonce = BigInt(flexToHex(params.nonce, 12));
  const nonceOffset = nonce % FLEX_SEND_NONCES_PER_BUCKET;
  return nonceOffset;
}

/**
 * Parameters for {@link flexEncodeSendBucketStateData} function.
 *
 * @category Send
 */
export interface FlexEncodeSendBucketStateDataParams {
  /**
   * Send bucket hash, i.e current send accumulator state _(20 bytes)_.
   */
  hash: FlexToHexValue;

  /**
   * Send bucket bitmap of multiple send operation states _(12 bytes)_.
   */
  state: FlexToHexValue;
}

/**
 * Encodes send bucket state data (i.e. mapping value).
 *
 * Related contracts:
 * - {@link !FlexSendBucketStateData | `FlexSendBucketStateData`}
 *
 * @param params Function {@link FlexEncodeSendBucketStateDataParams | parameters}.
 *
 * @returns Encoded send bucket state data _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendBucketStateData(params: FlexEncodeSendBucketStateDataParams): FlexHex {
  return flexConcatHex([flexToHex(params.hash, 20), flexToHex(params.state, 12)]);
}
