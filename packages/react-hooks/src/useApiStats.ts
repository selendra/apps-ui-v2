<<<<<<< HEAD
// Copyright 2017-2023 @polkadot/react-components authors & contributors
=======
// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
// SPDX-License-Identifier: Apache-2.0

import type { ApiStats } from './ctx/types.js';

import { useContext } from 'react';

import { ApiStatsCtx } from './ctx/ApiStats.js';
import { createNamedHook } from './createNamedHook.js';

function useApiStatsImpl (): ApiStats[] {
  return useContext(ApiStatsCtx);
}

export const useApiStats = createNamedHook('useApiStats', useApiStatsImpl);
