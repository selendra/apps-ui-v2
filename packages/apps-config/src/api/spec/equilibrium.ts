// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Enum } from '@polkadot/types';
import type { AccountId, AccountIndex, Address, Balance } from '@polkadot/types/interfaces';
import type { OverrideBundleDefinition } from '@polkadot/types/types';
import type { Struct, u64, u128, Vec } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

<<<<<<< HEAD
import eqDefs from '@equilab/definitions';
import { map } from 'rxjs';
=======
import { map, of } from 'rxjs';
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

import { memo } from '@polkadot/api-derive/util';
import { U8aFixed } from '@polkadot/types-codec';

export interface SignedBalance extends Enum {
  readonly isPositive: boolean;
  readonly asPositive: Balance;
  readonly isNegative: boolean;
  readonly asNegative: Balance;
}

<<<<<<< HEAD
interface Currency extends Enum {
  readonly isUnknown: boolean;
  readonly isUsd: boolean;
  readonly isEq: boolean;
  readonly isEth: boolean;
  readonly isBtc: boolean;
  readonly isEos: boolean;
  readonly isDot: boolean;
}

type CommonBalanceMap = ApiInterfaceRx['query']['balances']['account'];

type EqBalanceDoubleMap<T> = AugmentedQuery<
'rxjs',
(key1: AccountIndex | AccountId | Address | string, key2: T | string) => Observable<SignedBalance>,
[AccountId, Currency]
>

const { equilibrium, equilibriumNext } = eqDefs;

export const u64FromCurrency = (currency: string): number => {
=======
export const u64FromCurrency = (currency: string): bigint => {
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
  const buf = Buffer.from(currency.toLowerCase());
  const size = buf.length;

  return buf.reduce((val, digit, i) => {
    const exp = BigInt(size - 1 - i);

    return BigInt(val) + BigInt(256) ** exp * BigInt(digit);
  }, BigInt(0));
};

const TOKENS = ['eq'];

interface EqPrimitivesBalanceAccountData extends Enum {
  readonly isV0: boolean;
  readonly asV0: {
    readonly lock: u128;
    readonly balance: Vec<ITuple<[u64, EqPrimitivesSignedBalance]>>;
  } & Struct;
  readonly type: 'V0';
}

interface EqPrimitivesSignedBalance extends Enum {
  readonly isPositive: boolean;
  readonly asPositive: u128;
  readonly isNegative: boolean;
  readonly asNegative: u128;
  readonly type: 'Positive' | 'Negative';
}

export const createDerives = (tokens: string[]) => tokens.reduce((prev, token, i) => {
  const isNative = !i;

  return {
    ...prev,

    [token]: { customAccount: (instanceId: string, api: ApiInterfaceRx) => {
      const { registry } = api;
      const asset = u64FromCurrency(token);

      return memo(instanceId, (address: AccountIndex | AccountId | Address | string) => api.query.system.account(address).pipe(map((v) => {
        const data = (v as unknown as { data: EqPrimitivesBalanceAccountData }).data;

        const miscFrozen = isNative ? data.asV0.lock : registry.createType('u128', 0);
        const feeFrozen = miscFrozen;
        const reserved = registry.createType('u128', 0);

        const entry = data.asV0.balance.find(([assetId]) => {
          return assetId.toBigInt() === asset;
        });

<<<<<<< HEAD
export const createCustomAccount = <A = string>(currency: string, currencyToAsset: (curr: string, api?: ApiInterfaceRx) => A, accountDataType = 'AccountData'):
(instanceId: string, api: ApiInterfaceRx) => RxResult<(arg: string | Uint8Array | AccountId) => Observable<AccountData>> => (_instanceId: string, api: ApiInterfaceRx) => {
  const registry = api.registry;
=======
        const balance = entry?.[1];
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f

        const free = balance?.isPositive
          ? balance.asPositive
          : registry.createType('u128', 0);

        return {
          feeFrozen, free, miscFrozen, reserved
        };
      })));
    },
    customLocks: (instanceId: string, api: ApiInterfaceRx) => {
      const { registry } = api;

      return memo(instanceId, (address: AccountIndex | AccountId | Address | string) => isNative
        ? api.query.system.account(address).pipe(map((v) => {
          const data = (v as unknown as { data: EqPrimitivesBalanceAccountData }).data;

          return [{
            amount: data.asV0.lock,
            id: new U8aFixed(registry),
            reasons: ''
          }];
        }))
        : of([]));
    } }
  };
}, {});

const definitions: OverrideBundleDefinition = {
  derives: createDerives(TOKENS),
  instances: { balances: TOKENS }
};

export default definitions;
