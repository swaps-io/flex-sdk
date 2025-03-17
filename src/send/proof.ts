import { FlexBranch } from '../branch';
import { flexAssignComponentDomain } from '../component';
import { FLEX_SEND_PROOF_BASE_HASH_SKIP, FLEX_SEND_PROOF_NATIVE_DATA3 } from '../constants';
import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeSendProofParams {
  variant: FlexToHexValue;
  domain: FlexToHexValue;
  data: {
    sendData:
      | [FlexToHexValue, FlexToHexValue, FlexToHexValue]
      | [FlexToHexValue, FlexToHexValue, FlexToHexValue, FlexToHexValue];
  };
  branch: Readonly<FlexBranch>;
  saveBucket: FlexToHexValue;
  saveTime: FlexToHexValue;
}

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
