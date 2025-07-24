import { Theme } from '@/types';

export const lokiTheme: Theme = {
  id: 'loki',
  name: 'Luscious Loki',
  description: 'Mischievous green and gold with temporal swirls',
  className: 'theme-loki',
  colors: {
    primary: '#228B22',
    secondary: '#FFD700',
    accent: '#000000',
    background: '#2F4F2F'
  },
  font: 'Playfair Display',
  preview: '🐍 God of Mischief',
  emojis: ['🐍', '👑', '⏰', '✨'],
  category: 'Superhero',
  tagline: 'Glorious purpose requires glorious entertainment',
  modes: {
    light: {
      colors: ['#228B22', '#FFD700', '#000000', '#F0FFF0'],
      font: { name: 'Playfair Display', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🐍', '👑', '⏰'],
      animations: { buttonHover: 'mischief-shimmer', pageTransition: 'timeline-branch', loader: 'horn-gleam' }
    },
    dark: {
      colors: ['#228B22', '#FFD700', '#000000', '#1A2A1A'],
      font: { name: 'Playfair Display', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🐍', '👑', '✨'],
      animations: { buttonHover: 'mischief-shimmer', pageTransition: 'timeline-branch', loader: 'horn-gleam' }
    },
    highContrast: {
      colors: ['#32CD32', '#FFFF00', '#FFFFFF', '#000000'],
      font: { name: 'Playfair Display', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🐍', '👑'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Mischievous green and gold with temporal swirls',
  textColor: '#FFD700'
};