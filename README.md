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
