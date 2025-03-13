import { flexCalcAccumulatorHash } from '../accumulator';
import { AsHexValue, Hex, asHex } from '../external';

export interface FlexEncodeReceiveAccumulatorHashParams {
  orderHash: AsHexValue;
}

export function flexEncodeReceiveAccumulatorHash({ orderHash }: FlexEncodeReceiveAccumulatorHashParams): Hex {
  return asHex(orderHash, 32);
}

export interface FlexCalcReceiveAccumulatorHashParams {
  hashBefore: AsHexValue;
  orderHash: AsHexValue;
}

export function flexCalcReceiveAccumulatorHash({ hashBefore, orderHash }: FlexCalcReceiveAccumulatorHashParams): Hex {
  const hashToAdd = flexEncodeReceiveAccumulatorHash({ orderHash });
  return flexCalcAccumulatorHash({ hashBefore, hashToAdd });
}
