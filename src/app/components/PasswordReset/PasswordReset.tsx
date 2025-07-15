'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PasswordReset.module.css';

import { passwordReset } from '../../../../lib/api/passwordReset';
import ButtonBlack from '../Buttons/ButtonBlack/ButtonBlack';
import FormGroup from '../FormGroup/FormGroup';

export default function PasswordReset() {
  const [email, setEmail] = useState('');

  const router = useRouter();
  const requestPasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await passwordReset(email);
      alert('Password reset link sent to your email.');
      router.push('/');
    } catch (error) {
      console.error('Password reset error:', error);
      alert('Failed to send password reset link. Please try again.');
    }
  };
  return (
    <form className={styles.form} onSubmit={requestPasswordReset}>
      <FormGroup
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Enter your Email"
      />
      <ButtonBlack type={'submit'} buttonText="Request Reset Link" />
    </form>
  );
}
