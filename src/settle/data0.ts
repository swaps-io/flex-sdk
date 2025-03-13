import { AsHexValue, Hex, getExternal } from '../external/inner';
import { flexPackFlags } from '../flags';

export interface FlexEncodeSettleData0Params {
  confirm: boolean;
  receiver: AsHexValue;
}

export function flexEncodeSettleData0(params: FlexEncodeSettleData0Params): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(0, 8), e.asHex(flexPackFlags([params.confirm], 31), 4), e.asHex(params.receiver, 20)]);
}
