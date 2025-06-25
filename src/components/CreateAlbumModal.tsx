
import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Album } from '@/types';
import { X, Sparkles, Upload, Image } from 'lucide-react';

interface CreateAlbumModalProps {
  onCreateAlbum: (album: Omit<Album, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onClose: () => void;
}

const EMOJI_OPTIONS = ['🎬', '📺', '🍿', '🎭', '🎪', '🌟', '🔥', '💫', '🎯', '🎨', '🦄', '👑'];
const FONT_OPTIONS = ['Inter', 'Playfair Display', 'Orbitron', 'Creepster'];

export const CreateAlbumModal = ({ onCreateAlbum, onClose }: CreateAlbumModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('🎬');
  const [customEmoji, setCustomEmoji] = useState('');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [useAsBackground, setUseAsBackground] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) return;

    const finalEmoji = customEmoji.trim() || selectedEmoji;

    const album: Omit<Album, 'id' | 'createdAt' | 'updatedAt'> = {
      name: name.trim(),
      description: description.trim() || undefined,
      emoji: finalEmoji,
      font: selectedFont,
      coverImage: coverImage || undefined,
      useAsBackground: useAsBackground,
      items: []
    };

    onCreateAlbum(album);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <Card 
        className="w-full max-w-2xl animate-scale-in overflow-hidden shadow-2xl"
        style={{
          background: `rgba(var(--theme-primary-rgb), 0.1)`,
          backdropFilter: 'blur(20px)',
          border: `1px solid rgba(var(--theme-primary-rgb), 0.3)`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`,
        }}
      >
        <div 
          className="relative p-8"
          style={{
            background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.15), rgba(var(--theme-accent-rgb), 0.1))`
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-full backdrop-blur-sm"
                style={{ backgroundColor: `rgba(var(--theme-accent-rgb), 0.2)` }}
              >
                <Sparkles className="w-6 h-6" style={{ color: 'var(--theme-accent)' }} />
              </div>
              <div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ 
                    color: 'var(--theme-primary)',
                    fontFamily: 'var(--font-family)'
                  }}
                >
                  Create New CineLibrary
                </h2>
                <p className="text-sm mt-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Build your personalized movie collection
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              className="hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* CineLibrary Name */}
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-base font-medium" style={{ color: 'white' }}>
                    CineLibrary Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="e.g., Christopher Nolan's Masterpieces"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-base"
                    style={{
                      background: `rgba(var(--theme-primary-rgb), 0.1)`,
                      borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                      color: 'white'
                    }}
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <Label htmlFor="description" className="text-base font-medium" style={{ color: 'white' }}>
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your collection and what makes it special..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="resize-none min-h-[100px]"
                    style={{
                      background: `rgba(var(--theme-primary-rgb), 0.1)`,
                      borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                      color: 'white'
                    }}
                    rows={4}
                  />
                </div>

                {/* Font Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium" style={{ color: 'white' }}>
                    Font Style
                  </Label>
                  <Select value={selectedFont} onValueChange={setSelectedFont}>
                    <SelectTrigger 
                      className="h-12"
                      style={{
                        background: `rgba(var(--theme-primary-rgb), 0.1)`,
                        borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                        color: 'white'
                      }}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent 
                      style={{
                        background: `rgba(var(--theme-background-rgb), 0.95)`,
                        borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                        backdropFilter: 'blur(20px)'
                      }}
                    >
                      {FONT_OPTIONS.map((font) => (
                        <SelectItem 
                          key={font} 
                          value={font} 
                          style={{ 
                            fontFamily: font,
                            color: 'white'
                          }}
                        >
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Cover Image Upload */}
                <div className="space-y-3">
                  <Label className="text-base font-medium" style={{ color: 'white' }}>
                    Cover Image
                  </Label>
                  <div className="space-y-3">
                    <div 
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-dashed transition-colors cursor-pointer group"
                      style={{
                        backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                        borderColor: `rgba(var(--theme-primary-rgb), 0.4)`
                      }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {coverImage ? (
                        <>
                          <img
                            src={coverImage}
                            alt="Cover preview"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Upload className="w-8 h-8 text-white" />
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                          <Image className="w-12 h-12 mb-3" />
                          <p className="text-sm font-medium">Click to upload cover</p>
                          <p className="text-xs mt-1" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>JPG, PNG up to 10MB</p>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {coverImage && (
                      <>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setCoverImage(null)}
                          className="w-full"
                          style={{
                            borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                            color: 'white'
                          }}
                        >
                          Remove Image
                        </Button>
                        
                        {/* Background Option */}
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="useAsBackground"
                            checked={useAsBackground}
                            onCheckedChange={setUseAsBackground}
                          />
                          <Label 
                            htmlFor="useAsBackground" 
                            className="text-sm cursor-pointer"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                          >
                            Use as blurred background
                          </Label>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Emoji Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium" style={{ color: 'white' }}>
                    Cover Emoji
                  </Label>
                  <div className="space-y-3">
                    <div className="grid grid-cols-6 gap-2">
                      {EMOJI_OPTIONS.map((emoji) => (
                        <Button
                          key={emoji}
                          type="button"
                          variant={selectedEmoji === emoji && !customEmoji ? "default" : "outline"}
                          size="sm"
                          onClick={() => {
                            setSelectedEmoji(emoji);
                            setCustomEmoji('');
                          }}
                          className="aspect-square text-xl hover:scale-110 transition-transform"
                          style={{
                            borderColor: selectedEmoji === emoji && !customEmoji 
                              ? 'var(--theme-primary)' 
                              : `rgba(var(--theme-primary-rgb), 0.3)`,
                            backgroundColor: selectedEmoji === emoji && !customEmoji 
                              ? 'var(--theme-primary)' 
                              : `rgba(var(--theme-primary-rgb), 0.1)`
                          }}
                        >
                          {emoji}
                        </Button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customEmoji" className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Or use custom emoji
                      </Label>
                      <Input
                        id="customEmoji"
                        placeholder="🎪"
                        value={customEmoji}
                        onChange={(e) => setCustomEmoji(e.target.value)}
                        className="text-center text-xl"
                        style={{
                          background: `rgba(var(--theme-primary-rgb), 0.1)`,
                          borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                          color: 'white'
                        }}
                        maxLength={2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6" style={{ borderTop: `1px solid rgba(var(--theme-primary-rgb), 0.2)` }}>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 h-12"
                style={{
                  borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                  color: 'white',
                  backgroundColor: `rgba(var(--theme-primary-rgb), 0.05)`
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 font-semibold"
                style={{
                  backgroundColor: 'var(--theme-primary)',
                  color: 'white'
                }}
                disabled={!name.trim()}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Create CineLibrary
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};
