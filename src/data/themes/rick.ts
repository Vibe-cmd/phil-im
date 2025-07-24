import { Theme } from '@/types';

export const rickTheme: Theme = {
  id: 'rick',
  name: 'Rick\'s Reality',
  description: 'Sci-fi chaos with portal green and lab equipment',
  className: 'theme-rick',
  colors: {
    primary: '#00FF00',
    secondary: '#4169E1',
    accent: '#FF6347',
    background: '#000000'
  },
  font: 'Roboto Mono',
  preview: '🧪 Wubba Lubba',
  emojis: ['🧪', '🚀', '🌀', '⚗️'],
  category: 'Animation',
  tagline: 'Wubba lubba dub dub your watchlist!',
  modes: {
    light: {
      colors: ['#00FF00', '#4169E1', '#FF6347', '#F0FFF0'],
      font: { name: 'Roboto Mono', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🧪', '🚀', '🌀'],
      animations: { buttonHover: 'portal-warp', pageTransition: 'dimension-hop', loader: 'science-bubble' }
    },
    dark: {
      colors: ['#00FF00', '#4169E1', '#FF6347', '#0A0A0A'],
      font: { name: 'Roboto Mono', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🧪', '🚀', '⚗️'],
      animations: { buttonHover: 'portal-warp', pageTransition: 'dimension-hop', loader: 'science-bubble' }
    },
    highContrast: {
      colors: ['#00FF00', '#0000FF', '#FF0000', '#000000'],
      font: { name: 'Roboto Mono', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🧪', '🚀'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Sci-fi chaos with portal green and lab equipment',
  textColor: '#00FF00'
};