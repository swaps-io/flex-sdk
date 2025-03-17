import { FlexHex, FlexToHexValue, flexConcatHex, flexSliceHex, flexToHex } from '../core';

export interface FlexAssignComponentDomainParams {
  domain: FlexToHexValue;
  data: FlexToHexValue;
}

export function flexAssignComponentDomain(params: FlexAssignComponentDomainParams): FlexHex {
  return flexConcatHex([flexToHex(params.domain, 8), flexSliceHex(flexToHex(params.data, 32), 8)]);
}
