import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

import LogoSrc from '../../../../public/logo/png/logo.png'; // Adjust the path as needed

type Props = {
  className?: string;
  onClick?: () => void;
  alt?: string;
  height?: number;
  width?: number;
  hasLink?: boolean;
};

export default function Logo({
  className = '',
  onClick,
  alt = 'Logo',
  height,
  width = height && height * 1.2,
  hasLink = false,
}: Props) {
  return (
    <div>
      {hasLink ? (
        <Link href="/" onClick={onClick} className={className}>
          <Image src={LogoSrc} alt={alt} height={height} width={width} />
        </Link>
      ) : (
        <Image src={LogoSrc} alt={alt} height={height} width={width} />
      )}
    </div>
  );
}
