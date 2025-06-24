
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Check, Palette, Type, Sparkles, Wand2, Stars } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

interface ThemeSelectorProps {
  onClose: () => void;
}

export const ThemeSelector = ({ onClose }: ThemeSelectorProps) => {
  const { themes, currentTheme, changeTheme, isSecondaryMode, toggleColorMode, customFont, setGoogleFont } = useTheme();
  const [fontInput, setFontInput] = useState(customFont);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFontSubmit = () => {
    if (fontInput.trim()) {
      setGoogleFont(fontInput.trim());
    }
  };

  // Group themes by category
  const groupedThemes = themes.reduce((groups, theme) => {
    let category = 'Other';
    
    if (['spider-verse', 'batman-dark', 'wakanda-vibranium', 'loki-mischief', 'mcu-mighty', 'deadpool-chaos'].includes(theme.id)) {
      category = 'Superhero';
    } else if (['dune-desert', 'interstellar-space', 'matrix-code', 'tenet-inversion', 'cyberpunk-neon'].includes(theme.id)) {
      category = 'Sci-Fi';
    } else if (['hogwarts-magic', 'witcher-silver', 'thrones-winter', 'avatar-pandora', 'ghibli-nature'].includes(theme.id)) {
      category = 'Fantasy';
    } else if (['peaky-blinders', 'money-heist', 'narcos-cartel', 'sacred-games', 'joker-chaos'].includes(theme.id)) {
      category = 'Crime Drama';
    } else if (['minions-banana', 'arcane-steampunk', 'rick-morty'].includes(theme.id)) {
      category = 'Animated';
    } else if (['bollywood-classic', 'dharma-romance'].includes(theme.id)) {
      category = 'Bollywood';
    } else if (['squid-game', 'wandavision-retro'].includes(theme.id)) {
      category = 'Thriller';
    } else if (['barbie-pink', 'breaking-bad', 'oppenheimer-atomic', 'stranger-things'].includes(theme.id)) {
      category = 'Classic';
    }
    
    if (!groups[category]) groups[category] = [];
    groups[category].push(theme);
    return groups;
  }, {} as Record<string, typeof themes>);

  const filteredThemes = searchTerm 
    ? themes.filter(theme => 
        theme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        theme.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <Card className="p-6 glass-strong border-primary/20 animate-slide-up max-h-[90vh] overflow-y-auto scrollbar-theme">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
            <h3 className="text-xl font-bold">Theme Universe</h3>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleColorMode}
            className="flex items-center gap-2 hover-glow"
          >
            <Palette className="w-4 h-4" />
            {isSecondaryMode ? 'Secondary Colors' : 'Primary Colors'}
          </Button>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="hover:scale-110 transition-transform">
          ✕
        </Button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <Input
          placeholder="Search themes by name or franchise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-background/50 border-[var(--theme-primary)]/30 focus:border-[var(--theme-accent)]"
        />
      </div>

      {/* Custom Google Font Section */}
      <div className="mb-8 p-6 rounded-2xl border-2 border-dashed border-[var(--theme-accent)]/30 bg-gradient-to-r from-[var(--theme-primary)]/5 to-[var(--theme-accent)]/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[var(--theme-primary)]/20">
            <Type className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
          </div>
          <div>
            <h4 className="font-semibold">Custom Google Font</h4>
            <p className="text-sm text-muted-foreground">Enter any Google Font name for ultimate customization</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Input
            placeholder="e.g., 'Poppins', 'Roboto Mono', 'Dancing Script'"
            value={fontInput}
            onChange={(e) => setFontInput(e.target.value)}
            className="flex-1 bg-background/70"
          />
          <Button 
            onClick={handleFontSubmit} 
            size="sm"
            className="bg-[var(--theme-primary)] hover:bg-[var(--theme-accent)] transition-all duration-300 hover:scale-105"
          >
            <Wand2 className="w-4 h-4 mr-2" />
            Apply
          </Button>
        </div>
        {customFont && (
          <div className="mt-3 p-3 bg-[var(--theme-accent)]/10 rounded-lg">
            <p className="text-sm">
              Current custom font: <span className="font-semibold" style={{ fontFamily: customFont }}>{customFont}</span>
            </p>
          </div>
        )}
      </div>
      
      {/* Theme Grid */}
      {filteredThemes ? (
        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Search Results ({filteredThemes.length})</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredThemes.map((theme) => (
              <ThemeCard key={theme.id} theme={theme} currentTheme={currentTheme} onSelect={changeTheme} isSecondaryMode={isSecondaryMode} />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedThemes).map(([category, categoryThemes]) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-3">
                <Stars className="w-5 h-5" style={{ color: 'var(--theme-accent)' }} />
                <h4 className="text-lg font-semibold">{category}</h4>
                <Badge variant="outline" className="text-xs">
                  {categoryThemes.length} themes
                </Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryThemes.map((theme) => (
                  <ThemeCard key={theme.id} theme={theme} currentTheme={currentTheme} onSelect={changeTheme} isSecondaryMode={isSecondaryMode} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

// Enhanced Theme Card Component
const ThemeCard = ({ theme, currentTheme, onSelect, isSecondaryMode }: any) => {
  const isSelected = currentTheme.id === theme.id;
  
  return (
    <div
      className="relative cursor-pointer group animate-fade-in hover-lift"
      onClick={() => onSelect(theme.id)}
    >
      <Card className={`p-4 border-2 transition-all duration-500 transform ${
        isSelected 
          ? 'border-[var(--theme-primary)] bg-[var(--theme-primary)]/10 shadow-2xl scale-105 animate-glow' 
          : 'border-border hover:border-[var(--theme-primary)]/50 hover:shadow-xl hover:scale-102'
      }`}>
        {/* Enhanced Theme Preview */}
        <div className={`w-full h-40 rounded-xl mb-4 ${theme.preview} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
          {/* Animated color swatches */}
          <div className="absolute inset-0 flex">
            <div 
              className="flex-1 transition-all duration-700" 
              style={{ 
                backgroundColor: isSecondaryMode ? theme.colors.secondary : theme.colors.primary,
                animation: isSelected ? 'pulse-theme 2s ease-in-out infinite' : 'none'
              }}
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
          
          {/* Floating font sample */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
              <span 
                className="text-white text-2xl font-bold px-4 py-2 rounded-lg bg-black/60 block mb-2 animate-shimmer"
                style={{ fontFamily: theme.font }}
              >
                {theme.name.split(' ')[0]}
              </span>
              <span 
                className="text-white text-sm px-3 py-1 rounded bg-black/40"
                style={{ fontFamily: theme.font }}
              >
                {theme.font}
              </span>
            </div>
          </div>
          
          {/* Selection indicator */}
          {isSelected && (
            <div className="absolute top-3 right-3 animate-bounce-in">
              <div className="bg-[var(--theme-primary)] rounded-full p-2 shadow-lg">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Theme Info */}
        <div className="space-y-3">
          <div>
            <h4 className="font-bold text-sm truncate group-hover:text-[var(--theme-primary)] transition-colors" style={{ fontFamily: theme.font }}>
              {theme.name}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
              {theme.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge 
              variant="outline" 
              className="text-xs border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] transition-colors"
              style={{ fontFamily: theme.font }}
            >
              {theme.font}
            </Badge>
            
            {/* Enhanced color indicators */}
            <div className="flex gap-1.5">
              <div 
                className="w-4 h-4 rounded-full border-2 border-white/40 shadow-lg transform hover:scale-125 transition-transform duration-200"
                style={{ backgroundColor: theme.colors.primary }}
                title="Primary Color"
              />
              <div 
                className="w-4 h-4 rounded-full border-2 border-white/40 shadow-lg transform hover:scale-125 transition-transform duration-200"
                style={{ backgroundColor: theme.colors.secondary }}
                title="Secondary Color"
              />
              <div 
                className="w-4 h-4 rounded-full border-2 border-white/40 shadow-lg transform hover:scale-125 transition-transform duration-200"
                style={{ backgroundColor: theme.colors.accent }}
                title="Accent Color"
              />
            </div>
          </div>
          
          {isSelected && (
            <Badge className="w-full justify-center text-xs bg-[var(--theme-primary)] hover:bg-[var(--theme-accent)] transition-colors">
              ✨ Currently Active
            </Badge>
          )}
        </div>
      </Card>
    </div>
  );
};
