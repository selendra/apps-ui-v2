// Copyright 2017-2023 @polkadot/app-parachains authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Proposals as UseProposals } from '../types.js';

import React, { useMemo, useRef } from 'react';

import { Table } from '@polkadot/react-components';

import { useTranslation } from '../translate.js';
import Proposal from './Proposal.js';

interface Props {
  proposals?: UseProposals;
}

function Proposals ({ proposals }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const sortedIds = useMemo(
    () => proposals?.proposalIds.sort((a, b) => a.cmp(b)),
    [proposals]
  );

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
<<<<<<< HEAD
    [t<string>('proposals'), 'start', 3],
=======
    [t('proposals'), 'start', 3],
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    [],
    [],
    [t<string>('proposer'), 'address'],
    [t<string>('balance'), 'media--1100'],
    [t<string>('initial state'), 'start media--1400'],
    []
  ]);

  return (
    <Table
      empty={proposals && sortedIds && t('There are no pending proposals')}
      header={headerRef.current}
    >
      {proposals && sortedIds?.map((id): React.ReactNode => (
        <Proposal
          approvedIds={proposals.approvedIds}
          id={id}
          key={id.toString()}
          scheduled={proposals.scheduled}
        />
      ))}
    </Table>
  );
}

export default React.memo(Proposals);
