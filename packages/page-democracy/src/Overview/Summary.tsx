// Copyright 2017-2023 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import React from 'react';

import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { useApi, useBestNumber, useCall, useCallMulti } from '@polkadot/react-hooks';
import { BN_ONE, BN_THREE, BN_TWO, formatNumber } from '@polkadot/util';

import { useTranslation } from '../translate.js';

interface Props {
  referendumCount?: number;
}

const optMulti = {
  defaultValue: [undefined, undefined] as [BN | undefined, BN | undefined]
};

function Summary ({ referendumCount }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const activeProposals = useCall<unknown[]>(api.derive.democracy.proposals);
  const bestNumber = useBestNumber();
  const [publicPropCount, referendumTotal] = useCallMulti<[BN | undefined, BN | undefined]>([
    api.query.democracy.publicPropCount,
    api.query.democracy.referendumCount
  ], optMulti);

  return (
    <SummaryBox>
      <section>
<<<<<<< HEAD
        <CardSummary label={t<string>('proposals')}>
=======
        <CardSummary label={t('proposals')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          {activeProposals
            ? formatNumber(activeProposals.length)
            : <span className='--tmp'>99</span>}
        </CardSummary>
<<<<<<< HEAD
        <CardSummary label={t<string>('total')}>
=======
        <CardSummary label={t('total')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          {publicPropCount
            ? formatNumber(publicPropCount)
            : <span className='--tmp'>99</span>}
        </CardSummary>
      </section>
      <section>
<<<<<<< HEAD
        <CardSummary label={t<string>('referenda')}>
=======
        <CardSummary label={t('referenda')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          {referendumCount !== undefined
            ? formatNumber(referendumCount)
            : <span className='--tmp'>99</span>}
        </CardSummary>
<<<<<<< HEAD
        <CardSummary label={t<string>('total')}>
=======
        <CardSummary label={t('total')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          {referendumTotal
            ? formatNumber(referendumTotal)
            : <span className='--tmp'>99</span>}
        </CardSummary>
      </section>
      {api.consts.democracy.launchPeriod && (
        <section className='media--1100'>
          <CardSummary
            label={t('launch period')}
            progress={{
              isBlurred: !bestNumber,
              total: api.consts.democracy.launchPeriod,
              value: bestNumber
                ? bestNumber.mod(api.consts.democracy.launchPeriod).iadd(BN_ONE)
                : api.consts.democracy.launchPeriod.mul(BN_TWO).div(BN_THREE),
              withTime: true
            }}
          />
        </section>
      )}
    </SummaryBox>
  );
}

export default React.memo(Summary);
