import { Theme } from '@/types';

export const barbieTheme: Theme = {
  id: 'barbie',
  name: 'Barbie\'s World',
  description: 'Pink paradise with dreamhouse aesthetics',
  className: 'theme-barbie',
  colors: {
    primary: '#FF69B4',
    secondary: '#FFB6C1',
    accent: '#FF1493',
    background: '#FFF0F5'
  },
  font: 'Quicksand',
  preview: '💖 Life in Plastic',
  emojis: ['💖', '👗', '🏰', '💄'],
  category: 'Comedy',
  tagline: 'Life in plastic, it\'s fantastic!',
  modes: {
    light: {
      colors: ['#FF69B4', '#FFB6C1', '#FF1493', '#FFF0F5'],
      font: { name: 'Quicksand', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['💖', '👗', '🏰'],
      animations: { buttonHover: 'sparkle-shimmer', pageTransition: 'dreamhouse-door', loader: 'fashion-spin' }
    },
    dark: {
      colors: ['#FF69B4', '#FFB6C1', '#FF1493', '#2A0A1A'],
      font: { name: 'Quicksand', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
      emojis: ['💖', '👗', '💄'],
      animations: { buttonHover: 'sparkle-shimmer', pageTransition: 'dreamhouse-door', loader: 'fashion-spin' }
    },
    highContrast: {
      colors: ['#FF1493', '#FFFFFF', '#FF69B4', '#000000'],
      font: { name: 'Quicksand', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
      emojis: ['💖', '👗'],
      animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
    }
  },
  designStyle: 'Pink paradise with dreamhouse aesthetics',
  textColor: '#FF1493'
};