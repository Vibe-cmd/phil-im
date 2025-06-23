
import React, { useState, useEffect } from 'react';
import { X, Play, Star, Clock, Calendar, User, Tag, Eye, EyeOff, Edit3, Bookmark, BookmarkCheck, Share, Heart, ExternalLink, Tv, Volume2, Sparkles, Zap } from 'lucide-react';

interface MovieCardProps {
  isOpen: boolean;
  onClose: () => void;
  movieData: {
    title: string;
    overview: string;
    poster: string;
    backdrop: string;
    releaseYear: string;
    tmdbRating: number;
    type: 'movie' | 'tv';
    duration: string;
    director: string;
    genres: string[];
    whereToWatch: string[];
  };
  initialData: {
    isWatched: boolean;
    userNotes: string;
    rating: number;
  };
  onUpdate: (data: { isWatched: boolean; userNotes: string; rating: number }) => void;
}

export const EnhancedMovieCard = ({ 
  isOpen = true, 
  onClose = () => {}, 
  movieData,
  initialData,
  onUpdate
}: MovieCardProps) => {
  const [isWatched, setIsWatched] = useState(initialData.isWatched);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userNotes, setUserNotes] = useState(initialData.userNotes);
  const [showNotes, setShowNotes] = useState(false);
  const [rating, setRating] = useState(initialData.rating);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    onUpdate({ isWatched, userNotes, rating });
  }, [isWatched, userNotes, rating, onUpdate]);

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRatingChange(star)}
            className="transition-all duration-300 hover:scale-125 hover:-rotate-12 group"
          >
            <Star
              className={`w-6 h-6 transition-all duration-300 ${
                star <= rating 
                  ? 'fill-yellow-400 text-yellow-400 drop-shadow-lg animate-pulse' 
                  : 'text-gray-400 hover:text-yellow-300 group-hover:animate-bounce'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      {/* Main Card Container with enhanced animations */}
      <div 
        className={`relative w-full max-w-7xl h-[90vh] bg-gradient-to-br from-[var(--theme-background)] via-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'scale-100 opacity-100 translate-y-0 rotate-0' 
            : 'scale-75 opacity-0 translate-y-12 rotate-3'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(${movieData.backdrop})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-[var(--theme-primary)]/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/70" />
          
          {/* Floating particles effect */}
          {isHovered && (
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[var(--theme-accent)] rounded-full animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-4 rounded-full bg-black/60 backdrop-blur-md hover:bg-red-500/80 transition-all duration-300 group border border-white/20 hover:border-red-500/50"
        >
          <X className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-500" />
        </button>

        {/* Content Layout */}
        <div className="relative z-20 flex h-full">
          {/* LEFT SIDE - Enhanced POSTER */}
          <div className="w-2/5 p-8 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Multi-layered glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-accent)] to-[var(--theme-secondary)] rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-1000 animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
              
              {/* Poster Container with 3D effect */}
              <div className="relative transform-gpu group-hover:scale-105 transition-transform duration-700" style={{ perspective: '1000px' }}>
                <img
                  src={movieData.poster}
                  alt={movieData.title}
                  className="w-80 h-auto rounded-2xl shadow-2xl border-4 border-white/20 transform group-hover:rotateY-12 transition-all duration-700"
                />
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Enhanced Play Button */}
                <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[var(--theme-primary)]/80 backdrop-blur-md rounded-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[var(--theme-primary)] hover:scale-125 border border-white/30 group">
                  <Play className="w-10 h-10 text-white fill-white ml-1 group-hover:animate-pulse" />
                  <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-spin" />
                </button>

                {/* Enhanced Rating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-400/50 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" />
                    <span className="text-white font-bold text-lg">{movieData.tmdbRating}</span>
                    <Zap className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Enhanced METADATA */}
          <div className="w-3/5 p-8 space-y-6 overflow-y-auto">
            {/* Header Section with animations */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-6xl font-black text-white mb-4 leading-tight bg-gradient-to-r from-white via-[var(--theme-accent)] to-[var(--theme-primary)] bg-clip-text text-transparent animate-pulse">
                    {movieData.title}
                  </h1>
                  
                  {/* Enhanced Movie Info Bar */}
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="flex items-center space-x-2 bg-[var(--theme-primary)]/20 backdrop-blur-sm rounded-full px-4 py-2 border border-[var(--theme-primary)]/30 hover:bg-[var(--theme-primary)]/30 transition-all duration-300">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{movieData.releaseYear}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--theme-accent)]/20 backdrop-blur-sm rounded-full px-4 py-2 border border-[var(--theme-accent)]/30 hover:bg-[var(--theme-accent)]/30 transition-all duration-300">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{movieData.duration}</span>
                    </div>
                    {movieData.type === "tv" && (
                      <div className="flex items-center space-x-2 bg-[var(--theme-secondary)]/20 backdrop-blur-sm rounded-full px-4 py-2 border border-[var(--theme-secondary)]/30 hover:bg-[var(--theme-secondary)]/30 transition-all duration-300">
                        <Tv className="w-5 h-5" />
                        <span className="font-medium">TV Series</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-[var(--theme-primary)]/30 transition-all duration-300 hover:scale-110 border border-white/20 group"
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-6 h-6 text-green-400 group-hover:animate-bounce" />
                    ) : (
                      <Bookmark className="w-6 h-6 text-white group-hover:text-[var(--theme-accent)]" />
                    )}
                  </button>
                  <button className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-[var(--theme-accent)]/30 transition-all duration-300 hover:scale-110 border border-white/20 group">
                    <Share className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </button>
                  <button className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-red-500/30 transition-all duration-300 hover:scale-110 border border-white/20 group">
                    <Heart className="w-6 h-6 text-white group-hover:text-red-400 group-hover:animate-pulse" />
                  </button>
                </div>
              </div>

              {/* Enhanced Status Toggle & Rating */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsWatched(!isWatched)}
                  className={`px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl border-2 ${
                    isWatched
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-green-500/40 border-green-400/50 animate-pulse'
                      : 'bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white shadow-[var(--theme-primary)]/40 border-[var(--theme-primary)]/50'
                  } hover:shadow-xl`}
                >
                  <div className="flex items-center space-x-3">
                    {isWatched ? (
                      <>
                        <Eye className="w-7 h-7 animate-bounce" />
                        <span>Watched</span>
                        <Sparkles className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-7 h-7" />
                        <span>To Watch</span>
                        <Zap className="w-5 h-5" />
                      </>
                    )}
                  </div>
                </button>
                
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium text-lg">Your Rating:</span>
                  <StarRating rating={rating} onRatingChange={setRating} />
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-6">
              {['details', 'notes', 'watch'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[var(--theme-primary)] text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'details' && (
              <div className="space-y-6 animate-fade-in">
                {/* Plot/Overview */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Plot</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {movieData.overview}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <User className="w-5 h-5" />
                      <span className="text-lg font-medium">Director</span>
                    </div>
                    <p className="text-white text-xl font-semibold">{movieData.director}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Tag className="w-5 h-5" />
                      <span className="text-lg font-medium">Genres</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {movieData.genres.map((genre, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-[var(--theme-primary)]/30 to-[var(--theme-accent)]/30 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-[var(--theme-primary)]/50 hover:border-[var(--theme-primary)] transition-all duration-300 hover:scale-105"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-2xl font-bold text-white">Your Notes</h3>
                <textarea
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  placeholder="What did you think about this movie?"
                  className="w-full p-6 bg-white/10 backdrop-blur-md rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] transition-all duration-300 border border-white/20 min-h-[200px]"
                />
              </div>
            )}

            {activeTab === 'watch' && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-2xl font-bold text-white">Where to Watch</h3>
                <div className="grid grid-cols-2 gap-4">
                  {movieData.whereToWatch.map((platform, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-500/80 to-orange-500/80 rounded-xl text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30 border border-red-500/30 group"
                    >
                      <span>{platform}</span>
                      <ExternalLink className="w-5 h-5 group-hover:animate-bounce" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
