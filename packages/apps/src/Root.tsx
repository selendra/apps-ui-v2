// Copyright 2017-2023 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeDef } from '@polkadot/react-hooks/ctx/types';
import type { KeyringStore } from '@polkadot/ui-keyring/types';

import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ApiCtxRoot } from '@polkadot/react-api';
import { ApiStatsCtxRoot, BlockAuthorsCtxRoot, BlockEventsCtxRoot, KeyringCtxRoot, QueueCtxRoot, WindowSizeCtxRoot } from '@polkadot/react-hooks';
import { settings } from '@polkadot/ui-settings';

import Apps from './Apps.js';
<<<<<<< HEAD
import { darkTheme, lightTheme } from './themes.js';
=======
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

interface Props {
  isElectron: boolean;
  store?: KeyringStore;
}

function createTheme ({ uiTheme }: { uiTheme: string }): ThemeDef {
  const theme = uiTheme === 'dark'
    ? 'dark'
    : 'light';

  document?.documentElement?.setAttribute('data-theme', theme);

  return { theme };
}

function Root ({ isElectron, store }: Props): React.ReactElement<Props> {
  const [theme, setTheme] = useState(() => createTheme(settings));

  useEffect((): void => {
    settings.on('change', (settings) => setTheme(createTheme(settings)));
  }, []);

  // The ordering here is critical. It defines the hierarchy of dependencies,
<<<<<<< HEAD
  // i.e. Block* could from Api. Certainly no cross-deps allowed
=======
  // i.e. Block* depends on Api. Certainly no cross-deps allowed
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  return (
    <Suspense fallback='...'>
      <ThemeProvider theme={theme}>
        <QueueCtxRoot>
          <ApiCtxRoot
            apiUrl={settings.apiUrl}
            isElectron={isElectron}
            store={store}
          >
            <KeyringCtxRoot>
              <ApiStatsCtxRoot>
                <BlockAuthorsCtxRoot>
                  <BlockEventsCtxRoot>
                    <HashRouter>
                      <WindowSizeCtxRoot>
                        <Apps />
                      </WindowSizeCtxRoot>
                    </HashRouter>
                  </BlockEventsCtxRoot>
                </BlockAuthorsCtxRoot>
              </ApiStatsCtxRoot>
            </KeyringCtxRoot>
          </ApiCtxRoot>
        </QueueCtxRoot>
      </ThemeProvider>
    </Suspense>
  );
}

export default React.memo(Root);
