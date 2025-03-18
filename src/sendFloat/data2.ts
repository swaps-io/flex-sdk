import { FLEX_SEND_FLOAT_MAX_AMOUNT } from '../constants';
import { FlexError, FlexHex, FlexToHexValue, flexToHex } from '../core';
import { flexPackFlags } from '../flags';

export interface FlexEncodeSendFloatData2Params {
  amount: FlexToHexValue;
  skipAmountEmit?: boolean;
}

export function flexEncodeSendFloatData2(params: FlexEncodeSendFloatData2Params): FlexHex {
  const amount = BigInt(flexToHex(params.amount, 32));
  if (amount > FLEX_SEND_FLOAT_MAX_AMOUNT) {
    throw new FlexError('Flex send float amount exceeds max value');
  }

  return flexToHex(flexPackFlags([params.skipAmountEmit], 255) | amount, 32);
}
