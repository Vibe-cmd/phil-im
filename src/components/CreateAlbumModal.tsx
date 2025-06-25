
import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
      items: []
    };

    onCreateAlbum(album);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-2xl glass-strong border-primary/30 shadow-2xl animate-scale-in overflow-hidden">
        <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/20 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Create New CineLibrary
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Build your personalized movie collection
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-primary/10">
              <X className="w-5 h-5" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* CineLibrary Name */}
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-base font-medium">CineLibrary Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Christopher Nolan's Masterpieces"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="glass border-primary/20 focus:border-primary/50 h-12 text-base"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <Label htmlFor="description" className="text-base font-medium">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your collection and what makes it special..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="glass border-primary/20 focus:border-primary/50 resize-none min-h-[100px]"
                    rows={4}
                  />
                </div>

                {/* Font Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Font Style</Label>
                  <Select value={selectedFont} onValueChange={setSelectedFont}>
                    <SelectTrigger className="glass border-primary/20 h-12">
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
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Cover Image Upload */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Cover Image</Label>
                  <div className="space-y-3">
                    <div 
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors cursor-pointer group"
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
                        <div className="w-full h-full flex flex-col items-center justify-center text-primary/60">
                          <Image className="w-12 h-12 mb-3" />
                          <p className="text-sm font-medium">Click to upload cover</p>
                          <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 10MB</p>
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
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setCoverImage(null)}
                        className="w-full"
                      >
                        Remove Image
                      </Button>
                    )}
                  </div>
                </div>

                {/* Emoji Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Cover Emoji</Label>
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
                        >
                          {emoji}
                        </Button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customEmoji" className="text-sm">Or use custom emoji</Label>
                      <Input
                        id="customEmoji"
                        placeholder="🎪"
                        value={customEmoji}
                        onChange={(e) => setCustomEmoji(e.target.value)}
                        className="glass border-primary/20 focus:border-primary/50 text-center text-xl"
                        maxLength={2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t border-primary/10">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 glass border-primary/20 hover:bg-primary/5 h-12"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:to-accent/90 h-12 font-semibold"
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
