
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Check, Palette, Type } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

interface ThemeSelectorProps {
  onClose: () => void;
}

export const ThemeSelector = ({ onClose }: ThemeSelectorProps) => {
  const { themes, currentTheme, changeTheme, isSecondaryMode, toggleColorMode, customFont, setGoogleFont } = useTheme();
  const [fontInput, setFontInput] = useState(customFont);

  const handleFontSubmit = () => {
    if (fontInput.trim()) {
      setGoogleFont(fontInput.trim());
    }
  };

  return (
    <Card className="p-6 glass-strong border-primary/20 animate-slide-up max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
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

      {/* Custom Google Font Input */}
      <div className="mb-6 p-4 bg-muted/20 rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <Type className="w-4 h-4" />
          <h4 className="font-medium">Custom Google Font</h4>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Enter Google Font name (e.g., 'Roboto', 'Open Sans')"
            value={fontInput}
            onChange={(e) => setFontInput(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleFontSubmit} size="sm">
            Apply
          </Button>
        </div>
        {customFont && (
          <p className="text-sm text-muted-foreground mt-2">
            Current custom font: <span className="font-medium" style={{ fontFamily: customFont }}>{customFont}</span>
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="relative cursor-pointer group"
            onClick={() => changeTheme(theme.id)}
          >
            <Card className={`p-4 border-2 transition-all duration-200 ${
              currentTheme.id === theme.id 
                ? 'border-primary bg-primary/5 shadow-lg' 
                : 'border-border hover:border-primary/50'
            }`}>
              {/* Enhanced Theme Preview */}
              <div className={`w-full h-32 rounded-lg mb-3 ${theme.preview} relative overflow-hidden`}>
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
                
                {/* Font sample overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="text-center">
                    <span 
                      className="text-white text-lg font-bold px-3 py-2 rounded bg-black/60 block mb-2"
                      style={{ fontFamily: theme.font }}
                    >
                      {theme.name}
                    </span>
                    <span 
                      className="text-white text-xs px-2 py-1 rounded bg-black/40"
                      style={{ fontFamily: theme.font }}
                    >
                      Sample Text
                    </span>
                  </div>
                </div>
                
                {currentTheme.id === theme.id && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
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
                      className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: theme.colors.primary }}
                      title="Primary"
                    />
                    <div 
                      className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: theme.colors.secondary }}
                      title="Secondary"
                    />
                    <div 
                      className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
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
