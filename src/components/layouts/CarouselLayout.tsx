
import { AlbumItem } from '@/types';
import { MovieCard } from '@/components/MovieCard';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const CarouselLayout = ({ items, onUpdateItem }: CarouselLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="relative p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="rounded-full bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                  index === 0 ? 'scale-125' : 'scale-100'
                }`}
                style={{ width: '280px' }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                    alt={item.title}
                    className="w-full aspect-[2/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm opacity-80 mb-2">{new Date(item.releaseDate).getFullYear()}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.round(item.rating / 2) ? 'bg-yellow-400' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs">{item.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="rounded-full bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {selectedItem && (
        <MovieCard
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
