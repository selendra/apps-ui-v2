// Copyright 2017-2023 @polkadot/app-bounties authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import React, { useMemo, useRef } from 'react';

import { Button, styled, Table } from '@polkadot/react-components';

import { useBounties } from './hooks/index.js';
import Bounty from './Bounty.js';
import BountyCreate from './BountyCreate.js';
import Summary from './Summary.js';
import { useTranslation } from './translate.js';

interface Props {
  className?: string;
}

function Bounties ({ className }: Props): React.ReactElement {
  const { t } = useTranslation();
  const info = useBounties();

  const sorted = useMemo(
    () => info?.bounties && [...info.bounties].sort((a, b) => b.index.cmp(a.index)),
    [info]
  );

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
<<<<<<< HEAD
    [t<string>('bounties'), 'start', 3],
    [t<string>('value')],
    [t<string>('curator'), 'start'],
    [t<string>('next action'), 'start', 3]
=======
    [t('bounties'), 'start', 3],
    [t('value')],
    [t('curator'), 'start'],
    [t('next action'), 'start', 3]
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  ]);
  const bestNumber = info.bestNumber;

  return (
    <StyledDiv className={className}>
      <Summary info={info} />
      <Button.Group>
        <BountyCreate />
      </Button.Group>
      <Table
        className='bounties-table-wrapper'
        empty={sorted && t('No open bounties')}
        header={headerRef.current}
      >
        {sorted && bestNumber && sorted.map(({ bounty, description, index, proposals }) => (
          <Bounty
<<<<<<< HEAD
            bestNumber={info.bestNumber as BN}
=======
            bestNumber={bestNumber}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
            bounty={bounty}
            description={description}
            index={index}
            key={index.toNumber()}
            proposals={proposals}
          />
        ))}
      </Table>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .bounties-table-wrapper table {
    tr {
      td, &:not(.filter) th {
        &:last-child {
          padding-right: 1.14rem;
        }
      }
    }
  }

  .ui--IdentityIcon {
    margin-right: 0.42rem;
  }

  .via-identity .name {
    font-size: var(--font-size-base);
    line-height: 1.7rem;
    text-transform: initial;
    filter: initial;
    opacity: 1;
  }
`;

export default React.memo(Bounties);
