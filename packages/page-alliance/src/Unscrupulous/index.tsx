// Copyright 2017-2023 @polkadot/app-alliance authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Unscrupulous as UnscrupulousType } from '../types.js';

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';

import { useTranslation } from '../translate.js';
import Account from './Account.js';
import Website from './Website.js';

interface Props {
  className?: string;
  unscrupulous?: UnscrupulousType;
}

function Unscrupulous ({ className, unscrupulous }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const accRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
<<<<<<< HEAD
    [t<string>('accounts'), 'start']
  ]);

  const webRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
    [t<string>('websites'), 'start']
=======
    [t('accounts'), 'start']
  ]);

  const webRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
    [t('websites'), 'start']
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  ]);

  return (
    <div className={className}>
      <Table
        empty={unscrupulous?.accounts && t('No accounts')}
        header={accRef.current}
      >
        {unscrupulous?.accounts.map((m) => (
          <Account
            key={m}
            value={m}
          />
        ))}
      </Table>
      <Table
        empty={unscrupulous?.websites && t('No websites')}
        header={webRef.current}
      >
        {unscrupulous?.websites.map((m) => (
          <Website
            key={m}
            value={m}
          />
        ))}
      </Table>
    </div>
  );
}

export default React.memo(Unscrupulous);
