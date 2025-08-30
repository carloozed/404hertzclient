import React from 'react';
import styles from './SetComponent.module.css';
import Image from 'next/image';
import { truncateText } from '../../../../../../../../../../../lib/helpers/truncateText';
import { Set } from '../../../../../../../../../../../lib/types/set';
import { useLogoSwitcher } from '../../../../../../../../../../../lib/helpers/logoSwitcher';
import Link from 'next/link';

type SetProps = Set & {
  selectedSet?: number | null;
  setSelectedSet?: (id: number | null) => void;
  isHome?: boolean;
};

export default function SetComponent({
  selectedSet,
  setSelectedSet,
  isHome = false,
  ...set
}: SetProps) {
  const getLogoUrl = useLogoSwitcher();

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.setImageContainer}>
          <Link href={set.url}>
            <Image
              src={set.thumbnail}
              alt={`${set.source}`}
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div>
            <div className={styles.titleContainer}>
              <h4>
                {!isHome
                  ? truncateText(set.title, 36)
                  : truncateText(set.title, 48)}
              </h4>
            </div>
            <h5>{set && set.author}</h5>
          </div>
          <div className={styles.sourceLogoContainer}>
            <Link href={set.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={getLogoUrl(set.source)}
                alt={`${set.source}`}
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          {!isHome && (
            <Image
              src="/images/dummy/wave.png"
              alt={`${set.source}`}
              width={300}
              height={60}
            />
          )}
        </div>
      </div>
      {setSelectedSet && (
        <div
          className={styles.indicatorContainer}
          onClick={() =>
            setSelectedSet?.(selectedSet === set.id ? null : set.id)
          }
        >
          <div className={styles.indicator}></div>
        </div>
      )}
    </div>
  );
}
