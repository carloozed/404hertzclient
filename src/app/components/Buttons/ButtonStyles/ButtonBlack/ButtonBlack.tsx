'use client';

import React from 'react';

import Image from 'next/image';
import styles from './ButtonBlack.module.css'; // Adjust the path as needed
import BlackArrow from '../../../../../../public/images/arrows/black/arrow_black.svg';

export type ButtonProps = {
  onClick?: () => void;
  buttonText: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  arrowWidth?: number;
  arrowHeight?: number;
  hasImage?: boolean;
  hasText?: boolean;
  height?: string | number;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
};

export default function ButtonBlack({
  onClick,
  buttonText,
  arrowWidth,
  arrowHeight,
  type,
  hasImage = true,
  hasText = true,
  height = '2rem',
  onMouseOver,
  onMouseLeave,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      type={type}
      style={{ height: height }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.box}>
        {hasText && <p>{buttonText ? buttonText : 'Black Button'}</p>}
      </div>

      {hasImage && (
        <div className={styles.box}>
          <Image
            src={BlackArrow}
            alt="Black Arrow"
            width={arrowWidth || 11}
            height={arrowHeight || 11}
          />
        </div>
      )}
    </button>
  );
}
