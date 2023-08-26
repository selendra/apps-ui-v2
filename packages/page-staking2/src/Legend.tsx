// Copyright 2017-2023 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import React from 'react';

import { Badge, styled, Tag } from '@polkadot/react-components';

import { useTranslation } from './translate.js';

interface Props {
  className?: string;
  isRelay?: boolean;
  minCommission?: BN;
}

function Legend ({ className, isRelay, minCommission }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <StyledDiv className={className}>
      <span>
        <Badge
          color='blue'
          icon='chevron-right'
        />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
        <span>{t<string>('Next session')}</span>
=======
        <span>{t('Next session')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
      </span>
      {minCommission && (
        <span>
          <Badge
            color='red'
            icon='cancel'
          />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
          <span>{t<string>('Chilled')}</span>
=======
          <span>{t('Chilled')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
        </span>
      )}
      {isRelay && (
        <span>
          <Badge
            color='purple'
            icon='vector-square'
          />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
          <span>{t<string>('Para validator')}</span>
=======
          <span>{t('Para validator')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
        </span>
      )}
      <span>
        <Badge
          color='green'
          info='5'
        />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
        <span>{t<string>('Produced blocks')}</span>
=======
        <span>{t('Produced blocks')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
      </span>
      <span>
        <Badge
          color='green'
          icon='envelope'
        />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
        <span>{t<string>('Online message')}</span>
=======
        <span>{t('Online message')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
      </span>
      <span>
        <Badge
          color='green'
          icon='hand-paper'
        />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
        <span>{t<string>('Nominating')}</span>
=======
        <span>{t('Nominating')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
      </span>
      <span>
        <Badge
          color='red'
          icon='balance-scale-right'
        />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
        <span>{t<string>('Oversubscribed')}</span>
=======
        <span>{t('Oversubscribed')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
      </span>
      <span>
        <Badge
          color='red'
          icon='skull-crossbones'
        />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
        <span>{t<string>('Slashed')}</span>
=======
        <span>{t('Slashed')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
      </span>
      <span>
        <Badge
          color='red'
          icon='user-slash'
        />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
        <span>{t<string>('Blocks nominations')}</span>
=======
        <span>{t('Blocks nominations')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
      </span>
      <span>
        <Tag
          color='lightgrey'
          label='1,220'
        />
<<<<<<< HEAD:packages/page-staking/src/Legend.tsx
        <span>{t<string>('Era points')}</span>
=======
        <span>{t('Era points')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/page-staking2/src/Legend.tsx
      </span>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-size: var(--font-size-small);
  padding: 1rem 0.5rem;
  text-align: center;

  .ui--Badge, .ui--Tag {
    margin-right: 0.5rem;
  }

  span {
    vertical-align: middle;

    * {
      vertical-align: middle;
    }

    + span {
      margin-left: 1rem;
    }
  }
`;

export default React.memo(Legend);
