// Copyright 2017-2023 @polkadot/app-referenda authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { Summary as SummaryType } from '../types.js';

import React from 'react';

import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';
import { FormatBalance } from '@polkadot/react-query';
import { formatNumber, isFunction } from '@polkadot/util';

import { useTranslation } from '../translate.js';

interface Props {
  className?: string;
  issuanceActive?: BN;
  issuanceInactive?: BN;
  issuanceTotal?: BN;
  summary: SummaryType;
  withIssuance?: boolean;
}

function Summary ({ className, issuanceActive, issuanceInactive, issuanceTotal, summary: { refActive, refCount }, withIssuance }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();

  return (
    <SummaryBox className={className}>
      <section>
        <CardSummary label={t('active')}>
          {refActive === undefined
            ? <span className='--tmp'>99</span>
            : formatNumber(refActive)
          }
        </CardSummary>
        <CardSummary label={t('total')}>
          {refCount === undefined
            ? <span className='--tmp'>99</span>
            : formatNumber(refCount)
          }
        </CardSummary>
      </section>
      {withIssuance && (
        <section>
<<<<<<< HEAD
          <CardSummary label={t<string>('total issuance')}>
=======
          <CardSummary label={t('total issuance')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
            <FormatBalance
              className={issuanceTotal ? '' : '--tmp'}
              value={issuanceTotal || 1}
              withSi
            />
          </CardSummary>
          {isFunction(api.query.balances.inactiveIssuance) && (
            <>
              <CardSummary
                className='media--1000'
<<<<<<< HEAD
                label={t<string>('inactive issuance')}
=======
                label={t('inactive issuance')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              >
                <FormatBalance
                  className={issuanceInactive ? '' : '--tmp'}
                  value={issuanceInactive || 1}
                  withSi
                />
              </CardSummary>
              <CardSummary
                className='media--800'
<<<<<<< HEAD
                label={t<string>('active issuance')}
=======
                label={t('active issuance')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              >
                <FormatBalance
                  className={issuanceActive ? '' : '--tmp'}
                  value={issuanceActive || 1}
                  withSi
                />
              </CardSummary>
            </>
          )}
        </section>
      )}
    </SummaryBox>
  );
}

export default React.memo(Summary);
