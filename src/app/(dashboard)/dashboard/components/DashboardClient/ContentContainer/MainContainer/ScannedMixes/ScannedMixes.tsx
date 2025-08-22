'use client';

import React, { useState } from 'react';
import { User } from '../../../../../../../../../lib/types/user';

import styles from './ScannedMixes.module.css';
import SetComponent from './components/Mix/SetComponent';
import TrackComponent from '../Overview/components/Track/Track';

type ScannedMixesProps = {
  user: User | null;
};

export default function ScannedMixes({ user }: ScannedMixesProps) {
  const [selectedSet, setSelectedSet] = useState<number | null>(null);
  const sets = user?.sets;
  const tracks = user?.tracks;

  return (
    <div className={styles.container}>
      <div className={styles.setsContainer}>
        {sets && sets.length > 0 ? (
          sets.map((set) => {
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
        ) : (
          <div className={styles.noSets}>
            <h2>You haven&apos;t scanned any mixes</h2>
          </div>
        )}
      </div>
    </div>
  );
}
