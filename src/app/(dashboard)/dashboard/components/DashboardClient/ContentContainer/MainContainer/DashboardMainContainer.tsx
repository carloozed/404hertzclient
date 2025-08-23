import React from 'react';

import { User } from '../../../../../../../../lib/types/user';

import styles from './DashboardMainContainer.module.css';
import Overview from './Overview/Overview';
import {
  ReplaceIconDocument,
  UserAvatarDocument,
} from '../../../../../../../../prismicio-types';
import ScannedMixes from './ScannedMixes/ScannedMixes';
import DashboardSideContainer from './DashboardSideContainer/DashboardSideContainer';

type MainContainerProps = {
  user: User | null;
  selectedItem?: string;
  userAvatar: UserAvatarDocument | null;
  replaceIcon: ReplaceIconDocument | null;
};

export default function DashboardMainContainer({
  ...mainContainerProps
}: MainContainerProps) {
  const { user, selectedItem, userAvatar, replaceIcon } = mainContainerProps;

  const sharedProps = {
    user,
  };

  const sideContainerProps = {
    ...sharedProps,
    userAvatar,
    replaceIcon,
    selectedItem,
  };

  const overviewProps = {
    ...sharedProps,
    selectedItem,
  };

  const scannedMixesProps = {
    ...sharedProps,
  };

  return (
    <div className={styles.container}>
      <DashboardSideContainer {...sideContainerProps} />
      <div className={styles.overviewContainer}>
        {selectedItem === 'account overview' ? (
          <Overview {...overviewProps} />
        ) : selectedItem === 'scanned sets' ? (
          <ScannedMixes {...scannedMixesProps} />
        ) : null}
      </div>
    </div>
  );
}
