// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import type { StyledInterface } from 'styled-components';

import styledComponents from 'styled-components';

// In styled-components v6, there is a named export which can be used
// directly, i.e. "import { styled } from ..." with no more magic. Until
// such time the cjs vs esm import here is problematic, so we hack around
// the various shapes below
export const styled = (
  (styledComponents as unknown as { styled: StyledInterface }).styled ||
  (styledComponents as unknown as { default: StyledInterface }).default ||
  styledComponents as unknown as StyledInterface
);
=======
export { styled } from 'styled-components';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
