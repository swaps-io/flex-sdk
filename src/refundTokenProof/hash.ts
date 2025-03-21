import { FlexHex } from '../core';
import { FlexCalcSettleTokenProofHashParams, flexCalcSettleTokenProofHash } from '../settleTokenProof';

/**
 * Parameters for {@link flexCalcRefundTokenProofHash} function.
 *
 * @category Refund Token Proof
 */
export type FlexCalcRefundTokenProofHashParams = FlexCalcSettleTokenProofHashParams;

/**
 * Calculates hash of refund token proof component {@link flexEncodeRefundTokenProofData | data}.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenFacet | `FlexSettleTokenFacet`}
 * - {@link !IFlexSettleToken | `IFlexSettleToken`}
 * - {@link !FlexSettleTokenDomainFacet | `FlexSettleTokenDomainFacet`}
 * - {@link !IFlexSettleTokenDomain | `IFlexSettleTokenDomain`}
 *
 * @param params Function {@link FlexCalcRefundTokenProofHashParams | parameters}.
 *
 * @returns Refund token proof component data hash _(32 bytes)_.
 *
 * @category Refund Token Proof
 */
export function flexCalcRefundTokenProofHash(params: FlexCalcRefundTokenProofHashParams): FlexHex {
  return flexCalcSettleTokenProofHash(params);
}
