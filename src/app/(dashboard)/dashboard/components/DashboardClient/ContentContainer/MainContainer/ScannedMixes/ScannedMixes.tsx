'use client';

import React, { useState, useEffect } from 'react';
import { User } from '../../../../../../../../../lib/types/user';
import { Track } from '../../../../../../../../../lib/types/track';

import styles from './ScannedMixes.module.css';
import SetComponent from './components/Mix/SetComponent';
import TrackComponent from '../Overview/components/Track/Track';

type ScannedMixesProps = {
  user: User | null;
};

export default function ScannedMixes({ user }: ScannedMixesProps) {
  const [selectedSet, setSelectedSet] = useState<number | null>(null);
  const [tracklist, setTracklist] = useState<Track[]>([]);
  const sets = user && user.sets;
  const tracks = user && user?.tracks;

  console.log(tracks);

  useEffect(() => {
    if (selectedSet !== null && tracks) {
      const selectedTracks = tracks.filter(
        (track) => track.set[0] === selectedSet
      );
      setTracklist(selectedTracks);
    } else {
      setTracklist([]);
    }
  }, [selectedSet, tracks]);

  return (
    <div className={styles.container}>
      <div className={styles.setsContainer}>
        {sets ? (
          sets.map((set) => (
            <SetComponent
              key={set.id}
              {...set}
              selectedSet={selectedSet}
              setSelectedSet={setSelectedSet}
            />
          ))
        ) : (
          <h2>You haven&apos;t scanned any mixes</h2>
        )}
      </div>
      <div className={styles.tracksContainer}>
        {tracklist.length > 0 ? (
          tracklist.map((track) => (
            <TrackComponent index={0} key={track.id} track={track} />
          ))
        ) : (
          <h2>No tracks found</h2>
        )}
      </div>
    </div>
  );
}
