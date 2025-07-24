import { Theme } from '@/types';

export const batmanTheme: Theme = {
  id: 'batman',
  name: 'Brooding Batman',
  description: 'Dark gothic architecture with bat silhouettes',
  className: 'theme-batman',
  colors: {
    primary: '#FFD700',
    secondary: '#000000',
    accent: '#808080',
    background: '#1C1C1C'
  },
  font: 'Oswald',
  preview: '🦇 Dark Knight',
  emojis: ['🦇', '🌃', '⚡', '🖤'],
  category: 'Superhero',
  tagline: 'I am vengeance, I am the night, I am cinema',
  modes: {
    light: {
      colors: ['#FFD700', '#000000', '#808080', '#F5F5F5'],
      font: { name: 'Oswald', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🦇', '🌃', '⚡'],
      animations: { buttonHover: 'bat-swoop', pageTransition: 'gotham-fade', loader: 'signal-beam' }
    },
    dark: {
      colors: ['#FFD700', '#000000', '#808080', '#0A0A0A'],
      font: { name: 'Oswald', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🦇', '🌃', '🖤'],
      animations: { buttonHover: 'bat-swoop', pageTransition: 'gotham-fade', loader: 'signal-beam' }
    },
    highContrast: {
      colors: ['#FFFF00', '#FFFFFF', '#C0C0C0', '#000000'],
      font: { name: 'Oswald', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🦇', '⚡'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Dark gothic architecture with bat silhouettes',
  textColor: '#FFD700'
};