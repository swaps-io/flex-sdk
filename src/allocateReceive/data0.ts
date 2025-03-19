import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeAllocateReceiveData0} function.
 *
 * @category Allocate Receive
 */
export interface FlexEncodeAllocateReceiveData0Params {
  /**
   * Address of receiver to allocate nonce buckets (slots) for (20 bytes).
   */
  receiver: FlexToHexValue;

  /**
   * Nonce to calculate allocation start bucket (slot) from (6 bytes).
   *
   * > [!TIP]
   * >
   * > Preferred to be nonce equal to empty bucket start that has {@link totalBuckets | multiple} empty buckets after.
   * >
   * > Attempts to allocate to existing buckets are skipped with no reverts, yet wasting some gas.
   */
  startNonce: FlexToHexValue;

  /**
   * Total number of receive buckets (slots) to allocate sequentially from with the {@link startNonce | start one}
   * (6 bytes).
   *
   * > [!WARNING]
   * >
   * > This parameter represents number of _storage slots_, NOT number of _nonces_.
   */
  totalBuckets: FlexToHexValue;
}

/**
 * Encodes data #0 for allocate receive contract call.
 *
 * Receive allocation allows to pre-occupy a range of _cold_ (empty) storage slots for later use as _hot_ ones. This can
 * save costs (allocating slots when gas is cheaper) and allows to avoid allocation unevenness (when slots are limited
 * in use and new ones are needed from time to time).
 *
 * If allocation range contains already occupied slots - those are simply skipped with no reverts. For this reason
 * caller should be mindful about managing allocation ranges to avoid unnecessary gas waste on-chain.
 *
 * Related contracts:
 * - {@link !FlexReceiveAllocateData | `FlexReceiveAllocateData`}
 * - {@link !FlexAllocateReceiveFacet | `FlexAllocateReceiveFacet`}
 * - {@link !IFlexAllocateReceive | `IFlexAllocateReceive`}
 *
 * @param params Function {@link FlexEncodeAllocateReceiveData0Params | parameters}.
 *
 * @returns Allocate receive data #0 (32 bytes).
 *
 * @category Allocate Receive
 */
export function flexEncodeAllocateReceiveData0(params: FlexEncodeAllocateReceiveData0Params): FlexHex {
  return flexConcatHex([
    flexToHex(params.totalBuckets, 6),
    flexToHex(params.startNonce, 6),
    flexToHex(params.receiver, 20),
  ]);
}
