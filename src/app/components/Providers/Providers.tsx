'use client';

import { IconProvider } from '../../../../lib/context/IconContext';
import { MobileProvider } from '../../../../lib/context/MobileContext';
import { SocialIconsDocument } from '../../../../prismicio-types';

export function Providers({
  children,
  icons,
}: {
  children: React.ReactNode;
  icons: SocialIconsDocument[];
}) {
  return (
    <MobileProvider>
      <IconProvider iconProps={icons}>{children}</IconProvider>
    </MobileProvider>
  );
}
