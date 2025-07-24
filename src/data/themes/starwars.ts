import { Theme } from '@/types';

export const starwarsTheme: Theme = {
  id: 'starwars',
  name: 'Star Wars Saga',
  description: 'Galactic empire with lightsaber glows and space textures',
  className: 'theme-starwars',
  colors: {
    primary: '#FFD700',
    secondary: '#000000',
    accent: '#E50914',
    background: '#1C1C1C'
  },
  font: 'Orbitron',
  preview: '⭐ Galaxy Far Away',
  emojis: ['⭐', '🚀', '⚔️', '🌌'],
  category: 'Sci-Fi',
  tagline: 'May the Force be with your watchlist',
  modes: {
    light: {
      colors: ['#FFD700', '#000000', '#E50914', '#F8F8FF'],
      font: { name: 'Orbitron', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['⭐', '🚀', '⚔️'],
      animations: { buttonHover: 'lightsaber-ignite', pageTransition: 'hyperdrive', loader: 'force-swirl' }
    },
    dark: {
      colors: ['#FFD700', '#000000', '#E50914', '#0A0A0A'],
      font: { name: 'Orbitron', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['⭐', '🚀', '🌌'],
      animations: { buttonHover: 'lightsaber-ignite', pageTransition: 'hyperdrive', loader: 'force-swirl' }
    },
    highContrast: {
      colors: ['#FFFF00', '#FFFFFF', '#FF0000', '#000000'],
      font: { name: 'Orbitron', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['⭐', '🚀'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Galactic empire with lightsaber glows and space textures',
  textColor: '#FFD700'
};