import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ListContainer.module.css';
import { User } from '../../../../../../../../../../../lib/types/user';

// helpers
import { useLogoSwitcher } from '../../../../../../../../../../../lib/helpers/logoSwitcher';
import { truncateText } from '../../../../../../../../../../../lib/helpers/truncateText';
import TitleContainer from '../../components/TitleContainer/TitleContainer';

type ListContainerProps = {
  user: User | null;
};

export default function ListContainer({ user }: ListContainerProps) {
  const getLogoUrl = useLogoSwitcher();

  console.log(user?.sets);
  return (
    <div className={styles.rightContainer}>
      <div className={styles.titleContainer}>
        <TitleContainer title="Last Scanned" />
      </div>
      <div className={styles.scannedMixesNames}>
        <div className={styles.linksContainer}>
          {user?.sets.map((set, index) => (
            <div key={index} className={styles.scannedMix}>
              <Link
                href={'https://www.kibo-ui.com/components/image-crop'}
                target="_blank"
              >
                {truncateText(set.title, 42)}
              </Link>
              <div className={styles.imageContainer}>
                <Image
                  src={getLogoUrl(set.source)}
                  alt={`${set.source} ${index}`}
                  width={50}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
