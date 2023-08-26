// Copyright 2017-2023 @polkadot/app-referenda authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
=======
import type { BatchOptions } from '@polkadot/react-hooks/types';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
import type { BN } from '@polkadot/util';
import type { PalletReferenda, PalletVote, TrackDescription } from '../../types.js';

import React, { useCallback, useMemo, useState } from 'react';

import { Button, ConvictionDropdown, InputAddress, Modal, Toggle, ToggleGroup, TxButton, VoteValue } from '@polkadot/react-components';
<<<<<<< HEAD
import { useAccounts, useApi, useStepper, useToggle } from '@polkadot/react-hooks';
=======
import { useAccounts, useApi, useStepper, useToggle, useTxBatch } from '@polkadot/react-hooks';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
import { isFunction } from '@polkadot/util';

import { useTranslation } from '../../translate.js';
import TrackDropdown from '../Submit/TrackDropdown.js';
import Activity from './Activity.js';
import useActivityAccount from './useActivityAccount.js';
import useActivityFellows from './useActivityFellows.js';
import useActivityNominators from './useActivityNominators.js';

interface Props {
  className?: string;
  palletReferenda: PalletReferenda;
  palletVote: PalletVote;
  tracks: TrackDescription[];
}

interface Option {
  key: string;
  name: string;
  value: string;
}

<<<<<<< HEAD
=======
const BATCH_OPTS: BatchOptions = { type: 'force' };

