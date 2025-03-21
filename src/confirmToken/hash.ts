import { FlexHex } from '../core';
import { FlexCalcSettleTokenHashParams, flexCalcSettleTokenHash } from '../settleToken';

/**
 * Parameters for {@link flexCalcConfirmTokenHash} function.
 *
 * @category Confirm Token
 */
export type FlexCalcConfirmTokenHashParams = FlexCalcSettleTokenHashParams;

/**
 * Calculates hash of confirm token component {@link flexEncodeConfirmTokenData | data}.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenFacet | `FlexSettleTokenFacet`}
 * - {@link !IFlexSettleToken | `IFlexSettleToken`}
 * - {@link !FlexSettleTokenDomainFacet | `FlexSettleTokenDomainFacet`}
 * - {@link !IFlexSettleTokenDomain | `IFlexSettleTokenDomain`}
 *
 * @param params Function {@link FlexCalcConfirmTokenHashParams | parameters}.
 *
 * @returns Confirm token component data hash _(32 bytes)_.
 *
 * @category Confirm Token
 */
export function flexCalcConfirmTokenHash(params: FlexCalcConfirmTokenHashParams): FlexHex {
  return flexCalcSettleTokenHash(params);
}
