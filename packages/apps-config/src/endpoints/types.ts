// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
=======
import type React from 'react';
import type { IconTheme } from '@polkadot/react-identicon/types';
import type { HexString } from '@polkadot/util/types';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
import type { Option } from '../settings/types.js';

interface BaseOption {
  dnslink?: string;
  genesisHash?: HexString;
  homepage?: string;
  paraId?: number;
  summary?: string;
  teleport?: number[];
  ui: {
    color?: string;
<<<<<<< HEAD
=======
    identityIcon?: IconTheme;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    logo?: string;
  }
}

export interface EndpointOption extends BaseOption {
  isChild?: boolean;
  isDevelopment?: boolean;
  isDisabled?: boolean;
  isUnreachable?: boolean;
  linked?: EndpointOption[];
  info?: string;
<<<<<<< HEAD
  providers: Record<string, string>;
=======
  providers: Record<string, `${'wss://' | 'light://substrate-connect/'}${string}`>;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  text: string;
}

export interface LinkOption extends BaseOption, Option {
<<<<<<< HEAD
  genesisHashRelay?: string;
=======
  genesisHashRelay?: HexString;
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  isChild?: boolean;
  isDevelopment?: boolean;
  isLightClient?: boolean;
  isRelay?: boolean;
  isUnreachable?: boolean;
  isSpaced?: boolean;
  linked?: LinkOption[];
  textBy: string;
  textRelay?: React.ReactNode;
  value: string;
  valueRelay?: string[];
}
