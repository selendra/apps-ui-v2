// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import type { TFunction } from 'i18next';
import type { Route } from './types.js';
=======
import type { Route, TFunction } from './types.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import Component, { useCounter } from '@polkadot/app-society';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: [
        'query.society.pot'
      ]
    },
    group: 'network',
    icon: 'hand-spock',
    name: 'society',
    text: t<string>('nav.society', 'Society', { ns: 'apps-routing' }),
    useCounter
  };
}
