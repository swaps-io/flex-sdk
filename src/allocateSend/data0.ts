import { FlexHex, FlexToHexValue, flexConcatHex, flexToHex } from '../core';

/**
 * Parameters for {@link flexEncodeAllocateSendData0} function.
 *
 * @category Allocate Send
 */
export interface FlexEncodeAllocateSendData0Params {
  /**
   * Address of sender to allocate group buckets (slots) for _(20 bytes)_.
   */
  sender: FlexToHexValue;

  /**
   * Group to use as allocation start bucket (slot) _(6 bytes)_.
   *
   * > [!TIP]
   * >
   * > Preferred to be unallocated group that has {@link totalBuckets | multiple} empty buckets after.
   * >
   * > Attempts to allocate to existing buckets are skipped with no reverts, yet wasting some gas.
   */
  startGroup: FlexToHexValue;

  /**
   * Total number of group buckets (slots) to allocate sequentially from with the {@link startGroup | start one}
   * _(6 bytes)_.
   */
  totalBuckets: FlexToHexValue;
}

/**
 * Encodes data #0 for allocate send contract call.
 *
 * Send allocation allows to pre-occupy a range of _cold_ (empty) storage slots for later use as _hot_ ones. This can
 * save costs (allocating slots when gas is cheaper) and allows to avoid allocation unevenness (when slots are limited
 * in use and new ones are needed from time to time).
 *
 * If allocation range contains already occupied slots - those are simply skipped with no reverts. For this reason
 * caller should be mindful about managing allocation ranges to avoid unnecessary gas waste on-chain.
 *
 * Related contracts:
 * - {@link !FlexSendAllocateData | `FlexSendAllocateData`}
 * - {@link !FlexAllocateSendFacet | `FlexAllocateSendFacet`}
 * - {@link !IFlexAllocateSend | `IFlexAllocateSend`}
 *
 * @param params Function {@link FlexEncodeAllocateSendData0Params | parameters}.
 *
 * @returns Allocate send data #0 _(32 bytes)_.
 *
 * @category Allocate Send
 */
export function flexEncodeAllocateSendData0(params: FlexEncodeAllocateSendData0Params): FlexHex {
  return flexConcatHex([
    flexToHex(params.totalBuckets, 6),
    flexToHex(params.startGroup, 6),
    flexToHex(params.sender, 20),
  ]);
}
