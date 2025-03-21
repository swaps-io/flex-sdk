# Flex SDK

SDK for interaction with Flex protocol [contracts](https://github.com/swaps-io/flex-contracts). See:

- [usage examples](#usage-examples) for a good starting point to familiarize yourself with the SDK
- [installation](#installation) for instructions on how to setup SDK in a project
- [main functions](#main-functions) for list of SDK functionality to check out first
- [modules](link://modules) for all available SDK classes/types/etc

## Development

### Installation

The SDK installation process assumes that the project to integrate the SDK into is already initialized.

1. Install `@swaps-io/flex-sdk` as a package dependency of the project:
   - `npm install @swaps-io/flex-sdk`
   - or `yarn add @swaps-io/flex-sdk`
   - or using other package manager of choice
2. Provide `@noble/hashes` peer dependency for SDK by installing:
   - [`@noble/hashes`](https://www.npmjs.com/package/@noble/hashes) package itself
   - or [`viem`](https://www.npmjs.com/package/viem) package (uses `@noble/hashes`)
   - or [`ethers`](https://www.npmjs.com/package/ethers) package (uses `@noble/hashes`)
   - or other package that uses `@noble/hashes`

> [!NOTE]
>
> Both ESM and CJS module systems are supported by the SDK.

### Main Functions

The SDK exposes many _low-level_ functions so it's possible to customize logic as needed. However, it's most likely you
need (or at least should start with) one of the _higher-level_ main functions from the list below:

- _Receive_:
  - [`flexEncodeReceiveNativeData`](link://functions/flexEncodeReceiveNativeData.html) •
    [`flexCalcReceiveNativeHash`](link://functions/flexCalcReceiveNativeHash.html)
  - [`flexEncodeReceiveTokenData`](link://functions/flexEncodeReceiveTokenData.html) •
    [`flexCalcReceiveTokenHash`](link://functions/flexCalcReceiveTokenHash.html)
  - [`flexEncodeReceiveTokenFromData`](link://functions/flexEncodeReceiveTokenFromData.html) •
    [`flexCalcReceiveTokenFromHash`](link://functions/flexCalcReceiveTokenFromHash.html)

- _Confirm_:
  - [`flexEncodeConfirmNativeData`](link://functions/flexEncodeConfirmNativeData.html) •
    [`flexCalcConfirmNativeHash`](link://functions/flexCalcConfirmNativeHash.html)
  - [`flexEncodeConfirmNativeProofData`](link://functions/flexEncodeConfirmNativeProofData.html) •
    [`flexCalcConfirmNativeProofHash`](link://functions/flexCalcConfirmNativeProofHash.html)
  - [`flexEncodeConfirmTokenData`](link://functions/flexEncodeConfirmTokenData.html) •
    [`flexCalcConfirmTokenHash`](link://functions/flexCalcConfirmTokenHash.html)
  - [`flexEncodeConfirmTokenProofData`](link://functions/flexEncodeConfirmTokenProofData.html) •
    [`flexCalcConfirmTokenProofHash`](link://functions/flexCalcConfirmTokenProofHash.html)

- _Refund_:
  - [`flexEncodeRefundNativeData`](link://functions/flexEncodeRefundNativeData.html) •
    [`flexCalcRefundNativeHash`](link://functions/flexCalcRefundNativeHash.html)
  - [`flexEncodeRefundNativeProofData`](link://functions/flexEncodeRefundNativeProofData.html) •
    [`flexCalcRefundNativeProofHash`](link://functions/flexCalcRefundNativeProofHash.html)
  - [`flexEncodeRefundTokenData`](link://functions/flexEncodeRefundTokenData.html) •
    [`flexCalcRefundTokenHash`](link://functions/flexCalcRefundTokenHash.html)
  - [`flexEncodeRefundTokenProofData`](link://functions/flexEncodeRefundTokenProofData.html) •
    [`flexCalcRefundTokenProofHash`](link://functions/flexCalcRefundTokenProofHash.html)

- _Send_:
  - [`flexEncodeSendNativeData`](link://functions/flexEncodeSendNativeData.html) •
    [`flexCalcSendNativeHash`](link://functions/flexCalcSendNativeHash.html)
  - [`flexEncodeSendNativeFloatData`](link://functions/flexEncodeSendNativeFloatData.html) •
    [`flexCalcSendNativeFloatHash`](link://functions/flexCalcSendNativeFloatHash.html)
  - [`flexEncodeSendTokenData`](link://functions/flexEncodeSendTokenData.html) •
    [`flexCalcSendTokenHash`](link://functions/flexCalcSendTokenHash.html)
  - [`flexEncodeSendTokenFloatData`](link://functions/flexEncodeSendTokenFloatData.html) •
    [`flexCalcSendTokenFloatHash`](link://functions/flexCalcSendTokenFloatHash.html)

- _Tree_:
  - [`flexCalcTree`](link://functions/flexCalcTree.html) •
    [`flexCalcTreeHash`](link://functions/flexCalcTreeHash.html)
  - [`flexCalcBranch`](link://functions/flexCalcBranch.html) •
    [`flexCalcBranchHash`](link://functions/flexCalcBranchHash.html)
  - [`flexCalcAccumulatorBranch`](link://functions/flexCalcAccumulatorBranch.html)

- _Proofing_:
  - [`flexCalcReceiveAccumulatorHash`](link://functions/flexCalcReceiveAccumulatorHash.html)
  - [`flexCalcSendAccumulatorHash`](link://functions/flexCalcSendAccumulatorHash.html)
  - [`flexEncodeSendProof`](link://functions/flexEncodeSendProof.html)
  - [`flexEncodeSendFailProof`](link://functions/flexEncodeSendFailProof.html)
  - [`flexEncodeSaveSendData0`](link://functions/flexEncodeSaveSendData0.html)

- _Allocation_:
  - [`flexEncodeAllocateReceiveData0`](link://functions/flexEncodeAllocateReceiveData0.html)
  - [`flexEncodeAllocateSendData0`](link://functions/flexEncodeAllocateSendData0.html)

### Usage Examples

#### _Encode receive native component data_

```ts
import { flexEncodeReceiveNativeData } from '@swaps-io/flex-sdk';

const now = (): bigint => BigInt(new Date().getTime()) / 1000n; // In seconds

const data = flexEncodeReceiveNativeData({
  sender: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',
  receiver: '0xc001c0dec001c0dec001c0dec001c0dec001c0de',
  receiverContract: true,
  amount: 12_300000000_000000000n, // 12.3 (18 decimals)
  deadline: now() + 3n * 60n, // In seconds
  nonce: 123n,
});
console.log(`Receive native data: ${JSON.stringify(data)}`);
```
