
import { useState } from 'react';
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
  const { toast } = useToast();

  const handleAddItem = (itemData: Omit<AlbumItem, 'id' | 'addedAt'>) => {
    const newItem: AlbumItem = {
      ...itemData,
      id: crypto.randomUUID(),
      addedAt: new Date()
    };

    const updatedAlbum = {
      ...album,
      items: [...album.items, newItem],
      updatedAt: new Date()
    };

    onUpdateAlbum(updatedAlbum);
    setShowSearchModal(false);
  };

  const handleDeleteItem = (itemId: string) => {
    const item = album.items.find(i => i.id === itemId);
    const updatedAlbum = {
      ...album,
      items: album.items.filter(i => i.id !== itemId),
      updatedAt: new Date()
    };

    onUpdateAlbum(updatedAlbum);
    
    toast({
      title: "Item Removed",
      description: `"${item?.title}" has been removed from the album.`,
      variant: "destructive",
    });
  };

  const handleUpdateItem = (updatedItem: AlbumItem) => {
    const updatedAlbum = {
      ...album,
      items: album.items.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      ),
      updatedAt: new Date()
    };

    onUpdateAlbum(updatedAlbum);
  };

  const watchedCount = album.items.filter(item => item.isWatched).length;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button onClick={onBack} variant="outline" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Albums
        </Button>
      </div>

      {/* Album Info */}
      <div className="mb-8">
        <div className="flex items-center gap-6">
          {/* Cover */}
          <div className="w-32 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden flex-shrink-0">
            {album.coverImage ? (
              <img
                src={album.coverImage}
                alt={album.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                {album.emoji ? (
                  <span className="text-4xl">{album.emoji}</span>
                ) : (
                  <div className="text-muted-foreground">No Cover</div>
                )}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: album.font }}>
              {album.name}
            </h1>
            {album.description && (
              <p className="text-muted-foreground text-lg mb-4">
                {album.description}
              </p>
            )}
            <div className="flex items-center gap-4">
              <Badge variant="secondary">
                {album.items.length} {album.items.length === 1 ? 'item' : 'items'}
              </Badge>
              {watchedCount > 0 && (
                <Badge variant="outline">
                  {watchedCount} watched
                </Badge>
              )}
              <Badge variant="outline" className="capitalize">
                {album.layout} layout
              </Badge>
            </div>
          </div>

          {/* Add Button */}
          <Button onClick={() => setShowSearchModal(true)} size="lg">
            <Plus className="w-5 h-5 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Items Grid */}
      {album.items.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">
            No items in this album yet
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Start building your collection by adding movies and TV shows
          </p>
          <Button onClick={() => setShowSearchModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Item
          </Button>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          album.layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :
          album.layout === 'instagram' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {album.items.map((item, index) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Poster */}
              <div className="relative aspect-[2/3] overflow-hidden bg-muted">
                {item.posterPath ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.posterPath}`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
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
                      <Badge className="bg-green-500">
                        <Eye className="w-3 h-3 mr-1" />
                        Watched
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <EyeOff className="w-3 h-3 mr-1" />
                        To Watch
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold truncate mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.overview}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <Badge variant="outline" className="text-xs">
                    {item.mediaType}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
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
  );
};
