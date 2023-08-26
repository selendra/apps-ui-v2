// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import type { RefObject } from 'react';
=======
import type React from 'react';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import { useCallback, useEffect } from 'react';

import { createNamedHook } from './createNamedHook.js';

function isRefClicked (refs: React.RefObject<HTMLDivElement>[], e: MouseEvent): boolean {
  return refs.some((r) =>
    r.current &&
    r.current.contains(e.target as HTMLElement)
  );
}

<<<<<<< HEAD
function useOutsideClickImpl (refs: RefObject<HTMLDivElement>[], callback: () => void): void {
=======
function useOutsideClickImpl (refs: React.RefObject<HTMLDivElement>[], callback: () => void): void {
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  const handleClick = useCallback(
    (e: MouseEvent): void => {
      if (refs.length && !isRefClicked(refs, e)) {
        callback();
      }
    },
    [refs, callback]
  );

  useEffect((): () => void => {
    document.addEventListener('click', handleClick, true);

    return (): void => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick, callback]);
}

export const useOutsideClick = createNamedHook('useOutsideClick', useOutsideClickImpl);
