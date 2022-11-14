// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { SELENDRA_GENESIS } from '../api/constants';

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

// export const prodSelendra: EndpointOption = {
//   dnslink: 'selendra',
//   genesisHash: SELENDRA_GENESIS,
//   info: 'selendra',
//   text: 'Selendra',
//   providers: {
//     'Selendra Ocean': 'wss://rpc-mainnet.selendra.org',
//     'Selendra Sabay': 'wss://rpc-mainnet2.selendra.org'
//   },
//   teleport: [1000],
//   // linked: [
//   //   ...prodParasSelendraCommon
//   // ]
// };

export const prodParasSelendraCommon: EndpointOption[] = [
  {
    info: 'indra',
    paraId: 1000,
    text: 'Indranet Parachain',
    teleport: [-1],
    providers: {
    'Digital Ocean': 'wss://rpc-indra.selendra.org',
    'The Natt': 'wss://rpc2-indra.selendra.org',
    }
  }
];

export const prodRelaySelendra: EndpointOption = {
  dnslink: 'selendra',
  genesisHash: SELENDRA_GENESIS,
  info: 'selendra',
  text: 'Selendra Relaychain',
  providers: {
    'The Natt': 'wss://rpc.selendra.org',
    'Digital Ocean': 'wss://rpc2.selendra.org',
    // NOTE: Keep this as the last entry, nothing after it
  },
  teleport: getTeleports(prodParasSelendraCommon),
  linked: [
    ...prodParasSelendraCommon,
  ]
};
