import React from 'react';

import styles from './SetComponent.module.css';

import Image from 'next/image';

import { truncateText } from '../../../../../../../../../../../lib/helpers/truncateText';

import { Set } from '../../../../../../../../../../../lib/types/set';

import { useLogoSwitcher } from '../../../../../../../../../../../lib/helpers/logoSwitcher';

type SetProps = Set;

export default function SetComponent({ ...set }: SetProps) {
  const getLogoUrl = useLogoSwitcher();
  console.log(set);
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.setImageContainer}>
          <Image
            src={set.thumbnail}
            alt={`${set.source}`}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.infoContainer}>
          <div>
            <div className={styles.titleContainer}>
              <h4>{truncateText(set.title, 30)}</h4>
            </div>
            <h5>{set && set.author}</h5>
          </div>
          <div className={styles.sourceLogoContainer}>
            <Image
              src={getLogoUrl(set.source)}
              alt={`${set.source}`}
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/dummy/wave.png"
            alt={`${set.source}`}
            width={300}
            height={60}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
