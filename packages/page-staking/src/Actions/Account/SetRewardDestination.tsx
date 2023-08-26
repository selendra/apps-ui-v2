// Copyright 2017-2023 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveBalancesAll } from '@polkadot/api-derive/types';
import type { RewardDestination } from '@polkadot/types/interfaces';
import type { DestinationType } from '../types.js';

import React, { useMemo, useState } from 'react';

import { Dropdown, InputAddress, MarkError, Modal, TxButton } from '@polkadot/react-components';
import { useApi, useCall } from '@polkadot/react-hooks';

import { useTranslation } from '../../translate.js';
import { createDestCurr } from '../destOptions.js';
<<<<<<< HEAD
=======
import SenderInfo from '../partials/SenderInfo.js';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

interface Props {
  defaultDestination?: RewardDestination;
  controllerId: string;
  onClose: () => void;
  stashId: string;
}

function SetRewardDestination ({ controllerId, defaultDestination, onClose, stashId }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const [destination, setDestination] = useState<DestinationType>(() => ((defaultDestination?.isAccount ? 'Account' : defaultDestination?.toString()) || 'Staked') as 'Staked');
  const [destAccount, setDestAccount] = useState<string | null>(() => defaultDestination?.isAccount ? defaultDestination.asAccount.toString() : null);
  const destBalance = useCall<DeriveBalancesAll>(api.derive.balances?.all, [destAccount]);

  const options = useMemo(
    () => createDestCurr(t),
    [t]
  );

  const isAccount = destination === 'Account';
  const isDestError = isAccount && destBalance && destBalance.accountId.eq(destAccount) && destBalance.freeBalance.isZero();

  return (
    <Modal
      header={t('Bonding Preferences')}
      onClose={onClose}
      size='large'
    >
      <Modal.Content>
<<<<<<< HEAD
        <Modal.Columns hint={t<string>('The stash and controller pair as linked. This operation will be performed via the controller.')}>
          <InputAddress
            defaultValue={stashId}
            isDisabled
            label={t<string>('stash account')}
          />
          <InputAddress
            defaultValue={controllerId}
            isDisabled
            label={t<string>('controller account')}
          />
        </Modal.Columns>
        <Modal.Columns hint={t<string>('All rewards will go towards the selected output destination when a payout is made.')}>
          <Dropdown
            defaultValue={defaultDestination?.toString()}
            label={t<string>('payment destination')}
=======
        <SenderInfo
          controllerId={controllerId}
          stashId={stashId}
        />
        <Modal.Columns hint={t('All rewards will go towards the selected output destination when a payout is made.')}>
          <Dropdown
            defaultValue={defaultDestination?.toString()}
            label={t('payment destination')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
            onChange={setDestination}
            options={options}
            value={destination}
          />
          {isAccount && (
            <InputAddress
<<<<<<< HEAD
              label={t<string>('the payment account')}
=======
              label={t('the payment account')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              onChange={setDestAccount}
              type='account'
              value={destAccount}
            />
          )}
          {isDestError && (
            <MarkError content={t('The selected destination account does not exist and cannot be used to receive rewards')} />
          )}
        </Modal.Columns>
      </Modal.Content>
      <Modal.Actions>
        <TxButton
          accountId={controllerId}
          icon='sign-in-alt'
          isDisabled={!controllerId || (isAccount && (!destAccount || isDestError))}
          label={t('Set reward destination')}
          onStart={onClose}
          params={[
            isAccount
              ? { Account: destAccount }
              : destination
          ]}
          tx={api.tx.staking.setPayee}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(SetRewardDestination);
