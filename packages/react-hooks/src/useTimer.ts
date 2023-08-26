<<<<<<< HEAD
// Copyright 2017-2023 @polkadot/react-components authors & contributors
=======
// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useRef, useState } from 'react';

import { useIsMountedRef } from './useIsMountedRef.js';

export function useTimer <T> (stateFn: (prev: T) => T, initial: T, interval: number): T {
  const [state, setState] = useState(initial);
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useIsMountedRef();

  useEffect((): () => void => {
    function fire (): void {
      timerId.current = null;

      if (mountedRef.current) {
        try {
          setState(stateFn);
        } catch (e) {
          console.error(e);
        }

        timerId.current = setTimeout(fire, interval);
      }
    }

    fire();

    return (): void => {
      timerId.current && clearTimeout(timerId.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
