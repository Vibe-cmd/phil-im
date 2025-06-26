
import { useState, useEffect } from 'react';
import { Album, AlbumItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { MovieCard } from './MovieCard';
import { useToast } from '@/hooks/use-toast';

interface AlbumDetailProps {
  album: Album;
  onBack: () => void;
  onUpdateAlbum: (album: Album) => void;
}

export const AlbumDetail = ({ album, onBack, onUpdateAlbum }: AlbumDetailProps) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AlbumItem | null>(null);
  const [currentAlbum, setCurrentAlbum] = useState<Album>(album);
  const { toast } = useToast();

  // Update local state when album prop changes
  useEffect(() => {
    setCurrentAlbum(album);
  }, [album]);

  const handleAddItem = (itemData: Omit<AlbumItem, 'id' | 'addedAt'>) => {
    const newItem: AlbumItem = {
      ...itemData,
      id: crypto.randomUUID(),
      addedAt: new Date()
    };

    const updatedAlbum = {
      ...currentAlbum,
      items: [...currentAlbum.items, newItem],
      updatedAt: new Date()
    };

    setCurrentAlbum(updatedAlbum);
    onUpdateAlbum(updatedAlbum);
    setShowSearchModal(false);
  };

  const handleDeleteItem = (itemId: string) => {
    const item = currentAlbum.items.find(i => i.id === itemId);
    const updatedAlbum = {
      ...currentAlbum,
      items: currentAlbum.items.filter(i => i.id !== itemId),
      updatedAt: new Date()
    };

    setCurrentAlbum(updatedAlbum);
    onUpdateAlbum(updatedAlbum);
    
    toast({
      title: "Item Removed",
      description: `"${item?.title}" has been removed from the CineLibrary.`,
      variant: "destructive",
    });
  };

  const handleUpdateItem = (updatedItem: AlbumItem) => {
    const updatedAlbum = {
      ...currentAlbum,
      items: currentAlbum.items.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      ),
      updatedAt: new Date()
    };

    setCurrentAlbum(updatedAlbum);
    onUpdateAlbum(updatedAlbum);
  };

  const watchedCount = currentAlbum.items.filter(item => item.isWatched).length;

  const containerStyle = currentAlbum.useAsBackground && currentAlbum.coverImage 
    ? {
        position: 'relative' as const,
        minHeight: '100vh',
        overflow: 'hidden'
      }
    : {
        background: `linear-gradient(135deg, var(--theme-background), rgba(var(--theme-secondary-rgb), 0.1))`,
        backgroundColor: 'var(--theme-background)',
        minHeight: '100vh'
      };

  return (
    <div style={containerStyle}>
      {/* Blurred background image */}
      {currentAlbum.useAsBackground && currentAlbum.coverImage && (
        <>
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${currentAlbum.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
              opacity: 0.3
            }}
          />
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(135deg, rgba(var(--theme-background-rgb), 0.8), rgba(var(--theme-primary-rgb), 0.1))`
            }}
          />
        </>
      )}

      <div className="container mx-auto px-4 py-8 relative z-20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            onClick={onBack} 
            variant="outline" 
            size="sm"
            style={{
              borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
              color: 'var(--theme-primary)',
              backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to CineLibraries
          </Button>
        </div>

        {/* CineLibrary Info */}
        <div className="mb-8">
          <div className="flex items-center gap-6">
            {/* Cover */}
            <div 
              className="w-32 h-48 rounded-lg overflow-hidden flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.2), rgba(var(--theme-accent-rgb), 0.1))`
              }}
            >
              {/* Show either cover image OR emoji, not both */}
              {currentAlbum.coverImage ? (
                <img
                  src={currentAlbum.coverImage}
                  alt={currentAlbum.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {currentAlbum.emoji ? (
                    <span className="text-4xl">{currentAlbum.emoji}</span>
                  ) : (
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>No Cover</div>
                  )}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 
                className="text-4xl font-bold mb-2" 
                style={{ 
                  fontFamily: 'var(--font-family)',
                  color: 'var(--theme-primary)'
                }}
              >
                {currentAlbum.name}
              </h1>
              {currentAlbum.description && (
                <p className="text-lg mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {currentAlbum.description}
                </p>
              )}
              <div className="flex items-center gap-4">
                <Badge 
                  variant="secondary"
                  style={{
                    backgroundColor: `rgba(var(--theme-accent-rgb), 0.2)`,
                    color: 'var(--theme-accent)',
                    border: `1px solid rgba(var(--theme-accent-rgb), 0.3)`
                  }}
                >
                  {currentAlbum.items.length} {currentAlbum.items.length === 1 ? 'item' : 'items'}
                </Badge>
                {watchedCount > 0 && (
                  <Badge 
                    variant="outline"
                    style={{
                      borderColor: `rgba(var(--theme-primary-rgb), 0.4)`,
                      color: 'var(--theme-primary)'
                    }}
                  >
                    {watchedCount} watched
                  </Badge>
                )}
              </div>
            </div>

            {/* Add Button */}
            <Button 
              onClick={() => setShowSearchModal(true)} 
              size="lg"
              style={{
                backgroundColor: 'var(--theme-primary)',
                color: 'white'
              }}
              className="hover:opacity-90"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {/* Items Grid */}
        {currentAlbum.items.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              No items in this CineLibrary yet
            </h3>
            <p className="text-sm mb-4" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Start building your collection by adding movies and TV shows
            </p>
            <Button 
              onClick={() => setShowSearchModal(true)}
              style={{
                backgroundColor: 'var(--theme-primary)',
                color: 'white'
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Item
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentAlbum.items.map((item, index) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: `rgba(var(--theme-primary-rgb), 0.1)`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid rgba(var(--theme-primary-rgb), 0.2)`,
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1)`,
                }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Poster */}
                <div 
                  className="relative aspect-[2/3] overflow-hidden"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  {item.posterPath ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.posterPath}`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      No Image
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-2 right-2">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteItem(item.id);
                        }}
                        className="opacity-90 hover:opacity-100"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    <div className="absolute bottom-2 left-2">
                      {item.isWatched ? (
                        <Badge 
                          style={{
                            backgroundColor: 'var(--theme-accent)',
                            color: 'white'
                          }}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Watched
                        </Badge>
                      ) : (
                        <Badge 
                          variant="secondary"
                          style={{
                            backgroundColor: `rgba(var(--theme-secondary-rgb), 0.8)`,
                            color: 'white'
                          }}
                        >
                          <EyeOff className="w-3 h-3 mr-1" />
                          To Watch
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold truncate mb-1" style={{ color: 'var(--theme-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm line-clamp-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {item.overview}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{
                        borderColor: `rgba(var(--theme-accent-rgb), 0.4)`,
                        color: 'var(--theme-accent)'
                      }}
                    >
                      {item.mediaType}
                    </Badge>
                    <span className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {new Date(item.releaseDate).getFullYear()}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Modals */}
        <SearchModal
          isOpen={showSearchModal}
          onClose={() => setShowSearchModal(false)}
          onAddItem={handleAddItem}
        />

        <MovieCard
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          movieData={selectedItem}
          onUpdate={handleUpdateItem}
        />
      </div>
    </div>
  );
};
