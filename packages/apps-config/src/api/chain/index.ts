// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

<<<<<<< HEAD
import kilt from './kilt.js';

// NOTE: The mapping is done from chain name in system.chain
const chain: Record<string, OverrideBundleDefinition> = {
=======
import cere from './cere.js';
import kilt from './kilt.js';

if (!kilt) {
  throw new Error('Unable to retrieve kilt');
}

// NOTE: The mapping is done from chain name in system.chain
const chain: Record<string, OverrideBundleDefinition> = {
  'Cere Mainnet Beta': cere,
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  'KILT Mashnet': kilt['KILT Mashnet'],
  'KILT Peregrine': kilt['KILT Peregrine'],
  'KILT Peregrine Stagenet': kilt['KILT Peregrine Stagenet'],
  'KILT Spiritnet': kilt['KILT Spiritnet'],
  'KILT Spiritnet Develop': kilt['KILT Spiritnet Develop']
};

export default chain;
