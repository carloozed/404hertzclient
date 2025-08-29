'use client';

import React from 'react';

import UserInformation from './UserInformation/UserInformation';
import { User } from '../../../../../../../../../lib/types/user';
import {
  UserAvatarDocument,
  ReplaceIconDocument,
} from '../../../../../../../../../prismicio-types';

import styles from './DashboardSideContainer.module.css';
import SetsFilterComponent from './SetsFilterComponent/SetsFilterComponent';

type SideContainerProps = {
  user: User | null;
  userAvatar: UserAvatarDocument | null;
  replaceIcon: ReplaceIconDocument | null;
  selectedItem?: string;
};

export default function DashboardSideContainer({
  user,
  userAvatar,
  replaceIcon,
  selectedItem,
}: SideContainerProps) {
  const userInformationProps = {
    user,
    userAvatar,
    replaceIcon,
  };

  const setsFilterProps = { user };

  return (
    <div className={styles.container}>
      {selectedItem === 'user information' ? (
        <UserInformation {...userInformationProps} />
      ) : selectedItem === 'scanned sets' ? (
        <SetsFilterComponent {...setsFilterProps} />
      ) : null}
    </div>
  );
}
