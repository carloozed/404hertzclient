'use client';

import React from 'react';

import styles from './Navbar.module.css';
import { NavigationDocument } from '../../../../../prismicio-types';
import { PrismicNextLink } from '@prismicio/next';

type NavbarProps = {
  navbar: NavigationDocument;
  isOpen?: boolean;
  toggle?: () => void;
};

export default function Navbar({ navbar }: NavbarProps) {
  return (
    <ul className={styles.navbar}>
      {navbar.data.items.map((item, index) => (
        <li key={index} className={styles.navItem}>
          <div>{'0' + (index + 1)}</div>
          <PrismicNextLink field={item.link} />{' '}
        </li>
      ))}
    </ul>
  );
}
