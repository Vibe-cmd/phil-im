
import { AlbumItem } from '@/types';
import { EnhancedMovieCard } from '@/components/EnhancedMovieCard';
import { RecommendationCard } from '@/components/RecommendationCard';
import { useState } from 'react';
import { Share } from 'lucide-react';

interface GridLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const GridLayout = ({ items, onUpdateItem }: GridLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);
  const [recommendationItem, setRecommendationItem] = useState<AlbumItem | null>(null);

  const handleRecommendation = (movieId: string, comment: string, rating: number) => {
    console.log('Recommendation submitted:', { movieId, comment, rating });
    // Handle recommendation logic here
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative cursor-pointer transform transition-all duration-700 hover:scale-105 hover:z-20 animate-fade-in"
              style={{ 
                animationDelay: `${index * 75}ms`
              }}
            >
              {/* Movie Card */}
              <div 
                className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-700 border border-white/10 group-hover:border-[var(--theme-primary)] bg-gradient-to-br from-black/20 to-black/5 backdrop-blur-sm"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.posterPath ? `https://image.tmdb.org/t/p/w400${item.posterPath}` : '/placeholder.svg'}
                  alt={item.title}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4"
                >
                  <h3 className="font-bold text-sm mb-1 line-clamp-2 text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/90 mb-3 drop-shadow-md">
                    {new Date(item.releaseDate).getFullYear()}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className={`w-2 h-2 rounded-full animate-pulse shadow-lg`}
                        style={{ 
                          backgroundColor: item.isWatched ? '#22c55e' : 'var(--theme-accent)',
                          boxShadow: `0 0 8px ${item.isWatched ? '#22c55e' : 'var(--theme-accent)'}`
                        }}
                      />
                      <span className="text-xs text-white/95 font-medium drop-shadow-md">
                        {item.isWatched ? 'Watched' : 'To Watch'}
                      </span>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setRecommendationItem(item);
                      }}
                      className="p-2 rounded-full transition-all duration-300 hover:scale-125 shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--theme-primary)',
                        boxShadow: `0 4px 15px rgba(var(--theme-primary-rgb), 0.4)`
                      }}
                    >
                      <Share className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Rating badge */}
                <div 
                  className="absolute top-3 right-3 backdrop-blur-md rounded-full px-3 py-1 transition-all duration-300 group-hover:scale-110 shadow-lg border border-white/20"
                  style={{ 
                    backgroundColor: 'rgba(var(--theme-primary-rgb), 0.9)',
                    boxShadow: `0 4px 15px rgba(var(--theme-primary-rgb), 0.3)`
                  }}
                >
                  <span className="text-white text-xs font-bold drop-shadow-md">
                    ★{item.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Movie Card Modal */}
      {selectedItem && (
        <EnhancedMovieCard
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          movieData={{
            title: selectedItem.title,
            overview: selectedItem.overview,
            poster: selectedItem.posterPath ? `https://image.tmdb.org/t/p/w500${selectedItem.posterPath}` : '/placeholder.svg',
            backdrop: selectedItem.posterPath ? `https://image.tmdb.org/t/p/original${selectedItem.posterPath}` : '/placeholder.svg',
            releaseYear: new Date(selectedItem.releaseDate).getFullYear().toString(),
            tmdbRating: selectedItem.rating,
            type: selectedItem.mediaType,
            duration: '120 min',
            director: 'Unknown',
            genres: ['Drama'],
            whereToWatch: ['Netflix', 'Amazon Prime']
          }}
          initialData={{
            isWatched: selectedItem.isWatched,
            userNotes: selectedItem.userNotes || '',
            rating: Math.round(selectedItem.rating / 2)
          }}
          onUpdate={(data) => {
            const updatedItem = {
              ...selectedItem,
              isWatched: data.isWatched,
              userNotes: data.userNotes
            };
            onUpdateItem(updatedItem);
          }}
        />
      )}

      {/* Recommendation Card Modal */}
      {recommendationItem && (
        <RecommendationCard
          movie={recommendationItem}
          isOpen={!!recommendationItem}
          onClose={() => setRecommendationItem(null)}
          onSubmitRecommendation={handleRecommendation}
        />
      )}
    </>
  );
};
