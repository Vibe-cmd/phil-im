import { Theme } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

interface EnhancedThemePreviewProps {
  theme: Theme;
  isSelected: boolean;
  onSelect: (themeId: string) => void;
}

// Theme-specific movie/show images
const getThemeImages = (themeName: string) => {
  const imageMap: Record<string, string[]> = {
    // All themes now use local images
    'Spectacular Spider-Verse': [
      '/theme/spv1.jpeg',
      '/theme/spv2.jpeg',
      '/theme/spv3.jpeg'
    ],
    'Dazzling Dune': [
      '/theme/dune1.jpeg',
      '/theme/dune2.jpeg',
      '/theme/dune3.jpeg'
    ],
    'Intriguing Interstellar': [
      '/theme/int1.jpeg',
      '/theme/int2.jpeg',
      '/theme/int3.jpeg'
    ],
    'Mystical Matrix': [
      '/theme/matrix1.jpeg',
      '/theme/matrix2.jpeg',
      '/theme/matrix3.jpeg'
    ],
    'Hogwarts Harmony': [
      '/theme/hogwarts1.jpeg',
      '/theme/hogwarts2.jpeg',
      '/theme/hogwarts3.jpeg'
    ],
    'Brooding Batman': [
      '/theme/batman1.jpeg',
      '/theme/batman2.jpeg',
      '/theme/batman3.jpeg'
    ],
    'Vibrant Vibranium': [
      '/theme/vibranium1.jpeg',
      '/theme/vibranium2.jpeg',
      '/theme/vibranium3.jpeg'
    ],
    'Mighty MCU': [
      '/theme/mcu1.jpeg',
      '/theme/mcu2.jpeg',
      '/theme/mcu3.jpeg'
    ],
    'Luscious Loki': [
      '/theme/loki1.jpeg',
      '/theme/loki2.jpeg',
      '/theme/loki3.jpeg'
    ],
    'Pensive Peaky': [
      '/theme/peaky1.jpeg',
      '/theme/peaky2.jpeg',
      '/theme/peaky3.jpeg'
    ],
    'Sinister Squid': [
      '/theme/squid1.jpeg',
      '/theme/squid2.jpeg',
      '/theme/squid3.jpeg'
    ],
    "Throne's Triumph": [
      '/theme/throne1.jpeg',
      '/theme/throne2.jpeg',
      '/theme/throne3.jpeg'
    ],
    'Azure Avatar': [
      '/theme/avatar1.jpeg',
      '/theme/avatar2.jpeg',
      '/theme/avatar3.jpeg'
    ],
    'Heistful Hustle': [
      '/theme/heist1.jpeg',
      '/theme/heist2.jpeg',
      '/theme/heist3.jpeg'
    ],
    "Witcher's Wrath": [
      '/theme/witcher1.jpeg',
      '/theme/witcher2.jpeg',
      '/theme/witcher3.jpeg'
    ],
    'Dashing Deadpool': [
      '/theme/deadpool1.jpeg',
      '/theme/deadpool2.jpeg',
      '/theme/deadpool3.jpeg'
    ],
    "Ghibli's Glow": [
      '/theme/ghibli1.jpeg',
      '/theme/ghibli2.jpeg',
      '/theme/ghibli3.jpeg'
    ],
    "Jumanji's Jungle": [
      '/theme/jumanji1.jpeg',
      '/theme/jumanji2.jpeg',
      '/theme/jumanji3.jpeg'
    ],
    'Tragic Titanic': [
      '/theme/titanic1.jpeg',
      '/theme/titanic2.jpeg',
      '/theme/titanic3.jpeg'
    ],
    "Creed's Conquest": [
      '/theme/creed1.jpeg',
      '/theme/creed2.jpeg',
      '/theme/creed3.jpeg'
    ],
    'Narcotic Narcos': [
      '/theme/narcos1.jpeg',
      '/theme/narcos2.jpeg',
      '/theme/narcos3.jpeg'
    ],
    "Jester's Joker": [
      '/theme/joker1.jpeg',
      '/theme/joker2.jpeg',
      '/theme/joker3.jpeg'
    ],
    'Twisted Tenet': [
      '/theme/tenet1.jpeg',
      '/theme/tenet2.jpeg',
      '/theme/tenet3.jpeg'
    ],
    'Wistful WandaVision': [
      '/theme/wandavision1.jpeg',
      '/theme/wandavision2.jpeg',
      '/theme/wandavision3.jpeg'
    ],
    'Rebel Robot': [
      '/theme/robot1.jpeg',
      '/theme/robot2.jpeg',
      '/theme/robot3.jpeg'
    ],
    'Mischievous Minions': [
      '/theme/minions1.jpeg',
      '/theme/minions2.jpeg',
      '/theme/minions3.jpeg'
    ],
    "Arcane's Aura": [
      '/theme/arcane1.jpeg',
      '/theme/arcane2.jpeg',
      '/theme/arcane3.jpeg'
    ],
    'Rambunctious Rick': [
      '/theme/rick1.jpeg',
      '/theme/rick2.jpeg',
      '/theme/rick3.jpeg'
    ],
    'Sacred Syndicate': [
      '/theme/syndicate1.jpeg',
      '/theme/syndicate2.jpeg',
      '/theme/syndicate3.jpeg'
    ],
    'Bountiful Bollywood': [
      '/theme/bollywood1.jpeg',
      '/theme/bollywood2.jpeg',
      '/theme/bollywood3.jpeg'
    ],
    "Dharma's Delight": [
      '/theme/dharma1.jpeg',
      '/theme/dharma2.jpeg',
      '/theme/dharma3.jpeg'
    ],
    'Blade Runner': [
      '/theme/bladerun1.jpeg',
      '/theme/bladerun2.jpeg',
      '/theme/bladerun3.jpeg'
    ],
    'La La Land': [
      '/theme/lala1.jpeg',
      '/theme/lala2.jpeg',
      '/theme/lala3.jpeg'
    ],
    'Breaking Bad': [
      '/theme/brbad1.jpeg',
      '/theme/brbad2.jpeg',
      '/theme/brbad3.jpeg'
    ],
    'Barbie': [
      '/theme/barbie1.jpeg',
      '/theme/barbie2.jpeg',
      '/theme/barbie3.jpeg'
    ],
    'Wes Anderson': [
      '/theme/wes1.jpeg',
      '/theme/wes2.jpeg',
      '/theme/wes3.jpeg'
    ],
    'Cars (Pixar)': [
      '/theme/cars1.jpeg',
      '/theme/cars2.jpeg',
      '/theme/cars3.jpeg'
    ],
    'Jurassic Park': [
      '/theme/jurassic1.jpeg',
      '/theme/jurassic2.jpeg',
      '/theme/jurassic3.jpeg'
    ],
    'Pirates of the Caribbean': [
      '/theme/pirates1.jpeg',
      '/theme/pirates2.jpeg',
      '/theme/pirates3.jpeg'
    ],
    'Superman': [
      '/theme/superman1.jpeg',
      '/theme/superman2.jpeg',
      '/theme/superman3.jpeg'
    ],
    'Sanjay Leela Bhansali': [
      '/theme/slb1.jpeg',
      '/theme/slb2.jpeg',
      '/theme/slb3.jpeg'
    ],
    'Rockstar': [
      '/theme/rockstar1.jpeg',
      '/theme/rockstar2.jpeg',
      '/theme/rockstar3.jpeg'
    ],
    'The Godfather': [
      '/theme/godfather1.jpeg',
      '/theme/godfather2.jpeg',
      '/theme/godfather3.jpeg'
    ],
    'Space Odyssey': [
      '/theme/odyssey1.jpeg',
      '/theme/odyssey2.jpeg',
      '/theme/odyssey3.jpeg'
    ],
    'Scarface': [
      '/theme/scarface1.jpeg',
      '/theme/scarface2.jpeg',
      '/theme/scarface3.jpeg'
    ],
    'Star Wars': [
      '/theme/starwars1.jpeg',
      '/theme/starwars2.jpeg',
      '/theme/starwars3.jpeg'
    ],
  };
  
  return imageMap[themeName] || [
    '/theme/placeholder1.jpeg',
    '/theme/placeholder2.jpeg',
    '/theme/placeholder3.jpeg'
  ];
};

