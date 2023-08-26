// Copyright 2017-2023 @polkadot/app-bounties authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Icon, styled } from '@polkadot/react-components';
<<<<<<< HEAD

import { bountySvgColor } from '../theme.js';
=======
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

interface Props {
  className?: string;
  description: string;
  type?: 'info' | 'warning';
}

function BountyInfo ({ className = '', description, type = 'info' }: Props): React.ReactElement<Props> {
  return (
    <StyledDiv className={className}>
      {type === 'warning' && (
        <div className='info-icon'>
          <Icon icon={'exclamation-triangle'} />
        </div>
      )}
      <div className='description'>
        {description}
      </div>
    </StyledDiv>
  );
}

<<<<<<< HEAD
const StyledDiv = styled.div(({ theme }: ThemeProps) => `
=======
const StyledDiv = styled.div`
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  display: flex;
  align-items: center;
  font-size: var(--font-size-small);
  line-height: 1.5rem;

  .info-icon {
    margin-right: 0.2rem;

    svg {
      color: var(--color-bounty-info);
    }
  }

  .description {
    font-weight: var(--font-weight-normal);
    var(font-size: var(--font-size-tiny);)
    line-height: 0.864rem;
    color: var(--color-label);
    word-wrap: break-word;
  }
<<<<<<< HEAD
`);
=======
`;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

export default React.memo(BountyInfo);
