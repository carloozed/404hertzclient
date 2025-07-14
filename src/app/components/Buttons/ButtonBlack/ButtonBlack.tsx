import React from 'react';

import Image from 'next/image';
import styles from './ButtonBlack.module.css'; // Adjust the path as needed
import BlackArrow from '../../../../../public/images/arrows/black/arrow_black.svg';

export type ButtonProps = {
  onClick?: () => void;
  buttonText: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  arrowWidth?: number;
  arrowHeight?: number;
};

export default function ButtonBlack({
  onClick,
  buttonText,
  arrowWidth,
  arrowHeight,
  type,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      <div className={styles.box}>
        <p>{buttonText ? buttonText : 'Black Button'}</p>
      </div>
      <div className={styles.box}>
        <Image
          src={BlackArrow}
          alt="Black Arrow"
          width={arrowWidth || 14}
          height={arrowHeight || 14}
        />
      </div>
    </button>
  );
}
