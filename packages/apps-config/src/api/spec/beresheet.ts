// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import pkg from '@edgeware/node-types';

<<<<<<< HEAD
// There is no separate types bundle for testnet at this time
const beresheet = pkg.spec.typesBundle.spec?.edgeware as OverrideBundleDefinition;

export default beresheet;
=======
export default (pkg.spec.typesBundle as { spec: { edgeware: OverrideBundleDefinition } }).spec.edgeware;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
