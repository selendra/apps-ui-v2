// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import type { TFunction } from 'i18next';
import type { Route } from './types.js';
=======
import type { Route, TFunction } from './types.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import Component, { useCounter } from '@polkadot/app-fellowship';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: [
        'tx.fellowshipCollective.vote',
        'tx.fellowshipReferenda.submit',
        'consts.fellowshipReferenda.tracks'
      ]
    },
    group: 'governance',
    icon: 'people-arrows',
    name: 'fellowship',
    text: t<string>('nav.fellowship', 'Fellowship', { ns: 'apps-routing' }),
    useCounter
  };
}
