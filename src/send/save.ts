import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSaveSendData0} function.
 *
 * @category Send
 */
export interface FlexEncodeSaveSendData0Params {
  /**
   * Address of sender who performed target send operation _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Group of sender target send operation was performed in _(6 bytes)_.
   */
  group: FlexToHexValue;

  /**
   * Index of slot belonging to saver account to save send info to _(6 bytes)_.
   */
  slot: FlexToHexValue;
}

/**
 * Encodes data #0 for save send contract call.
 *
 * Saving send information allows to {@link flexEncodeSendProof | prove} send success or its failure later on. Save
 * operations writes current state of specified send bucket to selected slot belonging to save caller. This allows to
 * re-use slots for other future saves.
 *
 * > [!TIP]
 * >
 * > Time of the save operation may affect future send proof cost. This is because info is stored in accumulator, where
 * > new events can be added, making proof sequence longer. Saving stops this process, so preferred to be performed as
 * > close as possible to:
 * > - Successful send operation for proofing the positive event.
 * > - After send deadline exceeded for proofing the negative event.
 * >
 * > Note that for send fail proof _will not succeed_ if save time is _before deadline_.
 *
 * Save operation emits `FlexSendSave` event containing useful info for proofing.
 *
 * Related contracts:
 * - {@link !FlexSaveSendData | `FlexSaveSendData`}
 * - {@link !FlexSaveSendFacet | `FlexSaveSendFacet`}
 * - {@link !IFlexSaveSend | `IFlexSaveSend`}
 * - {@link !FlexSendProofVerifier | `FlexSendProofVerifier`}
 * - {@link !IFlexSendProofVerifier | `IFlexSendProofVerifier`}
 * - {@link !FlexSendSave | `FlexSendSave`}
 *
 * @param params Function {@link FlexEncodeSaveSendData0Params | parameters}.
 *
 * @returns Save send data #0 _(32 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSaveSendData0(params: FlexEncodeSaveSendData0Params): FlexHex {
  return flexConcatHex([flexToHex(params.slot, 6), flexToHex(params.group, 6), flexToHex(params.sender, 20)]);
}
