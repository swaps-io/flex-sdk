import { FLEX_MAX_PROOF_CHAIN } from '../constants/proof';
import { AsHexValue, Hex, getExternal } from '../external/inner';
import { flexPackFlags } from '../flags';

export interface FlexEncodeSettleProofData0Params {
  confirm: boolean;
  eventChain: AsHexValue;
  receiver: AsHexValue;
}

export function flexEncodeSettleProofData0(params: FlexEncodeSettleProofData0Params): Hex {
  const e = getExternal();

  const eventChain = BigInt(e.asHex(params.eventChain, 4));
  if (eventChain > FLEX_MAX_PROOF_CHAIN) {
    throw new Error('Flex proof chain exceeds max value');
  }

  return e.concatHex([
    e.asHex(0, 8),
    e.asHex(flexPackFlags([params.confirm], 31) | eventChain, 4),
    e.asHex(params.receiver, 20),
  ]);
}
