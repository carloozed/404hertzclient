import React from 'react';

import Image from 'next/image';
import styles from './ButtonWhite.module.css'; // Adjust the path as needed
import WhiteArrow from '../../../../../../public/images/arrows/white/arrow_white.svg';

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
};

export default function ButtonWhite({
  onClick,
  buttonText,
  arrowWidth,
  arrowHeight,
  type,
  hasImage = true,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      <div className={styles.box}>
        <p>{buttonText ? buttonText : 'White Button'}</p>
      </div>
      {hasImage && (
        <div className={styles.box}>
          <Image
            src={WhiteArrow}
            alt="White Arrow"
            width={arrowWidth || 11}
            height={arrowHeight || 11}
          />
        </div>
      )}
    </button>
  );
}
