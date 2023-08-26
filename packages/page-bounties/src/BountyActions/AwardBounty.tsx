// Copyright 2017-2023 @polkadot/app-treasury authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, BountyIndex } from '@polkadot/types/interfaces';

import React, { useMemo, useState } from 'react';

import { Button, InputAddress, Modal, TxButton } from '@polkadot/react-components';
import { useAccounts, useToggle } from '@polkadot/react-hooks';

import { truncateTitle } from '../helpers/index.js';
import { useBounties } from '../hooks/index.js';
import { useTranslation } from '../translate.js';

interface Props {
  curatorId: AccountId;
  description: string;
  index: BountyIndex;
}

function AwardBounty ({ curatorId, description, index }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();
  const { awardBounty } = useBounties();
  const { allAccounts } = useAccounts();
  const [isOpen, toggleOpen] = useToggle();
  const [beneficiaryId, setBeneficiaryId] = useState<string | null>(null);
  const isCurator = useMemo(() => allAccounts.includes(curatorId.toString()), [allAccounts, curatorId]);

  return isCurator
    ? (
      <>
        <Button
          icon='award'
          isDisabled={false}
          label={t('Reward implementer')}
          onClick={toggleOpen}
        />
        {isOpen && (
          <Modal
            header={`${t('award bounty')} - "${truncateTitle(description, 30)}"`}
            onClose={toggleOpen}
            size='large'
          >
            <Modal.Content>
              <Modal.Columns hint={t('The Curator account that will be used to send this transaction. Any applicable fees will be paid by this account.')}>
                <InputAddress
                  defaultValue={curatorId}
                  isDisabled={true}
                  label={t('award with account')}
                  type='account'
                  withLabel
                />
              </Modal.Columns>
              <Modal.Columns hint={t("Reward the bounty to an implementer's account. The implementer will be able to claim the funds after a delay period.")}>
                <InputAddress
<<<<<<< HEAD
                  label={t<string>('implementer account')}
=======
                  label={t('implementer account')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                  onChange={setBeneficiaryId}
                  withLabel
                />
              </Modal.Columns>
            </Modal.Content>
            <Modal.Actions>
              <TxButton
                accountId={curatorId}
                icon='check'
                label={t('Approve')}
                onStart={toggleOpen}
                params={[index, beneficiaryId]}
                tx={awardBounty}
              />
            </Modal.Actions>
          </Modal>
        )}
      </>
    )
    : null;
}

export default React.memo(AwardBounty);
