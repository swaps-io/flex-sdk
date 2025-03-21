import { FlexHex } from '../core';
import { FlexCalcSettleTokenHashParams, flexCalcSettleTokenHash } from '../settleToken';

/**
 * Parameters for {@link flexCalcRefundTokenHash} function.
 *
 * @category Refund Token
 */
export type FlexCalcRefundTokenHashParams = FlexCalcSettleTokenHashParams;

/**
 * Calculates hash of refund token component {@link flexEncodeRefundTokenData | data}.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenFacet | `FlexSettleTokenFacet`}
 * - {@link !IFlexSettleToken | `IFlexSettleToken`}
 * - {@link !FlexSettleTokenDomainFacet | `FlexSettleTokenDomainFacet`}
 * - {@link !IFlexSettleTokenDomain | `IFlexSettleTokenDomain`}
 *
 * @param params Function {@link FlexCalcRefundTokenHashParams | parameters}.
 *
 * @returns Refund token component data hash _(32 bytes)_.
 *
 * @category Refund Token
 */
export function flexCalcRefundTokenHash(params: FlexCalcRefundTokenHashParams): FlexHex {
  return flexCalcSettleTokenHash(params);
}
