'use client';

import React from 'react';
import { HomepageDocument } from '../../../../prismicio-types';
import AnalyzeField from '@/app/components/FormComponents/AnalyzeField/AnalyzeField';
import Logo from '@/app/components/Logo/Logo';

import styles from './HomepageContent.module.css';
import { PrismicRichText } from '@prismicio/react';
import ButtonWhite from '@/app/components/Buttons/ButtonStyles/ButtonWhite/ButtonWhite';
import ButtonBlack from '@/app/components/Buttons/ButtonStyles/ButtonBlack/ButtonBlack';

type HomepageContentProps = {
  page: HomepageDocument;
};

export default function HomepageContent({ page }: HomepageContentProps) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.catchphrase}>
          <PrismicRichText field={page.data.catchphrase} />
        </div>
        <div>
          <PrismicRichText field={page.data.analyze_field_description} />
          <AnalyzeField />
        </div>

        <div className={styles.buttonLogoContainer}>
          <div className={styles.buttonContainer}>
            <ButtonWhite buttonText="Log In" />
            <ButtonBlack buttonText="Sign Up" />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      </div>
    </div>
  );
}
