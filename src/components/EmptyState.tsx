
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Film, Plus, Sparkles } from 'lucide-react';

interface EmptyStateProps {
  onCreateAlbum: () => void;
}

export const EmptyState = ({ onCreateAlbum }: EmptyStateProps) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center glass-strong border-primary/20">
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
            <Film className="w-10 h-10 text-primary" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
        </div>
        
        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Welcome to WatchVault
        </h2>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Create your first album and start organizing your favorite movies and TV shows into beautiful, themed collections.
        </p>
        
        <Button
          onClick={onCreateAlbum}
          size="lg"
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Your First Album
        </Button>
        
        <div className="mt-6 text-xs text-muted-foreground">
          Tip: Try themes like "Barbie's Beauty" or "Stranger Sheets" for a unique experience!
        </div>
      </Card>
    </div>
  );
};
