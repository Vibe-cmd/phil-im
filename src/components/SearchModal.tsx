
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Calendar, Star } from 'lucide-react';
import { Movie, AlbumItem } from '@/types';
import { tmdbApi } from '@/lib/tmdb';
import { useToast } from '@/hooks/use-toast';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddItem: (item: Omit<AlbumItem, 'id' | 'addedAt'>) => void;
}

export const SearchModal = ({ isOpen, onClose, onAddItem }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const searchResults = await tmdbApi.searchMovies(query);
      setResults(searchResults.results);
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search Error",
        description: "Failed to search movies. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddItem = (movie: Movie) => {
    const albumItem: Omit<AlbumItem, 'id' | 'addedAt'> = {
      movieId: movie.id,
      title: movie.title || movie.name || 'Unknown Title',
      posterPath: movie.poster_path,
      overview: movie.overview,
      releaseDate: movie.release_date || movie.first_air_date || '',
      rating: movie.vote_average,
      mediaType: movie.media_type || (movie.title ? 'movie' : 'tv'),
      isWatched: false,
      userNotes: ''
    };

    onAddItem(albumItem);
    toast({
      title: "Item Added",
      description: `"${albumItem.title}" has been added to your album.`,
    });
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] glass">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Search Movies & TV Shows</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search Input */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for movies or TV shows..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10"
              />
            </div>
            <Button onClick={handleSearch} disabled={isLoading || !query.trim()}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto space-y-3">
            {results.length === 0 && query && !isLoading && (
              <div className="text-center py-8 text-muted-foreground">
                No results found. Try a different search term.
              </div>
            )}

            {results.map((movie) => (
              <div
                key={movie.id}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                {/* Poster */}
                <div className="w-16 h-24 bg-muted rounded overflow-hidden flex-shrink-0">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                      alt={movie.title || movie.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs">
                      No Image
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">
                    {movie.title || movie.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {movie.overview}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {(movie.release_date || movie.first_air_date) && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(movie.release_date || movie.first_air_date || '').getFullYear()}
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {movie.vote_average.toFixed(1)}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {movie.media_type || (movie.title ? 'movie' : 'tv')}
                    </Badge>
                  </div>
                </div>

                {/* Add Button */}
                <Button
                  onClick={() => handleAddItem(movie)}
                  size="sm"
                  className="flex-shrink-0"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
