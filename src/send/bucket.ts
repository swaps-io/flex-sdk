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
   * Group send is performed in _(12 bytes)_.
   */
  group: FlexToHexValue;
}

/**
 * Encodes send bucket (i.e. mapping key).
 *
 * Bucket is owned by sender and targets selected send group.
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
  return flexConcatHex([flexToHex(params.sender, 20), flexToHex(params.group, 12)]);
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
   * Start time of last recorded swap send operation to keep chronology _(6 bytes)_.
   */
  time: FlexToHexValue;
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
  return flexConcatHex([flexToHex(params.hash, 20), flexToHex(0, 6), flexToHex(params.time, 6)]);
}
