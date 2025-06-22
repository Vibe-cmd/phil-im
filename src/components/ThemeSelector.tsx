
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeSelectorProps {
  onClose: () => void;
}

export const ThemeSelector = ({ onClose }: ThemeSelectorProps) => {
  const { themes, currentTheme, changeTheme, isSecondaryMode, toggleColorMode } = useTheme();

  return (
    <Card className="p-6 glass-strong border-primary/20 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold">Choose Your Theme</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleColorMode}
            className="flex items-center gap-2"
          >
            <Palette className="w-4 h-4" />
            {isSecondaryMode ? 'Secondary Colors' : 'Primary Colors'}
          </Button>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          ✕
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="relative cursor-pointer group"
            onClick={() => changeTheme(theme.id)}
          >
            <Card className={`p-4 border-2 transition-all duration-200 ${
              currentTheme.id === theme.id 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/50'
            }`}>
              {/* Enhanced Theme Preview */}
              <div className={`w-full h-24 rounded-lg mb-3 ${theme.preview} relative overflow-hidden`}>
                {/* Color swatches overlay */}
                <div className="absolute inset-0 flex">
                  <div 
                    className="flex-1" 
                    style={{ backgroundColor: isSecondaryMode ? theme.colors.secondary : theme.colors.primary }}
                  />
                  <div 
                    className="flex-1" 
                    style={{ backgroundColor: isSecondaryMode ? theme.colors.primary : theme.colors.secondary }}
                  />
                  <div 
                    className="flex-1" 
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                </div>
                
                {/* Sample text overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span 
                    className="text-white text-xs font-bold px-2 py-1 rounded bg-black/50"
                    style={{ fontFamily: theme.font }}
                  >
                    Aa
                  </span>
                </div>
                
                {currentTheme.id === theme.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                )}
              </div>
              
              {/* Theme Info */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm truncate" style={{ fontFamily: theme.font }}>
                  {theme.name}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {theme.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {theme.font}
                  </Badge>
                  {/* Color indicators */}
                  <div className="flex gap-1">
                    <div 
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: theme.colors.primary }}
                      title="Primary"
                    />
                    <div 
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: theme.colors.secondary }}
                      title="Secondary"
                    />
                    <div 
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: theme.colors.accent }}
                      title="Accent"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Card>
  );
};
