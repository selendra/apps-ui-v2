// Copyright 2017-2023 @polkadot/app-society authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useRef, useState } from 'react';

import { Button, Dropdown, InputAddress, Modal, TxButton } from '@polkadot/react-components';
import { useApi, useToggle } from '@polkadot/react-hooks';

import { useTranslation } from '../translate.js';

interface Props {
  isMember: boolean;
  ownMembers: string[];
}

function DefenderVoting ({ isMember, ownMembers }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const [isVisible, toggleVisible] = useToggle();
  const [vote, setVote] = useState(true);
  const [accountId, setAccountId] = useState<string | null>(null);

  const voteOptsRef = useRef([
    { text: t('Aye, I approve'), value: true },
    { text: t('Nay, I do not approve'), value: false }
  ]);

  return (
    <>
      {isVisible && (
        <Modal
          header={t('Vote for defender')}
          onClose={toggleVisible}
        >
          <Modal.Content>
            <InputAddress
              filter={ownMembers}
<<<<<<< HEAD
              label={t<string>('vote from account')}
              onChange={setAccountId}
            />
            <Dropdown
              label={t<string>('vote for defender')}
=======
              label={t('vote from account')}
              onChange={setAccountId}
            />
            <Dropdown
              label={t('vote for defender')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              onChange={setVote}
              options={voteOptsRef.current}
              value={vote}
            />
          </Modal.Content>
          <Modal.Actions>
            <TxButton
              accountId={accountId}
              icon='check'
              label={t('Vote')}
              onStart={toggleVisible}
              params={[vote]}
              tx={api.tx.society.defenderVote}
            />
          </Modal.Actions>
        </Modal>
      )}
      <Button
        icon='check'
        isDisabled={!isMember}
        label={t('Vote')}
        onClick={toggleVisible}
      />
    </>
  );
}

export default React.memo(DefenderVoting);
