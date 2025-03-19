/**
 * Special value for `FlexSendProofData.failBaseHash` field to skip the base hash inclusion (i.e. no hashes after base
 * hash before) during accumulator calculation _(32 bytes)_.
 *
 * Related contracts:
 * - {@link !FlexSendProofData | `FlexSendProofData`}
 *
 * @category Constants • Send Proof
 */
export const FLEX_SEND_PROOF_BASE_HASH_SKIP = '0x0000000000000000000000000000000000000000000000000000000000000000';

/**
 * Special value for `FlexSendProofData.sendData3` field when proofing native send _(32 bytes)_.
 *
 * Related contracts:
 * - {@link !FlexSendProofData | `FlexSendProofData`}
 *
 * @category Constants • Send Proof
 */
export const FLEX_SEND_PROOF_NATIVE_DATA3 = '0x0000000000000000000000000000000000000000000000000000000000000000';
