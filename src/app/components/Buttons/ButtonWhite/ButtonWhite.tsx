import React from 'react';

import { ButtonProps } from '../ButtonBlack/ButtonBlack';

export default function ButtonWhite({ onClick, buttonText }: ButtonProps) {
  return <button onClick={onClick}>{buttonText}</button>;
}
