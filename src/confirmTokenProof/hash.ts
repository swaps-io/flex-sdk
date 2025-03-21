import { FlexHex } from '../core';
import { FlexCalcSettleTokenProofHashParams, flexCalcSettleTokenProofHash } from '../settleTokenProof';

/**
 * Parameters for {@link flexCalcConfirmTokenProofHash} function.
 *
 * @category Confirm Token Proof
 */
export type FlexCalcConfirmTokenProofHashParams = FlexCalcSettleTokenProofHashParams;

/**
 * Calculates hash of confirm token proof component {@link flexEncodeConfirmTokenProofData | data}.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenFacet | `FlexSettleTokenFacet`}
 * - {@link !IFlexSettleToken | `IFlexSettleToken`}
 * - {@link !FlexSettleTokenDomainFacet | `FlexSettleTokenDomainFacet`}
 * - {@link !IFlexSettleTokenDomain | `IFlexSettleTokenDomain`}
 *
 * @param params Function {@link FlexCalcConfirmTokenProofHashParams | parameters}.
 *
 * @returns Confirm token proof component data hash _(32 bytes)_.
 *
 * @category Confirm Token Proof
 */
export function flexCalcConfirmTokenProofHash(params: FlexCalcConfirmTokenProofHashParams): FlexHex {
  return flexCalcSettleTokenProofHash(params);
}
