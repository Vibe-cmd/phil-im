import { Theme } from '@/types';

export const deadpoolTheme: Theme = {
  id: 'deadpool',
  name: 'Deadpool\'s Delight',
  description: 'Irreverent red and black with comic speech bubbles',
  className: 'theme-deadpool',
  colors: {
    primary: '#E50914',
    secondary: '#000000',
    accent: '#FFFFFF',
    background: '#2F2F2F'
  },
  font: 'Fredoka One',
  preview: '🦸 Maximum Effort',
  emojis: ['🦸', '💀', '🗡️', '💥'],
  category: 'Superhero',
  tagline: 'Maximum effort for maximum entertainment',
  modes: {
    light: {
      colors: ['#E50914', '#000000', '#FFFFFF', '#FFE5E5'],
      font: { name: 'Fredoka One', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🦸', '💀', '🗡️'],
      animations: { buttonHover: 'katana-slash', pageTransition: 'comic-burst', loader: 'healing-factor' }
    },
    dark: {
      colors: ['#E50914', '#000000', '#FFFFFF', '#1A0A0A'],
      font: { name: 'Fredoka One', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🦸', '💀', '💥'],
      animations: { buttonHover: 'katana-slash', pageTransition: 'comic-burst', loader: 'healing-factor' }
    },
    highContrast: {
      colors: ['#FF0000', '#FFFFFF', '#FFFFFF', '#000000'],
      font: { name: 'Fredoka One', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🦸', '💀'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Irreverent red and black with comic speech bubbles',
  textColor: '#FFFFFF'
};