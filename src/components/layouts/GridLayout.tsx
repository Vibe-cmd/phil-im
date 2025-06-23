
import { AlbumItem } from '@/types';
import { MovieCard } from '@/components/MovieCard';
import { useState } from 'react';

interface GridLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const GridLayout = ({ items, onUpdateItem }: GridLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:z-10"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-[var(--theme-primary)]/10 to-[var(--theme-accent)]/10">
              <img
                src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                alt={item.title}
                className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-125"
              />
              
              {/* Dynamic overlay with theme colors */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[var(--theme-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Animated content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-sm mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-xs opacity-80">{new Date(item.releaseDate).getFullYear()}</p>
                
                {/* Status indicator with theme colors */}
                <div className="mt-2 flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full border-2 border-white ${
                    item.isWatched ? 'bg-green-500' : 'bg-[var(--theme-accent)]'
                  } animate-pulse`} />
                  <span className="text-xs">{item.isWatched ? 'Watched' : 'To Watch'}</span>
                </div>
              </div>
              
              {/* Rating badge */}
              <div className="absolute top-3 right-3 bg-[var(--theme-primary)]/90 backdrop-blur-sm rounded-full px-2 py-1 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-white text-xs font-bold">★{item.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
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
