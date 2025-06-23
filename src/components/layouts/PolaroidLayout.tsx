
import { AlbumItem } from '@/types';
import { MovieCard } from '@/components/MovieCard';
import { useState } from 'react';

interface PolaroidLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const PolaroidLayout = ({ items, onUpdateItem }: PolaroidLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);

  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {items.map((item, index) => {
            // Random rotation for polaroid effect
            const rotations = [-8, -4, -2, 2, 4, 8, -6, 6];
            const rotation = rotations[index % rotations.length];
            
            return (
              <div
                key={item.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:z-10"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: 'center center'
                }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="bg-white p-4 pb-16 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 relative">
                  {/* Polaroid photo */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                      alt={item.title}
                      className="w-60 h-80 object-cover"
                    />
                    
                    {/* Vintage overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-100/20 via-transparent to-amber-200/20" />
                    
                    {/* Status sticker */}
                    <div className={`absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-white ${
                      item.isWatched ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                  </div>
                  
                  {/* Polaroid caption area */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="font-handwriting text-gray-800 text-lg mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="font-handwriting text-gray-600 text-sm">
                      {new Date(item.releaseDate).getFullYear()}
                    </p>
                    
                    {/* Rating stars */}
                    <div className="flex justify-center mt-2 gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 ${
                            i < Math.round(item.rating / 2) ? 'bg-yellow-600' : 'bg-gray-300'
                          }`}
                          style={{ 
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-200/60 rounded-sm border border-yellow-300/50" 
                       style={{ transform: 'translateX(-50%) rotate(-2deg)' }} />
                </div>
              </div>
            );
          })}
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
