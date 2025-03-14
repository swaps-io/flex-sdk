import { flexInitDefaultExternal } from './default';
import { hasExternal, setExternal } from './inner';
import { FlexExternal } from './types';

export function flexSetExternal(external: FlexExternal): void {
  setExternal(external);
}

export function flexReady(): boolean {
  return hasExternal();
}

async function tryInitExternal(): Promise<void> {
  if (process?.env?.FLASH_SDK_SKIP_DEFAULT_INIT_EXTERNAL) {
    return;
  }

  try {
    setExternal(await flexInitDefaultExternal());
  } catch {
    return;
  }
}

export const flexInit = tryInitExternal();

// Top-level await is not supported for CJS target.
// For this reason `flexInit` must be manually awaited for CJS.
// eslint-disable-next-line no-unused-labels
CJS_DROP: await flexInit;
