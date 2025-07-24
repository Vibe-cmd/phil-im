import { Theme } from '@/types';

export const lalalandTheme: Theme = {
  id: 'lalaland',
  name: 'La La Land Dreams',
  description: 'Musical romance with sunset gradients and jazz notes',
  className: 'theme-lalaland',
  colors: {
    primary: '#FF6B9D',
    secondary: '#FFD93D',
    accent: '#6BCF7F',
    background: '#FFF8E7'
  },
  font: 'Dancing Script',
  preview: '🎵 City of Stars',
  emojis: ['🎵', '💃', '🌟', '🎭'],
  category: 'Musical',
  tagline: 'Here\'s to the ones who dream',
  modes: {
    light: {
      colors: ['#FF6B9D', '#FFD93D', '#6BCF7F', '#FFF8E7'],
      font: { name: 'Dancing Script', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🎵', '💃', '🌟'],
      animations: { buttonHover: 'jazz-sway', pageTransition: 'curtain-rise', loader: 'note-float' }
    },
    dark: {
      colors: ['#FF6B9D', '#FFD93D', '#6BCF7F', '#2A1A0A'],
      font: { name: 'Dancing Script', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🎵', '💃', '🎭'],
      animations: { buttonHover: 'jazz-sway', pageTransition: 'curtain-rise', loader: 'note-float' }
    },
    highContrast: {
      colors: ['#FF1493', '#FFD700', '#32CD32', '#000000'],
      font: { name: 'Dancing Script', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🎵', '💃'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Musical romance with sunset gradients and jazz notes',
  textColor: '#FF6B9D'
};