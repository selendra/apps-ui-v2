// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import type { TFunction } from 'i18next';
import type { Route } from './types.js';
=======
import type { Route, TFunction } from './types.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import Component from '@polkadot/app-preimages';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: [
        'query.preimage.statusFor',
        'tx.preimage.notePreimage'
      ]
    },
    group: 'governance',
    icon: 'panorama',
    name: 'preimages',
    text: t<string>('nav.preimages', 'Preimages', { ns: 'apps-routing' })
  };
}
