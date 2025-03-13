import { flexCalcAccumulatorHash } from '../accumulator';
import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeSendAccumulatorDataParams {
  orderHash: AsHexValue;
  start: AsHexValue;
}

export function flexEncodeSendAccumulatorData({ orderHash, start }: FlexEncodeSendAccumulatorDataParams): Hex {
  const e = getExternal();

  return e.concatHex([e.sliceHex(e.asHex(orderHash, 32), 0, 26), e.asHex(start, 6)]);
}

export interface FlexCalcSendAccumulatorHashParams {
  hashBefore: AsHexValue;
  orderHash: AsHexValue;
  start: AsHexValue;
}

export function flexCalcSendAccumulatorHash({ hashBefore, orderHash, start }: FlexCalcSendAccumulatorHashParams): Hex {
  const hashToAdd = flexEncodeSendAccumulatorData({ orderHash, start });
  return flexCalcAccumulatorHash({ hashBefore, hashToAdd });
}
