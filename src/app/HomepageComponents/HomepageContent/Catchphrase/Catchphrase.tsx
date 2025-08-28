import React from 'react';

import styles from './Catchphrase.module.css';
import { HomepageDocument } from '../../../../../prismicio-types';

import { PrismicRichText } from '@prismicio/react';

type CatchphraseProps = {
  page: HomepageDocument;
  isLoginOpen?: boolean;
};

export default function Catchphrase({ isLoginOpen, page }: CatchphraseProps) {
  return (
    <div
      className={styles.catchphrase}
      style={{
        opacity: `${isLoginOpen ? '0' : '1'}`,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <PrismicRichText field={page.data.catchphrase} />
    </div>
  );
}
