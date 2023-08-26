// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IconName } from '@fortawesome/fontawesome-svg-core';
<<<<<<< HEAD
=======
import type React from 'react';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

export type Button$Callback = () => void | Promise<void>;

export interface ButtonProps {
  activeOnEnter?: boolean;
  children?: React.ReactNode;
  className?: string;
  dataTestId?: string;
  icon?: IconName;
  isBasic?: boolean;
  isBusy?: boolean;
  isCircular?: boolean;
  isDisabled?: boolean;
  isFull?: boolean;
  isIcon?: boolean;
  isReadOnly?: boolean;
  isSelected?: boolean;
  isToplevel?: boolean;
  label?: React.ReactNode;
  onClick?: Button$Callback;
  onMouseEnter?: Button$Callback;
  onMouseLeave?: Button$Callback;
  tabIndex?: number;
  tooltip?: React.ReactNode;
  withoutLink?: boolean;
}
