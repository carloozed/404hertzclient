'use client';

import React from 'react';

import styles from './Hamburger.module.css';

type HamburgerProps = {
  isOpen: boolean;
  toggle: () => void;
};

export default function Hamburger({ isOpen, toggle }: HamburgerProps) {
  return (
    <div
      onClick={toggle}
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
