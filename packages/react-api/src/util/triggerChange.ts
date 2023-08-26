// Copyright 2017-2023 @polkadot/react-api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OnChangeCb } from '../types.js';

import { isFunction, isObservable } from '@polkadot/util';

export function triggerChange (value?: unknown, ...callOnResult: (OnChangeCb | undefined)[]): void {
<<<<<<< HEAD
  if (!callOnResult || !callOnResult.length) {
=======
  if (!callOnResult?.length) {
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
    return;
  }

  callOnResult.forEach((callOnResult): void => {
    if (isObservable(callOnResult)) {
      callOnResult.next(value);
    } else if (isFunction(callOnResult)) {
      callOnResult(value);
    }
  });
}
