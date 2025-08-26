'use client';

import React, { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { NavigationDocument } from '../../../../../../prismicio-types';

import styles from './MenuClient.module.css';
import Navbar from '../../Navbar/Navbar';
import Logo from '@/app/components/Logo/Logo';

import { usePathname } from 'next/navigation';

type NavigationClientProps = {
  navbar: NavigationDocument;
};

export default function MenuClient({ navbar }: NavigationClientProps) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const HamburgerProps = {
    isOpen: isNavigationOpen,
    toggle: () => setIsNavigationOpen(!isNavigationOpen),
  };

  const NavigationProps = {
    navbar: navbar,
    isOpen: isNavigationOpen,
    toggle: () => setIsNavigationOpen(!isNavigationOpen),
  };

  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <div>
        <Hamburger {...HamburgerProps} />
      </div>
      {isNavigationOpen && <Navbar {...NavigationProps} />}
      <div
        style={{
          pointerEvents: pathname === '/' ? 'none' : 'auto',
          opacity: pathname === '/' ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <Logo hasLink={true} height={36} />
      </div>
    </nav>
  );
}
