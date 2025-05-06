import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendData1} function.
 *
 * @category Send
 */
export interface FlexEncodeSendData1Params {
  /**
   * Deadline of send operation, i.e. time after which attempt to perform send operation will fail _(6 bytes)_.
   */
  deadline: FlexToHexValue;

  /**
   * Nonce of send operation selected by sender _(6 bytes)_.
   */
  nonce: FlexToHexValue;

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
  return flexConcatHex([flexToHex(params.deadline, 6), flexToHex(params.nonce, 6), flexToHex(params.receiver, 20)]);
}
