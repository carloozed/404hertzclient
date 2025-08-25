'use client';

import React, { useState, useMemo } from 'react';
import { User } from '../../../../../../../../../lib/types/user';

import styles from './ScannedMixes.module.css';
import SetComponent from './components/Mix/SetComponent';
import TrackComponent from '../Overview/components/Track/Track';

import useFilterStore from '../../../../../../../../../stores/UseSetsFilterStore';

type ScannedMixesProps = {
  user: User | null;
};

export default function ScannedMixes({ user }: ScannedMixesProps) {
  const [selectedSet, setSelectedSet] = useState<number | null>(null);

  const { selectedGenres, selectedChannels } = useFilterStore();

  const tracks = user?.tracks;

  // Apply filters to sets using useMemo for performance
  const filteredSets = useMemo(() => {
    if (!user?.sets) return [];

    return user.sets.filter((set) => {
      const genreMatch =
        selectedGenres.length === 0 ||
        (set.genre && selectedGenres.includes(set.genre));

      const channelMatch =
        selectedChannels.length === 0 ||
        (set.author && selectedChannels.includes(set.author));

      return genreMatch && channelMatch;
    });
  }, [user?.sets, selectedGenres, selectedChannels]);

  return (
    <div className={styles.container}>
      <div className={styles.setsContainer}>
        {filteredSets.length > 0 ? (
          filteredSets.map((set) => {
            const setTracks =
              tracks?.filter(
                (track) => track.set[0] === set.id || track.set[0] === set.id
              ) || [];

            return (
              <div
                key={set.id}
                className={`${styles.setWrapper} ${selectedSet === set.id ? styles.setWrapperOpen : ''}`}
              >
                <SetComponent
                  {...set}
                  selectedSet={selectedSet}
                  setSelectedSet={setSelectedSet}
                />

                <div
                  className={`${styles.tracksWrapper} ${
                    selectedSet === set.id ? styles.tracksWrapperOpen : ''
                  }`}
                >
                  <div className={styles.tracksContainer}>
                    {setTracks.length > 0 ? (
                      setTracks.map((track, index) => (
                        <TrackComponent
                          key={track.id}
                          index={index}
                          track={track}
                        />
                      ))
                    ) : (
                      <div className={styles.noTracks}>
                        <h4>
                          This DJ knows how to dig... Unfortunately, no tracks
                          were found!
                        </h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : user?.sets?.length ? (
          <div className={styles.noFilterResults}>
            <h2>No sets match your current filters</h2>
            <p>Try adjusting your genre or channel selections</p>
          </div>
        ) : (
          <div className={styles.noSets}>
            <h2>You haven&apos;t scanned any mixes</h2>
          </div>
        )}
      </div>
    </div>
  );
}
