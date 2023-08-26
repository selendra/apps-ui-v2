// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

<<<<<<< HEAD:packages/page-accounts/src/Sidebar/Balances.tsx
import { AddressInfo, styled } from '@polkadot/react-components';

=======
import AddressInfo from '../AddressInfo.js';
import { styled } from '../styled.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/react-components/src/AccountSidebar/Balances.tsx
import { useTranslation } from '../translate.js';

interface Props {
  address: string;
  className?: string;
}

const WITH_BALANCE = { available: true, bonded: true, free: true, locked: true, reserved: true, total: true };

function Balances ({ address, className }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();

  return (
    <StyledSection className={className}>
      <div className='ui--AddressMenu-sectionHeader'>
        {t('balance')}
      </div>
      <AddressInfo
        address={address}
        className='balanceExpander'
        key={address}
        withBalance={WITH_BALANCE}
        withLabel
      />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  .balanceExpander {
    justify-content: flex-start;

    .column {
      width: auto;
      max-width: 18.57rem;

      label {
        text-align: left;
        color: inherit;
      }

      .ui--Expander-content .ui--FormatBalance-value {
        font-size: var(--font-size-small);
      }
    }
  }
`;

export default React.memo(Balances);