export const EnhancedThemePreview = ({ theme, isSelected, onSelect }: EnhancedThemePreviewProps) => {
  const handleSelect = () => {
    onSelect(theme.id);
  };

  const themeImages = getThemeImages(theme.name);

  return (
    <Card
      className={`relative cursor-pointer overflow-hidden transition-all duration-500 transform group hover:scale-105 ${
        isSelected 
          ? 'ring-2 ring-offset-2 scale-105 shadow-2xl' 
          : 'hover:shadow-xl'
      } min-w-[340px] max-w-[420px] w-full mx-auto`}
      style={{
        background: 'linear-gradient(135deg, #181C24 60%, #232946 100%)',
        backgroundImage: 'radial-gradient(circle at 20% 20%, #2d3748 10%, transparent 70%), radial-gradient(circle at 80% 80%, #3b4252 10%, transparent 70%)',
        border: `2px solid ${isSelected ? theme.colors.primary : 'transparent'}`,
        boxShadow: isSelected 
          ? `0 0 20px ${theme.colors.primary}40, 0 8px 32px rgba(0,0,0,0.1)` 
          : `0 4px 16px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05)`
      }}
      onClick={handleSelect}
    >
      {/* Slick Border Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${theme.colors.primary}20 50%, transparent 70%)`,
          opacity: isSelected ? 0.8 : 0.3,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${theme.colors.primary} 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${theme.colors.accent} 0%, transparent 50%)`,
          animation: isSelected ? 'pulse 2s infinite' : 'none'
        }}
      />
      
      {/* Selection Indicator */}
      {isSelected && (
        <div 
          className="absolute top-3 right-3 z-10 animate-scale-in"
          style={{
            backgroundColor: theme.colors.primary,
            borderRadius: '50%',
            padding: '6px',
            boxShadow: `0 4px 12px ${theme.colors.primary}40`
          }}
        >
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      <div className="p-8 relative z-10">
        {/* Theme Header */}
        <div className="flex flex-col gap-1 mb-4">
          <h3 
            className="font-bold text-2xl break-words leading-tight mb-1"
              style={{ 
                color: theme.colors.primary,
                fontFamily: theme.font
              }}
            >
              {theme.name}
            </h3>
            <Badge 
              variant="outline" 
            className="text-sm"
              style={{
                borderColor: theme.colors.accent,
                color: theme.colors.accent,
                backgroundColor: `${theme.colors.accent}10`
              }}
            >
              {theme.category}
            </Badge>
        </div>

        {/* Color Palette Preview */}
        <div className="flex gap-2 mb-4">
          {[theme.colors.primary, theme.colors.secondary, theme.colors.accent].map((color, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full border-2 border-white/30 shadow-lg transform transition-transform group-hover:scale-110"
              style={{ 
                backgroundColor: color,
                animationDelay: `${index * 100}ms`
              }}
            />
          ))}
        </div>

        {/* Theme-related Movie Images */}
        <div className="grid grid-cols-3 gap-8 mb-4">
          {themeImages.map((imageUrl, index) => (
            <div
              key={index}
              className="aspect-[3/4] rounded-2xl overflow-hidden transform transition-transform hover:scale-105 px-2"
              style={{
                border: `2px solid ${theme.colors.primary}20`,
                minHeight: '140px',
                maxHeight: '180px'
              }}
            >
              <img
                src={imageUrl}
                alt={`${theme.name} reference`}
                className="w-full h-full object-cover"
                style={{ minHeight: '140px', maxHeight: '180px' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.background = `linear-gradient(135deg, ${theme.colors.primary}40, ${theme.colors.secondary}20)`;
                }}
              />
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p 
          className="text-sm italic mb-4 line-clamp-2"
          style={{ 
            color: theme.colors.primary,
            opacity: 0.8,
            fontFamily: theme.font
          }}
        >
          "{theme.tagline}"
        </p>

        {/* Select Button */}
        <Button
          size="default"
          className={`w-full transition-all duration-300 text-base ${
            isSelected 
              ? 'transform translate-y-0' 
              : 'transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
          }`}
          style={{
            backgroundColor: isSelected ? theme.colors.primary : `${theme.colors.primary}20`,
            color: isSelected ? 'white' : theme.colors.primary,
            borderColor: theme.colors.primary,
            fontFamily: theme.font
          }}
          onClick={handleSelect}
        >
          {isSelected ? (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Selected
            </>
          ) : (
            'Select Theme'
          )}
        </Button>
      </div>
    </Card>
  );
};
