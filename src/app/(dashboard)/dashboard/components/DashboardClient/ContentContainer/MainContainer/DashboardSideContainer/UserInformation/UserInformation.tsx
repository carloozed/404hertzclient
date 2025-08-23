import React from 'react';
import { User } from '../../../../../../../../../lib/types/user';

import styles from './UserInformation.module.css';

import {
  ReplaceIconDocument,
  UserAvatarDocument,
} from '../../../../../../../../../prismicio-types';

// module imports
import Information from './Information/Information';
import AvatarContainer from './AvatarContainer/AvatarContainer';

type UserInformationProps = {
  user: User | null;
  userAvatar: UserAvatarDocument | null;
  replaceIcon: ReplaceIconDocument | null;
};

export default function UserInformation({
  user,
  userAvatar,
  replaceIcon,
}: UserInformationProps) {
  const sharedProps = {
    user,
  };
  const avatarContainerProps = {
    ...sharedProps,
    userAvatar,
    replaceIcon,
  };

  const InformationProps = {
    ...sharedProps,
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <AvatarContainer {...avatarContainerProps} />
      </div>
      <div className={styles.informationContainer}>
        <Information {...InformationProps} />
      </div>
    </div>
  );
}
