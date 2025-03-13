import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSendData1Params {
  start: AsHexValue;
  duration: AsHexValue;
  group: AsHexValue;
  receiver: AsHexValue;
}

export function flexEncodeSendData1(params: FlexEncodeSendData1Params): Hex {
  const e = getExternal();

  return e.concatHex([
    e.asHex(params.start, 6),
    e.asHex(params.duration, 4),
    e.asHex(params.group, 2),
    e.asHex(params.receiver, 20),
  ]);
}
