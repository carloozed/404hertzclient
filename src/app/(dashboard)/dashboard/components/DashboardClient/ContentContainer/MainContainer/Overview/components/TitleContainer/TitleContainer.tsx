import React from 'react';

type TitleContainerProps = {
  title: string;
};

import styles from './TitleContainer.module.css';

export default function TitleContainer({ title }: TitleContainerProps) {
  return (
    <div className={styles.titleContainer}>
      <h4>{title}</h4>
    </div>
  );
}
