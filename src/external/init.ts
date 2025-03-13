import { flexInitDefaultExternal } from './default';
import { setExternal } from './inner';
import { FlexExternal } from './types';

async function tryInitExternal(): Promise<void> {
  try {
    setExternal(await flexInitDefaultExternal());
  } catch {
    return;
  }
}

await tryInitExternal();

export function flexSetExternal(external: FlexExternal): void {
  setExternal(external);
}
