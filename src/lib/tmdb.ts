
const TMDB_API_KEY = 'a07e22bc18f5cb106bfe4cc1f83ad8ed'; // Public demo key
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const tmdbApi = {
  search: async (query: string): Promise<any> => {
    try {
      const response = await fetch(
        `${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=1`
      );
      
      if (!response.ok) {
        throw new Error('Failed to search movies');
      }
      
      return await response.json();
    } catch (error) {
      console.error('TMDB search error:', error);
      throw error;
    }
  },

  searchMovies: async (query: string): Promise<any> => {
    try {
      const response = await fetch(
        `${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=1`
      );
      
      if (!response.ok) {
        throw new Error('Failed to search movies');
      }
      
      return await response.json();
    } catch (error) {
      console.error('TMDB search error:', error);
      throw error;
    }
  },

  getMovieDetails: async (id: number, mediaType: 'movie' | 'tv'): Promise<any> => {
    try {
      const response = await fetch(
        `${TMDB_BASE_URL}/${mediaType}/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,watch/providers`
      );
      
      if (!response.ok) {
        throw new Error('Failed to get movie details');
      }
      
      return await response.json();
    } catch (error) {
      console.error('TMDB details error:', error);
      throw error;
    }
  },

  getImageUrl: (path: string | null, size: 'w200' | 'w500' | 'w780' | 'original' = 'w500'): string => {
    if (!path) return '/placeholder.svg';
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
  },

  getTrending: async (mediaType: 'movie' | 'tv' | 'all' = 'all'): Promise<any> => {
    try {
      const response = await fetch(
        `${TMDB_BASE_URL}/trending/${mediaType}/week?api_key=${TMDB_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to get trending content');
      }
      
      return await response.json();
    } catch (error) {
      console.error('TMDB trending error:', error);
      throw error;
    }
  }
};
