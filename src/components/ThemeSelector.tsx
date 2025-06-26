
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Palette, Search, Sparkles } from 'lucide-react';
import { EnhancedThemePreview } from './EnhancedThemePreview';

export const ThemeSelector = () => {
  const { currentTheme, changeTheme, isSecondaryMode, toggleColorMode, customFont, setGoogleFont, themes } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [fontInput, setFontInput] = useState(customFont);
  const [isOpen, setIsOpen] = useState(false);

  const filteredThemes = themes.filter(theme =>
    theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    theme.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    theme.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [...new Set(themes.map(theme => theme.category))];

  const handleFontChange = () => {
    setGoogleFont(fontInput);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="gap-2"
          style={{
            borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
            color: 'var(--theme-primary)',
            backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`
          }}
        >
          <Palette className="w-4 h-4" />
          Themes
        </Button>
      </DialogTrigger>
      
      <DialogContent 
        className="max-w-7xl max-h-[90vh] overflow-y-auto p-0"
        style={{
          background: `linear-gradient(135deg, rgba(var(--theme-background-rgb), 0.95), rgba(var(--theme-primary-rgb), 0.05))`,
          backdropFilter: 'blur(20px)',
          border: `1px solid rgba(var(--theme-primary-rgb), 0.2)`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3)`,
        }}
      >
        <div className="p-8">
          <DialogHeader className="mb-8">
            <DialogTitle 
              className="text-3xl font-bold text-center flex items-center justify-center gap-3"
              style={{ 
                color: 'var(--theme-primary)',
                fontFamily: 'var(--font-family)'
              }}
            >
              <Sparkles className="w-8 h-8" />
              Choose Your CineLibrary Theme
            </DialogTitle>
          </DialogHeader>

          {/* Controls */}
          <div className="space-y-6 mb-8">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
              <Input
                placeholder="Search themes by name, category, or style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg p-4"
                style={{
                  background: `rgba(var(--theme-primary-rgb), 0.1)`,
                  borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                  color: 'white'
                }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={searchQuery === '' ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSearchQuery('')}
                style={{
                  backgroundColor: searchQuery === '' ? 'var(--theme-primary)' : 'transparent',
                  borderColor: 'var(--theme-primary)',
                  color: searchQuery === '' ? 'white' : 'var(--theme-primary)'
                }}
              >
                All Themes ({themes.length})
              </Badge>
              {categories.map((category) => {
                const isActive = searchQuery === category;
                const count = themes.filter(t => t.category === category).length;
                return (
                  <Badge
                    key={category}
                    variant={isActive ? 'default' : 'outline'}
                    className="cursor-pointer px-4 py-2"
                    onClick={() => setSearchQuery(isActive ? '' : category)}
                    style={{
                      backgroundColor: isActive ? 'var(--theme-primary)' : 'transparent',
                      borderColor: 'var(--theme-primary)',
                      color: isActive ? 'white' : 'var(--theme-primary)'
                    }}
                  >
                    {category} ({count})
                  </Badge>
                );
              })}
            </div>

            {/* Theme Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg" style={{
              background: `rgba(var(--theme-primary-rgb), 0.05)`,
              border: `1px solid rgba(var(--theme-primary-rgb), 0.2)`
            }}>
              <div className="flex items-center justify-between">
                <Label htmlFor="color-mode" style={{ color: 'var(--theme-primary)' }}>
                  Secondary Color Mode
                </Label>
                <Switch
                  id="color-mode"
                  checked={isSecondaryMode}
                  onCheckedChange={toggleColorMode}
                />
              </div>
              
              <div className="flex items-center gap-3">
                <Label htmlFor="custom-font" style={{ color: 'var(--theme-primary)' }}>
                  Custom Font:
                </Label>
                <Input
                  id="custom-font"
                  placeholder="Enter Google Font name"
                  value={fontInput}
                  onChange={(e) => setFontInput(e.target.value)}
                  onBlur={handleFontChange}
                  className="flex-1"
                  style={{
                    background: `rgba(var(--theme-primary-rgb), 0.1)`,
                    borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                    color: 'white'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Themes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredThemes.map((theme) => (
              <EnhancedThemePreview
                key={theme.id}
                theme={theme}
                isSelected={currentTheme.id === theme.id}
                onSelect={changeTheme}
              />
            ))}
          </div>

          {filteredThemes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                No themes found matching "{searchQuery}"
              </p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery('')}
                className="mt-4"
                style={{
                  borderColor: 'var(--theme-primary)',
                  color: 'var(--theme-primary)'
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
