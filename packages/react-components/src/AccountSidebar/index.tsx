// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useState } from 'react';

<<<<<<< HEAD:packages/page-accounts/src/Sidebar/index.tsx
=======
import { AccountSidebarCtx } from '@polkadot/react-hooks/ctx/AccountSidebar';

>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/react-components/src/AccountSidebar/index.tsx
import Sidebar from './Sidebar.js';

interface Props {
  children: React.ReactNode;
}

type State = [string | null, (() => void) | null];

<<<<<<< HEAD:packages/page-accounts/src/Sidebar/index.tsx
type SetStateContext = undefined | (([address, onUpdateName]: State) => void);

const EMPTY_STATE: State = [null, null];

export const AccountSidebarCtx = React.createContext<SetStateContext>(undefined);
=======
const EMPTY_STATE: State = [null, null];
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f:packages/react-components/src/AccountSidebar/index.tsx

function AccountSidebar ({ children }: Props): React.ReactElement<Props> {
  const [[address, onUpdateName], setAddress] = useState<State>(EMPTY_STATE);

  const onClose = useCallback(
    () => setAddress([null, null]),
    []
  );

  return (
    <AccountSidebarCtx.Provider value={setAddress}>
      {children}
      {address && (
        <Sidebar
          address={address}
          dataTestId='account-sidebar'
          onClose={onClose}
          onUpdateName={onUpdateName}
        />
      )}
    </AccountSidebarCtx.Provider>
  );
}

export default React.memo(AccountSidebar);
