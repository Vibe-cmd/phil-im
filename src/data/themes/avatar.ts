import { Theme } from '@/types';

export const avatarTheme: Theme = {
  id: 'avatar',
  name: 'Avatar\'s Aura',
  description: 'Pandoran bioluminescence with organic curves',
  className: 'theme-avatar',
  colors: {
    primary: '#00BFFF',
    secondary: '#32CD32',
    accent: '#FF6347',
    background: '#000080'
  },
  font: 'Exo 2',
  preview: '🌙 I See You',
  emojis: ['🌙', '🌺', '🌿', '💙'],
  category: 'Sci-Fi',
  tagline: 'I see you... watching great films',
  modes: {
    light: {
      colors: ['#00BFFF', '#32CD32', '#FF6347', '#E0F6FF'],
      font: { name: 'Exo 2', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🌙', '🌺', '🌿'],
      animations: { buttonHover: 'bio-glow', pageTransition: 'tree-connection', loader: 'spirit-flow' }
    },
    dark: {
      colors: ['#00BFFF', '#32CD32', '#FF6347', '#0A0A2A'],
      font: { name: 'Exo 2', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🌙', '🌺', '💙'],
      animations: { buttonHover: 'bio-glow', pageTransition: 'tree-connection', loader: 'spirit-flow' }
    },
    highContrast: {
      colors: ['#00FFFF', '#00FF00', '#FF4500', '#000000'],
      font: { name: 'Exo 2', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🌙', '🌺'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Pandoran bioluminescence with organic curves',
  textColor: '#00BFFF'
};