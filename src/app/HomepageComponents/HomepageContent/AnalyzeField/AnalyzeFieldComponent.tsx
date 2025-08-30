'use client';
import React, { useState } from 'react';

import AnalyzeField from '@/app/components/FormComponents/AnalyzeField/AnalyzeField';
import { PrismicRichText } from '@prismicio/react';
import { HomepageDocument } from '../../../../../prismicio-types';

import styles from './AnalyzeFieldComponent.module.css';

import { useUserStore } from '../../../../../stores/UserStore';

type AnalyzeFieldProps = {
  page?: HomepageDocument;
};

export default function AnalyzeFieldComponent({ page }: AnalyzeFieldProps) {
  const { user } = useUserStore();
  const [showAlert, setShowAlert] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);

  return (
    <div className={styles.analyzeFieldContainer}>
      <div className={styles.analyzeField}>
        <PrismicRichText field={page && page.data.analyze_field_description} />
        <AnalyzeField
          setShowAlert={setShowAlert}
          showAlert={showAlert}
          setIsWiggling={setIsWiggling}
          isWiggling={isWiggling}
        />
      </div>

      <div className={styles.alert}>
        <div
          className={`${styles.alertContent} ${!user && showAlert ? styles.visible : ''}`}
        >
          <h4>Bot Prevention </h4>
          <p>
            you have to create an account / login first to be able to analyze
            mixes.
          </p>
        </div>
      </div>
    </div>
  );
}
