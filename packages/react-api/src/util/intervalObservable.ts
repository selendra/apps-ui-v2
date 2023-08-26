// Copyright 2017-2023 @polkadot/react-api authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
=======
import type React from 'react';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
import type { Subscription } from 'rxjs';
import type { CallState } from '../types.js';

import { interval } from 'rxjs';

const interval$ = interval(500);

export function intervalObservable<Props, State extends CallState> (that: React.Component<Props, State>): Subscription {
  return interval$.subscribe((): void => {
    const elapsed = Date.now() - (that.state.callUpdatedAt || 0);
    const callUpdated = elapsed <= 1500;

    if (callUpdated !== that.state.callUpdated) {
      that.setState({
        callUpdated
      });
    }
  });
}
