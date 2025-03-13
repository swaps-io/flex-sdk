import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexAssignComponentDomainParams {
  domain: AsHexValue;
  data: AsHexValue;
}

export function flexAssignComponentDomain(params: FlexAssignComponentDomainParams): Hex {
  const e = getExternal();

  return e.concatHex([e.asHex(params.domain, 8), e.sliceHex(e.asHex(params.data, 32), 8)]);
}
