// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';
<<<<<<< HEAD
import type { Route } from './types.js';
=======
import type { Route, TFunction } from './types.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import Component, { useCounter } from '@polkadot/app-democracy';

function needsApiCheck (api: ApiPromise): boolean {
  try {
    // we need to be able to create an actual vote
    api.tx.democracy.vote(1, { Standard: { balance: 1, vote: { aye: true, conviction: 1 } } });

    return true;
  } catch {
    console.warn('Unable to create referendum vote transaction, disabling democracy route');

    return false;
  }
}

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: [
        'tx.democracy.propose'
      ],
      needsApiCheck
    },
    group: 'governance',
    icon: 'calendar-check',
    name: 'democracy',
    text: t<string>('nav.democracy', 'Democracy', { ns: 'apps-routing' }),
    useCounter
  };
}
