// Copyright 2017-2023 @polkadot/app-utilities authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import React, { useCallback, useMemo, useState } from 'react';

import { createOption } from '@polkadot/app-settings/util';
import { createSs58 } from '@polkadot/apps-config';
import { allNetworks } from '@polkadot/networks';
import { Dropdown, InputAddressSimple, Static } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';
import { formatNumber, u8aToHex } from '@polkadot/util';
import { base58Decode, checkAddressChecksum, decodeAddress, encodeAddress, isAddress } from '@polkadot/util-crypto';

import { useTranslation } from './translate.js';

interface Props {
  className?: string;
}

interface State {
  inputSS58: number;
  publicKey: HexString | null;
}

function getState (input: string | null): State {
  try {
    if (input && isAddress(input)) {
      const decoded = base58Decode(input);
      const [,,, inputSS58] = checkAddressChecksum(decoded);
      const publicU8a = decodeAddress(input);

      return {
        inputSS58,
        publicKey: u8aToHex(publicU8a)
      };
    }
  } catch {
    // ignore
  }

  return {
    inputSS58: 42,
    publicKey: null
  };
}

function Addresses ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { chainSS58 } = useApi();
  const [{ inputSS58, publicKey }, setState] = useState<State>({ inputSS58: 42, publicKey: null });
  const [prefix, setPrefix] = useState(-1);

  const setAddress = useCallback(
    (address: string | null) =>
      setState(getState(address)),
    []
  );

  const prefixOptions = useMemo(
    () => {
      const network = allNetworks.find(({ prefix }) => prefix === chainSS58);

      return createSs58(t).map((o) =>
        createOption(o, ['default'], 'empty', (o.value === -1
          ? network
            ? ` (${network.displayName}, ${chainSS58 || 0})`
            : ` (${chainSS58 || 0})`
          : ` (${o.value})`
        ))
      );
    },
    [chainSS58, t]
  );

  const converted = useMemo(
    () => publicKey && encodeAddress(publicKey, prefix === -1 ? chainSS58 : prefix),
    [chainSS58, prefix, publicKey]
  );

  return (
    <div className={className}>
      <div className='ui--row'>
        <InputAddressSimple
          autoFocus
          isError={!publicKey}
<<<<<<< HEAD
          label={t<string>('address to convert')}
=======
          label={t('address to convert')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          noConvert
          onChange={setAddress}
        />
      </div>
      <div className='ui--row'>
        <Dropdown
          defaultValue={prefix}
<<<<<<< HEAD
          label={t<string>('address prefix')}
=======
          label={t('address prefix')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          onChange={setPrefix}
          options={prefixOptions}
        />
      </div>
      {publicKey && (
        <>
          <div className='ui--row'>
            <Static
              className='medium'
              label={t('input ss58 prefix')}
              value={formatNumber(inputSS58)}
            />
          </div>
          {converted && (
            <div className='ui--row'>
              <InputAddressSimple
                defaultValue={converted}
                isDisabled
                key={converted}
                label={t('converted address')}
              />
            </div>
          )}
          <div className='ui--row'>
            <Static
              className='full'
<<<<<<< HEAD
              label={t<string>('hex public key')}
=======
              label={t('hex public key')}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
              value={publicKey}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(Addresses);
