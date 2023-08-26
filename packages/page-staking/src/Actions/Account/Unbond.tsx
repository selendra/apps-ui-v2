// Copyright 2017-2023 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StakingLedger } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';

import React, { useState } from 'react';

<<<<<<< HEAD
import { InputAddress, InputBalance, Modal, Static, styled, TxButton } from '@polkadot/react-components';
=======
import { InputBalance, Modal, Static, styled, TxButton } from '@polkadot/react-components';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
import { useApi } from '@polkadot/react-hooks';
import { BlockToTime, FormatBalance } from '@polkadot/react-query';
import { BN_ZERO } from '@polkadot/util';

import { useTranslation } from '../../translate.js';
<<<<<<< HEAD
import useUnbondDuration from '../useUnbondDuration.js';

interface Props {
  controllerId?: AccountId | string | null;
=======
import SenderInfo from '../partials/SenderInfo.js';
import useUnbondDuration from '../useUnbondDuration.js';

interface Props {
  controllerId?: string | null;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  onClose: () => void;
  stakingLedger?: StakingLedger;
  stashId: string;
}

function Unbond ({ controllerId, onClose, stakingLedger, stashId }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const bondedBlocks = useUnbondDuration();
  const [maxBalance] = useState<BN | null>(() => stakingLedger?.active?.unwrap() || null);
  const [maxUnbond, setMaxUnbond] = useState<BN | undefined>();

  return (
    <StyledModal
<<<<<<< HEAD
      header={t<string>('Unbond funds')}
=======
      header={t('Unbond funds')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
      onClose={onClose}
      size='large'
    >
      <Modal.Content>
        <SenderInfo
          controllerId={controllerId}
          stashId={stashId}
        />
        <Modal.Columns hint={t('The funds will only be available for withdrawal after the unbonding period, however will not be part of the staked amount after the next validator election. You can follow the unlock countdown in the UI.')}>
          <InputBalance
            autoFocus
            defaultValue={maxBalance}
<<<<<<< HEAD
            label={t<string>('unbond amount')}
            labelExtra={
              <FormatBalance
                label={<span className='label'>{t<string>('bonded')}</span>}
=======
            label={t('unbond amount')}
            labelExtra={
              <FormatBalance
                label={<span className='label'>{t('bonded')}</span>}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                value={maxBalance}
              />
            }
            maxValue={maxBalance}
            onChange={setMaxUnbond}
            withMax
          />
          {bondedBlocks?.gtn(0) && (
            <Static
<<<<<<< HEAD
              label={t<string>('on-chain bonding duration')}
=======
              label={t('on-chain bonding duration')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
            >
              <BlockToTime value={bondedBlocks} />
            </Static>
          )}
        </Modal.Columns>
      </Modal.Content>
      <Modal.Actions>
        <TxButton
          accountId={controllerId}
          icon='unlock'
          isDisabled={!maxUnbond?.gt(BN_ZERO)}
<<<<<<< HEAD
          label={t<string>('Unbond')}
=======
          label={t('Unbond')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          onStart={onClose}
          params={[maxUnbond]}
          tx={api.tx.staking.unbond}
        />
      </Modal.Actions>
    </StyledModal>
  );
}

const StyledModal = styled(Modal)`
  .staking--Unbond--max > div {
    justify-content: flex-end;

    & .column {
      flex: 0;
    }
  }
`;

export default React.memo(Unbond);
