import { FLEX_MAX_PROOF_CHAIN } from '../constants';
import { FlexError, FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';
import { flexPackFlags } from '../flags';

/**
 * Parameters for {@link flexEncodeSettleProofData0} function.
 *
 * @category Settle Proof
 */
export interface FlexEncodeSettleProofData0Params {
  /**
   * Should settle as confirmed. Otherwise considered refunded.
   *
   * Depending on this flag, different event is emitted: `FlexConfirm` or `FlexRefund` respectively.
   */
  confirm: boolean;

  /**
   * Chain ID of proof event that authorizes this settle operation _(4 bytes)_.
   *
   * Should not exceed {@link FLEX_MAX_PROOF_CHAIN | max supported value}.
   */
  eventChain: FlexToHexValue;

  /**
   * Address of asset receiver as result of settlement _(20 bytes)_.
   */
  receiver: FlexToHexValue;
}

/**
 * Encodes data #0 for settle proof contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexSettleProofData | `FlexSettleProofData`}
 *
 * @param params Function {@link FlexEncodeSettleProofData0Params | parameters}.
 *
 * @returns Settle proof data #0 _(32 bytes)_.
 *
 * @category Settle Proof
 */
export function flexEncodeSettleProofData0(params: FlexEncodeSettleProofData0Params): FlexHex {
  const eventChain = BigInt(flexToHex(params.eventChain, 4));
  if (eventChain > FLEX_MAX_PROOF_CHAIN) {
    throw new FlexError('Flex proof chain exceeds max value');
  }

  return flexConcatHex([
    flexToHex(0, 8),
    flexToHex(flexPackFlags([params.confirm], 31) | eventChain, 4),
    flexToHex(params.receiver, 20),
  ]);
}
