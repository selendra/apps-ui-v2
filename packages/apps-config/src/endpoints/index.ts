// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from '../types';
import type { LinkOption } from './types';

import { defaultT } from '../util';
import { createCustom, createDev, createOwn } from './development';
import { prodSelendra, prodSelendraTestnet} from './production';
import { expandEndpoints } from './util';

export { CUSTOM_ENDPOINT_KEY } from './development';

export function createWsEndpoints(t: TFunction = defaultT, firstOnly = false, withSort = true): LinkOption[] {
  return [
    ...createCustom(t),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.Selendra.relay', 'Selendra Mainnet', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...expandEndpoints(t, [prodSelendra], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.Selendra.relay', 'Selendra Testnet', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...expandEndpoints(t, [prodSelendraTestnet], firstOnly, withSort),
    //   isDisabled: false,
    //   isHeader: true,
    //   text: t('rpc.header.Cardamom.relay', 'Cardamom & parachains (Testnet)', { ns: 'apps-config' }),
    //   textBy: '',
    //   value: ''
    // },
    // ...expandEndpoints(t, [prodRelayCardamom], firstOnly, withSort),
    {
      isDevelopment: true,
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.dev', 'Development', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...createDev(t),
    ...createOwn(t)
  ].filter(({ isDisabled }) => !isDisabled);
}
