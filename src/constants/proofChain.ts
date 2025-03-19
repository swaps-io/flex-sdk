/**
 * Max chain ID value supported by cross-chain proof contracts _(4 bytes)_.
 *
 * Related contracts:
 * - {@link !FlexSettleProofData | `FlexSettleProofData`}
 *
 * @category Constants • Proof Chain
 */
export const FLEX_MAX_PROOF_CHAIN = (1n << 31n) - 1n;
