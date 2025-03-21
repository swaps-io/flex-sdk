import { FlexHex, FlexToHexValue, flexConcatHex, flexSliceHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexAssignComponentDomain} function.
 *
 * @category Component
 */
export interface FlexAssignComponentDomainParams {
  /**
   * Domain value to assign to {@link data} _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Data to assign {@link domain} to _(32 bytes)_.
   */
  data: FlexToHexValue;
}

/**
 * Assigns specified domain to component data.
 *
 * Original data may have zeros or some value for domain - it will be overwritten.
 *
 * Domain is assumed to be in most significant part _(8 bytes)_ of component data _(32 bytes)_.
 *
 * @param params Function {@link FlexAssignComponentDomainParams | parameters}.
 *
 * @returns Component data with new domain _(32 bytes)_.
 *
 * @category Component
 */
export function flexAssignComponentDomain(params: FlexAssignComponentDomainParams): FlexHex {
  return flexConcatHex([flexToHex(params.domain, 8), flexSliceHex(flexToHex(params.data, 32), 8)]);
}
