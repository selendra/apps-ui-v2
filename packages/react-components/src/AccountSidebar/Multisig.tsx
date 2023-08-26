// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringJson$Meta } from '@polkadot/ui-keyring/types';

import React from 'react';

<<<<<<< HEAD:packages/page-accounts/src/Sidebar/Multisig.tsx
import { AddressMini } from '@polkadot/react-components';

=======
import AddressMini from '../AddressMini.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/react-components/src/AccountSidebar/Multisig.tsx
import { useTranslation } from '../translate.js';

interface Props {
  isMultisig: boolean;
  meta?: KeyringJson$Meta;
}

function Multisig ({ isMultisig, meta }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();

  if (!isMultisig || !meta) {
    return null;
  }

  const { threshold, who } = meta;

  return (
    <section className='ui--AddressMenu-multisig withDivider'>
      <div className='ui--AddressMenu-sectionHeader'>
        {t('multisig')}
      </div>
      <div className='ui--AddressMenu-multisigTable'>
        <div className='tr'>
          <div className='th'>{t('threshold')}</div>
          <div className='td'>
<<<<<<< HEAD:packages/page-accounts/src/Sidebar/Multisig.tsx
            {threshold as string}/{(who as string[]).length}
=======
            {threshold}/{who?.length}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/react-components/src/AccountSidebar/Multisig.tsx
          </div>
        </div>
        <div className='tr'>
          <div className='th signatories'>{t('signatories')}</div>
          <div className='td'>
            {who?.map((address) => (
              <AddressMini
                key={address}
                value={address}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Multisig);
