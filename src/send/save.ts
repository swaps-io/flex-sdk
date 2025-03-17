import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeSaveSendDataParams {
  slot: FlexToHexValue;
  group: FlexToHexValue;
  sender: FlexToHexValue;
}

export function flexEncodeSaveSendData(params: FlexEncodeSaveSendDataParams): FlexHex {
  return flexConcatHex([flexToHex(params.slot, 6), flexToHex(params.group, 6), flexToHex(params.sender, 20)]);
}
