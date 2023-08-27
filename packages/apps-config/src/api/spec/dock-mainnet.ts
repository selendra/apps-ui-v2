// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

<<<<<<< HEAD
import types from '@docknetwork/node-types';
=======
// @ts-expect-error No definitions provided in package
import { spec } from '@docknetwork/node-types';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

export default (spec as { 'dock-main-runtime': OverrideBundleDefinition })['dock-main-runtime'];
