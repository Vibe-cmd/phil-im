import { Theme } from '@/types';

export const matrixTheme: Theme = {
  id: 'matrix',
  name: 'Mystical Matrix',
  description: 'Digital rain effects with cyberpunk green',
  className: 'theme-matrix',
  colors: {
    primary: '#00FF00',
    secondary: '#000000',
    accent: '#FF0000',
    background: '#000000'
  },
  font: 'Courier New',
  preview: '💊 Digital Reality',
  emojis: ['💊', '🔋', '👁️', '🖥️'],
  category: 'Sci-Fi',
  tagline: 'There is no spoon, only great cinema',
  modes: {
    light: {
      colors: ['#00FF00', '#000000', '#FF0000', '#F0F8F0'],
      font: { name: 'Courier New', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['💊', '🔋', '👁️'],
      animations: { buttonHover: 'matrix-glitch', pageTransition: 'digital-rain', loader: 'code-stream' }
    },
    dark: {
      colors: ['#00FF00', '#000000', '#FF0000', '#0A0A0A'],
      font: { name: 'Courier New', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['💊', '🔋', '🖥️'],
      animations: { buttonHover: 'matrix-glitch', pageTransition: 'digital-rain', loader: 'code-stream' }
    },
    highContrast: {
      colors: ['#00FF00', '#FFFFFF', '#FF0000', '#000000'],
      font: { name: 'Courier New', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['💊', '👁️'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Digital rain effects with cyberpunk green',
  textColor: '#00FF00'
};