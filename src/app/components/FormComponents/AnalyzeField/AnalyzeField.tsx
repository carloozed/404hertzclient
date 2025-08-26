'use client';

import React, { useState } from 'react';

import { analyze } from '../../../../../lib/api/analyze';
import ButtonBlack from '../../Buttons/ButtonStyles/ButtonBlack/ButtonBlack';
import styles from './AnalyzeField.module.css';
import { AnalyzeResponse } from '../../../../../lib/types/analyze';

type AnalyzeFieldProps = {
  width?: string | number;
};

export default function AnalyzeField({ width }: AnalyzeFieldProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AnalyzeResponse | null>(null);

  const analyzeMix = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await analyze(url);
      console.log('Analysis results:', data);
      setResponse(data);
    } catch (err) {
      console.error('AnalyzeError:', err);
    } finally {
      setLoading(false);
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
          disabled={loading}
          style={{ width: width || 'calc(10rem + 15vw)' }}
        />
        <ButtonBlack
          hasImage={false}
          buttonText={loading ? 'Analyzing...' : 'Analyze'}
          type="submit"
          disabled={loading}
          height={'3rem'}
        />
      </form>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {response &&
          response.tracks.map((track, index) => (
            <a target="_blank" key={index} href={track.youtube ?? undefined}>
              {track.title}
            </a>
          ))}
      </div>
    </div>
  );
}
