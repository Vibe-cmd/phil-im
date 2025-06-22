
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Album } from '@/types';
import { X, Sparkles } from 'lucide-react';

interface CreateAlbumModalProps {
  onCreateAlbum: (album: Omit<Album, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onClose: () => void;
}

const EMOJI_OPTIONS = ['🎬', '📺', '🍿', '🎭', '🎪', '🌟', '🔥', '💫', '🎯', '🎨', '🦄', '👑'];
const FONT_OPTIONS = ['Inter', 'Playfair Display', 'Orbitron', 'Creepster'];
const LAYOUT_OPTIONS = [
  { value: 'grid', label: 'Grid' },
  { value: 'carousel', label: 'Carousel' },
  { value: 'staggered', label: 'Staggered' },
  { value: 'instagram', label: 'Instagram-Like' },
  { value: 'polaroid', label: 'Polaroid' }
];

export const CreateAlbumModal = ({ onCreateAlbum, onClose }: CreateAlbumModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('🎬');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [selectedLayout, setSelectedLayout] = useState<Album['layout']>('grid');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) return;

    const album: Omit<Album, 'id' | 'createdAt' | 'updatedAt'> = {
      name: name.trim(),
      description: description.trim() || undefined,
      emoji: selectedEmoji,
      font: selectedFont,
      layout: selectedLayout,
      items: []
    };

    onCreateAlbum(album);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-md glass-strong border-primary/20 animate-scale-in">
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Create New Album</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Album Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Album Name *</Label>
            <Input
              id="name"
              placeholder="e.g., Christopher Nolan's Works"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="glass border-primary/20 focus:border-primary/40"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your collection..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="glass border-primary/20 focus:border-primary/40 resize-none"
              rows={3}
            />
          </div>

          {/* Emoji Selection */}
          <div className="space-y-2">
            <Label>Cover Emoji</Label>
            <div className="grid grid-cols-6 gap-2">
              {EMOJI_OPTIONS.map((emoji) => (
                <Button
                  key={emoji}
                  type="button"
                  variant={selectedEmoji === emoji ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedEmoji(emoji)}
                  className="aspect-square text-lg"
                >
                  {emoji}
                </Button>
              ))}
            </div>
          </div>

          {/* Font Selection */}
          <div className="space-y-2">
            <Label>Font Style</Label>
            <Select value={selectedFont} onValueChange={setSelectedFont}>
              <SelectTrigger className="glass border-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-strong border-primary/20">
                {FONT_OPTIONS.map((font) => (
                  <SelectItem key={font} value={font} style={{ fontFamily: font }}>
                    {font}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Layout Selection */}
          <div className="space-y-2">
            <Label>Layout Style</Label>
            <Select value={selectedLayout} onValueChange={(value: Album['layout']) => setSelectedLayout(value)}>
              <SelectTrigger className="glass border-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-strong border-primary/20">
                {LAYOUT_OPTIONS.map((layout) => (
                  <SelectItem key={layout.value} value={layout.value}>
                    {layout.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 glass border-primary/20"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              disabled={!name.trim()}
            >
              Create Album
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
