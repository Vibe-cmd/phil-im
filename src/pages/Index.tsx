
import { useState, useEffect } from 'react';
import { Album } from '@/types';
import { Header } from '@/components/Header';
import { AlbumGrid } from '@/components/AlbumGrid';
import { AlbumDetail } from '@/components/AlbumDetail';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { storage } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [cineLibraries, setCineLibraries] = useState<Album[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedLibrary, setSelectedLibrary] = useState<Album | null>(null);
  const { toast } = useToast();

  // Load libraries from storage on component mount
  useEffect(() => {
    const saved = storage.getAlbums();
    setCineLibraries(saved);
  }, []);

  // Save libraries to storage whenever they change
  useEffect(() => {
    if (cineLibraries.length > 0) {
      storage.saveAlbums(cineLibraries);
    }
  }, [cineLibraries]);

  const handleCreateLibrary = (libraryData: Omit<Album, 'id' | 'createdAt' | 'updatedAt' | 'items'>) => {
    const newLibrary: Album = {
      ...libraryData,
      id: crypto.randomUUID(),
      items: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setCineLibraries(prev => [newLibrary, ...prev]);
    setShowCreateModal(false);
    
    toast({
      title: "CineLibrary Created",
      description: `"${newLibrary.name}" has been added to your collection.`,
    });
  };

  const handleSelectLibrary = (library: Album) => {
    setSelectedLibrary(library);
  };

  const handleUpdateLibrary = (updatedLibrary: Album) => {
    setCineLibraries(prev => prev.map(library => 
      library.id === updatedLibrary.id ? updatedLibrary : library
    ));
  };

  const handleDeleteLibrary = (libraryId: string) => {
    const library = cineLibraries.find(l => l.id === libraryId);
    setCineLibraries(prev => prev.filter(l => l.id !== libraryId));
    
    toast({
      title: "CineLibrary Deleted",
      description: `"${library?.name}" has been removed from your collection.`,
      variant: "destructive",
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  // If a library is selected, show the detail view
  if (selectedLibrary) {
    return (
      <ThemeProvider>
        <div className="min-h-screen" style={{ 
          background: `linear-gradient(135deg, var(--theme-background), rgba(var(--theme-secondary-rgb), 0.1))`,
          backgroundColor: 'var(--theme-background)'
        }}>
          <AlbumDetail
            album={selectedLibrary}
            onBack={() => setSelectedLibrary(null)}
            onUpdateAlbum={handleUpdateLibrary}
          />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ 
        background: `linear-gradient(135deg, var(--theme-background), rgba(var(--theme-secondary-rgb), 0.1))`,
        backgroundColor: 'var(--theme-background)'
      }}>
        <Header
          onCreateAlbum={handleOpenCreateModal}
          onSearch={handleSearch}
          albumCount={cineLibraries.length}
        />
        
        <main>
          <AlbumGrid
            albums={cineLibraries}
            onCreateAlbum={handleCreateLibrary}
            onSelectAlbum={handleSelectLibrary}
            onDeleteAlbum={handleDeleteLibrary}
            searchQuery={searchQuery}
            showCreateModal={showCreateModal}
            onCloseCreateModal={() => setShowCreateModal(false)}
            onOpenCreateModal={handleOpenCreateModal}
          />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