>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
function Delegate ({ className, palletReferenda, palletVote, tracks }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const { hasAccounts } = useAccounts();
  const [isOpen, toggleOpen] = useToggle();
  const [isAllTracks, toggleAllTracks] = useToggle();
  const [step, nextStep, prevStep] = useStepper();
  const [accountId, setAccountId] = useState<string | null>(null);
  const [toAccount, setToAccount] = useState<string | null>(null);
  const [trackId, setTrackId] = useState<number>(0);
  const [balance, setBalance] = useState<BN | undefined>();
  const [conviction, setConviction] = useState(1);
  const activityFell = useActivityFellows(palletVote);
  const activityVals = useActivityNominators(palletVote);
  const activityFrom = useActivityAccount(palletVote, accountId);
  const activityTo = useActivityAccount(palletVote, toAccount);
  const [accType, setAccType] = useState({ index: 0, type: 'address' });

  const includeTracks = useMemo(
    () => activityFrom && tracks
      .filter((t) => !activityFrom.some((a) => t.id.eq(a.classId)))
      .map(({ id }) => id),
    [activityFrom, tracks]
  );

  const allFell = useMemo(
    // We also filter the fellows by activity - since there are a number
    // we just want to skip those that does not have any activity
    () => activityFell &&
      Object
        .entries(activityFell)
        .map(([key, act]) => (act.length > 0) && ({ key, name: key, value: key }))
        .filter((a): a is Option => !!a),
    [activityFell]
  );

  const allVals = useMemo(
    () => activityVals &&
      Object
        .entries(activityVals)
        .map(([key]) => ({ key, name: key, value: key }))
        .filter((a): a is Option => !!a),
    [activityVals]
  );

  const typeOpts = useMemo(
    () => [
<<<<<<< HEAD
      { text: t<string>('Addresses'), value: 'address' },
      isFunction(api.query.staking?.nominators) &&
        { isDisabled: !allVals || !allVals.length, text: t<string>('Validators'), value: 'validators' },
      isFunction(api.query.fellowshipCollective?.members) &&
        { isDisabled: !allFell || !allFell.length, text: t<string>('Fellows'), value: 'fellows' }
=======
      { text: t('Addresses'), value: 'address' },
      isFunction(api.query.staking?.nominators) &&
        { isDisabled: !allVals?.length, text: t('Validators'), value: 'validators' },
      isFunction(api.query.fellowshipCollective?.members) &&
        { isDisabled: !allFell?.length, text: t('Fellows'), value: 'fellows' }
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    ],
    [allFell, allVals, api, t]
  );

  const onChangeType = useCallback(
    (index: number, type: string | number) =>
      setAccType({ index, type: type.toString() }),
    []
  );

<<<<<<< HEAD
  const extrinsic = useMemo(
    () => balance && conviction && toAccount && includeTracks
      ? isAllTracks
        ? api.tx.utility.forceBatch(includeTracks.map((trackId) =>
          api.tx[palletVote as 'convictionVoting'].delegate(trackId, toAccount, conviction, balance)
        ))
        : api.tx[palletVote as 'convictionVoting'].delegate(trackId, toAccount, conviction, balance)
=======
  const batchInner = useMemo(
    () => balance && conviction >= 0 && toAccount && includeTracks
      ? (isAllTracks ? includeTracks : [trackId]).map((trackId) =>
        api.tx[palletVote as 'convictionVoting'].delegate(trackId, toAccount, conviction, balance)
      )
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
      : null,
    [api, balance, conviction, includeTracks, isAllTracks, palletVote, toAccount, trackId]
  );

<<<<<<< HEAD
=======
  const extrinsics = useTxBatch(batchInner, BATCH_OPTS);

  // NOTE The activityFrom & activityTo checks only checks that the hook has received
  // values, not that any values are contained. If we do a length check, that would mean
  // we could only delegate to accounts with activity. Instead, we just check that we
  // have the results from the on-chain data received via useActivity*
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  const isStep1Valid = !!(accountId && activityFrom && includeTracks && (includeTracks.length > 0));
  const isStep2Valid = !!(toAccount && activityTo);

  return (
    <>
      {isOpen && (
        <Modal
          className={className}
<<<<<<< HEAD
          header={t<string>('Delegate votes {{step}}/{{numSteps}}', { replace: { numSteps: 2, step } })}
=======
          header={t('Delegate votes {{step}}/{{numSteps}}', { replace: { numSteps: 2, step } })}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          onClose={toggleOpen}
          size='large'
        >
          {(step === 1) && (
            <Modal.Content>
<<<<<<< HEAD
              <Modal.Columns hint={t<string>('Delegate from this account to another. All votes made on the target would count as a delegated vote for this account.')}>
                <InputAddress
                  label={t<string>('delegate from account')}
=======
              <Modal.Columns hint={t('Delegate from this account to another. All votes made on the target would count as a delegated vote for this account.')}>
                <InputAddress
                  label={t('delegate from account')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                  onChange={setAccountId}
                  type='account'
                  withLabel
                />
                <Activity
                  allowEmpty
                  palletReferenda={palletReferenda}
                  trackId={-1}
                  tracks={tracks}
                  value={activityFrom}
                />
              </Modal.Columns>
              <Modal.Columns
                align='right'
<<<<<<< HEAD
                hint={t<string>('Either delegate your votes for a single track as selected or delegate for all available tracks.')}
              >
                <Toggle
                  label={t<string>('apply delegation to all tracks')}
=======
                hint={t('Either delegate your votes for a single track as selected or delegate for all available tracks.')}
              >
                <Toggle
                  label={t('apply delegation to all tracks')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                  onChange={toggleAllTracks}
                  value={isAllTracks}
                />
                {!isAllTracks && includeTracks && (includeTracks.length > 0) && (
                  <TrackDropdown
                    include={includeTracks}
                    onChange={setTrackId}
                    palletReferenda={palletReferenda}
                    tracks={tracks}
                  />
                )}
              </Modal.Columns>
              <Modal.Columns
                hint={
                  <>
<<<<<<< HEAD
                    <p>{t<string>('The balance associated with the vote will be locked as per the conviction specified and will not be available for transfer during this period.')}</p>
                    <p>{t<string>('Conviction locks do overlap and are not additive, meaning that funds locked during a previous vote can be locked again.')}</p>
=======
                    <p>{t('The balance associated with the vote will be locked as per the conviction specified and will not be available for transfer during this period.')}</p>
                    <p>{t('Conviction locks do overlap and are not additive, meaning that funds locked during a previous vote can be locked again.')}</p>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                  </>
                }
              >
                <VoteValue
                  accountId={accountId}
                  autoFocus
<<<<<<< HEAD
                  label={t<string>('delegated vote value')}
                  onChange={setBalance}
                />
                <ConvictionDropdown
                  label={t<string>('conviction')}
=======
                  label={t('delegated vote value')}
                  onChange={setBalance}
                />
                <ConvictionDropdown
                  label={t('conviction')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                  onChange={setConviction}
                  value={conviction}
                  voteLockingPeriod={api.consts[palletVote as 'convictionVoting'].voteLockingPeriod}
                />
              </Modal.Columns>
            </Modal.Content>
          )}
          {(step === 2) && (
            <Modal.Content>
              {(typeOpts.length > 1) && (
                <Modal.Columns
                  align='center'
<<<<<<< HEAD
                  hint={t<string>('Select from a list of pre-propulated accounts (based on your account activity) or supply your own')}
=======
                  hint={t('Select from a list of pre-propulated accounts (based on your account activity) or supply your own')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                >
                  <ToggleGroup
                    onChange={onChangeType}
                    options={typeOpts}
                    value={accType.index}
                  />
                </Modal.Columns>
              )}
<<<<<<< HEAD
              <Modal.Columns hint={t<string>('The account that you wish to delegate to')}>
=======
              <Modal.Columns hint={t('The account that you wish to delegate to')}>
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                {accType.type === 'address'
                  ? (
                    <InputAddress
                      key='address'
<<<<<<< HEAD
                      label={t<string>('delegate to address')}
=======
                      label={t('delegate to address')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                      onChange={setToAccount}
                      type='allPlus'
                    />
                  )
                  : accType.type === 'validators'
                    ? (
                      <InputAddress
                        defaultValue={allVals?.[0].value}
                        key='validators'
<<<<<<< HEAD
                        label={t<string>('delegate to validator')}
=======
                        label={t('delegate to validator')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                        onChange={setToAccount}
                        options={allVals}
                        type='allPlus'
                      />
                    )
                    : accType.type === 'fellows'
                      ? (
                        <InputAddress
                          defaultValue={allFell?.[0].value}
                          key='fellows'
<<<<<<< HEAD
                          label={t<string>('delegate to fellow')}
=======
                          label={t('delegate to fellow')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                          onChange={setToAccount}
                          options={allFell}
                          type='allPlus'
                        />
                      )
                      : null
                }
                <Activity
                  palletReferenda={palletReferenda}
                  trackId={isAllTracks ? -1 : trackId}
                  tracks={tracks}
                  value={
                    accType.type === 'fellows'
                      ? activityFell && !!toAccount && activityFell[toAccount]
                      : accType.type === 'validators'
                        ? activityVals && !!toAccount && activityVals[toAccount]
                        : activityTo
                  }
                />
              </Modal.Columns>
            </Modal.Content>
          )}
          <Modal.Actions>
            {(step !== 1) && (
              <Button
                icon='step-backward'
<<<<<<< HEAD
                label={t<string>('Prev')}
=======
                label={t('Prev')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                onClick={prevStep}
              />
            )}
            {(step !== 2) && (
              <Button
                activeOnEnter
                icon='step-forward'
                isDisabled={
                  step === 1
                    ? !isStep1Valid
                    : !isStep2Valid
                }
<<<<<<< HEAD
                label={t<string>('Next')}
=======
                label={t('Next')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                onClick={nextStep}
              />
            )}
            <TxButton
              accountId={accountId}
<<<<<<< HEAD
              extrinsic={extrinsic}
=======
              extrinsic={extrinsics}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              icon='code-merge'
              isDisabled={
                !isStep1Valid ||
                !isStep2Valid ||
                step !== 2
              }
<<<<<<< HEAD
              label={t<string>('Delegate')}
=======
              label={t('Delegate')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              onStart={toggleOpen}
            />
          </Modal.Actions>
        </Modal>
      )}
      <Button
        icon='code-merge'
        isDisabled={!hasAccounts}
<<<<<<< HEAD
        label={t<string>('Delegate')}
=======
        label={t('Delegate')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
        onClick={toggleOpen}
      />
    </>
  );
}

export default React.memo(Delegate);
