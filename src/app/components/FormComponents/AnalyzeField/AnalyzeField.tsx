'use client';

import React, { useState } from 'react';

import { analyze } from '../../../../../lib/api/analyze';
import ButtonBlack from '../../Buttons/ButtonStyles/ButtonBlack/ButtonBlack';
import styles from './AnalyzeField.module.css';
import { useAnalyzeStore } from '../../../../../stores/UseAnalyzeStore';

type AnalyzeFieldProps = {
  width?: string | number;
};

export default function AnalyzeField({ width }: AnalyzeFieldProps) {
  const [url, setUrl] = useState('');

  const { isAnalyzing, setIsAnalyzing, setResponse, response } =
    useAnalyzeStore();

  const analyzeMix = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isAnalyzing) return;

    setIsAnalyzing(true);

    try {
      const data = await analyze(url);
      console.log('response, response', response);
      setResponse(data);
    } catch (err) {
      console.error('AnalyzeError:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div>
      <form onSubmit={analyzeMix} className={styles.form}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to analyze"
          disabled={isAnalyzing}
          style={{ width: width || 'calc(10rem + 15vw)' }}
        />
        <ButtonBlack
          hasImage={false}
          buttonText={isAnalyzing ? 'Analyzing...' : 'Analyze'}
          type="submit"
          disabled={isAnalyzing}
          height={'3rem'}
        />
      </form>
    </div>
  );
}
