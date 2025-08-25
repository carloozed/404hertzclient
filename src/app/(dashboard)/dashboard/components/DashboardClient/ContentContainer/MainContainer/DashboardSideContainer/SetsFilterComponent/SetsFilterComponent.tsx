'use client';

import React, { useMemo } from 'react';
import { User } from '../../../../../../../../../../lib/types/user';
import styles from './SetsFilterComponent.module.css';
import useFilterStore from '../../../../../../../../../../stores/UseSetsFilterStore';

import FilterSection from './FilterSection/FilterSection';

type SetsFilterProps = {
  user: User | null;
};

// Utility function to get unique, non-empty values from an array
const getUniqueValues = (items: (string | null | undefined)[]): string[] =>
  Array.from(
    new Set(items.filter((item): item is string => Boolean(item?.length)))
  );

export default function SetsFilterComponent({ user }: SetsFilterProps) {
  const { selectedGenres, selectedChannels, toggleGenre, toggleChannel } =
    useFilterStore();

  // Memoize the unique arrays to avoid recalculation on every render
  const { uniqueGenres, uniqueChannels } = useMemo(() => {
    if (!user?.sets) return { uniqueGenres: [], uniqueChannels: [] };

    return {
      uniqueGenres: getUniqueValues(user.sets.map((set) => set.genre)),
      uniqueChannels: getUniqueValues(user.sets.map((set) => set.author)),
    };
  }, [user?.sets]);

  if (!user) return null;

  return (
    <div className={styles.container}>
      <FilterSection
        title="Sort by genre"
        items={uniqueGenres}
        selectedItems={selectedGenres}
        onToggle={toggleGenre}
      />
      <FilterSection
        title="Sort by channel"
        items={uniqueChannels}
        selectedItems={selectedChannels}
        onToggle={toggleChannel}
        truncate={true}
      />
    </div>
  );
}
