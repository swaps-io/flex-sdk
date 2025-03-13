import { asHex, AsHexValue, concatHex, Hex } from '../external';

export interface FlexEncodeSendData1Params {
  start: AsHexValue;
  duration: AsHexValue;
  group: AsHexValue;
  receiver: AsHexValue;
}

export function flexEncodeSendData1(params: FlexEncodeSendData1Params): Hex {
  return concatHex([
    asHex(params.start, 6),
    asHex(params.duration, 4),
    asHex(params.group, 2),
    asHex(params.receiver, 20),
  ]);
}
