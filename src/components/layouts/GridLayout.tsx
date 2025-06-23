
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
        {items.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
              <img
                src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                alt={item.title}
                className="w-full aspect-[2/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-sm mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-xs opacity-80">{new Date(item.releaseDate).getFullYear()}</p>
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
