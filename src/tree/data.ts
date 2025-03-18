import { FlexHex } from '../core';

export interface FlexTree {
  root: FlexHex;
  parents: Record<FlexHex, FlexHex>;
  siblings: Record<FlexHex, FlexHex>;
}
