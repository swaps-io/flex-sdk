import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';
import { flexPackFlags } from '../flags';

export interface FlexEncodeSettleData0Params {
  confirm: boolean;
  receiver: FlexToHexValue;
}

export function flexEncodeSettleData0(params: FlexEncodeSettleData0Params): FlexHex {
  return flexConcatHex([
    flexToHex(0, 8),
    flexToHex(flexPackFlags([params.confirm], 31), 4),
    flexToHex(params.receiver, 20),
  ]);
}
