
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
    'Spectacular Spider-Verse': [
      'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg', // Spider-Verse
      'https://image.tmdb.org/t/p/w300/rweIrveL43TaxUN0akQEaAXL6x0.jpg', // Spider-Man
      'https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'  // Venom
    ],
    'Dazzling Dune': [
      'https://image.tmdb.org/t/p/w300/d5NuKs27qEV2HQo6rEHhhOX5LHV.jpg', // Dune
      'https://image.tmdb.org/t/p/w300/A3KKbWtOQRcgMY8uHUAJhE8bIxW.jpg', // Dune 2
      'https://image.tmdb.org/t/p/w300/lbs73ZjeNOjKISRgsKNBvHI6RJr.jpg'  // Blade Runner 2049
    ],
    'Intriguing Interstellar': [
      'https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', // Interstellar
      'https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', // Martian
      'https://image.tmdb.org/t/p/w300/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg'  // Gravity
    ],
    'Mystical Matrix': [
      'https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', // Matrix
      'https://image.tmdb.org/t/p/w300/8c4a8kE7PizaGQQnditMmI1xbRp.jpg', // Blade Runner
      'https://image.tmdb.org/t/p/w300/w86Sg4lU2eUcMfqpRRU91rjrkjJ.jpg'  // Ghost in Shell
    ],
    'Hogwarts Harmony': [
      'https://image.tmdb.org/t/p/w300/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg', // Harry Potter
      'https://image.tmdb.org/t/p/w300/z7uo9zmQdQwU5ZJHFpv2Qo7HHVQ.jpg', // Fantastic Beasts
      'https://image.tmdb.org/t/p/w300/vzmL6fP7aPKNKPRTFnZmiUfciyV.jpg'  // Lord of the Rings
    ],
    'Brooding Batman': [
      'https://image.tmdb.org/t/p/w300/qAKvUu2FSaDUEv2LXlq6jtuZBxQ.jpg', // Dark Knight
      'https://image.tmdb.org/t/p/w300/lzWHtbfRmf5S2GICv6Bqzwdqe7T.jpg', // Batman
      'https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg'  // Joker
    ]
  };
  
  return imageMap[themeName] || [
    'https://image.tmdb.org/t/p/w300/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    'https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    'https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg'
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
      }`}
      style={{
        background: `linear-gradient(135deg, ${theme.colors.background}, ${theme.colors.primary}20)`,
        border: `2px solid ${isSelected ? theme.colors.primary : 'transparent'}`,
      }}
      onClick={handleSelect}
    >
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

      <div className="p-6 relative z-10">
        {/* Theme Header */}
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="text-3xl p-2 rounded-lg transform transition-transform group-hover:rotate-12"
            style={{
              background: `${theme.colors.primary}20`,
              border: `1px solid ${theme.colors.primary}30`
            }}
          >
            {theme.preview}
          </div>
          <div className="flex-1">
            <h3 
              className="font-bold text-lg truncate"
              style={{ 
                color: theme.colors.primary,
                fontFamily: theme.font
              }}
            >
              {theme.name}
            </h3>
            <Badge 
              variant="outline" 
              className="text-xs mt-1"
              style={{
                borderColor: theme.colors.accent,
                color: theme.colors.accent,
                backgroundColor: `${theme.colors.accent}10`
              }}
            >
              {theme.category}
            </Badge>
          </div>
        </div>

        {/* Color Palette Preview */}
        <div className="flex gap-2 mb-4">
          {[theme.colors.primary, theme.colors.secondary, theme.colors.accent].map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full border-2 border-white/30 shadow-lg transform transition-transform group-hover:scale-110"
              style={{ 
                backgroundColor: color,
                animationDelay: `${index * 100}ms`
              }}
            />
          ))}
        </div>

        {/* Theme-related Movie Images */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {themeImages.map((imageUrl, index) => (
            <div
              key={index}
              className="aspect-[3/4] rounded-md overflow-hidden transform transition-transform hover:scale-105"
              style={{
                border: `1px solid ${theme.colors.primary}20`
              }}
            >
              <img
                src={imageUrl}
                alt={`${theme.name} reference`}
                className="w-full h-full object-cover"
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
          className="text-xs italic mb-4 line-clamp-2"
          style={{ 
            color: theme.colors.primary,
            opacity: 0.8,
            fontFamily: theme.font
          }}
        >
          "{theme.tagline}"
        </p>

        {/* Emoji Collection */}
        <div className="flex justify-center gap-1 mb-4">
          {theme.emojis.slice(0, 4).map((emoji, index) => (
            <span
              key={index}
              className="text-sm transform transition-transform hover:scale-125"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Select Button */}
        <Button
          size="sm"
          className={`w-full transition-all duration-300 ${
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
              <Sparkles className="w-4 h-4 mr-2" />
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
