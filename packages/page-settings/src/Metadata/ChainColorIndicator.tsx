// Copyright 2017-2023 @polkadot/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { styled } from '@polkadot/react-components';

interface Props {
  color?: string;
  className?: string;
}

function ChainColorIndicator ({ className, color }: Props): React.ReactElement<Props> {
  return (
    <StyledDiv
      className={className}
      color={color}
    />
  );
}

const StyledDiv = styled.div(({ color }: Props): string => `
<<<<<<< HEAD
  background-color: ${color} !important;
=======
  background-color: ${color || 'white'} !important;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  width: 100px;
  flex: 1;
  border-radius: 4px;
`);

export default React.memo(ChainColorIndicator);
