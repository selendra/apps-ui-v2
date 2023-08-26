// Copyright 2017-2023 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountBalance } from '../types.js';

import React from 'react';

import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { FormatBalance } from '@polkadot/react-query';

import { useTranslation } from '../translate.js';

interface Props {
  className?: string;
  balance?: AccountBalance;
}

function Summary ({ balance, className }: Props) {
  const { t } = useTranslation();

  return (
    <SummaryBox className={className}>
<<<<<<< HEAD
      <CardSummary label={t<string>('total balance')}>
=======
      <CardSummary label={t('total balance')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
        <FormatBalance
          className={balance ? '' : '--tmp'}
          value={balance?.total || 1}
        />
      </CardSummary>
      <CardSummary
        className='media--900'
<<<<<<< HEAD
        label={t<string>('total transferrable')}
=======
        label={t('total transferrable')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
      >
        <FormatBalance
          className={balance ? '' : '--tmp'}
          value={balance?.transferrable || 1}
        />
      </CardSummary>
<<<<<<< HEAD
      <CardSummary label={t<string>('total locked')}>
=======
      <CardSummary label={t('total locked')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
        <FormatBalance
          className={balance ? '' : '--tmp'}
          value={balance?.locked || 1}
        />
      </CardSummary>
      {balance?.bonded.gtn(0) &&
        <CardSummary
          className='media--1100'
<<<<<<< HEAD
          label={t<string>('bonded')}
=======
          label={t('bonded')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
        >
          <FormatBalance value={balance.bonded} />
        </CardSummary>}
      {balance?.redeemable.gtn(0) &&
        <CardSummary
          className='media--1500'
<<<<<<< HEAD
          label={t<string>('redeemable')}
=======
          label={t('redeemable')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
        >
          <FormatBalance value={balance.redeemable} />
        </CardSummary>}
      {balance?.unbonding.gtn(0) &&
        <CardSummary
          className='media--1300'
<<<<<<< HEAD
          label={t<string>('unbonding')}
=======
          label={t('unbonding')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
        >
          <FormatBalance value={balance.unbonding} />
        </CardSummary>}
    </SummaryBox>
  );
}

export default React.memo(Summary);
