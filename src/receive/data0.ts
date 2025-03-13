import { FLEX_MAX_RECEIVE_DEADLINE } from '../constants';
import { AsHexValue, Hex, getExternal } from '../external/inner';
import { flexPackFlags } from '../flags';

export interface FlexEncodeReceiveData0Params {
  contractSignature: boolean;
  noMessageSignatureWrap?: boolean;
  noRetryAsContractSignature?: boolean;
  deadline: AsHexValue;
  receiver: AsHexValue;
  nonce: AsHexValue;
}

export function flexEncodeReceiveData0(params: FlexEncodeReceiveData0Params): Hex {
  const e = getExternal();

  const deadline = BigInt(e.asHex(params.deadline, 4));
  if (deadline > FLEX_MAX_RECEIVE_DEADLINE) {
    throw new Error('Flex receive deadline exceeds max value');
  }

  return e.concatHex([
    e.asHex(
      flexPackFlags([params.contractSignature, params.noMessageSignatureWrap, params.noRetryAsContractSignature], 45) |
        deadline,
      6,
    ),
    e.asHex(params.nonce, 6),
    e.asHex(params.receiver, 20),
  ]);
}
