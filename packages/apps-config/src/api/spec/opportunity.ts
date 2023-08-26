// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

<<<<<<< HEAD
import definitions from '@digitalnative/type-definitions/opportunity/index.js';
=======
// @ts-expect-error No definitions provided in package
import { opportunityTypes } from '@digitalnative/type-definitions';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

export default opportunityTypes as OverrideBundleDefinition;
