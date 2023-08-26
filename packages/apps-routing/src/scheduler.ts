// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import type { TFunction } from 'i18next';
import type { Route } from './types.js';
=======
import type { Route, TFunction } from './types.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import Component from '@polkadot/app-scheduler';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: [
        'query.scheduler.agenda'
      ]
    },
    group: 'network',
    icon: 'clock',
    name: 'scheduler',
    text: t<string>('nav.scheduler', 'Scheduler', { ns: 'apps-routing' })
  };
}
