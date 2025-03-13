import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSaveSendDataParams {
  slot: AsHexValue;
  group: AsHexValue;
  sender: AsHexValue;
}

export function flexEncodeSaveSendData(params: FlexEncodeSaveSendDataParams): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(params.slot, 6), e.asHex(params.group, 6), e.asHex(params.sender, 20)]);
}
