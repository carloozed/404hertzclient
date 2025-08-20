'use client';

import React, { useState } from 'react';

import styles from './DashboardClient.module.css';
import {
  DashboardDocument,
  ReplaceIconDocument,
  UserAvatarDocument,
} from '../../../../../../prismicio-types';
import Sidebar from './Sidebar/Sidebar';
import ContentContainer from './ContentContainer/ContentContainer';

import { useUserStore } from '../../../../../../stores/UserStore';

type DashboardProps = {
  page: DashboardDocument;
  userAvatar: UserAvatarDocument;
  replaceIcon: ReplaceIconDocument;
};

export default function DashboardClient({
  page,
  userAvatar,
  replaceIcon,
}: DashboardProps) {
  const { user } = useUserStore();

  const [selectedItem, setSelectedItem] = useState(
    page.data.sidebar[0]?.label?.toLowerCase() || ''
  );

  const sharedProps = { page, selectedItem };
  const SidebarProps = { setSelectedItem, ...sharedProps };
  const ContentContainerProps = {
    user,
    ...sharedProps,
    userAvatar,
    replaceIcon,
  };

  return (
    <div className={styles.container}>
      <Sidebar {...SidebarProps} />
      <ContentContainer {...ContentContainerProps} />
    </div>
  );
}
