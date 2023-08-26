// Copyright 2017-2023 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef, useState } from 'react';

import { selectableNetworks } from '@polkadot/networks';
import { Dropdown, MarkError, Modal } from '@polkadot/react-components';

import { useTranslation } from '../translate.js';
import { AVAIL_INDEXES } from './Ledger.js';

interface Props {
  className?: string;
  onChange: (string: string) => void;
  seedType: string;
}

const ledgerNets = selectableNetworks.filter(({ hasLedgerSupport }) => hasLedgerSupport);

function CreateSuriLedger ({ className, onChange, seedType }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const [accIndex, setAccIndex] = useState(0);
  const [addIndex, setAddIndex] = useState(0);
  const [chainType, setChainType] = useState('polkadot');

  const netOpts = useRef(ledgerNets.map(({ displayName, network }) => ({
    text: displayName,
    value: network
  })));

  const accOps = useRef(AVAIL_INDEXES.map((value) => ({
    text: t<string>('Account type {{index}}', { replace: { index: value } }),
    value
  })));

  const addOps = useRef(AVAIL_INDEXES.map((value) => ({
    text: t<string>('Address index {{index}}', { replace: { index: value } }),
    value
  })));

  useEffect((): void => {
    const network = ledgerNets.find(({ network }) => network === chainType);

    onChange(`m/44'/${network?.slip44}'/${accIndex}'/0'/${addIndex}'`);
  }, [accIndex, addIndex, chainType, onChange]);

  return (
    <Modal.Columns
      className={className}
      hint={t('The derivation will be constructed from the values you specify.')}
    >
      {seedType === 'bip'
        ? (
          <>
            <Dropdown
<<<<<<< HEAD
              label={t<string>('Ledger app type (originated from)')}
=======
              label={t('Ledger app type (originated from)')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              onChange={setChainType}
              options={netOpts.current}
              value={chainType}
            />
            <Dropdown
<<<<<<< HEAD
              label={t<string>('account type')}
=======
              label={t('account type')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              onChange={setAccIndex}
              options={accOps.current}
              value={accIndex}
            />
            <Dropdown
<<<<<<< HEAD
              label={t<string>('address index')}
=======
              label={t('address index')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              onChange={setAddIndex}
              options={addOps.current}
              value={addIndex}
            />
          </>
        )
        : <MarkError content={t('Derivation for Ledger-type accounts are only available on mnemonic seeds.')} />
      }
    </Modal.Columns>
  );
}

export default React.memo(CreateSuriLedger);
