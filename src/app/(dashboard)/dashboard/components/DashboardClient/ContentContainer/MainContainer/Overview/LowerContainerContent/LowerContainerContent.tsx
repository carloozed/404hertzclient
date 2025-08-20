import React from 'react';
import { User } from '../../../../../../../../../../lib/types/user';

import styles from './LowerContainerContent.module.css';
import TitleContainer from '../components/TitleContainer/TitleContainer';
import TrackComponent from '../components/Track/Track';

type LowerContainerProps = {
  user: User | null;
};

export default function LowerContainerContent({ user }: LowerContainerProps) {
  console.log(user?.tracks[0]);
  return (
    <div className={styles.container}>
      <TitleContainer title="Tracks Found" />
      <div className={styles.tracksContainer}>
        <div className={styles.tracksList}>
          <div className={styles.tracks}>
            {user?.tracks.map((track, index) => (
              <TrackComponent index={index} track={track} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
