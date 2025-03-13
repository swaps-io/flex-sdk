import { FLEX_RECEIVE_NONCES_PER_BUCKET } from '../constants';
import { AsHexValue, Hex, getExternal } from '../external/inner';

export interface FlexEncodeReceiveStateBucketParams {
  receiver: AsHexValue;
  nonce: AsHexValue;
}

export function flexEncodeReceiveStateBucket(params: FlexEncodeReceiveStateBucketParams): Hex {
  const e = getExternal();
  const nonce = BigInt(e.asHex(params.nonce, 12));
  const nonceBucket = nonce / FLEX_RECEIVE_NONCES_PER_BUCKET;

  return e.concatHex([e.asHex(params.receiver, 20), e.asHex(nonceBucket, 12)]);
}

export interface FlexEncodeReceiveStateOffsetParams {
  nonce: AsHexValue;
}

export function flexEncodeReceiveStateOffset(params: FlexEncodeReceiveStateOffsetParams): bigint {
  const e = getExternal();
  const nonce = BigInt(e.asHex(params.nonce, 12));
  const nonceOffset = nonce % FLEX_RECEIVE_NONCES_PER_BUCKET;
  return nonceOffset;
}

export interface FlexEncodeReceiveBucketStateDataParams {
  hash: AsHexValue;
  state: AsHexValue;
}

export function flexEncodeReceiveBucketStateData(params: FlexEncodeReceiveBucketStateDataParams): Hex {
  const e = getExternal();
  return e.concatHex([e.asHex(params.hash, 20), e.asHex(params.state, 12)]);
}
