// Copyright 2017-2023 @polkadot/app-society authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveSocietyCandidate } from '@polkadot/api-derive/types';

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';

import { useTranslation } from '../translate.js';
import Candidate from './Candidate.js';

interface Props {
  allMembers: string[];
  candidates?: DeriveSocietyCandidate[];
  className?: string;
  isMember: boolean;
  ownMembers: string[];
}

function Candidates ({ allMembers, candidates, className = '', isMember, ownMembers }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const headerRef = useRef<[React.ReactNode?, string?, number?][]>([
<<<<<<< HEAD
    [t<string>('candidates'), 'start'],
    [t<string>('bid kind'), 'start'],
    [t<string>('value')],
=======
    [t('candidates'), 'start'],
    [t('bid kind'), 'start'],
    [t('value')],
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    [undefined, 'expand'],
    []
  ]);

  return (
    <Table
      className={className}
      empty={candidates && t('No candidates')}
      header={headerRef.current}
    >
      {candidates?.map((candidate): React.ReactNode => (
        <Candidate
          allMembers={allMembers}
          isMember={isMember}
          key={candidate.accountId.toString()}
          ownMembers={ownMembers}
          value={candidate}
        />
      ))}
    </Table>
  );
}

export default React.memo(Candidates);
