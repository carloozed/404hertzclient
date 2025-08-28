'use client';

import React, { useRef } from 'react';

import styles from './ButtonBar.module.css';
import ButtonWhite from '@/app/components/Buttons/ButtonStyles/ButtonWhite/ButtonWhite';
import ButtonBlack from '@/app/components/Buttons/ButtonStyles/ButtonBlack/ButtonBlack';
import LogoutUser from '@/app/components/FormComponents/LogoutUser/LogoutUser';
import { useUserStore } from '../../../../../stores/UserStore';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

type ButtonBarProps = {
  setIsLoginOpen: (isOpen: boolean) => void;
};

export default function ButtonBar({ setIsLoginOpen }: ButtonBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { user } = useUserStore();

  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      y: '0%',
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
    });
  });

  return (
    <div className={styles.buttonContainer} ref={containerRef}>
      {!user ? (
        <>
          <ButtonWhite
            buttonText="Log In"
            onClick={() => setIsLoginOpen(true)}
          />
          <ButtonBlack buttonText="Sign Up" />
        </>
      ) : (
        <LogoutUser />
      )}
    </div>
  );
}
