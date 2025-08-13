'use client';

import React, { useState } from 'react';

import { analyze } from '../../../../../lib/api/analyze';
import ButtonBlack from '../../Buttons/ButtonStyles/ButtonBlack/ButtonBlack';
import styles from './AnalyzeField.module.css';

export default function AnalyzeField() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeMix = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await analyze(url);
      console.log('Analysis results:', data);
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
        />
        <ButtonBlack
          hasImage={false}
          buttonText={loading ? 'Analyzing...' : 'Analyze'}
          type="submit"
          disabled={loading}
        />
      </form>
    </div>
  );
}
