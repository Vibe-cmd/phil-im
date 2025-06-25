export interface Album {
  id: string;
  name: string;
  description?: string;
  emoji: string;
  font: string;
  coverImage?: string;
  useAsBackground?: boolean;
  createdAt: Date;
  updatedAt: Date;
  items: AlbumItem[];
}

export interface AlbumItem {
  id: string;
  title: string;
  overview: string;
  posterPath?: string;
  releaseDate: string;
  mediaType: MediaType;
  isWatched: boolean;
  addedAt: Date;
}

export type MediaType = 'movie' | 'tv';
