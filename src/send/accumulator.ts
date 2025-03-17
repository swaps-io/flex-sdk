import { flexCalcAccumulatorHash } from '../accumulator';
import { FlexHex, FlexToHexValue, flexConcatHex, flexSliceHex, flexToHex } from '../core';

export interface FlexEncodeSendAccumulatorDataParams {
  orderHash: FlexToHexValue;
  start: FlexToHexValue;
}

export function flexEncodeSendAccumulatorData({ orderHash, start }: FlexEncodeSendAccumulatorDataParams): FlexHex {
  return flexConcatHex([flexSliceHex(flexToHex(orderHash, 32), 0, 26), flexToHex(start, 6)]);
}

export interface FlexCalcSendAccumulatorHashParams {
  hashBefore: FlexToHexValue;
  orderHash: FlexToHexValue;
  start: FlexToHexValue;
}

export function flexCalcSendAccumulatorHash({
  hashBefore,
  orderHash,
  start,
}: FlexCalcSendAccumulatorHashParams): FlexHex {
  const hashToAdd = flexEncodeSendAccumulatorData({ orderHash, start });
  return flexCalcAccumulatorHash({ hashBefore, hashToAdd });
}
