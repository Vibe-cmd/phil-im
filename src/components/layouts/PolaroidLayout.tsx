
import { AlbumItem } from '@/types';
import { EnhancedMovieCard } from '@/components/EnhancedMovieCard';
import { useState } from 'react';

interface PolaroidLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const PolaroidLayout = ({ items, onUpdateItem }: PolaroidLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);

  return (
    <>
      <div className="p-8 min-h-screen" style={{ background: 'linear-gradient(135deg, var(--theme-background), var(--theme-secondary)20)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {items.map((item, index) => {
            const rotations = [-12, -8, -4, -2, 0, 2, 4, 8, 12, -10, 10, -6, 6];
            const rotation = rotations[index % rotations.length];
            const shadows = ['shadow-lg', 'shadow-xl', 'shadow-2xl'];
            const shadow = shadows[index % shadows.length];
            
            return (
              <div
                key={item.id}
                className={`group cursor-pointer transform transition-all duration-700 hover:scale-110 hover:z-20 animate-fade-in animate-float ${shadow}`}
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: 'center center',
                  animationDelay: `${index * 150}ms`
                }}
                onClick={() => setSelectedItem(item)}
              >
                <div 
                  className="bg-white p-4 pb-16 group-hover:shadow-3xl transition-all duration-500 relative border-4 border-white"
                  style={{ 
                    filter: 'sepia(10%) brightness(1.1) contrast(1.1)',
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)'
                  }}
                >
                  {/* Polaroid photo */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                      alt={item.title}
                      className="w-60 h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: 'sepia(5%) contrast(1.05) brightness(1.02)' }}
                    />
                    
                    {/* Vintage overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-100/30 via-transparent to-amber-200/30 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-50/20 to-orange-100/20 pointer-events-none" />
                    
                    {/* Status sticker */}
                    <div 
                      className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-125`}
                      style={{ 
                        backgroundColor: item.isWatched ? '#22c55e' : 'var(--theme-accent)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                      }}
                    />
                    
                    {/* Film grain effect */}
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{ 
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}
                    />
                  </div>
                  
                  {/* Polaroid caption area */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 
                      className="text-gray-800 text-lg mb-1 line-clamp-1 transition-colors duration-300"
                      style={{ 
                        fontFamily: "'Kalam', cursive",
                        transform: `rotate(${rotation > 0 ? -1 : 1}deg)`,
                        color: 'var(--theme-primary)'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-gray-600 text-sm mb-2"
                      style={{ 
                        fontFamily: "'Kalam', cursive",
                        transform: `rotate(${rotation > 0 ? 0.5 : -0.5}deg)`
                      }}
                    >
                      {new Date(item.releaseDate).getFullYear()}
                    </p>
                    
                    {/* Rating stars */}
                    <div className="flex justify-center mt-2 gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 transition-all duration-300 group-hover:scale-110`}
                          style={{ 
                            backgroundColor: i < Math.round(item.rating / 2) ? 'var(--theme-accent)' : '#d1d5db',
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Tape effect */}
                  <div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-yellow-200/80 rounded-sm border border-yellow-300/60 shadow-sm" 
                    style={{ 
                      transform: `translateX(-50%) rotate(${rotation > 0 ? -3 : 3}deg)`,
                      background: 'linear-gradient(45deg, #fef3c7, #fde68a)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }} 
                  />
                  
                  {/* Corner tape - top right */}
                  <div 
                    className="absolute top-2 right-2 w-6 h-6 bg-yellow-200/60 transform rotate-45 border border-yellow-300/50"
                    style={{ borderRadius: '2px' }}
                  />
                  
                  {/* Corner tape - bottom left */}
                  <div 
                    className="absolute bottom-16 left-2 w-4 h-4 bg-yellow-200/60 transform -rotate-12 border border-yellow-300/50"
                    style={{ borderRadius: '2px' }}
                  />
                </div>
              </div>
            );
          })}
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
