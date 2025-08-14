import { RecordedAt } from './recordedAt';

export interface Track {
  id: number;
  title: string;
  author: string;
  genre: string;
  label: string;
  album_cover: string;
  recorded_at: RecordedAt;
  youtube?: string | undefined;
  spotify?: string | undefined;
  deezer?: string | undefined;
  beatport?: string | undefined;
  discogs?: string | undefined;
  bandcamp?: string | undefined;
  apple?: string | undefined;
}
