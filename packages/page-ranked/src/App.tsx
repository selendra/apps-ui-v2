// Copyright 2017-2023 @polkadot/app-ranked authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletColl, PalletPoll } from './types.js';

import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router';

import Referenda, { useCounter } from '@polkadot/app-referenda/Referenda';
import { Tabs } from '@polkadot/react-components';

import Members from './Members/index.js';
import { useTranslation } from './translate.js';
import useMembers from './useMembers.js';

interface Props {
  basePath: string;
  className?: string;
  palletColl: PalletColl;
  palletPoll: PalletPoll;
}

function App ({ basePath, className, palletColl, palletPoll }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const members = useMembers(palletColl);
  const refCount = useCounter(palletPoll);

  const tabs = useMemo(
    () => [
      {
        isRoot: true,
        name: 'overview',
        text: t('Overview')
      },
      {
        name: 'referenda',
        text: t('Referenda ({{count}})', { replace: { count: refCount || 0 } })
      }
    ],
    [refCount, t]
  );

  return (
    <main className={className}>
      <Tabs
        basePath={basePath}
        items={tabs}
      />
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Referenda
<<<<<<< HEAD
                members={members && members.memberIds}
                palletReferenda={palletPoll}
                palletVote={palletColl}
                ranks={members && members.memberRanks}
=======
                members={members?.memberIds}
                palletReferenda={palletPoll}
                palletVote={palletColl}
                ranks={members?.memberRanks}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              />
            }
            path='referenda'
          />
          <Route
            element={
<<<<<<< HEAD
              <Members members={members && members.members} />
=======
              <Members members={members?.members} />
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(App);
