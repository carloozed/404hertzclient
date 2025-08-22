import React from 'react';
import styles from './SetComponent.module.css';
import Image from 'next/image';
import { truncateText } from '../../../../../../../../../../../lib/helpers/truncateText';
import { Set } from '../../../../../../../../../../../lib/types/set';
import { useLogoSwitcher } from '../../../../../../../../../../../lib/helpers/logoSwitcher';

type SetProps = Set & {
  selectedSet: number | null;
  setSelectedSet: (id: number | null) => void;
};

export default function SetComponent({
  selectedSet,
  setSelectedSet,
  ...set
}: SetProps) {
  const getLogoUrl = useLogoSwitcher();

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
              <h4>{truncateText(set.title, 36)}</h4>
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
      <div
        className={styles.indicatorContainer}
        onClick={() => setSelectedSet(selectedSet === set.id ? null : set.id)}
      >
        <div className={styles.indicator}></div>
      </div>
    </div>
  );
}
