
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Film, Palette, Download, Upload } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeSelector } from './ThemeSelector';
import { storage } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';

interface HeaderProps {
  onCreateAlbum: () => void;
  onSearch: (query: string) => void;
  albumCount: number;
}

export const Header = ({ onCreateAlbum, onSearch, albumCount }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const { currentTheme } = useTheme();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleBackup = () => {
    try {
      const data = storage.exportData();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `watchvault-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Backup Created",
        description: "Your data has been exported successfully.",
      });
    } catch (error) {
      toast({
        title: "Backup Failed",
        description: "There was an error creating your backup.",
        variant: "destructive",
      });
    }
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result as string;
        const success = storage.importData(data);
        
        if (success) {
          toast({
            title: "Import Successful",
            description: "Your data has been imported. Please refresh the page.",
          });
          setTimeout(() => window.location.reload(), 2000);
        } else {
          throw new Error('Invalid file format');
        }
      } catch (error) {
        toast({
          title: "Import Failed",
          description: "Please check your file and try again.",
          variant: "destructive",
        });
      }
    };
    reader.readAsText(file);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
              <Film className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                WatchVault
              </h1>
              <p className="text-sm text-muted-foreground">
                {albumCount} {albumCount === 1 ? 'Album' : 'Albums'}
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search your albums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass border-primary/20 focus:border-primary/40"
              />
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="hidden sm:flex">
              {currentTheme.name}
            </Badge>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="relative glass border-primary/20 hover:border-primary/40"
            >
              <Palette className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleBackup}
              className="glass border-primary/20 hover:border-primary/40"
            >
              <Download className="w-4 h-4" />
            </Button>

            <div className="relative">
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Button
                variant="outline"
                size="sm"
                className="glass border-primary/20 hover:border-primary/40"
              >
                <Upload className="w-4 h-4" />
              </Button>
            </div>

            <Button
              onClick={onCreateAlbum}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Album
            </Button>
          </div>
        </div>

        {/* Theme Selector */}
        {showThemeSelector && (
          <div className="mt-4">
            <ThemeSelector onClose={() => setShowThemeSelector(false)} />
          </div>
        )}
      </div>
    </header>
  );
};
