// Copyright 2017-2023 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import type { UseTranslationResponse } from 'react-i18next';

import { useTranslation as useTranslationBase } from 'react-i18next';

export function useTranslation (): UseTranslationResponse<'app-staking', undefined> {
=======
import { useTranslation as useTranslationBase } from 'react-i18next';

export function useTranslation (): { t: (key: string, options?: { replace: Record<string, unknown> }) => string } {
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  return useTranslationBase('app-staking');
}
