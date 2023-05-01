// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';


import { nodesSelendratestnetPNG } from '../ui/logos/nodes/index.js';


// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'selendra-testnet',
    providers: {
      'Digital Ocean 0': 'wss://rpc0-testnet.selendra.org',
      'Digital Ocean 1': 'wss://rpc1-testnet.selendra.org',
    },
    text: 'Selendra Testnet',
    ui: {
      color: '#9333ea',
      logo: nodesSelendratestnetPNG
    }
  },
];
