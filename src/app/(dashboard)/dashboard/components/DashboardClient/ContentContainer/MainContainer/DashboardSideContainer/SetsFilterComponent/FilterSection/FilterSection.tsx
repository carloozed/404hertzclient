import React from 'react';
import FilterContainer from '../FilterContainer/FilterContainer';
import styles from './FilterSection.module.css';

import { truncateText } from '../../../../../../../../../../../lib/helpers/truncateText';

export default function FilterSection({
  title,
  items,
  selectedItems,
  onToggle,
  truncate = false,
}: {
  title: string;
  items: string[];
  selectedItems: string[];
  onToggle: (item: string) => void;
  truncate?: boolean;
}) {
  return (
    <FilterContainer>
      <div className={styles.titleContainer}>
        <h4>{title}:</h4>
        <h5>{'Remove Filters'}</h5>
      </div>
      <div className={styles.setsContainer}>
        {items
          .sort((a, b) => a.localeCompare(b))
          .map((item) => (
            <div
              key={item}
              className={`${styles.genre} ${selectedItems.includes(item) ? styles.selected : ''}`}
              onClick={() => onToggle(item)}
            >
              <button>{truncate ? truncateText(item, 24) : item}</button>
            </div>
          ))}
      </div>
    </FilterContainer>
  );
}
