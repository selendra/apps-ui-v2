// Copyright 2017-2023 @polkadot/app-gilt authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { QueueTotal } from './types.js';

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';

import { useTranslation } from '../translate.js';
import Queue from './Queue.js';

interface Props {
  className?: string;
  queueTotals?: QueueTotal[];
}

function Queues ({ className, queueTotals }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
<<<<<<< HEAD
    [t<string>('queues'), 'start'],
    [t<string>('participants'), 'number'],
    [t<string>('balance'), 'number']
=======
    [t('queues'), 'start'],
    [t('participants'), 'number'],
    [t('balance'), 'number']
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  ]);

  return (
    <Table
      className={className}
      empty={queueTotals && t('No active gilt queues found.')}
      header={headerRef.current}
    >
      {queueTotals?.map((value) => (
        <Queue
          key={value.index}
          value={value}
        />
      ))}
    </Table>
  );
}

export default React.memo(Queues);
