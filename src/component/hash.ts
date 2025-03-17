import { FlexHex, FlexToHexValue, flexCalcHash, flexConcatHex, flexToHex } from '../core';

import { flexAssignComponentDomain } from './domain';

export interface FlexCalcComponentHashParams {
  domain: FlexToHexValue;
  data: readonly [FlexToHexValue, ...FlexToHexValue[]];
}

export function flexCalcComponentHash(params: FlexCalcComponentHashParams): FlexHex {
  return flexCalcHash(
    flexConcatHex([
      flexAssignComponentDomain({ domain: params.domain, data: params.data[0] }),
      ...params.data.slice(1).map((d) => flexToHex(d, 32)),
    ]),
  );
}
