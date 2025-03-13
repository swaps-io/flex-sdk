import { FlexExternal } from './types';

export * from './types';

let external: FlexExternal | undefined;

export function setExternal(newExternal: FlexExternal): void {
  external = newExternal;
}

export function hasExternal(): boolean {
  return external != null;
}

export function getExternal(): FlexExternal {
  if (external == null) {
    throw new Error('Flex SDK must be init first');
  }
  return external;
}
