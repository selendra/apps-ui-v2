// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type React from 'react';
<<<<<<< HEAD

import { useEffect, useState } from 'react';

import { createNamedHook } from './createNamedHook.js';
import { useIsMountedRef } from './useIsMountedRef.js';
import { useScroll } from './useScroll.js';
import { useWindowSize } from './useWindowSize.js';
=======
import type { ElementPosition } from '@polkadot/react-components/Popup/types';

import { useEffect, useState } from 'react';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import { createNamedHook } from './createNamedHook.js';
import { useIsMountedRef } from './useIsMountedRef.js';
import { useScroll } from './useScroll.js';
import { useWindowSize } from './useWindowSize.js';

function useElementPositionImpl (ref: React.MutableRefObject<HTMLElement | undefined | null>): ElementPosition | undefined {
  const [elementPosition, setElementPosition] = useState<ElementPosition>();
  const mountedRef = useIsMountedRef();
  const windowSize = useWindowSize();
  const scrollY = useScroll();

  useEffect(() => {
<<<<<<< HEAD
    if (mountedRef.current && ref && ref.current) {
=======
    if (mountedRef.current && ref?.current) {
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
      const { height, width, x, y } = ref.current.getBoundingClientRect();

      setElementPosition({
        height,
        width,
        x,
        y
      });
    }
  }, [mountedRef, ref, scrollY, windowSize]);

  return elementPosition;
}

export const useElementPosition = createNamedHook('useElementPosition', useElementPositionImpl);
