'use client';

import React, { useState } from 'react';
import { HomepageDocument } from '../../../../prismicio-types';
import AnalyzeField from '@/app/components/FormComponents/AnalyzeField/AnalyzeField';
import Logo from '@/app/components/Logo/Logo';

import styles from './HomepageContent.module.css';
import { PrismicRichText } from '@prismicio/react';
import ButtonWhite from '@/app/components/Buttons/ButtonStyles/ButtonWhite/ButtonWhite';
import ButtonBlack from '@/app/components/Buttons/ButtonStyles/ButtonBlack/ButtonBlack';
import LoginForm from '@/app/components/FormComponents/LoginForm/LoginForm';

type HomepageContentProps = {
  page: HomepageDocument;
};

export default function HomepageContent({ page }: HomepageContentProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div
          className={`${styles.loginContainer} ${isLoginOpen ? styles.loginopen : ''}`}
        >
          <div className={styles.loginWrapper}>
            <div
              className={styles.crossContainer}
              onClick={() => setIsLoginOpen(false)}
            >
              <div className={styles.cross}>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <h2>Welcome back!</h2>
              <h5>
                Enter your Login Credentials below or use the options available
              </h5>
            </div>
            <div className={styles.loginFormWrapper}>
              <LoginForm />
            </div>
          </div>
        </div>
        <div
          className={styles.catchphrase}
          style={{
            opacity: `${isLoginOpen ? '0' : '1'}`,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <PrismicRichText field={page.data.catchphrase} />
        </div>
        <div className={styles.analyzeFieldContainer}>
          <div className={styles.analyzeField}>
            <PrismicRichText field={page.data.analyze_field_description} />
            <AnalyzeField />
          </div>{' '}
        </div>
        <div className={styles.buttonLogoContainer}>
          <div className={styles.buttonContainer}>
            <ButtonWhite
              buttonText="Log In"
              onClick={() => setIsLoginOpen(true)}
            />
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
