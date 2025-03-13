import { AsHexValue, Hex, getExternal } from '../external/inner';

import { flexAssignComponentDomain } from './domain';

export interface FlexCalcComponentHashParams {
  domain: AsHexValue;
  data: readonly [AsHexValue, ...AsHexValue[]];
}

export function flexCalcComponentHash(params: FlexCalcComponentHashParams): Hex {
  const e = getExternal();

  return e.keccak256(
    e.concatHex([
      flexAssignComponentDomain({ domain: params.domain, data: params.data[0] }),
      ...params.data.slice(1).map((d) => e.asHex(d, 32)),
    ]),
  );
}
