'use client';

import React, { useEffect, useState } from 'react';

import ButtonBlack from '../../Buttons/ButtonStyles/ButtonBlack/ButtonBlack';
import styles from './AnalyzeField.module.css';
import { useAnalyzeStore } from '../../../../../stores/UseAnalyzeStore';

import { useUserStore } from '../../../../../stores/UserStore';

import analyzeMix from './analyzeMix';

type AnalyzeFieldProps = {
  width?: string | number;
  showAlert?: boolean;
  setShowAlert?: (showAlert: boolean) => void | undefined;
  setIsWiggling?: (isWiggling: boolean) => void | undefined;
  isWiggling?: boolean;
};

export default function AnalyzeField({
  width,
  setShowAlert,
  setIsWiggling,
  isWiggling,
}: AnalyzeFieldProps) {
  const [url, setUrl] = useState('');

  const { user } = useUserStore();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const { isAnalyzing, setIsAnalyzing, setResponse, response } =
    useAnalyzeStore();

  useEffect(() => {
    if (isButtonClicked && !user) {
      if (setShowAlert) setShowAlert(true);
      if (setIsWiggling) setIsWiggling(true);

      const wiggleTimer = setTimeout(() => {
        if (setIsWiggling) setIsWiggling(false);
      }, 2000);

      const alertTimer = setTimeout(() => {
        if (setShowAlert) setShowAlert(false);
        setIsButtonClicked(false);
      }, 4000);

      return () => {
        clearTimeout(wiggleTimer);
        clearTimeout(alertTimer);
      };
    }
  }, [isButtonClicked, user, setShowAlert, setIsWiggling]);

  return (
    <div>
      <form
        onSubmit={(e) =>
          analyzeMix({
            e,
            isAnalyzing,
            user,
            url,
            setIsAnalyzing,
            setResponse,
            response,
          })
        }
        className={`${styles.form} ${isWiggling ? styles.wiggle : ''}`}
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to analyze"
          disabled={isAnalyzing}
          style={{ width: width || 'calc(12rem + 15vw)' }}
        />
        <ButtonBlack
          hasImage={false}
          buttonText={isAnalyzing ? 'Analyzing...' : 'Analyze'}
          type="submit"
          disabled={!user || isAnalyzing}
          height={'calc(1.5rem + 1.5vw)'}
          onClick={!user ? () => setIsButtonClicked(true) : undefined}
        />
      </form>
    </div>
  );
}
