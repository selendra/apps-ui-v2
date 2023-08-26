// Copyright 2017-2023 @polkadot/react-params authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '@polkadot/types/types';
import type { RawParam } from '../types.js';

import React, { useMemo } from 'react';

import { Static, styled } from '@polkadot/react-components';

import { useTranslation } from '../translate.js';
import { toHumanJson } from '../valueToText.js';
import Bare from './Bare.js';

interface Props {
  asHex?: boolean;
  children?: React.ReactNode;
  childrenPre?: React.ReactNode;
  className?: string;
  defaultValue: RawParam;
  isOptional?: boolean;
  label?: React.ReactNode;
  withLabel?: boolean;
}

function StaticParam ({ asHex, children, childrenPre, className = '', defaultValue, isOptional, label }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const value = useMemo(
    () => !!defaultValue?.value && (
      asHex
        ? (defaultValue.value as Codec).toHex()
        : toHumanJson(
          (defaultValue.value as Codec).toHuman
            ? (defaultValue.value as Codec).toHuman()
            : defaultValue.value
        )
    ),
    [asHex, defaultValue]
  );

  return (
    <StyledBare className={className}>
      {childrenPre}
      <Static
        className='full'
        label={label}
<<<<<<< HEAD
        value={<pre>{value || (isOptional ? <>&nbsp;</> : t<string>('<empty>'))}</pre>}
=======
        value={<pre>{value || (isOptional ? <>&nbsp;</> : t('<empty>'))}</pre>}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
      />
      {children}
    </StyledBare>
  );
}

const StyledBare = styled(Bare)`
  pre {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ui--Static {
    margin-bottom: 0 !important;
  }
`;

export default React.memo(StaticParam);
