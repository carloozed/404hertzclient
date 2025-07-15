'use client';

import React, { useState } from 'react';
import { signup } from '../../../../lib/api/signup';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signup({
        username,
        email,
        password1: password,
        password2: confirmPassword,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
      console.error('Signup error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div></div>
      {error && (
        <p
          style={{
            color: 'red',
            marginBottom: '10px',
            marginTop: '10px',
            fontSize: 'calc(0.4vw + 0.4rem)',
          }}
        >
          Signup failed: {error}
        </p>
      )}
    </form>
  );
}
