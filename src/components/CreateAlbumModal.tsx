import { useState } from 'react';
import { Album } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Upload } from 'lucide-react';
import { CheckedState } from '@radix-ui/react-checkbox';

interface CreateAlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (albumData: Omit<Album, 'id' | 'createdAt' | 'updatedAt' | 'items'>) => void;
}

export const CreateAlbumModal = ({ isOpen, onClose, onCreate }: CreateAlbumModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [emoji, setEmoji] = useState('🎬');
  const [font, setFont] = useState('Inter');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [useAsBackground, setUseAsBackground] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) {
      alert('Please enter a name for your CineLibrary.');
      return;
    }

    const newLibraryData: Omit<Album, 'id' | 'createdAt' | 'updatedAt' | 'items'> = {
      name,
      description,
      emoji,
      font,
      coverImage: coverImage || undefined,
      useAsBackground,
    };

    onCreate(newLibraryData);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setEmoji('🎬');
    setFont('Inter');
    setCoverImage(null);
    setUseAsBackground(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-4xl max-h-[90vh] overflow-y-auto p-0"
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
              className="text-3xl font-bold text-center"
              style={{ 
                color: 'var(--theme-primary)',
                fontFamily: 'var(--font-family)'
              }}
            >
              Create New CineLibrary
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="name" 
                    className="text-lg font-semibold"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    CineLibrary Name *
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your CineLibrary name..."
                    required
                    className="text-lg p-4"
                    style={{
                      background: `rgba(var(--theme-primary-rgb), 0.1)`,
                      borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                      color: 'white'
                    }}
                  />
                </div>

                {/* Description Field */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="description" 
                    className="text-lg font-semibold"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your CineLibrary theme..."
                    className="min-h-[100px] resize-none"
                    style={{
                      background: `rgba(var(--theme-primary-rgb), 0.1)`,
                      borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                      color: 'white'
                    }}
                  />
                </div>

                {/* Font Selection */}
                <div className="space-y-3">
                  <Label 
                    className="text-lg font-semibold"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    Font Style
                  </Label>
                  <Select value={font} onValueChange={setFont}>
                    <SelectTrigger 
                      className="text-lg p-4"
                      style={{
                        background: `rgba(var(--theme-primary-rgb), 0.1)`,
                        borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                        color: 'white'
                      }}
                    >
                      <SelectValue placeholder="Choose a font" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_OPTIONS.map((fontOption) => (
                        <SelectItem key={fontOption.value} value={fontOption.value}>
                          <span style={{ fontFamily: fontOption.value }}>
                            {fontOption.label}
                          </span>
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
                  <Label 
                    className="text-lg font-semibold"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    Cover Image
                  </Label>
                  <div className="space-y-4">
                    <div 
                      className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all hover:opacity-80"
                      style={{
                        borderColor: `rgba(var(--theme-primary-rgb), 0.4)`,
                        background: `rgba(var(--theme-primary-rgb), 0.05)`
                      }}
                      onClick={() => document.getElementById('cover-upload')?.click()}
                    >
                      {coverImage ? (
                        <div className="space-y-2">
                          <img 
                            src={coverImage} 
                            alt="Cover preview" 
                            className="w-full h-32 object-cover rounded-lg mx-auto"
                          />
                          <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Click to change image
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="w-8 h-8 mx-auto" style={{ color: 'var(--theme-primary)' }} />
                          <p style={{ color: 'var(--theme-primary)' }}>
                            Upload Cover Image
                          </p>
                          <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Click to browse files
                          </p>
                        </div>
                      )}
                    </div>
                    <input
                      id="cover-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    
                    {/* Use as Background Option */}
                    {coverImage && (
                      <div className="flex items-center space-x-3 p-4 rounded-lg" style={{
                        background: `rgba(var(--theme-accent-rgb), 0.1)`,
                        border: `1px solid rgba(var(--theme-accent-rgb), 0.2)`
                      }}>
                        <Checkbox
                          id="use-as-background"
                          checked={useAsBackground}
                          onCheckedChange={(checked: CheckedState) => setUseAsBackground(checked === true)}
                        />
                        <Label 
                          htmlFor="use-as-background" 
                          className="text-sm font-medium cursor-pointer"
                          style={{ color: 'var(--theme-accent)' }}
                        >
                          Use as blurred background for aesthetic effect
                        </Label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Emoji Selection */}
                <div className="space-y-3">
                  <Label 
                    className="text-lg font-semibold"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    Choose Emoji
                  </Label>
                  <div className="grid grid-cols-6 gap-3 max-h-32 overflow-y-auto p-2 rounded-lg" style={{
                    background: `rgba(var(--theme-primary-rgb), 0.05)`,
                    border: `1px solid rgba(var(--theme-primary-rgb), 0.2)`
                  }}>
                    {EMOJI_OPTIONS.map((emojiOption, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setEmoji(emojiOption)}
                        className={`text-2xl p-3 rounded-lg transition-all hover:scale-110 ${
                          emoji === emojiOption ? 'ring-2 ring-opacity-50' : ''
                        }`}
                        style={{
                          background: emoji === emojiOption 
                            ? `rgba(var(--theme-primary-rgb), 0.2)` 
                            : `rgba(var(--theme-primary-rgb), 0.05)`,
                          ringColor: 'var(--theme-primary)'
                        }}
                      >
                        {emojiOption}
                      </button>
                    ))}
                  </div>
                  
                  {/* Custom Emoji Input */}
                  <div className="mt-3">
                    <Input
                      placeholder="Or enter custom emoji..."
                      value={emoji}
                      onChange={(e) => setEmoji(e.target.value)}
                      className="text-center text-lg"
                      style={{
                        background: `rgba(var(--theme-primary-rgb), 0.1)`,
                        borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                        color: 'white'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t" style={{
              borderColor: `rgba(var(--theme-primary-rgb), 0.2)`
            }}>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-8 py-3"
                style={{
                  borderColor: `rgba(var(--theme-primary-rgb), 0.4)`,
                  color: 'var(--theme-primary)'
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-8 py-3 shadow-lg"
                style={{
                  backgroundColor: 'var(--theme-primary)',
                  color: 'white'
                }}
              >
                Create CineLibrary
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const FONT_OPTIONS = [
  { label: 'Inter', value: 'Inter' },
  { label: 'Playfair Display', value: 'Playfair Display' },
  { label: 'Orbitron', value: 'Orbitron' },
  { label: 'Creepster', value: 'Creepster' },
  { label: 'Bungee', value: 'Bungee' },
  { label: 'Cinzel', value: 'Cinzel' },
  { label: 'Montserrat', value: 'Montserrat' },
  { label: 'Share Tech Mono', value: 'Share Tech Mono' },
  { label: 'Cormorant Garamond', value: 'Cormorant Garamond' },
  { label: 'Anton', value: 'Anton' },
  { label: 'Raleway', value: 'Raleway' },
  { label: 'EB Garamond', value: 'EB Garamond' },
  { label: 'Exo 2', value: 'Exo 2' },
  { label: 'Oxanium', value: 'Oxanium' },
  { label: 'Cinzel Decorative', value: 'Cinzel Decorative' },
  { label: 'Quicksand', value: 'Quicksand' },
  { label: 'Oswald', value: 'Oswald' },
  { label: 'Abril Fatface', value: 'Abril Fatface' },
  { label: 'Bangers', value: 'Bangers' },
  { label: 'Comfortaa', value: 'Comfortaa' },
  { label: 'Advent Pro', value: 'Advent Pro' },
  { label: 'Libre Baskerville', value: 'Libre Baskerville' },
  { label: 'Bebas Neue', value: 'Bebas Neue' },
  { label: 'Archivo Black', value: 'Archivo Black' },
  { label: 'Special Elite', value: 'Special Elite' },
  { label: 'Major Mono Display', value: 'Major Mono Display' },
  { label: 'Fira Code', value: 'Fira Code' },
  { label: 'Baloo 2', value: 'Baloo 2' },
  { label: 'Russo One', value: 'Russo One' },
  { label: 'Rajdhani', value: 'Rajdhani' },
  { label: 'Dancing Script', value: 'Dancing Script' },
  { label: 'Tienne', value: 'Tienne' },
  { label: 'IM Fell English SC', value: 'IM Fell English SC' },
  { label: 'Courier Prime', value: 'Courier Prime' },
  { label: 'UnifrakturCook', value: 'UnifrakturCook' },
  { label: 'Fredoka One', value: 'Fredoka One' },
    { label: 'Pirata One', value: 'Pirata One' },
];

const EMOJI_OPTIONS = [
  '🎬', '🍿', '🎞️', '🎥', '📽️', '📺', '📼', '📀', '💽', '💾', '🕹️', '🎮', '👾', '🤖', '👽', '👻',
  '🤡', '😈', '👹', '👺', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '😿', 'Surprised'
];
