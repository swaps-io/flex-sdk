import { flexInitDefaultExternal } from './default';
import { getExternal, hasExternal, setExternal } from './inner';
import { FlexExternal } from './types';

let init: Promise<FlexExternal> | undefined;

/**
 * Initializes Flex SDK {@link e | external} dependencies.
 *
 * Should be called and awaited prior calling any SDK function.
 *
 * Uses `viem` and `@openzeppelin/merkle-tree` dependencies by default.
 *
 * @param externalOverride Externals to use instead of default. When provided, no default dependencies imported.
 *
 * @returns Initialized `external` instance.
 */
export async function flexInit(externalOverride?: FlexExternal): Promise<FlexExternal> {
  if (externalOverride) {
    setExternal(externalOverride);
    return getExternal();
  }

  if (hasExternal()) {
    return getExternal();
  }

  if (!init) {
    init = flexInitDefaultExternal();
  }
  setExternal(await init);
  return getExternal();
}
