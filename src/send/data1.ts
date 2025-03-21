import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendData1} function.
 *
 * @category Send
 */
export interface FlexEncodeSendData1Params {
  /**
   * Start of send operation _(6 bytes)_.
   *
   * Send operation cannot be performed earlier than this time. Also serves for controlling send operations
   * _chronological_ order.
   */
  start: FlexToHexValue;

  /**
   * Duration of send operation _(6 bytes)_.
   *
   * Forms _deadline_ when added to {@link start}. Attempt to perform send operation after the deadline will fail.
   */
  duration: FlexToHexValue;

  /**
   * Send group index selected by the {@link FlexEncodeSendData0Params.sender | sender} _(6 bytes)_.
   */
  group: FlexToHexValue;

  /**
   * Address of receiver of sent asset _(20 bytes)_.
   */
  receiver: FlexToHexValue;
}

/**
 * Encodes data #1 for send contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSendData | `FlexSendData`}
 *
 * @param params Function {@link FlexEncodeSendData1Params | parameters}.
 *
 * @returns Send data #1 _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendData1(params: FlexEncodeSendData1Params): FlexHex {
  return flexConcatHex([
    flexToHex(params.start, 6),
    flexToHex(params.duration, 4),
    flexToHex(params.group, 2),
    flexToHex(params.receiver, 20),
  ]);
}
