import { Theme } from '@/types';

export const spiderverseTheme: Theme = {
  id: 'spiderverse',
  name: 'Spectacular Spider-Verse',
  description: 'Comic pop-art with halftone dots and glitch overlays',
  className: 'theme-spiderverse',
  colors: {
    primary: '#FF3C3C',
    secondary: '#8F00FF',
    accent: '#00F0FF',
    background: '#000000'
  },
  font: 'Bangers',
  preview: '🕷️ Comic Pop Art',
  emojis: ['🕷️', '🕸️', '💥', '⚡'],
  category: 'Superhero',
  tagline: 'Into the multiverse of cinematic excellence',
  modes: {
    light: {
      colors: ['#FF3C3C', '#8F00FF', '#00F0FF', '#FFE5E5'],
      font: {
        name: 'Bangers',
        weight: ['400', '700'],
        size: { small: '14px', medium: '18px', large: '32px' }
      },
      emojis: ['🕷️', '🕸️', '💥'],
      animations: {
        buttonHover: 'scale(1.1) rotate(2deg)',
        pageTransition: 'glitch-effect',
        loader: 'web-swing'
      }
    },
    dark: {
      colors: ['#FF3C3C', '#8F00FF', '#00F0FF', '#1A0A0A'],
      font: {
        name: 'Bangers',
        weight: ['400', '700'],
        size: { small: '14px', medium: '18px', large: '32px' }
      },
      emojis: ['🕷️', '🕸️', '💥'],
      animations: {
        buttonHover: 'scale(1.1) rotate(-2deg)',
        pageTransition: 'glitch-effect',
        loader: 'web-swing'
      }
    },
    highContrast: {
      colors: ['#FF0000', '#FFFFFF', '#00FFFF', '#000000'],
      font: {
        name: 'Bangers',
        weight: ['700'],
        size: { small: '16px', medium: '20px', large: '36px' }
      },
      emojis: ['🕷️', '💥'],
      animations: {
        buttonHover: 'scale(1.2)',
        pageTransition: 'fade',
        loader: 'pulse'
      }
    }
  },
  designStyle: 'Comic pop-art, halftone dots, glitch overlays',
  textColor: '#FFFFFF'
};