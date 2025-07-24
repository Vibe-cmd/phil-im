import { Theme } from '@/types';

export const supermanTheme: Theme = {
  id: 'superman',
  name: 'Superman\'s Hope',
  description: 'Classic heroic red and blue with cape dynamics',
  className: 'theme-superman',
  colors: {
    primary: '#E50914',
    secondary: '#4169E1',
    accent: '#FFD700',
    background: '#F0F8FF'
  },
  font: 'Roboto Condensed',
  preview: '🦸‍♂️ Man of Steel',
  emojis: ['🦸‍♂️', '💪', '🌟', '⚡'],
  category: 'Superhero',
  tagline: 'Truth, justice, and the cinematic way',
  modes: {
    light: {
      colors: ['#E50914', '#4169E1', '#FFD700', '#F0F8FF'],
      font: { name: 'Roboto Condensed', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🦸‍♂️', '💪', '🌟'],
      animations: { buttonHover: 'cape-flutter', pageTransition: 'hero-landing', loader: 'shield-shine' }
    },
    dark: {
      colors: ['#E50914', '#4169E1', '#FFD700', '#0A0A1A'],
      font: { name: 'Roboto Condensed', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['🦸‍♂️', '💪', '⚡'],
      animations: { buttonHover: 'cape-flutter', pageTransition: 'hero-landing', loader: 'shield-shine' }
    },
    highContrast: {
      colors: ['#FF0000', '#0000FF', '#FFFF00', '#000000'],
      font: { name: 'Roboto Condensed', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['🦸‍♂️', '💪'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Classic heroic red and blue with cape dynamics',
  textColor: '#4169E1'
};