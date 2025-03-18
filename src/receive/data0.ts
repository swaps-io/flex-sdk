import { FLEX_MAX_RECEIVE_DEADLINE } from '../constants';
import { FlexError, FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';
import { flexPackFlags } from '../flags';

export interface FlexEncodeReceiveData0Params {
  contractSignature: boolean;
  noMessageSignatureWrap?: boolean;
  noRetryAsContractSignature?: boolean;
  deadline: FlexToHexValue;
  receiver: FlexToHexValue;
  nonce: FlexToHexValue;
}

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
