import { Theme } from '@/types';

export const vibraniumTheme: Theme = {
  id: 'vibranium',
  name: 'Vibrant Vibranium',
  description: 'Wakandan patterns with purple energy glow',
  className: 'theme-vibranium',
  colors: {
    primary: '#8A2BE2',
    secondary: '#000000',
    accent: '#00FFFF',
    background: '#2F1B69'
  },
  font: 'Rajdhani',
  preview: '👑 Wakanda Forever',
  emojis: ['👑', '💎', '🌍', '⚡'],
  category: 'Superhero',
  tagline: 'Wakanda Forever, Cinema Forever',
  modes: {
    light: {
      colors: ['#8A2BE2', '#000000', '#00FFFF', '#F0E6FF'],
      font: { name: 'Rajdhani', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['👑', '💎', '🌍'],
      animations: { buttonHover: 'vibranium-pulse', pageTransition: 'wakanda-reveal', loader: 'energy-flow' }
    },
    dark: {
      colors: ['#8A2BE2', '#000000', '#00FFFF', '#1A0F33'],
      font: { name: 'Rajdhani', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['👑', '💎', '⚡'],
      animations: { buttonHover: 'vibranium-pulse', pageTransition: 'wakanda-reveal', loader: 'energy-flow' }
    },
    highContrast: {
      colors: ['#9370DB', '#FFFFFF', '#00FFFF', '#000000'],
      font: { name: 'Rajdhani', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['👑', '💎'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Wakandan patterns with purple energy glow',
  textColor: '#00FFFF'
};