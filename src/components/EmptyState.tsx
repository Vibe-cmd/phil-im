
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Film, Plus, Sparkles } from 'lucide-react';

interface EmptyStateProps {
  onCreateAlbum: () => void;
}

export const EmptyState = ({ onCreateAlbum }: EmptyStateProps) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <Card 
        className="max-w-md w-full p-8 text-center animate-fade-in transition-all duration-300"
        style={{
          background: `rgba(var(--theme-primary-rgb), 0.1)`,
          backdropFilter: 'blur(20px)',
          border: `1px solid rgba(var(--theme-primary-rgb), 0.2)`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <div className="relative mb-6">
          <div 
            className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.2), rgba(var(--theme-accent-rgb), 0.1))`
            }}
          >
            <Film className="w-10 h-10" style={{ color: 'var(--theme-primary)' }} />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 animate-pulse" style={{ color: 'var(--theme-accent)' }} />
        </div>
        
        <h2 
          className="text-2xl font-bold mb-3"
          style={{ 
            color: 'var(--theme-primary)',
            fontFamily: 'var(--font-family)'
          }}
        >
          Welcome to फीLim
        </h2>
        
        <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Create your first CineLibrary and start organizing your favorite movies and TV shows into beautiful, themed collections.
        </p>
        
        <Button
          onClick={onCreateAlbum}
          size="lg"
          style={{
            backgroundColor: 'var(--theme-primary)',
            color: 'white'
          }}
          className="hover:opacity-90 shadow-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create a CineLibrary
        </Button>
        
        <div className="mt-6 text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          Tip: Try themes like "Spectacular Spider-Verse" or "Mystical Matrix" for a unique experience!
        </div>
      </Card>
    </div>
  );
};
