import { flexInitOzmtExternal } from './impl/ozmt';
import { flexInitViemExternal } from './impl/viem';
import { FlexExternal } from './types';

export async function flexInitDefaultExternal(): Promise<FlexExternal> {
  const viemExternal = await flexInitViemExternal();
  const ozmtExternal = await flexInitOzmtExternal();

  const external: FlexExternal = {
    ...viemExternal,
    ...ozmtExternal,
  };
  return external;
}
