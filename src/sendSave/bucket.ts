import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendSaveStateBucket} function.
 *
 * @category Send Save
 */
export interface FlexEncodeSendSaveStateBucketParams {
  /**
   * Address of send saver i.e. save {@link slot} provider _(20 bytes)_.
   */
  saver: FlexToHexValue;

  /**
   * Slot index of the send {@link saver} _(12 bytes)_.
   */
  slot: FlexToHexValue;
}

/**
 * Encodes send save bucket (i.e. mapping key).
 *
 * Send save bucket corresponds to send saver address and selected slot index, which can be re-used.
 *
 * Related contracts:
 * - {@link !FlexSendSaveStateBucket | `FlexSendSaveStateBucket`}
 *
 * @param params Function {@link FlexEncodeSendSaveStateBucketParams | parameters}.
 *
 * @returns Send Save bucket _(32 bytes)_.
 *
 * @category Send Save
 */
export function flexEncodeSendSaveStateBucket(params: FlexEncodeSendSaveStateBucketParams): FlexHex {
  return flexConcatHex([flexToHex(params.saver, 20), flexToHex(params.slot, 12)]);
}
