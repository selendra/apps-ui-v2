// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import InputAddress from './InputAddress/index.js';
import { useTranslation } from './translate.js';

interface Props {
  className?: string;
  filter?: string[];
  onChange: (value: string | null) => void;
}

function VoteAccount ({ className = '', filter, onChange }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <InputAddress
      className={className}
      filter={filter}
<<<<<<< HEAD
      label={t<string>('vote with account')}
=======
      label={t('vote with account')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
      onChange={onChange}
      type='account'
      withLabel
    />
  );
}

export default React.memo(VoteAccount);
