// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction, TOptions } from '../types.js';
import type { LinkOption } from './types.js';

<<<<<<< HEAD
import { defaultT } from '../util';
import { createCustom, createDev, createOwn } from './development';
// import { prodChains, prodRelayKusama, prodRelayPolkadot } from './production';
import { prodRelaySelendra, testRelaySelendra } from './production';
import { expandEndpoints } from './util';

export { CUSTOM_ENDPOINT_KEY } from './development';
export * from './production';
=======
import { createCustom, createDev, createOwn } from './development.js';
import { prodChains, prodRelayKusama, prodRelayPolkadot } from './production.js';
import { testChains, testRelayRococo, testRelayWestend } from './testing.js';
import { expandEndpoints } from './util.js';

export { CUSTOM_ENDPOINT_KEY } from './development.js';
export * from './production.js';
export * from './testing.js';

function defaultT (keyOrText: string, text?: string | TOptions, options?: TOptions): string {
  return (
    (options?.replace?.host as string) ||
    text?.toString() ||
    keyOrText
  );
}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

export function createWsEndpoints (t: TFunction = defaultT, firstOnly = false, withSort = true): LinkOption[] {
  return [
    ...createCustom(t),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.selendra.relay', 'Selendra & parachains', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
<<<<<<< HEAD
    ...expandEndpoints(t, [prodRelaySelendra], firstOnly, withSort),
=======
    ...expandEndpoints(t, [prodRelayPolkadot], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.kusama.relay', 'Kusama & parachains', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, [prodRelayKusama], firstOnly, withSort),
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.selendra.testnet.relay', 'Selendra Testnet & parachains', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
<<<<<<< HEAD
    ...expandEndpoints(t, [testRelaySelendra], firstOnly, withSort),
=======
    ...expandEndpoints(t, [testRelayWestend], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.rococo.relay', 'Test Rococo & parachains', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, [testRelayRococo], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.live', 'Live networks', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, prodChains, firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.test', 'Test networks', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, testChains, firstOnly, withSort),
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    {
      isDevelopment: true,
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.dev', 'Development', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...createDev(t),
    ...createOwn(t)
  ].filter(({ isDisabled }) => !isDisabled);
}
