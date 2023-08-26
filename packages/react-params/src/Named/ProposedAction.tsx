// Copyright 2017-2023 @polkadot/react-params authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Call } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';

import React from 'react';

import { formatNumber, isString, isUndefined } from '@polkadot/util';

<<<<<<< HEAD:packages/react-components/src/ProposedAction.tsx
import CallExpander from './CallExpander.js';
import { useTranslation } from './translate.js';
=======
import { useTranslation } from '../translate.js';
import CallExpander from './CallExpander.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/react-params/src/Named/ProposedAction.tsx

interface Props {
  className?: string;
  proposal?: Call | null;
  idNumber?: BN | number | string;
  withLinks?: boolean;
  expandNested?: boolean;
}

function ProposedAction ({ className = '', idNumber, proposal }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const stringId = isString(idNumber) || isUndefined(idNumber)
    ? idNumber
    : formatNumber(idNumber);

  if (!proposal) {
    return (
      <div className={`${className} ui--ProposedAction`}>
<<<<<<< HEAD:packages/react-components/src/ProposedAction.tsx
        <div>{stringId ? `#${stringId}: ` : ''}{t<string>('No execution details available for this proposal')}</div>
=======
        <div>{stringId ? `#${stringId}: ` : ''}{t('No execution details available for this proposal')}</div>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/react-params/src/Named/ProposedAction.tsx
      </div>
    );
  }

  return (
    <div className={`${className} ui--ProposedAction`}>
      <CallExpander
        isHeader
        labelHash={t('preimage')}
        stringId={stringId}
        value={proposal}
        withHash
      />
    </div>
  );
}

export default React.memo(ProposedAction);
