import React from 'react';
import { Track } from '../../../../../../../../../../../lib/types/track';

import Image from 'next/image';

import styles from './Track.module.css';

import { useIcons } from '../../../../../../../../../../../lib/context/IconContext';
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';

type TrackProps = {
  index: number;
  track: Track;
};

export default function TrackComponent({ track, index }: TrackProps) {
  const { deezer, beatport, youtube, apple, discogs, bandcamp } = useIcons();

  return (
    <div key={index} className={styles.track}>
      <div className={styles.albumCover}>
        <Image
          src={track.album_cover}
          alt={track.title}
          width={1000}
          height={1000}
        />
      </div>
      <div className={styles.trackDetails}>
        <div className={styles.trackInfo}>
          <h4>
            <strong>{track.author}</strong> - {track.title}
          </h4>
        </div>{' '}
        <div className={styles.trackInfo}>
          <h4>
            <strong>Label:</strong> {track.label}
          </h4>
        </div>
        <div className={styles.buylinks}>
          {track.bandcamp && (
            <Link href={track.bandcamp} target="_blank">
              <PrismicNextImage field={bandcamp?.data.icon} />
            </Link>
          )}

          {track.deezer && (
            <Link href={track.deezer} target="_blank">
              <PrismicNextImage field={deezer?.data.icon} />
            </Link>
          )}
          {track.beatport && (
            <Link href={track.beatport} target="_blank">
              <PrismicNextImage field={beatport?.data.icon} />
            </Link>
          )}
          {track.youtube && (
            <Link href={track.youtube} target="_blank">
              <PrismicNextImage field={youtube?.data.icon} />
            </Link>
          )}
          {track.apple && (
            <Link href={track.apple} target="_blank">
              <PrismicNextImage field={apple?.data.icon} />
            </Link>
          )}
          {track.discogs && (
            <Link href={track.discogs} target="_blank">
              <PrismicNextImage field={discogs?.data.icon} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
