import { Theme } from '@/types';

export const interstellarTheme: Theme = {
  id: 'interstellar',
  name: 'Intriguing Interstellar',
  description: 'Clean space aesthetic with gravity lines and nebula gradients',
  className: 'theme-interstellar',
  colors: {
    primary: '#9DA5A7',
    secondary: '#0A2342',
    accent: '#4A90E2',
    background: '#000000'
  },
  font: 'Space Mono',
  preview: '🌌 Space Odyssey',
  emojis: ['🌌', '🚀', '⭐', '🌍'],
  category: 'Sci-Fi',
  tagline: 'Love transcends dimensions of space and time',
  modes: {
    light: {
      colors: ['#9DA5A7', '#0A2342', '#4A90E2', '#F8F9FA'],
      font: {
        name: 'Space Mono',
        weight: ['400', '700'],
        size: { small: '14px', medium: '16px', large: '24px' }
      },
      emojis: ['🌌', '🚀', '⭐'],
      animations: {
        buttonHover: 'scale(1.02) translateY(-2px)',
        pageTransition: 'cosmic-drift',
        loader: 'orbit'
      }
    },
    dark: {
      colors: ['#9DA5A7', '#0A2342', '#4A90E2', '#0D1117'],
      font: {
        name: 'Space Mono',
        weight: ['400', '700'],
        size: { small: '14px', medium: '16px', large: '24px' }
      },
      emojis: ['🌌', '🚀', '🌍'],
      animations: {
        buttonHover: 'scale(1.02) translateY(-2px)',
        pageTransition: 'cosmic-drift',
        loader: 'orbit'
      }
    },
    highContrast: {
      colors: ['#FFFFFF', '#000080', '#00BFFF', '#000000'],
      font: {
        name: 'Space Mono',
        weight: ['700'],
        size: { small: '16px', medium: '18px', large: '28px' }
      },
      emojis: ['🌌', '🚀'],
      animations: {
        buttonHover: 'scale(1.1)',
        pageTransition: 'fade',
        loader: 'pulse'
      }
    }
  },
  designStyle: 'Clean space aesthetic, gravity lines, subtle nebula gradient',
  textColor: '#E8E9EA'
};