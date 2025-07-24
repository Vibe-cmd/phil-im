import { Theme } from '@/types';

export const bladerunnerTheme: Theme = {
  id: 'bladerunner',
  name: 'Blade Runner Blues',
  description: 'Neo-noir cyberpunk with neon city lights',
  className: 'theme-bladerunner',
  colors: {
    primary: '#FF6B35',
    secondary: '#00BFFF',
    accent: '#FFD700',
    background: '#1C1C1C'
  },
  font: 'Orbitron',
  preview: '🌆 Neo-Noir',
  emojis: ['🌆', '🤖', '⚡', '🌃'],
  category: 'Sci-Fi',
  tagline: 'More human than human entertainment',
  modes: {
    light: {
      colors: ['#FF6B35', '#00BFFF', '#FFD700', '#F8F8FF'],
      font: { name: 'Orbitron', weight: ['300', '400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🌆', '🤖', '⚡'],
      animations: { buttonHover: 'neon-flicker', pageTransition: 'rain-fall', loader: 'spinner-glow' }
    },
    dark: {
      colors: ['#FF6B35', '#00BFFF', '#FFD700', '#0A0A0A'],
      font: { name: 'Orbitron', weight: ['300', '400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🌆', '🤖', '🌃'],
      animations: { buttonHover: 'neon-flicker', pageTransition: 'rain-fall', loader: 'spinner-glow' }
    },
    highContrast: {
      colors: ['#FF4500', '#00FFFF', '#FFFF00', '#000000'],
      font: { name: 'Orbitron', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🌆', '🤖'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Neo-noir cyberpunk with neon city lights',
  textColor: '#00BFFF'
};