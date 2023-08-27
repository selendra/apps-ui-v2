// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

<<<<<<< HEAD
import eqDefs from '@equilab/definitions';

import { createCustomAccount, u64FromCurrency } from './equilibrium.js';

const { genshiro } = eqDefs;
=======
import { createDerives } from './equilibrium.js';

const TOKENS = ['gens'];
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

const definitions: OverrideBundleDefinition = {
  derives: createDerives(TOKENS),
  instances: { balances: TOKENS }
};

export default definitions;
