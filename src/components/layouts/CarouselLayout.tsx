
import { AlbumItem } from '@/types';
import { EnhancedMovieCard } from '@/components/EnhancedMovieCard';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const CarouselLayout = ({ items, onUpdateItem }: CarouselLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      
      if (direction === 'left' && focusedIndex > 0) {
        setFocusedIndex(focusedIndex - 1);
      } else if (direction === 'right' && focusedIndex < items.length - 1) {
        setFocusedIndex(focusedIndex + 1);
      }
    }
  };

  return (
    <>
      <div className="relative p-6 overflow-hidden">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="rounded-full bg-background/80 backdrop-blur-sm border-[var(--theme-primary)]/30 hover:border-[var(--theme-primary)]"
          >
            <ChevronLeft className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
          </Button>
          
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth flex-1 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 cursor-pointer transform transition-all duration-700 ${
                  index === focusedIndex 
                    ? 'scale-125 z-20 animate-glow' 
                    : 'scale-100 hover:scale-110'
                }`}
                style={{ width: '280px' }}
                onClick={() => setSelectedItem(item)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                <div 
                  className="relative overflow-hidden rounded-2xl shadow-2xl group border-2 transition-all duration-500"
                  style={{ 
                    borderColor: index === focusedIndex ? 'var(--theme-primary)' : 'transparent',
                    background: `linear-gradient(135deg, var(--theme-primary)20, var(--theme-accent)20)`
                  }}
                >
                  <img
                    src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                    alt={item.title}
                    className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"
                    style={{ background: `linear-gradient(to top, rgba(0,0,0,0.9), var(--theme-primary)20, transparent)` }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2" style={{ color: 'var(--theme-accent)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-80 mb-2">{new Date(item.releaseDate).getFullYear()}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors duration-300`}
                            style={{ 
                              backgroundColor: i < Math.round(item.rating / 2) ? 'var(--theme-accent)' : '#6b7280'
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-xs">{item.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  {index === focusedIndex && (
                    <div 
                      className="absolute inset-0 border-4 rounded-2xl animate-pulse"
                      style={{ borderColor: 'var(--theme-primary)' }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="rounded-full bg-background/80 backdrop-blur-sm border-[var(--theme-primary)]/30 hover:border-[var(--theme-primary)]"
          >
            <ChevronRight className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
          </Button>
        </div>
      </div>

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
    </>
  );
};
