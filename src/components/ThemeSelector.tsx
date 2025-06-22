
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeSelectorProps {
  onClose: () => void;
}

export const ThemeSelector = ({ onClose }: ThemeSelectorProps) => {
  const { themes, currentTheme, changeTheme } = useTheme();

  return (
    <Card className="p-6 glass-strong border-primary/20 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Choose Your Theme</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          ✕
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
              {/* Theme Preview */}
              <div className={`w-full h-20 rounded-lg mb-3 ${theme.preview} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                {currentTheme.id === theme.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              
              {/* Theme Info */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm">{theme.name}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {theme.description}
                </p>
                <Badge variant="outline" className="text-xs">
                  {theme.font}
                </Badge>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Card>
  );
};
