'use client';

import React, { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { NavigationDocument } from '../../../../../../prismicio-types';

import styles from './MenuClient.module.css';
import Navbar from '../../Navbar/Navbar';
import Logo from '@/app/components/Logo/Logo';

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

  return (
    <nav className={styles.navigation}>
      <div>
        <Hamburger {...HamburgerProps} />
      </div>
      {isNavigationOpen && <Navbar {...NavigationProps} />}
      <Logo hasLink={true} height={36} />
    </nav>
  );
}
