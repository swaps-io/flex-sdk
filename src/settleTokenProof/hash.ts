import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSettleProofHash } from '../settleProof';

import { FlexSettleTokenProofData } from './data';

/**
 * Parameters for {@link flexCalcSettleTokenProofHash} function.
 *
 * @category Settle Token Proof
 */
export interface FlexCalcSettleTokenProofHashParams {
  /**
   * Settle token proof domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Settle token proof component data to calculate hash of.
   */
  data: Pick<FlexSettleTokenProofData, 'settleProofData'>;
}

/**
 * Calculates hash of settle token proof component {@link flexEncodeSettleTokenProofData | data}.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenProofFacet | `FlexSettleTokenProofFacet`}
 * - {@link !IFlexSettleTokenProof | `IFlexSettleTokenProof`}
 * - {@link !FlexSettleTokenProofDomainFacet | `FlexSettleTokenProofDomainFacet`}
 * - {@link !IFlexSettleTokenProofDomain | `IFlexSettleTokenProofDomain`}
 *
 * @param params Function {@link FlexCalcSettleTokenProofHashParams | parameters}.
 *
 * @returns Settle token proof component data hash _(32 bytes)_.
 *
 * @category Settle Token Proof
 */
export function flexCalcSettleTokenProofHash(params: FlexCalcSettleTokenProofHashParams): FlexHex {
  return flexCalcSettleProofHash({ domain: params.domain, data: params.data.settleProofData });
}
