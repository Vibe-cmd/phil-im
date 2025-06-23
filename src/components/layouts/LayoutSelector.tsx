
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Grid3x3, Carousel, Layers, Instagram, Image } from 'lucide-react';
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
    icon: Carousel,
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
              className={`p-4 cursor-pointer transition-all duration-200 hover:scale-105 ${
                isSelected 
                  ? 'border-primary bg-primary/5 shadow-lg' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => onLayoutChange(layout.type)}
            >
              <div className="text-center space-y-3">
                <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                {/* Layout Preview */}
                <div className="h-16 bg-muted/20 rounded border-2 border-dashed border-muted-foreground/20 p-2">
                  <div className={layout.preview}>
                    {Array.from({ length: layout.type === 'carousel' ? 6 : 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`bg-primary/20 rounded ${
                          layout.type === 'polaroid' ? 'aspect-square p-1' :
                          layout.type === 'staggered' && i % 3 === 0 ? 'h-8' :
                          layout.type === 'staggered' && i % 3 === 1 ? 'h-6' :
                          layout.type === 'staggered' ? 'h-10' :
                          layout.type === 'carousel' ? 'w-12 h-full flex-shrink-0' :
                          'aspect-[2/3]'
                        }`}
                      >
                        {layout.type === 'polaroid' && (
                          <div className="w-full h-3/4 bg-primary/40 rounded-sm mb-1" />
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
                    <Badge variant="default" className="mt-2 text-xs">
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
