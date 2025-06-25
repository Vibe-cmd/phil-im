
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
  userNotes?: string;
  rating?: number;
  movieId?: number;
}

export type MediaType = 'movie' | 'tv';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  release_date: string;
  media_type?: MediaType;
}

export interface Theme {
  name: string;
  category: string;
  tagline: string;
  modes: {
    light: ThemeMode;
    dark: ThemeMode;
    highContrast: ThemeMode;
  };
}

export interface ThemeMode {
  colors: string[];
  font: {
    name: string;
    weight: string[];
    size: {
      small: string;
      medium: string;
      large: string;
    };
  };
  emojis: string[];
  animations: {
    buttonHover: string;
    pageTransition: string;
    loader: string;
  };
}

export type LayoutType = 'grid' | 'carousel' | 'polaroid' | 'staggered' | 'instagram';
