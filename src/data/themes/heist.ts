import { Theme } from '@/types';

export const heistTheme: Theme = {
  id: 'heist',
  name: 'Heistful Hustle',
  description: 'Spanish flair with red-hot intensity and vintage maps',
  className: 'theme-heist',
  colors: {
    primary: '#E50914',
    secondary: '#FFD700',
    accent: '#8B4513',
    background: '#2F2F2F'
  },
  font: 'Bebas Neue',
  preview: '💰 Bella Ciao',
  emojis: ['💰', '🎭', '🏦', '🔴'],
  category: 'Crime',
  tagline: 'Bella ciao, bella ciao, bella ciao ciao ciao',
  modes: {
    light: {
      colors: ['#E50914', '#FFD700', '#8B4513', '#FFF8DC'],
      font: { name: 'Bebas Neue', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['💰', '🎭', '🏦'],
      animations: { buttonHover: 'heist-flash', pageTransition: 'vault-open', loader: 'money-fall' }
    },
    dark: {
      colors: ['#E50914', '#FFD700', '#8B4513', '#1A1A1A'],
      font: { name: 'Bebas Neue', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['💰', '🎭', '🔴'],
      animations: { buttonHover: 'heist-flash', pageTransition: 'vault-open', loader: 'money-fall' }
    },
    highContrast: {
      colors: ['#FF0000', '#FFFF00', '#8B4513', '#000000'],
      font: { name: 'Bebas Neue', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['💰', '🎭'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Spanish flair with red-hot intensity and vintage maps',
  textColor: '#FFD700'
};