
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
  media_type?: 'movie' | 'tv';
  name?: string; // For TV shows
  first_air_date?: string; // For TV shows
}

export interface Album {
  id: string;
  name: string;
  description?: string;
  coverImage?: string;
  emoji?: string;
  font: string;
  layout: 'grid' | 'carousel' | 'staggered' | 'instagram' | 'polaroid';
  items: AlbumItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AlbumItem {
  id: string;
  movieId: number;
  title: string;
  posterPath: string | null;
  overview: string;
  releaseDate: string;
  rating: number;
  mediaType: 'movie' | 'tv';
  isWatched: boolean;
  userNotes?: string;
  addedAt: Date;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  className: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  font: string;
  preview: string;
}

export interface TMDBSearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type LayoutType = 'grid' | 'carousel' | 'staggered' | 'instagram' | 'polaroid';

export interface LayoutConfig {
  type: LayoutType;
  name: string;
  description: string;
  className: string;
}
