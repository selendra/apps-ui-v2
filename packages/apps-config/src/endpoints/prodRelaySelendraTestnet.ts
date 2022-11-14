// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { SELENDRA_TESTNET_GENESIS } from '../api/constants';

import { getTeleports } from './util';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Selendra) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text

// export const prodParasSelendraCommon: EndpointOption[] = [
//   {
//     info: 'indracore',
//     paraId: 1000,
//     text: 'Indracore',
//     teleport: [-1],
//     providers: {
//       Selendra: 'wss://indracore.selendra.org'
//     }
//   }
// ];


export const prodParasSelendraTestnetCommon: EndpointOption[] = [
  {
    info: 'Indranet Testnet',
    paraId: 1000,
    text: 'Indranet Parachain',
    teleport: [-1],
    providers: {
    'The Natt': 'wss://rpc-testnet-indranet.selendra.org',
    'Digital Ocean': 'wss://rpc2-testnet-indranet.selendra.org',
    }
  }
];

export const prodRelaySelendraTestnet: EndpointOption = {
  dnslink: 'Selendra Testnet',
  genesisHash: SELENDRA_TESTNET_GENESIS,
  info: 'Selendra Testnet',
  text: 'Selendra Relaychain',
  providers: {
    'The Natt': 'wss://rpc-testnet.selendra.org',
    'Digital Ocean': 'wss://rpc2-testnet.selendra.org',
    // NOTE: Keep this as the last entry, nothing after it
  },
  teleport: getTeleports(prodParasSelendraTestnetCommon),
  linked: [
    ...prodParasSelendraTestnetCommon,
  ]
};

