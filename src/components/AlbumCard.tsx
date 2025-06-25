
import { useState } from 'react';
import { Album } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Film, Trash2, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface AlbumCardProps {
  album: Album;
  onSelect: (album: Album) => void;
  onDelete: (albumId: string) => void;
  index: number;
}

export const AlbumCard = ({ album, onSelect, onDelete, index }: AlbumCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemCount = album.items.length;
  const watchedCount = album.items.filter(item => item.isWatched).length;

  return (
    <Card
      className="group cursor-pointer overflow-hidden glass border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(album)}
    >
      {/* Cover Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        {album.coverImage ? (
          <img
            src={album.coverImage}
            alt={album.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            {album.emoji ? (
              <span className="text-6xl">{album.emoji}</span>
            ) : (
              <Film className="w-12 h-12 text-primary/60" />
            )}
          </div>
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-4 right-4">
            <Button
              variant="destructive"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(album.id);
              }}
              className="opacity-90 hover:opacity-100"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg truncate mb-1">{album.name}</h3>
          {album.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {album.description}
            </p>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </Badge>
            {watchedCount > 0 && (
              <Badge variant="outline" className="text-xs">
                {watchedCount} watched
              </Badge>
            )}
          </div>
        </div>

        {/* Created Date */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {format(new Date(album.createdAt), 'MMM d, yyyy')}
        </div>
      </div>
    </Card>
  );
};
