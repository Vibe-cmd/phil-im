import { Theme } from '@/types';

export const minionsTheme: Theme = {
  id: 'minions',
  name: 'Minions Mayhem',
  description: 'Playful yellow with goggle-inspired elements',
  className: 'theme-minions',
  colors: {
    primary: '#FFD700',
    secondary: '#4169E1',
    accent: '#FF6347',
    background: '#FFFFE0'
  },
  font: 'Nunito',
  preview: '👨‍🔬 Banana!',
  emojis: ['👨‍🔬', '🍌', '🥽', '💛'],
  category: 'Animation',
  tagline: 'Bello! Poopaye your watchlist!',
  modes: {
    light: {
      colors: ['#FFD700', '#4169E1', '#FF6347', '#FFFFE0'],
      font: { name: 'Nunito', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['👨‍🔬', '🍌', '🥽'],
      animations: { buttonHover: 'banana-bounce', pageTransition: 'goggle-spin', loader: 'minion-giggle' }
    },
    dark: {
      colors: ['#FFD700', '#4169E1', '#FF6347', '#3A3A0A'],
      font: { name: 'Nunito', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['👨‍🔬', '🍌', '💛'],
      animations: { buttonHover: 'banana-bounce', pageTransition: 'goggle-spin', loader: 'minion-giggle' }
    },
    highContrast: {
      colors: ['#FFFF00', '#0000FF', '#FF0000', '#000000'],
      font: { name: 'Nunito', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['👨‍🔬', '🍌'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Playful yellow with goggle-inspired elements',
  textColor: '#4169E1'
};