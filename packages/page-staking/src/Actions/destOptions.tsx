// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

interface Option {
  text: string;
  value: string;
}

export function createDestPrev (t: (key: string, options?: { replace: Record<string, unknown> }) => string): Option[] {
  return [
    { text: t<string>('Stash account (increase the amount at stake)'), value: 'Staked' },
    { text: t<string>('Stash account (do not increase the amount at stake)'), value: 'Stash' },
    { text: t<string>('Controller account'), value: 'Controller' }
  ];
}

<<<<<<< HEAD
export function createDestCurr (t: TFunction): Option[] {
  return createDestPrev(t).concat({ text: t<string>('Specified payment account'), value: 'Account' });
=======
export function createDestCurr (t: (key: string, options?: { replace: Record<string, unknown> }) => string): Option[] {
  return createDestPrev(t).concat({ text: t('Specified payment account'), value: 'Account' });
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
}
