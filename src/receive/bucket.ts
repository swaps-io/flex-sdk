import { FLEX_RECEIVE_NONCES_PER_BUCKET } from '../constants';
import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

export interface FlexEncodeReceiveStateBucketParams {
  receiver: FlexToHexValue;
  nonce: FlexToHexValue;
}

export function flexEncodeReceiveStateBucket(params: FlexEncodeReceiveStateBucketParams): FlexHex {
  const nonce = BigInt(flexToHex(params.nonce, 12));
  const nonceBucket = nonce / FLEX_RECEIVE_NONCES_PER_BUCKET;

  return flexConcatHex([flexToHex(params.receiver, 20), flexToHex(nonceBucket, 12)]);
}

export interface FlexEncodeReceiveStateOffsetParams {
  nonce: FlexToHexValue;
}

export function flexEncodeReceiveStateOffset(params: FlexEncodeReceiveStateOffsetParams): bigint {
  const nonce = BigInt(flexToHex(params.nonce, 12));
  const nonceOffset = nonce % FLEX_RECEIVE_NONCES_PER_BUCKET;
  return nonceOffset;
}

export interface FlexEncodeReceiveBucketStateDataParams {
  hash: FlexToHexValue;
  state: FlexToHexValue;
}

export function flexEncodeReceiveBucketStateData(params: FlexEncodeReceiveBucketStateDataParams): FlexHex {
  return flexConcatHex([flexToHex(params.hash, 20), flexToHex(params.state, 12)]);
}
