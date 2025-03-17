import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeSendData1Params {
  start: FlexToHexValue;
  duration: FlexToHexValue;
  group: FlexToHexValue;
  receiver: FlexToHexValue;
}

export function flexEncodeSendData1(params: FlexEncodeSendData1Params): FlexHex {
  return flexConcatHex([
    flexToHex(params.start, 6),
    flexToHex(params.duration, 4),
    flexToHex(params.group, 2),
    flexToHex(params.receiver, 20),
  ]);
}
