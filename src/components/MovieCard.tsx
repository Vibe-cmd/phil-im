
import React, { useState, useEffect } from 'react';
import { X, Play, Star, Clock, Calendar, User, Tag, Eye, EyeOff, Edit3, Bookmark, BookmarkCheck, Share, Heart, ExternalLink, Tv } from 'lucide-react';
import { AlbumItem } from '@/types';

interface MovieCardProps {
  isOpen: boolean;
  onClose: () => void;
  movieData: AlbumItem | null;
  onUpdate: (updatedItem: AlbumItem) => void;
}

export const MovieCard = ({ isOpen, onClose, movieData, onUpdate }: MovieCardProps) => {
  const [isWatched, setIsWatched] = useState(false);
  const [userNotes, setUserNotes] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [rating, setRating] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (movieData) {
      setIsWatched(movieData.isWatched);
      setUserNotes(movieData.userNotes || '');
      setRating(Math.round(movieData.rating));
    }
  }, [movieData]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleStatusChange = (watched: boolean) => {
    setIsWatched(watched);
    if (movieData) {
      const updatedItem = { ...movieData, isWatched: watched };
      onUpdate(updatedItem);
    }
  };

  const handleNotesChange = (notes: string) => {
    setUserNotes(notes);
    if (movieData) {
      const updatedItem = { ...movieData, userNotes: notes };
      onUpdate(updatedItem);
    }
  };

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRatingChange(star)}
            className="transition-all duration-200 hover:scale-125 hover:-rotate-12"
          >
            <Star
              className={`w-5 h-5 ${
                star <= rating 
                  ? 'fill-yellow-400 text-yellow-400 drop-shadow-lg' 
                  : 'text-gray-400 hover:text-yellow-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  if (!isOpen || !movieData) return null;

  const posterUrl = movieData.posterPath 
    ? `https://image.tmdb.org/t/p/w500${movieData.posterPath}`
    : '/placeholder.svg';

  const backdropUrl = movieData.posterPath 
    ? `https://image.tmdb.org/t/p/w1280${movieData.posterPath}`
    : '/placeholder.svg';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div 
        className={`relative w-full max-w-6xl h-[85vh] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 ease-out ${
          isVisible 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-90 opacity-0 translate-y-8'
        }`}
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-black/50 backdrop-blur-md hover:bg-red-500/80 transition-all duration-300 group border border-white/20"
        >
          <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Content Layout */}
        <div className="relative z-10 flex h-full">
          {/* LEFT SIDE - POSTER */}
          <div className="w-2/5 p-8 flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
              
              <div className="relative">
                <img
                  src={posterUrl}
                  alt={movieData.title}
                  className="w-80 h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-4 border-white/10"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/30 hover:scale-110 border border-white/30">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </button>

                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 border border-yellow-400/50">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-bold text-sm">{movieData.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - METADATA */}
          <div className="w-3/5 p-8 space-y-6 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-5xl font-black text-white mb-3 leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {movieData.title}
                  </h1>
                  
                  <div className="flex items-center space-x-6 text-gray-300">
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{new Date(movieData.releaseDate).getFullYear()}</span>
                    </div>
                    {movieData.mediaType === "tv" && (
                      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                        <Tv className="w-4 h-4" />
                        <span className="font-medium">TV Series</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                    <BookmarkCheck className="w-5 h-5 text-green-400" />
                  </button>
                  <button className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                    <Share className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleStatusChange(!isWatched)}
                  className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl ${
                    isWatched
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-green-500/30'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-blue-500/30'
                  } hover:shadow-xl border border-white/20`}
                >
                  <div className="flex items-center space-x-3">
                    {isWatched ? (
                      <>
                        <Eye className="w-6 h-6" />
                        <span>Watched</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-6 h-6" />
                        <span>To Watch</span>
                      </>
                    )}
                  </div>
                </button>
                
                <div className="flex items-center space-x-3">
                  <span className="text-white font-medium">Your Rating:</span>
                  <StarRating rating={rating} onRatingChange={setRating} />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Overview</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {movieData.overview}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Your Notes</h3>
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Edit3 className="w-5 h-5 text-white" />
                </button>
              </div>
              
              {showNotes ? (
                <textarea
                  value={userNotes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  placeholder="What did you think about this movie?"
                  className="w-full p-4 bg-white/10 backdrop-blur-md rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 border border-white/20"
                  rows={4}
                />
              ) : (
                <p className="text-gray-400 italic text-lg">
                  {userNotes || "Click the edit button to add your thoughts about this movie!"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
