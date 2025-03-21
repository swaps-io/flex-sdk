import { FlexHex, FlexToHexValue } from '../core';
import { flexCalcSettleHash } from '../settle';

import { FlexSettleTokenData } from './data';

/**
 * Parameters for {@link flexCalcSettleTokenHash} function.
 *
 * @category Settle Token
 */
export interface FlexCalcSettleTokenHashParams {
  /**
   * Settle token domain to calculate component hash for _(8 bytes)_.
   */
  domain: FlexToHexValue;

  /**
   * Settle token component data to calculate hash of.
   */
  data: Pick<FlexSettleTokenData, 'settleData'>;
}

/**
 * Calculates hash of settle token component {@link flexEncodeSettleTokenData | data}.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleTokenFacet | `FlexSettleTokenFacet`}
 * - {@link !IFlexSettleToken | `IFlexSettleToken`}
 * - {@link !FlexSettleTokenDomainFacet | `FlexSettleTokenDomainFacet`}
 * - {@link !IFlexSettleTokenDomain | `IFlexSettleTokenDomain`}
 *
 * @param params Function {@link FlexCalcSettleTokenHashParams | parameters}.
 *
 * @returns Settle token component data hash _(32 bytes)_.
 *
 * @category Settle Token
 */
export function flexCalcSettleTokenHash(params: FlexCalcSettleTokenHashParams): FlexHex {
  return flexCalcSettleHash({ domain: params.domain, data: params.data.settleData });
}
