import React from 'react';

import LogoutUser from '@/app/components/FormComponents/LogoutUser/LogoutUser';

import styles from './ContentContainer.module.css';
import { DashboardDocument } from '../../../../../../../prismicio-types';

import { User } from '../../../../../../../lib/types/user';

type ContentContainerProps = {
  page?: DashboardDocument;
  selectedItem?: string;
  user: User | null;
};

export default function ContentContainer({ user }: ContentContainerProps) {
  console.log(user && user);

  return (
    <div className={styles.contentContainer}>
      <LogoutUser />
      {user && user.email}
      {user &&
        user.sets.map((set, index) => <div key={index}>{set.title}</div>)}
    </div>
  );
}
