
import { useState } from 'react';
import { AlbumItem } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

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

  const handleSubmit = () => {
    if (onSubmitRecommendation && comment.trim() && rating > 0) {
      onSubmitRecommendation(movie.id, comment, rating);
      setComment('');
      setRating(0);
      onClose();
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
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!comment.trim() || rating === 0}
              className="flex-1"
              style={{ 
                backgroundColor: 'var(--theme-primary)',
                color: 'white'
              }}
            >
              Share Recommendation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
