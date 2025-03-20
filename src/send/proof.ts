import { FlexBranch } from '../branch';
import { flexAssignComponentDomain } from '../component';
import { FLEX_SEND_PROOF_BASE_HASH_SKIP, FLEX_SEND_PROOF_NATIVE_DATA3 } from '../constants';
import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeSendProof} function.
 *
 * @category Send
 */
export interface FlexEncodeSendProofParams {
  /**
   * Proof variant index for routing header _(32 bytes)_.
   */
  variant: FlexToHexValue;

  /**
   * Domain send component data was assigned to _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Send component data _(32 bytes each)_.
   */
  data: {
    sendData:
      | [FlexToHexValue, FlexToHexValue, FlexToHexValue]
      | [FlexToHexValue, FlexToHexValue, FlexToHexValue, FlexToHexValue];
  };

  /**
   * _Accumulator_ branch containing:
   * - Branch to send component in the order.
   * - Send accumulator data:
   *   - For positive event: from hash before occurred send operation to saved send.
   *   - For negative event: from base hash before send operation start to saved send after send deadline.
   */
  branch: Readonly<FlexBranch>;

  /**
   * Save bucket value (obtainable from `FlexSendSave` event) _(32 bytes)_.
   */
  saveBucket: FlexToHexValue;

  /**
   * Save time (obtainable from `FlexSendSave` event) _(32 bytes)_.
   */
  saveTime: FlexToHexValue;
}

/**
 * Encodes send proof data.
 *
 * Proof can be used for verifying both send success and failure events.
 *
 * Send proof requires preliminary {@link flexEncodeSaveSendData0 | send save} operation and its event data.
 *
 * Related contracts:
 * - {@link !FlexSendProofVerifier | `FlexSendProofVerifier`}
 * - {@link !IFlexSendProofVerifier | `IFlexSendProofVerifier`}
 * - {@link !IFlexSaveSend | `IFlexSaveSend`}
 * - {@link !FlexSendSave | `FlexSendSave`}
 *
 * @param params Function {@link FlexEncodeSaveSendData0Params | parameters}.
 *
 * @returns Send proof hex data _(≥320 bytes)_.
 *
 * @category Send
 */
export function flexEncodeSendProof(params: FlexEncodeSendProofParams): FlexHex {
  let data = params.data.sendData;
  if (data.length === 3) {
    data = [...data, FLEX_SEND_PROOF_NATIVE_DATA3]; // Native sendData3
  }

  return flexConcatHex([
    // ProofHeader
    flexToHex(params.variant, 32), // #0: variant
    // FlexSendProofData
    flexAssignComponentDomain({ domain: params.domain, data: data[0] }), // #1: sendData0
    ...data.slice(1).map((d) => flexToHex(d, 32)), // #2: sendData1, #3: sendData2, #4: sendData3
    flexToHex(288, 32), // #5: orderBranch offset (#9x32)
    FLEX_SEND_PROOF_BASE_HASH_SKIP, // #6: failBaseHash
    flexToHex(params.saveBucket, 32), // #7: saveBucket
    flexConcatHex([flexToHex(0, 26), flexToHex(params.saveTime, 6)]), // #8: saveTime
    flexToHex(params.branch.length, 32), // #9: orderBranch length
    ...params.branch, // #10+: orderBranch
  ]);
}
