// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
=======
import type React from 'react';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
import type { RegistrarIndex } from '@polkadot/types/interfaces/identity/types';
import type { DisplayedJudgement } from '../types.js';

export interface DropdownOption {
  className?: string;
  key?: string;
  text: React.ReactNode;
  value: string;
}

export type DropdownOptions = DropdownOption[];
export type SortedJudgements = ({ judgementName: DisplayedJudgement, registrarsIndexes: RegistrarIndex[] })[];
