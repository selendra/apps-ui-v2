// Copyright 2017-2023 @polkadot/app-parachains authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ParaId } from '@polkadot/types/interfaces';
import type { LeasePeriod, OwnedId, QueuedAction } from '../types.js';

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';

import { useTranslation } from '../translate.js';
import Actions from './Actions.js';
import Parathread from './Parathread.js';
import useParaMap from './useParaMap.js';

interface Props {
  actionsQueue: QueuedAction[];
  className?: string;
  ids?: ParaId[];
  leasePeriod?: LeasePeriod;
  ownedIds: OwnedId[];
}

function Parathreads ({ actionsQueue, className, ids, leasePeriod, ownedIds }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const leaseMap = useParaMap(ids);

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
<<<<<<< HEAD
    [t<string>('parathreads'), 'start', 2],
=======
    [t('parathreads'), 'start', 2],
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    ['', 'media--2000'],
    [t<string>('head'), 'start media--1500'],
    [t<string>('lifecycle'), 'start'],
    [],
    [], // [t<string>('chain'), 'no-pad-left'],
    [t<string>('leases')],
    ['', 'media--900']
  ]);

  return (
    <div className={className}>
      <Actions ownedIds={ownedIds} />
      <Table
        empty={leasePeriod && ids && (ids.length === 0 || leaseMap) && t('There are no available parathreads')}
        header={headerRef.current}
      >
        {leasePeriod && leaseMap?.map(([id, leases]): React.ReactNode => (
          <Parathread
            id={id}
            key={id.toString()}
            leasePeriod={leasePeriod}
            leases={leases}
            nextAction={actionsQueue.find(({ paraIds }) =>
              paraIds.some((p) => p.eq(id))
            )}
          />
        ))}
      </Table>
    </div>
  );
}

export default React.memo(Parathreads);
