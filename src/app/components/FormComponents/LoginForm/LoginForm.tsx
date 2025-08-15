'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../../../../lib/api/login';

import { useUserStore } from '../../../../../stores/UserStore';

// component imports
import FormContainer from '../FormContainer/FormContainer';
import ButtonWhite from '../../Buttons/ButtonStyles/ButtonWhite/ButtonWhite';

import React from 'react';
import FormGroup from '../FormGroup/FormGroup';

import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const { setUser, setLoading: setUserLoading } = useUserStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);

      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const parsedData = JSON.parse(userData);
          setUser(Array.isArray(parsedData) ? parsedData[0] : parsedData);
        } catch (error) {
          console.error('Error parsing user data:', error);
          setUser(null);
        }
      }
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      console.error('Login error:', err);
    } finally {
      setUserLoading(false);
    }
  };

  const errorStyles = {
    color: 'red',
    marginBottom: '10px',
    marginTop: '10px',
    fontSize: 'calc(0.4vw + 0.4rem)',
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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
      <ButtonWhite
        buttonText={loading ? 'Logging In' : 'Log In'}
        type={'submit'}
        disabled={loading}
      />{' '}
      <div className={styles.forgotPassword}>
        <p>Forgot Password?</p>
      </div>
      {error && <p style={errorStyles}>Login failed: {error}</p>}
    </FormContainer>
  );
}
