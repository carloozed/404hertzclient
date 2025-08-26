export interface Track {
  id: number;
  title: string;
  author: string;
  label: string | null;
  genre: string | null;
  album_cover: string;
  apple: string | null;
  deezer: string | null;
  spotify: string | null;
  youtube: string | null;
  bandcamp: string | null;
  beatport: string | null;
  discogs: string | null;
  created_at: string;
  updated_at: string;
  user: number;
  set: number[];
  confidence_score: number;
}
