// Copyright 2017-2023 @polkadot/react-params authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Extrinsic } from '@polkadot/types/interfaces';
import type { Props } from '../types.js';

import React from 'react';

import { Static } from '@polkadot/react-components';

<<<<<<< HEAD
=======
import { Call } from '../Named/index.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
import { useTranslation } from '../translate.js';
import Bare from './Bare.js';
import Unknown from './Unknown.js';

function CallDisplay (props: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { className = '', defaultValue: { value }, isDisabled, label, withLabel } = props;

  if (!isDisabled) {
    return (
      <Unknown {...props} />
    );
  }

  const call = value as Extrinsic;
  const { method, section } = call.registry.findMetaCall(call.callIndex);
  const callName = `${section}.${method}`;

  return (
    <Bare>
      <Static
        className={`${className} full`}
        label={label}
        withLabel={withLabel}
      >
        {callName}
      </Static>
      <Call
        callName={callName}
        labelHash={t('call hash / {{section}}.{{method}}', { replace: { method, section } })}
        value={call}
        withHash
      />
    </Bare>
  );
}

export default React.memo(CallDisplay);
