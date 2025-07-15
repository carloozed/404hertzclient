'use client';

import React, { useState } from 'react';

import { analyze } from '../../../../lib/api/analyze';
import ButtonBlack from '../Buttons/ButtonBlack/ButtonBlack';
import styles from './AnalyzeField.module.css'; // Adjust the path as needed

export default function AnalyzeField() {
  const [url, setUrl] = useState('');

  const analyzeMix = async () => {
    try {
      await analyze(url);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <form onSubmit={analyzeMix} className={styles.form}>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <ButtonBlack hasImage={false} buttonText="Analyze" type="submit" />
    </form>
  );
}
