'use client';

import React, { useEffect } from 'react';
import { LogoutsuccessfulDocument } from '../../../../prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import styles from './LogoutClient.module.css';

import { useRouter } from 'next/navigation';

type LogoutClientProps = {
  page: LogoutsuccessfulDocument;
};

export default function LogoutClient({ page }: LogoutClientProps) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className={styles.container}>
      <PrismicRichText field={page.data.logout_was_successful} />
      <PrismicRichText field={page.data.redirect} />
    </div>
  );
}
