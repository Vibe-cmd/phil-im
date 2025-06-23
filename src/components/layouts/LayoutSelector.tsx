
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Grid3x3, ArrowRight, Layers, Instagram, Image } from 'lucide-react';
import { LayoutType } from '@/types';

interface LayoutSelectorProps {
  currentLayout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
}

const layouts = [
  {
    type: 'grid' as LayoutType,
    name: 'Grid Layout',
    description: 'Classic grid with equal-sized cards',
    icon: Grid3x3,
    preview: 'grid grid-cols-4 gap-2'
  },
  {
    type: 'carousel' as LayoutType,
    name: 'Carousel',
    description: 'Horizontal scrolling showcase',
    icon: ArrowRight,
    preview: 'flex space-x-2 overflow-x-auto'
  },
  {
    type: 'staggered' as LayoutType,
    name: 'Staggered',
    description: 'Pinterest-style masonry layout',
    icon: Layers,
    preview: 'columns-4 gap-2'
  },
  {
    type: 'instagram' as LayoutType,
    name: 'Instagram',
    description: 'Square thumbnails with stories',
    icon: Instagram,
    preview: 'grid grid-cols-3 gap-1'
  },
  {
    type: 'polaroid' as LayoutType,
    name: 'Polaroid',
    description: 'Vintage photo frame style',
    icon: Image,
    preview: 'grid grid-cols-3 gap-4'
  }
];

export const LayoutSelector = ({ currentLayout, onLayoutChange }: LayoutSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose Layout Style</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {layouts.map((layout) => {
          const IconComponent = layout.icon;
          const isSelected = currentLayout === layout.type;
          
          return (
            <Card
              key={layout.type}
              className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 transform ${
                isSelected 
                  ? 'border-[var(--theme-primary)] bg-[var(--theme-primary)]/10 shadow-xl scale-105' 
                  : 'border-border hover:border-[var(--theme-primary)]/50 hover:shadow-lg'
              }`}
              onClick={() => onLayoutChange(layout.type)}
            >
              <div className="text-center space-y-3">
                <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isSelected ? 'bg-[var(--theme-primary)] text-white shadow-lg' : 'bg-muted hover:bg-[var(--theme-accent)]/20'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                {/* Enhanced Layout Preview */}
                <div className="h-16 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border-2 border-dashed border-muted-foreground/20 p-2 overflow-hidden">
                  <div className={layout.preview}>
                    {Array.from({ length: layout.type === 'carousel' ? 6 : 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-br from-[var(--theme-primary)]/30 to-[var(--theme-accent)]/20 rounded transition-all duration-300 ${
                          layout.type === 'polaroid' ? 'aspect-square p-1 transform rotate-3 hover:rotate-0' :
                          layout.type === 'staggered' && i % 3 === 0 ? 'h-8' :
                          layout.type === 'staggered' && i % 3 === 1 ? 'h-6' :
                          layout.type === 'staggered' ? 'h-10' :
                          layout.type === 'carousel' ? 'w-12 h-full flex-shrink-0 hover:scale-110' :
                          'aspect-[2/3] hover:scale-105'
                        }`}
                      >
                        {layout.type === 'polaroid' && (
                          <div className="w-full h-3/4 bg-[var(--theme-primary)]/50 rounded-sm mb-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm">{layout.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {layout.description}
                  </p>
                  {isSelected && (
                    <Badge variant="default" className="mt-2 text-xs bg-[var(--theme-primary)]">
                      Selected
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
