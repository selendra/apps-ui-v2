// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import type { TFunction } from 'i18next';
import type { Route } from './types.js';
=======
import type { Route, TFunction } from './types.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import Modal from '@polkadot/app-parachains/Teleport';

export default function create (t: TFunction): Route {
  return {
    Component: Modal,
    Modal,
    display: {
      // TODO We need to move to XCM v3 at some point, until such time we disable
      // this functionality (we really should have kept it until later versions)
      isHidden: true,
      needsAccounts: true,
      needsApi: [
        [
          'tx.xcm.teleportAssets',
          'tx.xcmPallet.teleportAssets',
          'tx.polkadotXcm.teleportAssets',
          'tx.xcm.limitedTeleportAssets',
          'tx.xcmPallet.limitedTeleportAssets',
          'tx.polkadotXcm.limitedTeleportAssets'
        ]
      ],
      needsTeleport: true
    },
    group: 'accounts',
    icon: 'share-square',
    name: 'teleport',
    text: t<string>('nav.teleport', 'Teleport', { ns: 'apps-routing' })
  };
}
