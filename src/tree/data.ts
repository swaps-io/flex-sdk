import { Tree } from '../external/inner';

export class FlexTree {
  public readonly inner: Tree;

  public constructor(inner: Tree) {
    this.inner = inner;
  }
}
