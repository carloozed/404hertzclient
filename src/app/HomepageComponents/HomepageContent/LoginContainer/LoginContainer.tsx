import React from 'react';

import styles from './LoginContainer.module.css';
import LoginForm from '@/app/components/FormComponents/LoginForm/LoginForm';

type LoginContainerProps = {
  isLoginOpen: boolean;
  setIsLoginOpen: (isOpen: boolean) => void;
};

export default function LoginContainer({
  isLoginOpen,
  setIsLoginOpen,
}: LoginContainerProps) {
  return (
    <div
      className={`${styles.loginContainer} ${isLoginOpen ? styles.loginopen : ''}`}
    >
      <div className={styles.loginWrapper}>
        <div
          className={styles.crossContainer}
          onClick={() => setIsLoginOpen(false)}
        >
          <div className={styles.cross}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <h2>Welcome back!</h2>
          <h5>
            Enter your Login Credentials below or use the options available
          </h5>
        </div>
        <div className={styles.loginFormWrapper}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
