import { Theme } from '@/types';

export const rockstarTheme: Theme = {
  id: 'rockstar',
  name: 'Rockstar Romance',
  description: 'Musical passion with guitar strings and stage lights',
  className: 'theme-rockstar',
  colors: {
    primary: '#8B0000',
    secondary: '#FFD700',
    accent: '#000000',
    background: '#2F2F2F'
  },
  font: 'Rock Salt',
  preview: '🎸 Shallow Depths',
  emojis: ['🎸', '🎤', '🌟', '❤️'],
  category: 'Musical',
  tagline: 'We\'re far from the shallow now',
  modes: {
    light: {
      colors: ['#8B0000', '#FFD700', '#000000', '#FFF8DC'],
      font: { name: 'Rock Salt', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🎸', '🎤', '🌟'],
      animations: { buttonHover: 'guitar-strum', pageTransition: 'stage-lights', loader: 'amp-pulse' }
    },
    dark: {
      colors: ['#8B0000', '#FFD700', '#000000', '#1A1A1A'],
      font: { name: 'Rock Salt', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🎸', '🎤', '❤️'],
      animations: { buttonHover: 'guitar-strum', pageTransition: 'stage-lights', loader: 'amp-pulse' }
    },
    highContrast: {
      colors: ['#DC143C', '#FFFF00', '#FFFFFF', '#000000'],
      font: { name: 'Rock Salt', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🎸', '🎤'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Musical passion with guitar strings and stage lights',
  textColor: '#FFD700'
};