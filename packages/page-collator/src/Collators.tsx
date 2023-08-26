// Copyright 2017-2023 @polkadot/app-collator authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';
import { useBlockAuthors } from '@polkadot/react-hooks';

import Collator from './Collator.js';
import Summary from './Summary.js';
import { useTranslation } from './translate.js';
import useCollators from './useCollators.js';

interface Props {
  className?: string;
}

function Collators ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const collators = useCollators();
  const { byAuthor } = useBlockAuthors();

  const hdrRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
<<<<<<< HEAD
    [t<string>('collators'), 'start', 2],
    [t<string>('deposit'), 'number'],
    [t<string>('balance'), 'number'],
    [t<string>('last #'), 'number']
=======
    [t('collators'), 'start', 2],
    [t('deposit'), 'number'],
    [t('balance'), 'number'],
    [t('last #'), 'number']
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  ]);

  return (
    <div className={className}>
      <Summary />
      <Table
        empty={collators && t('No running collators')}
        header={hdrRef.current}
      >
        {collators?.map((c) => (
          <Collator
            info={c}
            key={c.accountId}
            lastBlock={byAuthor[c.accountId]}
          />
        ))}
      </Table>
    </div>
  );
}

export default React.memo(Collators);
