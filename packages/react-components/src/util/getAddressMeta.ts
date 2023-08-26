// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringItemType, KeyringJson$Meta } from '@polkadot/ui-keyring/types';

import { keyring } from '@polkadot/ui-keyring';

export function getAddressMeta (address: string, type: KeyringItemType | null = null): KeyringJson$Meta {
  let meta: KeyringJson$Meta | undefined;

  try {
    const pair = keyring.getAddress(address, type);

<<<<<<< HEAD
    meta = pair && pair.meta;
=======
    meta = pair?.meta;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  } catch {
    // we could pass invalid addresses, so it may throw
  }

  return meta || {};
}
