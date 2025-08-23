import React from 'react';

import styles from './FieldContainer.module.css';

type FieldContainerProps = {
  children: React.ReactNode;
};

export default function FieldContainer({ children }: FieldContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
