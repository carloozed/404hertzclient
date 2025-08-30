'use client';

import React, { useState, useEffect } from 'react';
import { HomepageDocument } from '../../../../prismicio-types';

import Logo from '@/app/components/Logo/Logo';

import styles from './HomepageContent.module.css';
import LoginContainer from './LoginContainer/LoginContainer';

// store imports
import { useAnalyzeStore } from '../../../../stores/UseAnalyzeStore';
import { useUserStore } from '../../../../stores/UserStore';

// component imports
import ButtonBar from './ButtonBar/ButtonBar';
import Catchphrase from './Catchphrase/Catchphrase';
import AnalyzeFieldComponent from './AnalyzeField/AnalyzeFieldComponent';
import TrackComponent from '@/app/(dashboard)/dashboard/components/DashboardClient/ContentContainer/MainContainer/Overview/components/Track/Track';
import SetComponent from '@/app/(dashboard)/dashboard/components/DashboardClient/ContentContainer/MainContainer/ScannedMixes/components/Mix/SetComponent';

type HomepageContentProps = {
  page: HomepageDocument;
};

export default function HomepageContent({ page }: HomepageContentProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessMessageShown, setIsSuccessMessageShown] = useState(false);

  const { response, isAnalyzing } = useAnalyzeStore();

  const { user } = useUserStore();

  const LoginContainerProps = {
    isLoginOpen,
    setIsLoginOpen,
    isSuccessMessageShown,
    setIsSuccessMessageShown,
  };

  useEffect(() => {
    if (user) {
      setIsSuccessMessageShown(true);
      setTimeout(() => {
        setIsLoginOpen(false);
      }, 2000);
    }
  }, [user]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <LoginContainer {...LoginContainerProps} />
        <Catchphrase isLoginOpen={isLoginOpen} page={page} />
        <AnalyzeFieldComponent page={page} />
        <div className={styles.buttonLogoContainer}>
          <ButtonBar setIsLoginOpen={setIsLoginOpen} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        {user && (
          <div
            className={`${styles.responseContainer} ${response ? styles.responseGood : ''}`}
          >
            <div>
              <h4>Analyzing now: </h4>
              {response && (
                <SetComponent
                  author={response.author}
                  thumbnail={response.thumbnail}
                  id={response.id}
                  genre={response.genre}
                  url={response.url}
                  title={response.title}
                  source={response.url}
                  isHome={true}
                />
              )}
            </div>
            <div className={styles.responses}>
              {response &&
                response.tracks.map((track, index) => (
                  <TrackComponent key={index} track={track} index={index} />
                ))}
            </div>
          </div>
        )}
        <div
          className={`${styles.logoContainer} ${isAnalyzing ? styles.animation : ''}`}
        >
          <Logo />
        </div>
      </div>
    </div>
  );
}
