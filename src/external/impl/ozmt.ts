import { type SimpleMerkleTree } from '@openzeppelin/merkle-tree';

import { FlexExternal, Hex, Tree } from '../types';

export type FlexOzmtExternal = Pick<FlexExternal, 'createTree' | 'processTree' | 'createProof' | 'processProof'>;

export async function flexInitOzmtExternal(): Promise<FlexOzmtExternal> {
  const { SimpleMerkleTree } = await import('@openzeppelin/merkle-tree');
  const { processProof: ozmtProcessProof } = await import('@openzeppelin/merkle-tree/dist/core.js');

  function smt(tree: Tree): asserts tree is SimpleMerkleTree {
    if (!(tree instanceof SimpleMerkleTree)) {
      throw new Error('Unexpected tree instance');
    }
  }

  function createTree(leaves: readonly Hex[]): Tree {
    const tree = SimpleMerkleTree.of([...leaves], { sortLeaves: true });
    return tree;
  }

  function processTree(tree: Tree): Hex {
    smt(tree);
    return tree.root as Hex;
  }

  function createProof(tree: Tree, leaf: Hex): Hex[] {
    smt(tree);
    const proof = tree.getProof(leaf);
    return proof as Hex[];
  }

  function processProof(leaf: Hex, proof: readonly Hex[]): Hex {
    const hash = ozmtProcessProof(leaf, proof as Hex[]) as Hex;
    return hash;
  }

  const external: FlexOzmtExternal = {
    createTree,
    processTree,
    createProof,
    processProof,
  };
  return external;
}
