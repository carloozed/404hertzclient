import React from 'react';
import Image from 'next/image';

import styles from './AvatarContainer.module.css';
import { PrismicNextImage } from '@prismicio/next';
import { User } from '../../../../../../../../../../lib/types/user';
import {
  ReplaceIconDocument,
  UserAvatarDocument,
} from '../../../../../../../../../../prismicio-types';

type AvatarContainerProps = {
  user: User | null;
  userAvatar?: UserAvatarDocument | null;
  replaceIcon: ReplaceIconDocument | null;
};

export default function AvatarContainer({
  replaceIcon,
  user,
}: AvatarContainerProps) {
  console.log('afadfadfasdf', user && user.avatar);
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatarImageContainer}>
        <Image
          src={
            user?.avatar ??
            'https://404hertz.cdn.prismic.io/404hertz/aKMgtKTt2nPbaa6f_user_avatar.svg'
          }
          alt={'User Image'}
          height={10}
          width={10}
        />
      </div>
      <div className={styles.replaceIconContainer}>
        <PrismicNextImage
          field={replaceIcon?.data.replace_icon}
          height={undefined}
          width={undefined}
        />
      </div>
    </div>
  );
}
