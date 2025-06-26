
import { useState } from 'react';
import { Album } from '@/types';
import { AlbumCard } from './AlbumCard';
import { CreateAlbumModal } from './CreateAlbumModal';
import { EmptyState } from './EmptyState';

interface AlbumGridProps {
  albums: Album[];
  onCreateAlbum: (album: Omit<Album, 'id' | 'createdAt' | 'updatedAt' | 'items'>) => void;
  onSelectAlbum: (album: Album) => void;
  onDeleteAlbum: (albumId: string) => void;
  searchQuery: string;
  showCreateModal: boolean;
  onCloseCreateModal: () => void;
  onOpenCreateModal: () => void;
}

export const AlbumGrid = ({
  albums,
  onCreateAlbum,
  onSelectAlbum,
  onDeleteAlbum,
  searchQuery,
  showCreateModal,
  onCloseCreateModal,
  onOpenCreateModal
}: AlbumGridProps) => {
  const filteredAlbums = albums.filter(album =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    album.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (albums.length === 0) {
    return (
      <>
        <EmptyState onCreateAlbum={onOpenCreateModal} />
        {showCreateModal && (
          <CreateAlbumModal
            isOpen={showCreateModal}
            onCreate={onCreateAlbum}
            onClose={onCloseCreateModal}
          />
        )}
      </>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {filteredAlbums.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">
            No CineLibraries found
          </h3>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAlbums.map((album, index) => (
            <AlbumCard
              key={album.id}
              album={album}
              onSelect={onSelectAlbum}
              onDelete={onDeleteAlbum}
              index={index}
            />
          ))}
        </div>
      )}

      {showCreateModal && (
        <CreateAlbumModal
          isOpen={showCreateModal}
          onCreate={onCreateAlbum}
          onClose={onCloseCreateModal}
        />
      )}
    </div>
  );
};
