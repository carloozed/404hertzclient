'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '../../../../../lib/api/logout';

import React from 'react';
import ButtonBlack from '../../Buttons/ButtonStyles/ButtonBlack/ButtonBlack';

import { useUserStore } from '../../../../../stores/UserStore';

export default function LogoutUser() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { user } = useUserStore();

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
    user && (
      <ButtonBlack
        buttonText="Log Out"
        onClick={logoutUser}
        type="button"
        disabled={loading}
      />
    )
  );
}
