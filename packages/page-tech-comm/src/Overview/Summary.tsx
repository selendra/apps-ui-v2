// Copyright 2017-2023 @polkadot/app-tech-comm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { u32 } from '@polkadot/types';
import type { ComponentProps as Props } from '../types.js';

import React from 'react';

import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { useApi, useCall } from '@polkadot/react-hooks';
import { formatNumber } from '@polkadot/util';

import { useTranslation } from '../translate.js';

function Summary ({ className = '', members, proposalHashes, type }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const proposalCount = useCall<u32>(api.derive[type].proposalCount);

  return (
    <SummaryBox className={className}>
      <CardSummary label={t('members')}>
        {formatNumber(members.length)}
      </CardSummary>
      <section>
<<<<<<< HEAD
        <CardSummary label={t<string>('proposals')}>
=======
        <CardSummary label={t('proposals')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          {proposalHashes
            ? formatNumber(proposalHashes?.length)
            : <span className='--tmp'>99</span>}
        </CardSummary>
<<<<<<< HEAD
        <CardSummary label={t<string>('total')}>
=======
        <CardSummary label={t('total')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          {proposalCount
            ? formatNumber(proposalCount)
            : <span className='--tmp'>99</span>}
        </CardSummary>
      </section>
    </SummaryBox>
  );
}

export default React.memo(Summary);
