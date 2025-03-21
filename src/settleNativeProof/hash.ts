import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSettleProofHash } from '../settleProof';

import { FlexSettleNativeProofData } from './data';

/**
 * Parameters for {@link flexCalcSettleNativeProofHash} function.
 *
 * @category Settle Native Proof
 */
export interface FlexCalcSettleNativeProofHashParams {
  /**
   * Settle native proof domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Settle native proof component data to calculate hash of.
   */
  data: Pick<FlexSettleNativeProofData, 'settleProofData'>;
}

/**
 * Calculates hash of settle native proof component {@link flexEncodeSettleNativeProofData | data}.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleNativeProofFacet | `FlexSettleNativeProofFacet`}
 * - {@link !IFlexSettleNativeProof | `IFlexSettleNativeProof`}
 * - {@link !FlexSettleNativeProofDomainFacet | `FlexSettleNativeProofDomainFacet`}
 * - {@link !IFlexSettleNativeProofDomain | `IFlexSettleNativeProofDomain`}
 *
 * @param params Function {@link FlexCalcSettleNativeProofHashParams | parameters}.
 *
 * @returns Settle native proof component data hash _(32 bytes)_.
 *
 * @category Settle Native Proof
 */
export function flexCalcSettleNativeProofHash(params: FlexCalcSettleNativeProofHashParams): FlexHex {
  return flexCalcSettleProofHash({ domain: params.domain, data: params.data.settleProofData });
}
