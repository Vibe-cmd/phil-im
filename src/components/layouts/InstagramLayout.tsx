
import { AlbumItem } from '@/types';
import { EnhancedMovieCard } from '@/components/EnhancedMovieCard';
import { useState } from 'react';
import { Play, Heart, MessageCircle, Bookmark, MoreHorizontal } from 'lucide-react';

interface InstagramLayoutProps {
  items: AlbumItem[];
  onUpdateItem: (item: AlbumItem) => void;
}

export const InstagramLayout = ({ items, onUpdateItem }: InstagramLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  const toggleLike = (itemId: string) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(itemId)) {
      newLiked.delete(itemId);
    } else {
      newLiked.add(itemId);
    }
    setLikedItems(newLiked);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4 space-y-6 bg-gradient-to-b from-background to-muted/30">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="bg-card rounded-3xl overflow-hidden shadow-lg border transition-all duration-300 hover:shadow-xl animate-fade-in"
            style={{ 
              animationDelay: `${index * 200}ms`,
              borderColor: 'var(--theme-primary)20'
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4">
              <div 
                className="w-10 h-10 rounded-full p-0.5 animate-pulse"
                style={{ background: `linear-gradient(45deg, var(--theme-primary), var(--theme-accent))` }}
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-xs font-bold" style={{ color: 'var(--theme-primary)' }}>
                    {item.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{new Date(item.releaseDate).getFullYear()}</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
            </div>

            {/* Image */}
            <div 
              className="relative aspect-square cursor-pointer group overflow-hidden"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.posterPath ? `https://image.tmdb.org/t/p/w500${item.posterPath}` : '/placeholder.svg'}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: 'var(--theme-primary)30' }}
              >
                <Play className="w-16 h-16 text-white animate-bounce" />
              </div>
              
              {/* Status indicator */}
              <div 
                className={`absolute top-4 right-4 w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse`}
                style={{ 
                  backgroundColor: item.isWatched ? '#22c55e' : 'var(--theme-accent)'
                }}
              />
              
              {/* Double tap overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {likedItems.has(item.id) && (
                  <Heart className="w-20 h-20 text-red-500 animate-ping" fill="currentColor" />
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Heart 
                    className={`w-7 h-7 cursor-pointer transition-all duration-200 ${
                      likedItems.has(item.id) ? 'text-red-500 scale-110' : 'hover:text-red-500'
                    }`}
                    fill={likedItems.has(item.id) ? 'currentColor' : 'none'}
                    onClick={() => toggleLike(item.id)}
                  />
                  <MessageCircle className="w-7 h-7 cursor-pointer hover:text-blue-500 transition-colors transform hover:scale-110" />
                  <Bookmark className="w-7 h-7 cursor-pointer hover:text-yellow-500 transition-colors transform hover:scale-110" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full mr-0.5 transition-colors duration-300"
                        style={{ 
                          backgroundColor: i < Math.round(item.rating / 2) ? 'var(--theme-accent)' : '#d1d5db'
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">{item.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Likes count */}
              <div className="text-sm font-semibold">
                {likedItems.has(item.id) && "❤️ "}{Math.floor(Math.random() * 1000) + 50} likes
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
                className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
                style={{ color: 'var(--theme-primary)' }}
              >
                View all details...
              </button>
              
              {/* Time */}
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {Math.floor(Math.random() * 24)} hours ago
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <EnhancedMovieCard
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          movieData={{
            title: selectedItem.title,
            overview: selectedItem.overview,
            posterPath: selectedItem.posterPath ? `https://image.tmdb.org/t/p/w500${selectedItem.posterPath}` : '/placeholder.svg',
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
