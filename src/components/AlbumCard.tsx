
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
      className="group cursor-pointer overflow-hidden animate-fade-in transition-all duration-300 hover:scale-105 relative"
      style={{ 
        animationDelay: `${index * 100}ms`,
        background: album.useAsBackground && album.coverImage 
          ? 'transparent'
          : `rgba(var(--theme-primary-rgb), 0.1)`,
        backdropFilter: 'blur(20px)',
        border: `1px solid rgba(var(--theme-primary-rgb), 0.2)`,
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(album)}
    >
      {/* Background Image (if enabled) */}
      {album.useAsBackground && album.coverImage && (
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${album.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
      )}
      
      {/* Overlay for better readability when background is used */}
      {album.useAsBackground && album.coverImage && (
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.4), rgba(var(--theme-background-rgb), 0.6))`
          }}
        />
      )}

      {/* Cover Image */}
      <div 
        className="relative aspect-[4/3] overflow-hidden z-10"
        style={{
          background: album.useAsBackground && album.coverImage 
            ? 'transparent'
            : `linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.2), rgba(var(--theme-accent-rgb), 0.1))`
        }}
      >
        {album.coverImage && !album.useAsBackground ? (
          <img
            src={album.coverImage}
            alt={album.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {album.emoji ? (
              <span className="text-6xl">{album.emoji}</span>
            ) : (
              <Film className="w-12 h-12" style={{ color: 'var(--theme-primary)' }} />
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
      <div className="p-4 space-y-3 relative z-10">
        <div>
          <h3 
            className="font-semibold text-lg truncate mb-1" 
            style={{ 
              color: 'var(--theme-primary)',
              fontFamily: 'var(--font-family)'
            }}
          >
            {album.name}
          </h3>
          {album.description && (
            <p className="text-sm line-clamp-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {album.description}
            </p>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className="text-xs"
              style={{
                backgroundColor: `rgba(var(--theme-accent-rgb), 0.2)`,
                color: 'var(--theme-accent)',
                border: `1px solid rgba(var(--theme-accent-rgb), 0.3)`
              }}
            >
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </Badge>
            {watchedCount > 0 && (
              <Badge 
                variant="outline" 
                className="text-xs"
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

        {/* Created Date */}
        <div className="flex items-center gap-1 text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          <Calendar className="w-3 h-3" />
          {format(new Date(album.createdAt), 'MMM d, yyyy')}
        </div>
      </div>
    </Card>
  );
};
