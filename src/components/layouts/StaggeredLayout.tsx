
import { AlbumItem } from '@/types';
import { EnhancedMovieCard } from '@/components/EnhancedMovieCard';
import { useState } from 'react';

interface StaggeredLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const StaggeredLayout = ({ items, onUpdateItem }: StaggeredLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);

  const columnCount = 4;
  const columns: AlbumItem[][] = Array.from({ length: columnCount }, () => []);
  
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });

  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((item, itemIndex) => {
                const heights = ['h-80', 'h-96', 'h-72', 'h-88', 'h-64', 'h-[400px]'];
                const randomHeight = heights[(columnIndex + itemIndex) % heights.length];
                
                return (
                  <div
                    key={item.id}
                    className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-20 animate-fade-in ${randomHeight}`}
                    style={{ 
                      animationDelay: `${(columnIndex * 100) + (itemIndex * 150)}ms`,
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                    }}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div 
                      className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-[var(--theme-primary)]/20"
                      style={{ 
                        background: `linear-gradient(135deg, var(--theme-primary)15, var(--theme-accent)10, transparent)`
                      }}
                    >
                      <img
                        src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ 
                          background: `linear-gradient(to top, rgba(0,0,0,0.9), var(--theme-primary)30, transparent)`
                        }}
                      />
                      
                      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2" style={{ color: 'var(--theme-accent)' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-80 mb-2">{new Date(item.releaseDate).getFullYear()}</p>
                        <p className="text-xs opacity-70 line-clamp-3">{item.overview}</p>
                        
                        <div className="mt-3 flex items-center gap-2">
                          <div 
                            className={`w-3 h-3 rounded-full animate-pulse`}
                            style={{ 
                              backgroundColor: item.isWatched ? '#22c55e' : 'var(--theme-accent)'
                            }}
                          />
                          <span className="text-xs">{item.isWatched ? 'Watched' : 'To Watch'}</span>
                        </div>
                      </div>
                      
                      <div 
                        className="absolute top-4 right-4 backdrop-blur-sm rounded-full px-2 py-1 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: 'var(--theme-primary)' }}
                      >
                        <span className="text-white text-xs font-bold">{item.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
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
