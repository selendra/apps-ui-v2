// Copyright 2017-2023 @polkadot/app-alliance authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Member as MemberType, Rule } from '../types.js';

import React from 'react';

import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { useIpfsLink } from '@polkadot/react-hooks';
import { formatNumber } from '@polkadot/util';

import { useTranslation } from '../translate.js';

interface Props {
  className?: string;
  members?: MemberType[];
  rule?: Rule;
}

function Summary ({ className, members, rule }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const ipfsLink = useIpfsLink(rule?.cid?.ipfs);

  return (
    <SummaryBox className={className}>
      <CardSummary label={t('rule')}>
        {rule
          ? rule.hasRule
            ? ipfsLink
              ? (
                <a
                  href={ipfsLink.ipfsUrl}
                  rel='noopener noreferrer'
                  target='_blank'
                >{ipfsLink.ipfsShort}</a>
              )
<<<<<<< HEAD
              : t<string>('yes')
            : t<string>('no')
          : <span className='--tmp'>{t<string>('no')}</span>
=======
              : t('yes')
            : t('no')
          : <span className='--tmp'>{t('no')}</span>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
        }
      </CardSummary>
      <CardSummary label={t('members')}>
        {members
          ? formatNumber(members.length)
          : <span className='--tmp'>99</span>
        }
      </CardSummary>
    </SummaryBox>
  );
}

export default React.memo(Summary);
