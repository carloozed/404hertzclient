import React from 'react';

import styles from './ContentContainer.module.css';
import {
  DashboardDocument,
  ReplaceIconDocument,
  UserAvatarDocument,
} from '../../../../../../../prismicio-types';

import DashboardMainContainer from './MainContainer/DashboardMainContainer';

import { User } from '../../../../../../../lib/types/user';

type ContentContainerProps = {
  page?: DashboardDocument;
  selectedItem?: string;
  user: User | null;
  userAvatar: UserAvatarDocument | null;
  replaceIcon: ReplaceIconDocument | null;
};

export default function ContentContainer({
  user,
  selectedItem,
  userAvatar,
  replaceIcon,
}: ContentContainerProps) {
  console.log(user && user);

  const mainContainerProps = {
    user,
    selectedItem,
    userAvatar,
    replaceIcon,
  };

  return (
    <div className={styles.contentContainer}>
      <DashboardMainContainer {...mainContainerProps} />
    </div>
  );
}
