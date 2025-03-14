import { FlexExternal } from './types';

export * from './types';

let external: FlexExternal | undefined;

export function setExternal(newExternal: FlexExternal): void {
  external = newExternal;
}

export function getExternal(): FlexExternal {
  if (!external) {
    throw new Error('Flex external dependencies not provided');
  }
  return external;
}

export function hasExternal(): boolean {
  return !!external;
}
