'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '../../../../../lib/api/logout';

import React from 'react';
import ButtonBlack from '../../Buttons/ButtonBlack/ButtonBlack';

export default function LogoutUser() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logoutUser = async () => {
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
    <ButtonBlack
      buttonText="Log Out"
      onClick={logoutUser}
      type="button"
      disabled={loading}
    />
  );
}
