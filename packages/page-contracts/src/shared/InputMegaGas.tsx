// Copyright 2017-2023 @polkadot/app-contracts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { WeightV2 } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import type { UseWeight } from '../types.js';

import React, { useEffect, useMemo, useState } from 'react';

import { InputNumber, Toggle } from '@polkadot/react-components';
import { BN_MILLION, BN_ONE, BN_ZERO } from '@polkadot/util';

import { useTranslation } from '../translate.js';

interface Props {
  className?: string;
  estimatedWeight?: BN | null;
  estimatedWeightV2?: WeightV2 | null;
  isCall?: boolean;
  weight: UseWeight;
}

function InputMegaGas ({ className,
  estimatedWeight,
  estimatedWeightV2,
  isCall,
  weight: { executionTime,
    isValid,
    isWeightV2,
    megaGas,
    megaRefTime,
    percentage,
    proofSize,
    setIsEmpty,
    setMegaGas,
    setMegaRefTime,
    setProofSize } }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const [withEstimate, setWithEstimate] = useState(true);

  const estimatedMg = useMemo(
    () => estimatedWeight
      ? estimatedWeight.div(BN_MILLION).iadd(BN_ONE)
      : null,
    [estimatedWeight]
  );

  const estimatedMgRefTime = useMemo(
    () => estimatedWeightV2
      ? estimatedWeightV2.refTime.toBn().div(BN_MILLION).iadd(BN_ONE)
      : null,
    [estimatedWeightV2]
  );

  const estimatedProofSize = useMemo(
    () => estimatedWeightV2
      ? estimatedWeightV2.proofSize.toBn()
      : null,
    [estimatedWeightV2]
  );

  useEffect((): void => {
    withEstimate && estimatedMg && setMegaGas(estimatedMg);
  }, [estimatedMg, setMegaGas, withEstimate]);

  useEffect((): void => {
    withEstimate && estimatedMgRefTime && setMegaRefTime(estimatedMgRefTime);
  }, [estimatedMgRefTime, setMegaRefTime, withEstimate]);

  useEffect((): void => {
    withEstimate && estimatedProofSize && setProofSize(estimatedProofSize);
  }, [estimatedProofSize, setProofSize, withEstimate]);

  useEffect((): void => {
    setIsEmpty(withEstimate && !!isCall);
  }, [isCall, setIsEmpty, withEstimate]);

  const isDisabled = !!estimatedMg && withEstimate;

  return (
    <div className={className}>
      {isWeightV2
        ? <>
          <InputNumber
            defaultValue={estimatedMgRefTime && isDisabled ? estimatedMgRefTime.toString() : undefined}
            isDisabled={isDisabled}
            isError={!isValid}
            isZeroable={isCall}
            label={
              estimatedMgRefTime && (isCall ? !withEstimate : true)
<<<<<<< HEAD
                ? t<string>('max RefTime allowed (M, {{estimatedRefTime}} estimated)', { replace: { estimatedMgRefTime: estimatedMgRefTime.toString() } })
                : t<string>('max RefTime allowed (M)')
=======
                ? t('max RefTime allowed (M, {{estimatedRefTime}} estimated)', { replace: { estimatedMgRefTime: estimatedMgRefTime.toString() } })
                : t('max RefTime allowed (M)')
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
            }
            onChange={isDisabled ? undefined : setMegaRefTime}
            value={isDisabled ? undefined : ((isCall && withEstimate) ? BN_ZERO : megaRefTime)}
          >
            {(estimatedWeightV2 || isCall) && (
              <Toggle
                label={
                  isCall
<<<<<<< HEAD
                    ? t<string>('max read gas')
                    : t<string>('use estimated gas')
=======
                    ? t('max read gas')
                    : t('use estimated gas')
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                }
                onChange={setWithEstimate}
                value={withEstimate}
              />
            )}
          </InputNumber>
          <InputNumber
            defaultValue={estimatedProofSize && isDisabled ? estimatedProofSize.toString() : undefined}
            isDisabled={isDisabled}
            isError={!isValid}
            isZeroable={isCall}
            label={
              estimatedProofSize && (isCall ? !withEstimate : true)
<<<<<<< HEAD
                ? t<string>('max ProofSize allowed ({{estimatedProofSize}} estimated)', { replace: { estimatedProofSize: estimatedProofSize.toString() } })
                : t<string>('max ProofSize allowed')
=======
                ? t('max ProofSize allowed ({{estimatedProofSize}} estimated)', { replace: { estimatedProofSize: estimatedProofSize.toString() } })
                : t('max ProofSize allowed')
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
            }
            onChange={isDisabled ? undefined : setProofSize}
            value={isDisabled ? undefined : ((isCall && withEstimate) ? BN_ZERO : proofSize)}
          />
          <div className='contracts--Input-meter'>
<<<<<<< HEAD
            {t<string>('{{executionTime}}s execution time', { replace: { executionTime: executionTime.toFixed(3) } })}{', '}
            {t<string>('{{percentage}}% of block weight', { replace: { percentage: percentage.toFixed(2) } })}
=======
            {t('{{executionTime}}s execution time', { replace: { executionTime: executionTime.toFixed(3) } })}{', '}
            {t('{{percentage}}% of block weight', { replace: { percentage: percentage.toFixed(2) } })}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          </div>
        </>
        : <>
          <InputNumber
            defaultValue={estimatedMg && isDisabled ? estimatedMg.toString() : undefined}
            isDisabled={isDisabled}
            isError={!isValid}
            isZeroable={isCall}
            label={
              estimatedMg && (isCall ? !withEstimate : true)
<<<<<<< HEAD
                ? t<string>('max gas allowed (M, {{estimatedMg}} estimated)', { replace: { estimatedMg: estimatedMg.toString() } })
                : t<string>('max gas allowed (M)')
=======
                ? t('max gas allowed (M, {{estimatedMg}} estimated)', { replace: { estimatedMg: estimatedMg.toString() } })
                : t('max gas allowed (M)')
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
            }
            onChange={isDisabled ? undefined : setMegaGas}
            value={isDisabled ? undefined : ((isCall && withEstimate) ? BN_ZERO : megaGas)}
          >
            {(estimatedWeight || isCall) && (
              <Toggle
                label={
                  isCall
<<<<<<< HEAD
                    ? t<string>('max read gas')
                    : t<string>('use estimated gas')
=======
                    ? t('max read gas')
                    : t('use estimated gas')
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
                }
                onChange={setWithEstimate}
                value={withEstimate}
              />
            )}
          </InputNumber>
          <div className='contracts--Input-meter'>
<<<<<<< HEAD
            {t<string>('{{executionTime}}s execution time', { replace: { executionTime: executionTime.toFixed(3) } })}{', '}
            {t<string>('{{percentage}}% of block weight', { replace: { percentage: percentage.toFixed(2) } })}
=======
            {t('{{executionTime}}s execution time', { replace: { executionTime: executionTime.toFixed(3) } })}{', '}
            {t('{{percentage}}% of block weight', { replace: { percentage: percentage.toFixed(2) } })}
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
          </div>
        </>}
    </div>
  );
}

export default React.memo(InputMegaGas);
