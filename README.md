# Flex SDK

SDK for interaction with Flex protocol [contracts](https://github.com/swaps-io/flex-contracts). See:

- [usage examples](#usage-examples) for a good starting point for working with the SDK
- [installation](#installation) for instructions on how to setup SDK in a project
- [modules](./modules.html) for all available SDK classes/types/etc

## Development

### Installation

The SDK installation process assumes that the project to integrate the SDK into is already initialized.

1. Install `@swaps-io/flex-sdk` as a package dependency of the project:
   - `npm install @swaps-io/flex-sdk`
   - or `yarn add @swaps-io/flex-sdk`
   - or using other package manager of choice
2. Provide `@noble/hashes` peer dependency for SDK by installing:
   - [`viem`](https://www.npmjs.com/package/viem) package (relies on)
   - or [`ethers`](https://www.npmjs.com/package/ethers) package (relies on)
   - or other package that relies on `@noble/hashes`
   - or [`@noble/hashes`](https://www.npmjs.com/package/@noble/hashes) itself

> [!NOTE]
>
> Both ESM and CJS module systems are supported by the SDK.

### Usage Examples

#### _Encode receive native data_

```ts
import { flexEncodeReceiveNativeData } from '@swaps-io/flex-sdk';

test('Should be working example', async () => {
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
});
```
