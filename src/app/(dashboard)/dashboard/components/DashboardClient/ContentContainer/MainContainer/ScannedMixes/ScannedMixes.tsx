import React from 'react';
import { User } from '../../../../../../../../../lib/types/user';

import styles from './ScannedMixes.module.css';
import SetComponent from './components/Mix/SetComponent';

type ScannedMixesProps = {
  user: User | null;
};

export default function ScannedMixes({ user }: ScannedMixesProps) {
  const sets = user && user.sets;
  const tracks = user && user?.tracks;

  console.log(tracks);

  return (
    <div className={styles.container}>
      <div className={styles.setsContainer}>
        {sets ? (
          sets.map((set) => <SetComponent key={set.id} {...set} />)
        ) : (
          <h2>You haven&apos;t scanned any mixes</h2>
        )}
      </div>
    </div>
  );
}
