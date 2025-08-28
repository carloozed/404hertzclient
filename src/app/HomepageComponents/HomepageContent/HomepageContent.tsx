'use client';

import React, { useState } from 'react';
import { HomepageDocument } from '../../../../prismicio-types';

import Logo from '@/app/components/Logo/Logo';

import styles from './HomepageContent.module.css';
import LoginContainer from './LoginContainer/LoginContainer';

// store imports
import { useAnalyzeStore } from '../../../../stores/UseAnalyzeStore';

// component imports
import ButtonBar from './ButtonBar/ButtonBar';
import Catchphrase from './Catchphrase/Catchphrase';
import AnalyzeFieldComponent from './AnalyzeField/AnalyzeFieldComponent';
import TrackComponent from '@/app/(dashboard)/dashboard/components/DashboardClient/ContentContainer/MainContainer/Overview/components/Track/Track';

type HomepageContentProps = {
  page: HomepageDocument;
};

export default function HomepageContent({ page }: HomepageContentProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { response, isAnalyzing } = useAnalyzeStore();

  console.log(response);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <LoginContainer
          isLoginOpen={isLoginOpen}
          setIsLoginOpen={setIsLoginOpen}
        />
        <Catchphrase isLoginOpen={isLoginOpen} page={page} />
        <AnalyzeFieldComponent page={page} />
        <div className={styles.buttonLogoContainer}>
          <ButtonBar setIsLoginOpen={setIsLoginOpen} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div
          className={`${styles.responseContainer} ${response ? styles.responseGood : ''}`}
        >
          <div className={styles.responses}>
            {response &&
              response.tracks.map((track, index) => (
                <TrackComponent key={index} track={track} index={index} />
              ))}
          </div>
        </div>
        <div
          className={`${styles.logoContainer} ${isAnalyzing ? styles.animation : ''}`}
        >
          <Logo />
        </div>
      </div>
    </div>
  );
}
