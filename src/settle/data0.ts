import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';
import { flexPackFlags } from '../flags';

/**
 * Parameters for {@link flexEncodeSettleData0} function.
 *
 * @category Settle
 */
export interface FlexEncodeSettleData0Params {
  /**
   * Should settle as confirmed. Otherwise considered refunded.
   *
   * Depending on this flag, different event is emitted: `FlexConfirm` or `FlexRefund` respectively.
   */
  confirm: boolean;

  /**
   * Address of asset receiver as result of settlement _(20 bytes)_.
   */
  receiver: FlexToHexValue;
}

/**
 * Encodes data #0 for settle contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleData | `FlexSettleData`}
 *
 * @param params Function {@link FlexEncodeSettleData0Params | parameters}.
 *
 * @returns Settle data #0 _(32 bytes)_.
 *
 * @category Settle
 */
export function flexEncodeSettleData0(params: FlexEncodeSettleData0Params): FlexHex {
  return flexConcatHex([
    flexToHex(0, 8),
    flexToHex(flexPackFlags([params.confirm], 31), 4),
    flexToHex(params.receiver, 20),
  ]);
}
