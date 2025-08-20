import React from 'react';

import styles from './StatsContainer.module.css';

import { User } from '../../../../../../../../../../../lib/types/user';
import TitleContainer from '../../components/TitleContainer/TitleContainer';

import CountUp from 'react-countup';

type StatsContainerProps = { user: User | null };

export default function StatsContainer({ user }: StatsContainerProps) {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.scannedMixesAmount}>
        <div style={{ borderBottom: '1px solid black' }}>
          <TitleContainer title="Scanned Mixes" />
          <h2>
            <CountUp end={user?.sets.length || 0} duration={4} />
          </h2>
        </div>
        <div style={{ width: '100%' }}>
          <TitleContainer title="Tokens Left" />

          <h2>
            <CountUp end={256} duration={4} />
          </h2>
        </div>
      </div>{' '}
    </div>
  );
}
