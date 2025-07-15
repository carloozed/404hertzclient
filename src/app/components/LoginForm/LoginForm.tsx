'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../../../lib/api/login';
import styles from './LoginForm.module.css'; // Adjust the path as needed

// component imports

import ButtonWhite from '../Buttons/ButtonWhite/ButtonWhite';

import React from 'react';
import FormGroup from '../FormGroup/FormGroup';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);

      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormGroup
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
        label="Email"
      />
      <FormGroup
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
        label="Password"
      />
      <ButtonWhite buttonText="Log In" type={'submit'} />{' '}
      {error && (
        <p
          style={{
            color: 'red',
            marginBottom: '10px',
            marginTop: '10px',
            fontSize: 'calc(0.4vw + 0.4rem)',
          }}
        >
          Login failed: {error}
        </p>
      )}
    </form>
  );
}
