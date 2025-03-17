import { FLEX_MAX_PROOF_CHAIN } from '../constants/proof';
import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';
import { flexPackFlags } from '../flags';

export interface FlexEncodeSettleProofData0Params {
  confirm: boolean;
  eventChain: FlexToHexValue;
  receiver: FlexToHexValue;
}

export function flexEncodeSettleProofData0(params: FlexEncodeSettleProofData0Params): FlexHex {
  const eventChain = BigInt(flexToHex(params.eventChain, 4));
  if (eventChain > FLEX_MAX_PROOF_CHAIN) {
    throw new Error('Flex proof chain exceeds max value');
  }

  return flexConcatHex([
    flexToHex(0, 8),
    flexToHex(flexPackFlags([params.confirm], 31) | eventChain, 4),
    flexToHex(params.receiver, 20),
  ]);
}
