// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { typesBundle } from '@kiltprotocol/type-definitions';

<<<<<<< HEAD
export default typesBundle.chain as Record<string, OverrideBundleDefinition>;
=======
if (!typesBundle.chain) {
  throw new Error('Unable to find chain defintions');
}

export default typesBundle.chain;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
