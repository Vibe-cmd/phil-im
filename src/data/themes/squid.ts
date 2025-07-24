import { Theme } from '@/types';

export const squidTheme: Theme = {
  id: 'squid',
  name: 'Sinister Squid',
  description: 'Korean game aesthetics with childhood nostalgia',
  className: 'theme-squid',
  colors: {
    primary: '#E50914',
    secondary: '#32CD32',
    accent: '#FFB6C1',
    background: '#F0F8FF'
  },
  font: 'Noto Sans KR',
  preview: '🔺 Survival Game',
  emojis: ['🔺', '🍪', '🎭', '💰'],
  category: 'Horror',
  tagline: 'Would you like to play a game?',
  modes: {
    light: {
      colors: ['#E50914', '#32CD32', '#FFB6C1', '#F0F8FF'],
      font: { name: 'Noto Sans KR', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🔺', '🍪', '🎭'],
      animations: { buttonHover: 'game-pulse', pageTransition: 'doll-turn', loader: 'shape-morph' }
    },
    dark: {
      colors: ['#E50914', '#32CD32', '#FFB6C1', '#1A0A0A'],
      font: { name: 'Noto Sans KR', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🔺', '🍪', '💰'],
      animations: { buttonHover: 'game-pulse', pageTransition: 'doll-turn', loader: 'shape-morph' }
    },
    highContrast: {
      colors: ['#FF0000', '#00FF00', '#FF69B4', '#000000'],
      font: { name: 'Noto Sans KR', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🔺', '🎭'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Korean game aesthetics with childhood nostalgia',
  textColor: '#000000'
};