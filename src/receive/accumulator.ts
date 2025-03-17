import { flexCalcAccumulatorHash } from '../accumulator';
import { FlexHex, FlexToHexValue, flexToHex } from '../core';

export interface FlexEncodeReceiveAccumulatorHashParams {
  orderHash: FlexToHexValue;
}

export function flexEncodeReceiveAccumulatorHash({ orderHash }: FlexEncodeReceiveAccumulatorHashParams): FlexHex {
  return flexToHex(orderHash, 32);
}

export interface FlexCalcReceiveAccumulatorHashParams {
  hashBefore: FlexToHexValue;
  orderHash: FlexToHexValue;
}

export function flexCalcReceiveAccumulatorHash({
  hashBefore,
  orderHash,
}: FlexCalcReceiveAccumulatorHashParams): FlexHex {
  const hashToAdd = flexEncodeReceiveAccumulatorHash({ orderHash });
  return flexCalcAccumulatorHash({ hashBefore, hashToAdd });
}
