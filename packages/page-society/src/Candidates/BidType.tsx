// Copyright 2017-2023 @polkadot/app-society authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletSocietyBidKind } from '@polkadot/types/lookup';

import React, { useMemo } from 'react';

import { AddressSmall, styled } from '@polkadot/react-components';

interface Props {
  className?: string;
  value?: PalletSocietyBidKind;
}

function BidType ({ className, value }: Props): React.ReactElement<Props> {
  const vouchId = useMemo(
    () => value?.isVouch
      ? value.asVouch[0]
      : null,
    [value]
  );

  return (
    <StyledDiv className={className}>
<<<<<<< HEAD
      <div>{value && value.type}</div>
=======
      <div>{value?.type}</div>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
      {vouchId && <AddressSmall value={vouchId} />}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: no-wrap;

  > div {
    flex: 0;

    &:first-child {
      padding-right: 1.5rem;
    }
  }
`;

export default React.memo(BidType);
