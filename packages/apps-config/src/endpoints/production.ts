// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';


import { nodesSelendraPNG } from '../ui/logos/nodes/index.js';


export * from './productionRelayKusama.js';
export * from './productionRelayPolkadot.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'Selendra',
    providers: {
      'Default': 'wss://rpc.selendra.org',
      'Endpoint 0': 'wss://rpc2.selendra.org',
    },
    text: 'Selendra',
    ui: {
      color: '#03A9FA',
      logo: nodesSelendraPNG
    }
  },
];
