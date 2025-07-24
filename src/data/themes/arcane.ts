import { Theme } from '@/types';

export const arcaneTheme: Theme = {
  id: 'arcane',
  name: 'Arcane Artistry',
  description: 'Steampunk Piltover with hextech crystal glows',
  className: 'theme-arcane',
  colors: {
    primary: '#00BFFF',
    secondary: '#FFD700',
    accent: '#8A2BE2',
    background: '#1C1C1C'
  },
  font: 'Orbitron',
  preview: '⚡ Hextech Magic',
  emojis: ['⚡', '🔧', '💎', '🌟'],
  category: 'Animation',
  tagline: 'In the pursuit of great power... and great shows',
  modes: {
    light: {
      colors: ['#00BFFF', '#FFD700', '#8A2BE2', '#F0F8FF'],
      font: { name: 'Orbitron', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['⚡', '🔧', '💎'],
      animations: { buttonHover: 'hextech-charge', pageTransition: 'crystal-shatter', loader: 'gear-turn' }
    },
    dark: {
      colors: ['#00BFFF', '#FFD700', '#8A2BE2', '#0A0A1A'],
      font: { name: 'Orbitron', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['⚡', '🔧', '🌟'],
      animations: { buttonHover: 'hextech-charge', pageTransition: 'crystal-shatter', loader: 'gear-turn' }
    },
    highContrast: {
      colors: ['#00FFFF', '#FFFF00', '#FF00FF', '#000000'],
      font: { name: 'Orbitron', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['⚡', '💎'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Steampunk Piltover with hextech crystal glows',
  textColor: '#00BFFF'
};