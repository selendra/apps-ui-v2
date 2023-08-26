// Copyright 2017-2023 @polkadot/react-params authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Call, Extrinsic } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';

import React, { useMemo } from 'react';

<<<<<<< HEAD:packages/react-components/src/CallExpander.tsx
import CallDisplay from './Call.js';
import Expander from './Expander.js';
=======
import { Expander } from '@polkadot/react-components';

import CallDisplay from './Call.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/react-params/src/Named/CallExpander.tsx

interface Props {
  children?: React.ReactNode;
  className?: string;
  idString?: string;
  isHeader?: boolean;
  labelHash?: React.ReactNode;
  labelSignature?: React.ReactNode;
  mortality?: string;
  onError?: () => void;
  stringId?: string;
  tip?: BN;
  value?: Call | Extrinsic | null;
  withBorder?: boolean;
  withHash?: boolean;
  withSignature?: boolean;
}

function CallExpander ({ children, className = '', isHeader, labelHash, labelSignature, mortality, onError, stringId, tip, value, withBorder, withHash, withSignature }: Props): React.ReactElement<Props> | null {
  const call = useMemo(
    () => value?.callIndex
      ? value.registry.findMetaCall(value.callIndex)
      : null,
    [value]
  );

  if (!call || !value) {
    return null;
  }

  const { meta, method, section } = call;
  const callName = `${section}.${method}`;

  return (
    <div className={`${className} ui--CallExpander`}>
      <Expander
        isHeader={isHeader}
        isLeft
        summaryHead={
          <>{stringId && `#${stringId}: `}{callName}</>
        }
        summaryMeta={meta}
      >
        <CallDisplay
          callName={callName}
          labelHash={labelHash}
          labelSignature={labelSignature}
          mortality={mortality}
          onError={onError}
          tip={tip}
          value={value}
          withBorder={withBorder}
          withExpander
          withHash={withHash}
          withSignature={withSignature}
        />
        {children}
      </Expander>
    </div>
  );
}

export default React.memo(CallExpander);
