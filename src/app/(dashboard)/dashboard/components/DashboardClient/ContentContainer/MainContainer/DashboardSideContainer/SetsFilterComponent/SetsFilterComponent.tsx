import React from 'react';
import { User } from '../../../../../../../../../../lib/types/user';

import FilterContainer from './FilterContainer/FilterContainer';

import styles from './SetsFilterComponent.module.css';

import { truncateText } from '../../../../../../../../../../lib/helpers/truncateText';

type SetsFilterProps = {
  user: User | null;
};

export default function SetsFilterComponent({ user }: SetsFilterProps) {
  return (
    <div className={styles.container}>
      <FilterContainer>
        <h4>Sort by genre:</h4>
        <div className={styles.setsContainer}>
          {user &&
            user.sets
              .filter((set) => set.genre && set.genre.length > 0)
              .map((set) => (
                <div key={set.id} className={styles.genre}>
                  <button>{set.genre}</button>
                </div>
              ))}
        </div>
      </FilterContainer>
      <FilterContainer>
        <h4>Sort by channel:</h4>
        <div className={styles.setsContainer}>
          {user &&
            user.sets
              .filter((set) => set.genre && set.genre.length > 0)
              .map((set) => (
                <div key={set.id} className={styles.genre}>
                  <button>{truncateText(set.author, 12)}</button>
                </div>
              ))}
        </div>
      </FilterContainer>
    </div>
  );
}
