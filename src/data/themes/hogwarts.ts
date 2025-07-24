import { Theme } from '@/types';

export const hogwartsTheme: Theme = {
  id: 'hogwarts',
  name: 'Hogwarts Harmony',
  description: 'Magical parchment textures with floating elements',
  className: 'theme-hogwarts',
  colors: {
    primary: '#8B4513',
    secondary: '#DAA520',
    accent: '#800080',
    background: '#F5DEB3'
  },
  font: 'Cinzel',
  preview: '🪄 Magic Academy',
  emojis: ['🪄', '📜', '🦉', '⚡'],
  category: 'Fantasy',
  tagline: 'Happiness can be found even in the darkest of films',
  modes: {
    light: {
      colors: ['#8B4513', '#DAA520', '#800080', '#F5DEB3'],
      font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🪄', '📜', '🦉'],
      animations: { buttonHover: 'magical-sparkle', pageTransition: 'parchment-unfold', loader: 'quill-write' }
    },
    dark: {
      colors: ['#8B4513', '#DAA520', '#800080', '#2F1B14'],
      font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🪄', '📜', '⚡'],
      animations: { buttonHover: 'magical-sparkle', pageTransition: 'parchment-unfold', loader: 'quill-write' }
    },
    highContrast: {
      colors: ['#DAA520', '#FFFFFF', '#800080', '#000000'],
      font: { name: 'Cinzel', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🪄', '⚡'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Magical parchment textures with floating elements',
  textColor: '#8B4513'
};