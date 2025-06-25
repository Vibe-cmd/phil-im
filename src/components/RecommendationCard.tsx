
import { useState } from 'react';
import { AlbumItem } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface RecommendationCardProps {
  movie: AlbumItem;
  onSubmitRecommendation?: (movieId: string, comment: string, rating: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const RecommendationCard = ({ 
  movie, 
  onSubmitRecommendation, 
  isOpen, 
  onClose 
}: RecommendationCardProps) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!comment.trim() || rating === 0) {
      toast({
        title: "Missing Information",
        description: "Please provide both a comment and rating.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share({
          title: `Movie Recommendation: ${movie.title}`,
          text: `I recommend "${movie.title}" (${rating}/10)!\n\n${comment}\n\nShared via फ़ीLim`,
          url: window.location.href
        });
        
        toast({
          title: "Recommendation Shared!",
          description: "Your movie recommendation has been shared successfully.",
        });
      } else {
        // Fallback: Copy to clipboard
        const shareText = `🎬 Movie Recommendation: ${movie.title}\n\n⭐ Rating: ${rating}/10\n\n💬 "${comment}"\n\nShared via फ़ीLim`;
        
        await navigator.clipboard.writeText(shareText);
        
        toast({
          title: "Copied to Clipboard!",
          description: "Your recommendation has been copied. You can now paste it anywhere to share.",
        });
      }
      
      // Call the callback if provided
      if (onSubmitRecommendation) {
        onSubmitRecommendation(movie.id, comment, rating);
      }
      
      // Reset form and close
      setComment('');
      setRating(0);
      onClose();
      
    } catch (error) {
      console.error('Share failed:', error);
      
      // Fallback: Copy to clipboard
      try {
        const shareText = `🎬 Movie Recommendation: ${movie.title}\n\n⭐ Rating: ${rating}/10\n\n💬 "${comment}"\n\nShared via फ़ीLim`;
        await navigator.clipboard.writeText(shareText);
        
        toast({
          title: "Copied to Clipboard!",
          description: "Sharing was not available, but your recommendation has been copied to clipboard.",
        });
      } catch (clipboardError) {
        toast({
          title: "Share Failed",
          description: "Unable to share or copy the recommendation. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card 
        className="w-full max-w-md glass-strong border-2 animate-fade-in"
        style={{ borderColor: 'var(--theme-primary)' }}
      >
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <img
              src={movie.posterPath ? `https://image.tmdb.org/t/p/w200${movie.posterPath}` : '/placeholder.svg'}
              alt={movie.title}
              className="w-16 h-24 object-cover rounded-lg border-2"
              style={{ borderColor: 'var(--theme-accent)' }}
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--theme-primary)' }}>
                {movie.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {new Date(movie.releaseDate).getFullYear()}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-3">
                {movie.overview}
              </p>
            </div>
          </div>
        </CardHeader>

        <Separator style={{ backgroundColor: 'var(--theme-primary)' }} />

        <CardContent className="pt-4 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--theme-accent)' }}>
              Your Recommendation
            </label>
            <Textarea
              placeholder="Share why you recommend this movie..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[80px] resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block" style={{ color: 'var(--theme-accent)' }}>
              Rating (out of 10)
            </label>
            <div className="flex gap-1 justify-center">
              {Array.from({ length: 10 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className="text-2xl transition-all duration-200 hover:scale-125"
                  style={{ 
                    color: index < (hoveredRating || rating) ? 'var(--theme-primary)' : '#6b7280',
                    filter: index < (hoveredRating || rating) ? 'drop-shadow(0 0 8px var(--theme-primary))' : 'none'
                  }}
                  onMouseEnter={() => setHoveredRating(index + 1)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(index + 1)}
                >
                  🎥
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {hoveredRating || rating || 0}/10
            </p>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!comment.trim() || rating === 0 || isSubmitting}
              className="flex-1"
              style={{ 
                backgroundColor: 'var(--theme-primary)',
                color: 'white'
              }}
            >
              {isSubmitting ? 'Sharing...' : 'Share Recommendation'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
