# Flex SDK

SDK for interaction with Flex protocol [contracts](https://github.com/swaps-io/flex-contracts). See:

- [installation](#installation) for instructions on how to setup SDK in a project
- [modules](./modules.html) for all available SDK classes/types/etc

## Development

### Installation

The SDK installation process assumes that [Node.js](https://nodejs.org/en) (version 22 is recommended) is installed on
machine and a project where SDK is planned to be integrated is already created.

1. Install `@swaps-io/flex-sdk` as a package dependency of the project:
   - `npm install @swaps-io/flex-sdk`
   - `yarn add @swaps-io/flex-sdk`
2. Install [peer dependencies](#peer-dependencies) of SDK according to the needs of the project

Both ESM and CJS targets are supported. However, CJS requires [additional steps](#cjs-support).

### Peer Dependencies

By default SDK expects installed peer dependencies as listed in the table below.

| Dependency                  | Version |
| --------------------------- |:-------:|
| `viem`                      |  v2+    |
| `@openzeppelin/merkle-tree` |  v1+    |

> [!NOTE]
>
> Flex SDK treats the default dependencies as _optional_. It's possible to configure SDK to use custom set of
> dependencies (e.g. `ethers` instead of `viem`) by providing `FlexExternal` instance to `flexSetExternal`.

### CJS Support

Flex SDK is bundled for both ESM and CJS targets. New project are preferred to use ESM. If CJS is needed, Flex SDK
initialization must be _ensured to finish_ before any SDK function usage due to CJS's top-level `await` limitations.

```ts
import { flexInit, flexCalcTree } from '@swaps-io/flex-sdk';

async function example() {
  // Only projects targeting CJS should care about awaiting init.
  // For ESM targets this promise is already resolved upon import.
  await flexInit;

  // Now Flex SDK functions can be safely used in CJS code
  const tree = flexCalcTree(...);
}
```

> [!NOTE]
> Alternatively, `flexSetExternal` can be called with `FlexExternal` object initialized manually. Setting
> `process.env.FLASH_SDK_SKIP_DEFAULT_INIT_EXTERNAL` along to skip the default initialization attempt should be
> considered in this case.
