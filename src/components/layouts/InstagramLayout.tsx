
import { AlbumItem } from '@/types';
import { MovieCard } from '@/components/MovieCard';
import { useState } from 'react';
import { Play, Heart, MessageCircle } from 'lucide-react';

interface InstagramLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const InstagramLayout = ({ items, onUpdateItem }: InstagramLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);

  return (
    <>
      <div className="max-w-md mx-auto p-6 space-y-8">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            {/* Header */}
            <div className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-xs font-bold">{item.title.charAt(0)}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{new Date(item.releaseDate).getFullYear()}</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <div className="w-1 h-1 bg-foreground rounded-full" />
                <div className="w-1 h-1 bg-foreground rounded-full ml-0.5" />
                <div className="w-1 h-1 bg-foreground rounded-full ml-0.5" />
              </div>
            </div>

            {/* Image */}
            <div 
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              
              {/* Status indicator */}
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                item.isWatched ? 'bg-green-500' : 'bg-red-500'
              }`} />
            </div>

            {/* Actions */}
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Heart className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
                  <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
                </div>
                <div className="text-sm text-muted-foreground">
                  ★ {item.rating.toFixed(1)}
                </div>
              </div>

              {/* Caption */}
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-semibold">{item.title}</span>
                  {item.userNotes && (
                    <span className="ml-2 text-muted-foreground">{item.userNotes}</span>
                  )}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {item.overview}
                </p>
              </div>

              {/* View more */}
              <button 
                onClick={() => setSelectedItem(item)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                View details...
              </button>
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
