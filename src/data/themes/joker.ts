import { Theme } from '@/types';

export const jokerTheme: Theme = {
  id: 'joker',
  name: 'Jester\'s Joker',
  description: 'Chaotic purple and green with playing card motifs',
  className: 'theme-joker',
  colors: {
    primary: '#800080',
    secondary: '#32CD32',
    accent: '#FFD700',
    background: '#2F2F2F'
  },
  font: 'Creepster',
  preview: '🃏 Why So Serious?',
  emojis: ['🃏', '😈', '🎭', '💜'],
  category: 'Crime',
  tagline: 'Why so serious about your watchlist?',
  modes: {
    light: {
      colors: ['#800080', '#32CD32', '#FFD700', '#F8F0FF'],
      font: { name: 'Creepster', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🃏', '😈', '🎭'],
      animations: { buttonHover: 'maniacal-laugh', pageTransition: 'card-flip', loader: 'chaos-swirl' }
    },
    dark: {
      colors: ['#800080', '#32CD32', '#FFD700', '#1A0A1A'],
      font: { name: 'Creepster', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🃏', '😈', '💜'],
      animations: { buttonHover: 'maniacal-laugh', pageTransition: 'card-flip', loader: 'chaos-swirl' }
    },
    highContrast: {
      colors: ['#9932CC', '#00FF00', '#FFFF00', '#000000'],
      font: { name: 'Creepster', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🃏', '😈'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Chaotic purple and green with playing card motifs',
  textColor: '#FFD700'
};