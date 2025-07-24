import { Theme } from '@/types';

export const thronesTheme: Theme = {
  id: 'thrones',
  name: 'Throne\'s Triumph',
  description: 'Medieval heraldry with dragon-scale textures',
  className: 'theme-thrones',
  colors: {
    primary: '#8B0000',
    secondary: '#FFD700',
    accent: '#2F4F4F',
    background: '#1C1C1C'
  },
  font: 'Cinzel',
  preview: '👑 Winter is Coming',
  emojis: ['👑', '🐉', '⚔️', '🏰'],
  category: 'Drama',
  tagline: 'Winter is coming to your watchlist',
  modes: {
    light: {
      colors: ['#8B0000', '#FFD700', '#2F4F4F', '#F5F5DC'],
      font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['👑', '🐉', '⚔️'],
      animations: { buttonHover: 'dragon-breath', pageTransition: 'castle-gates', loader: 'crown-gleam' }
    },
    dark: {
      colors: ['#8B0000', '#FFD700', '#2F4F4F', '#0A0A0A'],
      font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['👑', '🐉', '🏰'],
      animations: { buttonHover: 'dragon-breath', pageTransition: 'castle-gates', loader: 'crown-gleam' }
    },
    highContrast: {
      colors: ['#DC143C', '#FFFF00', '#696969', '#000000'],
      font: { name: 'Cinzel', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['👑', '🐉'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Medieval heraldry with dragon-scale textures',
  textColor: '#FFD700'
};