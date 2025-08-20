import React from 'react';

import { User } from '../../../../../../../../lib/types/user';

import styles from './DashboardMainContainer.module.css';
import UserInformation from './UserInformation/UserInformation';
import Overview from './Overview/Overview';
import {
  ReplaceIconDocument,
  UserAvatarDocument,
} from '../../../../../../../../prismicio-types';

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

  const userInformationProps = {
    ...sharedProps,
    userAvatar,
    replaceIcon,
  };

  const overviewProps = {
    ...sharedProps,
    selectedItem,
  };

  return (
    <div className={styles.container}>
      <UserInformation {...userInformationProps} />
      <div className={styles.overviewContainer}>
        {selectedItem === 'account overview' && <Overview {...overviewProps} />}
      </div>
    </div>
  );
}
