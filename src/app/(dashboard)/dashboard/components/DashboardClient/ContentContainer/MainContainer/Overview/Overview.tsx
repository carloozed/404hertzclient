import React from 'react';

import { User } from '../../../../../../../../../lib/types/user';

import styles from './Overview.module.css';

import UpperContainerContent from './UpperContainerContent/UpperContainerContent';
import LowerContainerContent from './LowerContainerContent/LowerContainerContent';

type OverviewProps = {
  user: User | null;
};

export default function Overview({ user }: OverviewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.upperContainer}>
        <UpperContainerContent user={user} />
      </div>
      <div className={styles.lowerContainer}>
        <LowerContainerContent user={user} />
      </div>
    </div>
  );
}
