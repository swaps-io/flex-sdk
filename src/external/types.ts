export type ByteArray = Uint8Array<ArrayBufferLike>;
export type AsHexValue = string | number | bigint | boolean | ByteArray;
export type Hex = `0x${string}`;
export type AsHex = (value: AsHexValue, size: number) => Hex;
export type ConcatHex = (values: readonly Hex[]) => Hex;
export type SliceHex = (value: Hex, start?: number, end?: number) => Hex;
export type Keccak256 = (value: Hex) => Hex;
export type Tree = unknown;
export type CreateTree = (leaves: readonly Hex[]) => Tree;
export type ProcessTree = (tree: Tree) => Hex;
export type CreateProof = (tree: Tree, leaf: Hex) => Hex[];
export type ProcessProof = (leaf: Hex, proof: readonly Hex[]) => Hex;

export interface FlexExternal {
  asHex: AsHex;
  concatHex: ConcatHex;
  sliceHex: SliceHex;
  keccak256: Keccak256;
  createTree: CreateTree;
  processTree: ProcessTree;
  createProof: CreateProof;
  processProof: ProcessProof;
}
