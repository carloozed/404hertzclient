import React from 'react';

import styles from './FilterContainer.module.css';

type FilterContainerProps = {
  children: React.ReactNode;
};

export default function FilterContainer({ children }: FilterContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
