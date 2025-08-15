'use client';

import React from 'react';

import styles from './Navbar.module.css';
import { NavigationDocument } from '../../../../../prismicio-types';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import FadeIn from '../../Animations/FadeIn';

import { usePathname } from 'next/navigation';

gsap.registerPlugin(useGSAP);

type NavbarProps = {
  navbar: NavigationDocument;
  isOpen?: boolean;
  toggle?: () => void;
  isSocialbarVisible?: boolean;
};

export default function Navbar({
  navbar,
  toggle,
  isSocialbarVisible = true,
}: NavbarProps) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        {navbar.data.items.map((item, index) => (
          <FadeIn
            key={index}
            delay={index * 0.05}
            duration={0.25}
            ease="var(--spring-bezier)"
          >
            <li className={styles.navItem} onClick={toggle}>
              <div
                className={`${styles.index} ${pathname === prismic.asLink(item.link) ? styles.active : ''}`}
              >
                {'0' + (index + 1)}
              </div>
              <PrismicNextLink field={item.link} />{' '}
            </li>
          </FadeIn>
        ))}
      </ul>
      {isSocialbarVisible && (
        <div className={styles.iconContainer}>
          {navbar.data.socials_links.map((item, index) => (
            <FadeIn
              key={index}
              delay={0.3}
              duration={0.25}
              ease="var(--spring-bezier)"
            >
              <div>
                <PrismicNextLink field={item.link}>
                  <PrismicNextImage field={item.icon} />
                </PrismicNextLink>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
