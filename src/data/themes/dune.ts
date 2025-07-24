import { Theme } from '@/types';

export const duneTheme: Theme = {
  id: 'dune',
  name: 'Dazzling Dune',
  description: 'Futuristic minimalism with desert-textured background',
  className: 'theme-dune',
  colors: {
    primary: '#D7BFA5',
    secondary: '#C46A33',
    accent: '#6E8CA0',
    background: '#2B1810'
  },
  font: 'Orbitron',
  preview: '🏜️ Desert Sci-Fi',
  emojis: ['🏜️', '🌌', '🪐', '⚔️'],
  category: 'Sci-Fi',
  tagline: 'The spice must flow through your watchlist',
  modes: {
    light: {
      colors: ['#D7BFA5', '#C46A33', '#6E8CA0', '#F5F0E8'],
      font: {
        name: 'Orbitron',
        weight: ['300', '400', '700'],
        size: { small: '14px', medium: '16px', large: '28px' }
      },
      emojis: ['🏜️', '🌌', '🪐'],
      animations: {
        buttonHover: 'scale(1.05)',
        pageTransition: 'sand-drift',
        loader: 'desert-wind'
      }
    },
    dark: {
      colors: ['#D7BFA5', '#C46A33', '#6E8CA0', '#1A0F08'],
      font: {
        name: 'Orbitron',
        weight: ['300', '400', '700'],
        size: { small: '14px', medium: '16px', large: '28px' }
      },
      emojis: ['🏜️', '🌌', '⚔️'],
      animations: {
        buttonHover: 'scale(1.05)',
        pageTransition: 'sand-drift',
        loader: 'desert-wind'
      }
    },
    highContrast: {
      colors: ['#FFFFFF', '#FF8C00', '#4169E1', '#000000'],
      font: {
        name: 'Orbitron',
        weight: ['700'],
        size: { small: '16px', medium: '18px', large: '32px' }
      },
      emojis: ['🏜️', '⚔️'],
      animations: {
        buttonHover: 'scale(1.1)',
        pageTransition: 'fade',
        loader: 'pulse'
      }
    }
  },
  designStyle: 'Futuristic minimalism with desert-textured background',
  textColor: '#F5F0E8'
};