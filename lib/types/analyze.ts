import { Track } from './track';

export interface AnalyzeRequest {
  url: string;
}

export interface AnalyzeResponse {
  id: number;
  title: string;
  author: string;
  description: string;
  duration: string;
  genre: string;
  thumbnail: string;
  url: string;
  created_at: string;
  updated_at: string;
  user: number;
  tracks: Track[];
}
