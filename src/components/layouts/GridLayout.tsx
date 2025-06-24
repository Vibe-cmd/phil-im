
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-20 animate-fade-in"
              style={{ 
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Movie Card */}
              <div 
                className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-[var(--theme-primary)]"
                style={{
                  background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.05), rgba(var(--theme-accent-rgb), 0.05))`
                }}
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.posterPath ? `https://image.tmdb.org/t/p/w300${item.posterPath}` : '/placeholder.svg'}
                  alt={item.title}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-3"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(var(--theme-primary-rgb), 0.3), transparent)`
                  }}
                >
                  <h3 className="font-bold text-sm mb-1 line-clamp-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 mb-2">
                    {new Date(item.releaseDate).getFullYear()}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div 
                        className={`w-2 h-2 rounded-full animate-pulse`}
                        style={{ 
                          backgroundColor: item.isWatched ? '#22c55e' : 'var(--theme-accent)'
                        }}
                      />
                      <span className="text-xs text-white/90">
                        {item.isWatched ? 'Watched' : 'To Watch'}
                      </span>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setRecommendationItem(item);
                      }}
                      className="p-1 rounded-full transition-all duration-200 hover:scale-125"
                      style={{ backgroundColor: 'var(--theme-primary)' }}
                    >
                      <Share className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Rating badge */}
                <div 
                  className="absolute top-2 right-2 backdrop-blur-sm rounded-full px-2 py-1 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'var(--theme-primary)' }}
                >
                  <span className="text-white text-xs font-bold">
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
