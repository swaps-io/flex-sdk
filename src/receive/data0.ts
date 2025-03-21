import { FLEX_MAX_RECEIVE_DEADLINE } from '../constants';
import { FlexError, FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';
import { flexPackFlags } from '../flags';

/**
 * Parameters for {@link flexEncodeReceiveData0} function.
 *
 * @category Receive
 */
export interface FlexEncodeReceiveData0Params {
  /**
   * Should verify signature provided by signing party as _contract_ one rather than EOA.
   */
  contractSignature: boolean;

  /**
   * Should not wrap signed message into EIP-191, i.e. signing party provided signature of _raw_ data hash.
   *
   * @default false
   */
  noMessageSignatureWrap?: boolean;

  /**
   * Should not fallback to verification as _contract_ signature after failed EOA check. In other words, asserts
   * the signature is known to be EOA and should not be attempted as contract one.
   *
   * @default false
   */
  noRetryAsContractSignature?: boolean;

  /**
   * Deadline of receive operation, i.e. time after which attempt to perform receive operation will fail _(6 bytes)_.
   *
   * Should not exceed {@link FLEX_MAX_RECEIVE_DEADLINE | max supported value}.
   */
  deadline: FlexToHexValue;

  /**
   * Address of expected receive caller _(20 bytes)_.
   */
  receiver: FlexToHexValue;

  /**
   * Nonce of receive operation selected by {@link receiver} _(6 bytes)_.
   */
  nonce: FlexToHexValue;
}

/**
 * Encodes data #0 for receive contract call.
 *
 * > [!TIP]
 * >
 * > Use higher-level component-specialized functions instead.
 *
 * Related contracts:
 * - {@link !FlexReceiveData | `FlexReceiveData`}
 *
 * @param params Function {@link FlexEncodeReceiveData0Params | parameters}.
 *
 * @returns Receive data #0 _(32 bytes)_.
 *
 * @category Receive
 */
export function flexEncodeReceiveData0(params: FlexEncodeReceiveData0Params): FlexHex {
  const deadline = BigInt(flexToHex(params.deadline, 4));
  if (deadline > FLEX_MAX_RECEIVE_DEADLINE) {
    throw new FlexError('Flex receive deadline exceeds max value');
  }

  return flexConcatHex([
    flexToHex(
      flexPackFlags([params.contractSignature, params.noMessageSignatureWrap, params.noRetryAsContractSignature], 45) |
        deadline,
      6,
    ),
    flexToHex(params.nonce, 6),
    flexToHex(params.receiver, 20),
  ]);
}
