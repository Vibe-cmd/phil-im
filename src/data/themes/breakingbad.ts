import { Theme } from '@/types';

export const breakingbadTheme: Theme = {
  id: 'breakingbad',
  name: 'Breaking Bad Chemistry',
  description: 'Desert meth lab with chemical element styling',
  className: 'theme-breakingbad',
  colors: {
    primary: '#FFD700',
    secondary: '#32CD32',
    accent: '#FF4500',
    background: '#2F4F4F'
  },
  font: 'Roboto Condensed',
  preview: '🧪 I Am The One',
  emojis: ['🧪', '🔥', '💊', '⚗️'],
  category: 'Crime',
  tagline: 'I am the one who knocks... on great TV',
  modes: {
    light: {
      colors: ['#FFD700', '#32CD32', '#FF4500', '#F5F5DC'],
      font: { name: 'Roboto Condensed', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🧪', '🔥', '💊'],
      animations: { buttonHover: 'chemical-react', pageTransition: 'element-dissolve', loader: 'beaker-bubble' }
    },
    dark: {
      colors: ['#FFD700', '#32CD32', '#FF4500', '#1A1A1A'],
      font: { name: 'Roboto Condensed', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🧪', '🔥', '⚗️'],
      animations: { buttonHover: 'chemical-react', pageTransition: 'element-dissolve', loader: 'beaker-bubble' }
    },
    highContrast: {
      colors: ['#FFFF00', '#00FF00', '#FF0000', '#000000'],
      font: { name: 'Roboto Condensed', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🧪', '🔥'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Desert meth lab with chemical element styling',
  textColor: '#FFD700'
};