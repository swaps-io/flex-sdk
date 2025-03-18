import { flexCalcCommutativeHash } from '../commutative';
import { FlexError, FlexHex } from '../core';

import { FlexTree } from './data';

export interface FlexCalcTreeParams {
  leaves: readonly FlexHex[];
}

export function flexCalcTree({ leaves }: FlexCalcTreeParams): FlexTree {
  if (leaves.length < 1) {
    throw new FlexError('Flex tree must have at least one leaf');
  }

  if (new Set(leaves).size < leaves.length) {
    throw new FlexError('Flex tree must have unique leaves');
  }

  const parents: Record<FlexHex, FlexHex> = {};
  const siblings: Record<FlexHex, FlexHex> = {};

  function build(leaves: readonly FlexHex[]): FlexHex {
    if (leaves.length === 1) {
      return leaves[0];
    }

    const middle = Math.ceil(leaves.length / 2);
    const leftHash = build(leaves.slice(0, middle));
    const rightHash = build(leaves.slice(middle));
    const hash = flexCalcCommutativeHash([leftHash, rightHash]);
    parents[leftHash] = hash;
    parents[rightHash] = hash;
    siblings[leftHash] = rightHash;
    siblings[rightHash] = leftHash;
    return hash;
  }

  const tree: FlexTree = {
    root: build(leaves),
    parents,
    siblings,
  };
  return tree;
}
