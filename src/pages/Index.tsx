
import { useState, useEffect } from 'react';
import { Album } from '@/types';
import { Header } from '@/components/Header';
import { AlbumGrid } from '@/components/AlbumGrid';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { storage } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { toast } = useToast();

  // Load albums from storage on component mount
  useEffect(() => {
    const savedAlbums = storage.getAlbums();
    setAlbums(savedAlbums);
  }, []);

  // Save albums to storage whenever albums change
  useEffect(() => {
    storage.saveAlbums(albums);
  }, [albums]);

  const handleCreateAlbum = (albumData: Omit<Album, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newAlbum: Album = {
      ...albumData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setAlbums(prev => [newAlbum, ...prev]);
    setShowCreateModal(false);
    
    toast({
      title: "Album Created",
      description: `"${newAlbum.name}" has been added to your collection.`,
    });
  };

  const handleSelectAlbum = (album: Album) => {
    console.log('Opening album:', album.name);
    // TODO: Navigate to album detail view
    toast({
      title: "Album Selected",
      description: `Opening "${album.name}" - This feature is coming soon!`,
    });
  };

  const handleDeleteAlbum = (albumId: string) => {
    const album = albums.find(a => a.id === albumId);
    setAlbums(prev => prev.filter(a => a.id !== albumId));
    
    toast({
      title: "Album Deleted",
      description: `"${album?.name}" has been removed from your collection.`,
      variant: "destructive",
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
        <Header
          onCreateAlbum={() => setShowCreateModal(true)}
          onSearch={handleSearch}
          albumCount={albums.length}
        />
        
        <main>
          <AlbumGrid
            albums={albums}
            onCreateAlbum={handleCreateAlbum}
            onSelectAlbum={handleSelectAlbum}
            onDeleteAlbum={handleDeleteAlbum}
            searchQuery={searchQuery}
            showCreateModal={showCreateModal}
            onCloseCreateModal={() => setShowCreateModal(false)}
          />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
