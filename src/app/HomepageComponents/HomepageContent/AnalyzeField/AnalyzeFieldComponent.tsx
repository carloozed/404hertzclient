'use client';

import AnalyzeField from '@/app/components/FormComponents/AnalyzeField/AnalyzeField';
import { PrismicRichText } from '@prismicio/react';
import React from 'react';
import { HomepageDocument } from '../../../../../prismicio-types';

import styles from './AnalyzeFieldComponent.module.css';

type AnalyzeFieldProps = {
  page?: HomepageDocument;
};

export default function AnalyzeFieldComponent({ page }: AnalyzeFieldProps) {
  return (
    <div className={styles.analyzeFieldContainer}>
      <div className={styles.analyzeField}>
        <PrismicRichText field={page && page.data.analyze_field_description} />
        <AnalyzeField />
      </div>
      <div className={styles.alert}>
        <p>
          You have to create an account / login first to be able to analyze
          mixes. <span>Why?</span>
        </p>
      </div>
    </div>
  );
}
