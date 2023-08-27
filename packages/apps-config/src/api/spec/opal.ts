// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import pkg from '@unique-nft/opal-testnet-types/definitions.js';
<<<<<<< HEAD

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { appPromotion, unique } = pkg;

export default {
  rpc: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    appPromotion: appPromotion.rpc,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    unique: unique.rpc
=======

export default {
  rpc: {
    appPromotion: pkg.appPromotion.rpc,
    unique: pkg.unique.rpc
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  }
} as OverrideBundleDefinition;
