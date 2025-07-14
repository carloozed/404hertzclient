'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '../../../../lib/api/logout';
import styles from './LogoutUser.module.css'; // Adjust the path as needed

import React from 'react';

export default function LogoutUser() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const logoutUser = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await logout();

      router.push('/logout-success');
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button type="button" onClick={logoutUser} className={styles.button}>
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  );
}
