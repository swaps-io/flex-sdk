import { FlexBranch } from '../branch';
import { flexAssignComponentDomain } from '../component';
import { FLEX_SEND_PROOF_BASE_HASH_SKIP, FLEX_SEND_PROOF_NATIVE_DATA3 } from '../constants';
import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSendProofParams {
  variant: AsHexValue;
  domain: AsHexValue;
  data: { sendData: [AsHexValue, AsHexValue, AsHexValue] | [AsHexValue, AsHexValue, AsHexValue, AsHexValue] };
  branch: Readonly<FlexBranch>;
  saveBucket: AsHexValue;
  saveTime: AsHexValue;
}

export function flexEncodeSendProof(params: FlexEncodeSendProofParams): Hex {
  const e = getExternal();
  let data = params.data.sendData;
  if (data.length === 3) {
    data = [...data, FLEX_SEND_PROOF_NATIVE_DATA3]; // Native sendData3
  }

  return e.concatHex([
    // ProofHeader
    e.asHex(params.variant, 32), // #0: variant
    // FlexSendProofData
    flexAssignComponentDomain({ domain: params.domain, data: data[0] }), // #1: sendData0
    ...data.slice(1).map((d) => e.asHex(d, 32)), // #2: sendData1, #3: sendData2, #4: sendData3
    e.asHex(288, 32), // #5: orderBranch offset (#9x32)
    FLEX_SEND_PROOF_BASE_HASH_SKIP, // #6: failBaseHash
    e.asHex(params.saveBucket, 32), // #7: saveBucket
    e.concatHex([e.asHex(0, 26), e.asHex(params.saveTime, 6)]), // #8: saveTime
    e.asHex(params.branch.length, 32), // #9: orderBranch length
    ...params.branch, // #10+: orderBranch
  ]);
}
