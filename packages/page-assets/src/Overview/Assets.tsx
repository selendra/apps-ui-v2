// Copyright 2017-2023 @polkadot/app-assets authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AssetInfo } from '../types.js';

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';

import { useTranslation } from '../translate.js';
import Asset from './Asset.js';

interface Props {
  className?: string;
  infos?: AssetInfo[];
}

function Assets ({ className, infos }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
<<<<<<< HEAD
    [t<string>('assets'), 'start', 2],
    [t<string>('owner'), 'address media--1000'],
    [t<string>('admin'), 'address media--1300'],
    [t<string>('issuer'), 'address media--1600'],
    [t<string>('freezer'), 'address media--1900'],
    [t<string>('supply')],
=======
    [t('assets'), 'start', 2],
    [t('owner'), 'address media--1000'],
    [t('admin'), 'address media--1300'],
    [t('issuer'), 'address media--1600'],
    [t('freezer'), 'address media--1900'],
    [t('supply')],
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    []
  ]);

  return (
    <Table
      className={className}
      empty={infos && t('No assets found')}
      header={headerRef.current}
    >
      {infos?.map((info) => (
        <Asset
          key={info.key}
          value={info}
        />
      ))}
    </Table>
  );
}

export default React.memo(Assets);
