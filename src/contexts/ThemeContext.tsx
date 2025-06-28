import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  changeTheme: (themeId: string) => void;
  themes: Theme[];
  isSecondaryMode: boolean;
  toggleColorMode: () => void;
  customFont: string;
  setGoogleFont: (font: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: Theme[] = [
  {
    id: 'spectacular-spider-verse',
    name: 'Spectacular Spider-Verse',
    description: 'With great power comes great responsibility.',
    className: 'theme-spider-verse',
    colors: {
      primary: '#FF3C3C',
      secondary: '#8F00FF',
      accent: '#00F0FF',
      background: '#000000'
    },
    font: 'Comic Neue, sans-serif',
    preview: '🕷️',
    emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
    category: 'Superhero',
    tagline: 'With great power comes great responsibility.',
    modes: {
      light: {
        colors: ['#FF3C3C', '#8F00FF', '#00F0FF', '#000000'],
        font: { name: 'Comic Neue, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: { buttonHover: 'webSwing', pageTransition: 'comicPop', loader: 'spiderSpin' },
        designStyle: 'Comic pop-art, halftone dots, glitch overlays'
      },
      dark: {
        colors: ['#FF3C3C', '#8F00FF', '#00F0FF', '#000000'],
        font: { name: 'Comic Neue, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: { buttonHover: 'webSwing', pageTransition: 'comicPop', loader: 'spiderSpin' },
        designStyle: 'Comic pop-art, halftone dots, glitch overlays'
      },
      highContrast: {
        colors: ['#FF3C3C', '#8F00FF', '#00F0FF', '#000000'],
        font: { name: 'Comic Neue, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: { buttonHover: 'webSwing', pageTransition: 'comicPop', loader: 'spiderSpin' },
        designStyle: 'Comic pop-art, halftone dots, glitch overlays'
      }
    },
    designStyle: 'Comic pop-art, halftone dots, glitch overlays'
  },
  {
    id: 'dazzling-dune',
    name: 'Dazzling Dune',
    description: 'The spice must flow.',
    className: 'theme-dune',
    colors: {
      primary: '#D7BFA5',
      secondary: '#C46A33',
      accent: '#6E8CA0',
      background: '#000000'
    },
    font: 'Cinzel, serif',
    preview: '🏜️',
    emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
    category: 'Sci-Fi',
    tagline: 'The spice must flow.',
    modes: {
      light: {
        colors: ['#D7BFA5', '#C46A33', '#6E8CA0', '#000000'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: { buttonHover: 'sandSwirl', pageTransition: 'desertFade', loader: 'spiceGlow' },
        designStyle: 'Futuristic minimalism with desert-textured background'
      },
      dark: {
        colors: ['#D7BFA5', '#C46A33', '#6E8CA0', '#000000'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: { buttonHover: 'sandSwirl', pageTransition: 'desertFade', loader: 'spiceGlow' },
        designStyle: 'Futuristic minimalism with desert-textured background'
      },
      highContrast: {
        colors: ['#D7BFA5', '#C46A33', '#6E8CA0', '#000000'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: { buttonHover: 'sandSwirl', pageTransition: 'desertFade', loader: 'spiceGlow' },
        designStyle: 'Futuristic minimalism with desert-textured background'
      }
    },
    designStyle: 'Futuristic minimalism with desert-textured background'
  },
  {
    id: 'intriguing-interstellar',
    name: 'Intriguing Interstellar',
    description: 'We must reach for the stars.',
    className: 'theme-interstellar',
    colors: {
      primary: '#9DA5A7',
      secondary: '#0A2342',
      accent: '#000000',
      background: '#FFFFFF'
    },
    font: 'Orbitron, sans-serif',
    preview: '🌌',
    emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
    category: 'Sci-Fi',
    tagline: 'We must reach for the stars.',
    modes: {
      light: {
        colors: ['#9DA5A7', '#0A2342', '#000000', '#FFFFFF'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: { buttonHover: 'starPulse', pageTransition: 'wormholeZoom', loader: 'orbitSpin' },
        designStyle: 'Clean space aesthetic, gravity lines, subtle nebula gradient'
      },
      dark: {
        colors: ['#9DA5A7', '#0A2342', '#000000', '#FFFFFF'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: { buttonHover: 'starPulse', pageTransition: 'wormholeZoom', loader: 'orbitSpin' },
        designStyle: 'Clean space aesthetic, gravity lines, subtle nebula gradient'
      },
      highContrast: {
        colors: ['#9DA5A7', '#0A2342', '#000000', '#FFFFFF'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: { buttonHover: 'starPulse', pageTransition: 'wormholeZoom', loader: 'orbitSpin' },
        designStyle: 'Clean space aesthetic, gravity lines, subtle nebula gradient'
      }
    },
    designStyle: 'Clean space aesthetic, gravity lines, subtle nebula gradient'
  },
  {
    id: 'mystical-matrix',
    name: 'Mystical Matrix',
    description: 'There is no spoon.',
    className: 'theme-matrix',
    colors: {
      primary: '#00FF41',
      secondary: '#000000',
      accent: '#2D2D2D',
      background: '#000000'
    },
    font: 'VT323, monospace',
    preview: '💾',
    emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
    category: 'Sci-Fi',
    tagline: 'There is no spoon.',
    modes: {
      light: {
        colors: ['#00FF41', '#000000', '#2D2D2D', '#000000'],
        font: { name: 'VT323, monospace', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: { buttonHover: 'glitch', pageTransition: 'digitalRain', loader: 'codeScroll' },
        designStyle: 'Code rain effect, neon outlines, cyberpunk shadows'
      },
      dark: {
        colors: ['#00FF41', '#000000', '#2D2D2D', '#000000'],
        font: { name: 'VT323, monospace', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: { buttonHover: 'glitch', pageTransition: 'digitalRain', loader: 'codeScroll' },
        designStyle: 'Code rain effect, neon outlines, cyberpunk shadows'
      },
      highContrast: {
        colors: ['#00FF41', '#000000', '#2D2D2D', '#000000'],
        font: { name: 'VT323, monospace', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: { buttonHover: 'glitch', pageTransition: 'digitalRain', loader: 'codeScroll' },
        designStyle: 'Code rain effect, neon outlines, cyberpunk shadows'
      }
    },
    designStyle: 'Code rain effect, neon outlines, cyberpunk shadows'
  },
  {
    id: 'hogwarts-harmony',
    name: 'Hogwarts Harmony',
    description: 'It does not do to dwell on dreams and forget to live.',
    className: 'theme-hogwarts',
    colors: {
      primary: '#740001',
      secondary: '#D3A625',
      accent: '#1A472A',
      background: '#0E1A40'
    },
    font: 'Playfair Display, serif',
    preview: '🪄',
    emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
    category: 'Fantasy',
    tagline: 'It does not do to dwell on dreams and forget to live.',
    modes: {
      light: {
        colors: ['#740001', '#D3A625', '#1A472A', '#0E1A40'],
        font: { name: 'Playfair Display, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: { buttonHover: 'sparkle', pageTransition: 'wandWave', loader: 'owlFlight' },
        designStyle: 'Wizard parchment textures, vintage gold accents'
      },
      dark: {
        colors: ['#740001', '#D3A625', '#1A472A', '#0E1A40'],
        font: { name: 'Playfair Display, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: { buttonHover: 'sparkle', pageTransition: 'wandWave', loader: 'owlFlight' },
        designStyle: 'Wizard parchment textures, vintage gold accents'
      },
      highContrast: {
        colors: ['#740001', '#D3A625', '#1A472A', '#0E1A40'],
        font: { name: 'Playfair Display, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: { buttonHover: 'sparkle', pageTransition: 'wandWave', loader: 'owlFlight' },
        designStyle: 'Wizard parchment textures, vintage gold accents'
      }
    },
    designStyle: 'Wizard parchment textures, vintage gold accents'
  },
  {
    id: 'brooding-batman',
    name: 'Brooding Batman',
    description: 'I am vengeance, I am the night, I am Batman!',
    className: 'theme-batman',
    colors: {
      primary: '#0C1E33',
      secondary: '#000000',
      accent: '#F5C518',
      background: '#000000'
    },
    font: 'Montserrat, sans-serif',
    preview: '🦇',
    emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
    category: 'Superhero',
    tagline: 'I am vengeance, I am the night, I am Batman!',
    modes: {
      light: {
        colors: ['#0C1E33', '#000000', '#F5C518', '#000000'],
        font: { name: 'Montserrat, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: { buttonHover: 'shadowPulse', pageTransition: 'nightFade', loader: 'batSignal' },
        designStyle: 'Noir comic style, sharp shadows, bat-icon cutouts'
      },
      dark: {
        colors: ['#0C1E33', '#000000', '#F5C518', '#000000'],
        font: { name: 'Montserrat, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: { buttonHover: 'shadowPulse', pageTransition: 'nightFade', loader: 'batSignal' },
        designStyle: 'Noir comic style, sharp shadows, bat-icon cutouts'
      },
      highContrast: {
        colors: ['#0C1E33', '#000000', '#F5C518', '#000000'],
        font: { name: 'Montserrat, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: { buttonHover: 'shadowPulse', pageTransition: 'nightFade', loader: 'batSignal' },
        designStyle: 'Noir comic style, sharp shadows, bat-icon cutouts'
      }
    },
    designStyle: 'Noir comic style, sharp shadows, bat-icon cutouts'
  },
  {
    id: 'vibrant-vibranium',
    name: 'Vibrant Vibranium',
    description: 'Wakanda forever!',
    className: 'theme-vibranium',
    colors: {
      primary: '#502379',
      secondary: '#C0C0C0',
      accent: '#000000',
      background: '#D4AF37'
    },
    font: 'Poppins, Questrial, sans-serif',
    preview: '🐆',
    emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
    category: 'Superhero',
    tagline: 'Wakanda forever!',
    modes: {
      light: {
        colors: ['#502379', '#C0C0C0', '#000000', '#D4AF37'],
        font: { name: 'Poppins, Questrial, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: { buttonHover: 'vibraniumGlow', pageTransition: 'tribalFade', loader: 'pantherProwl' },
        designStyle: 'Vibranium tech with African tribal geometry'
      },
      dark: {
        colors: ['#502379', '#C0C0C0', '#000000', '#D4AF37'],
        font: { name: 'Poppins, Questrial, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: { buttonHover: 'vibraniumGlow', pageTransition: 'tribalFade', loader: 'pantherProwl' },
        designStyle: 'Vibranium tech with African tribal geometry'
      },
      highContrast: {
        colors: ['#502379', '#C0C0C0', '#000000', '#D4AF37'],
        font: { name: 'Poppins, Questrial, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: { buttonHover: 'vibraniumGlow', pageTransition: 'tribalFade', loader: 'pantherProwl' },
        designStyle: 'Vibranium tech with African tribal geometry'
      }
    },
    designStyle: 'Vibranium tech with African tribal geometry'
  },
  {
    id: 'mighty-mcu',
    name: 'Mighty MCU',
    description: 'Avengers, assemble!',
    className: 'theme-mcu',
    colors: {
      primary: '#ED1D24',
      secondary: '#C0C0C0',
      accent: '#152238',
      background: '#E0E0E0'
    },
    font: 'Nunito, Manrope, sans-serif',
    preview: '🦸‍♂️',
    emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
    category: 'Superhero',
    tagline: 'Avengers, assemble!',
    modes: {
      light: {
        colors: ['#ED1D24', '#C0C0C0', '#152238', '#E0E0E0'],
        font: { name: 'Nunito, Manrope, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: { buttonHover: 'heroPulse', pageTransition: 'infinityWarp', loader: 'arcReactor' },
        designStyle: 'Comic clean UI, subtle sparkle/gloss, star patterns'
      },
      dark: {
        colors: ['#ED1D24', '#C0C0C0', '#152238', '#E0E0E0'],
        font: { name: 'Nunito, Manrope, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: { buttonHover: 'heroPulse', pageTransition: 'infinityWarp', loader: 'arcReactor' },
        designStyle: 'Comic clean UI, subtle sparkle/gloss, star patterns'
      },
      highContrast: {
        colors: ['#ED1D24', '#C0C0C0', '#152238', '#E0E0E0'],
        font: { name: 'Nunito, Manrope, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: { buttonHover: 'heroPulse', pageTransition: 'infinityWarp', loader: 'arcReactor' },
        designStyle: 'Comic clean UI, subtle sparkle/gloss, star patterns'
      }
    },
    designStyle: 'Comic clean UI, subtle sparkle/gloss, star patterns'
  },
  {
    id: 'luscious-loki',
    name: 'Luscious Loki',
    description: 'I am burdened with glorious purpose.',
    className: 'theme-loki',
    colors: {
      primary: '#2A9D8F',
      secondary: '#E9C46A',
      accent: '#F4A261',
      background: '#264653'
    },
    font: 'IM Fell English SC, Amita, serif',
    preview: '🗡️',
    emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄'],
    category: 'Superhero',
    tagline: 'I am burdened with glorious purpose.',
    modes: {
      light: {
        colors: ['#2A9D8F', '#E9C46A', '#FFFFFF', '#F4A261', '#264653'],
        font: { name: 'IM Fell English SC, Amita, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄'],
        animations: { buttonHover: 'illusionFade', pageTransition: 'timeShift', loader: 'scepterGlow' }
      },
      dark: {
        colors: ['#1B263B', '#2A7D6F', '#1C2526', '#D98A40', '#264653'],
        font: { name: 'IM Fell English SC, Amita, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄'],
        animations: { buttonHover: 'illusionFade', pageTransition: 'timeShift', loader: 'scepterGlow' }
      },
      highContrast: {
        colors: ['#2A9D8F', '#000000', '#FFFFFF', '#E9C46A', '#264653'],
        font: { name: 'IM Fell English SC, Amita, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄'],
        animations: { buttonHover: 'illusionFade', pageTransition: 'timeShift', loader: 'scepterGlow' }
      }
    }
  },
  {
    id: 'pensive-peaky',
    name: 'Pensive Peaky',
    description: 'By order of the Peaky Blinders.',
    className: 'theme-peaky',
    colors: {
      primary: '#D9C2A6',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Bebas Neue, sans-serif',
    preview: '🧢',
    emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️'],
    category: 'Crime Drama',
    tagline: 'By order of the Peaky Blinders.',
    modes: {
      light: {
        colors: ['#D9C2A6', '#8B6F47', '#FFFFFF', '#4A3728', '#3C2F2F'],
        font: { name: 'Bebas Neue, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️'],
        animations: { buttonHover: 'smokePuff', pageTransition: 'grayscaleFade', loader: 'razorSpin' }
      },
      dark: {
        colors: ['#2A3728', '#5F4B2B', '#1A1A1A', '#3C2F2F', '#263238'],
        font: { name: 'Bebas Neue, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️'],
        animations: { buttonHover: 'smokePuff', pageTransition: 'grayscaleFade', loader: 'razorSpin' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#8B6F47', '#3C2F2F'],
        font: { name: 'Bebas Neue, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️'],
        animations: { buttonHover: 'smokePuff', pageTransition: 'grayscaleFade', loader: 'razorSpin' }
      }
    }
  },
  {
    id: 'sinister-squid',
    name: 'Sinister Squid',
    description: 'Ready, set, play.',
    className: 'theme-squid',
    colors: {
      primary: '#E91E63',
      secondary: '#0288D1',
      accent: '#4CAF50',
      background: '#FFD700'
    },
    font: 'Roboto Condensed, sans-serif',
    preview: '🎮',
    emojis: ['🎮', '🟥', '🟢', '🔺', '⬛'],
    category: 'Thriller',
    tagline: 'Ready, set, play.',
    modes: {
      light: {
        colors: ['#E91E63', '#0288D1', '#FFFFFF', '#4CAF50', '#FFD700'],
        font: { name: 'Roboto Condensed, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎮', '🟥', '🟢', '🔺', '⬛'],
        animations: { buttonHover: 'gameBlink', pageTransition: 'maskSlide', loader: 'dollTurn' }
      },
      dark: {
        colors: ['#B01B4A', '#01579B', '#1C2526', '#2A5F31', '#D4A017'],
        font: { name: 'Roboto Condensed, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎮', '🟥', '🟢', '🔺', '⬛'],
        animations: { buttonHover: 'gameBlink', pageTransition: 'maskSlide', loader: 'dollTurn' }
      },
      highContrast: {
        colors: ['#E91E63', '#000000', '#FFFFFF', '#4CAF50', '#FFD700'],
        font: { name: 'Roboto Condensed, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎮', '🟥', '🟢', '🔺', '⬛'],
        animations: { buttonHover: 'gameBlink', pageTransition: 'maskSlide', loader: 'dollTurn' }
      }
    }
  },
  {
    id: 'thrones-triumph',
    name: "Throne's Triumph",
    description: 'Winter is coming.',
    className: 'theme-throne',
    colors: {
      primary: '#FFD700',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Cinzel, serif',
    preview: '👑',
    emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️'],
    category: 'Epic Fantasy',
    tagline: 'Winter is coming.',
    modes: {
      light: {
        colors: ['#FFD700', '#8B6F47', '#FFFFFF', '#4A3728', '#3C2F2F'],
        font: { name: 'Trajan Pro, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️'],
        animations: { buttonHover: 'swordClash', pageTransition: 'fireFade', loader: 'dragonSoar' }
      },
      dark: {
        colors: ['#D4A017', '#5F4B2B', '#1A1A1A', '#2A1A1A', '#3C2F2F'],
        font: { name: 'Trajan Pro, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️'],
        animations: { buttonHover: 'swordClash', pageTransition: 'fireFade', loader: 'dragonSoar' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#8B6F47', '#3C2F2F'],
        font: { name: 'Trajan Pro, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️'],
        animations: { buttonHover: 'swordClash', pageTransition: 'fireFade', loader: 'dragonSoar' }
      }
    }
  },
  {
    id: 'azure-avatar',
    name: 'Azure Avatar',
    description: 'We are one with the forest.',
    className: 'theme-avatar',
    colors: {
      primary: '#00A3AD',
      secondary: '#A3D39C',
      accent: '#4CAF50',
      background: '#2A623D'
    },
    font: 'Papyrus, serif',
    preview: '🌍',
    emojis: ['🌍', '🐉', '🌿', '🪶', '🦋'],
    category: 'Fantasy',
    tagline: 'We are one with the forest.',
    modes: {
      light: {
        colors: ['#00A3AD', '#A3D39C', '#FFFFFF', '#4CAF50', '#2A623D'],
        font: { name: 'Papyrus, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌍', '🐉', '🌿', '🪶', '🦋'],
        animations: { buttonHover: 'glowPulse', pageTransition: 'natureBloom', loader: 'treeSway' }
      },
      dark: {
        colors: ['#1B263B', '#2A5F31', '#1C2526', '#2A9D8F', '#015A5E'],
        font: { name: 'Papyrus, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌍', '🐘', '🌱', '🪶', '🦋'],
        animations: { buttonHover: 'glowPulse', pageTransition: 'natureBloom', loader: 'treeSway' }
      },
      highContrast: {
        colors: ['#00A3AD', '#000000', '#FFFFFF', '#4CAF50', '#A3D39C'],
        font: { name: 'Papyrus, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌍', '🐉', '🌿', '🪶', '🦋'],
        animations: { buttonHover: 'glowPulse', pageTransition: 'natureBloom', loader: 'treeSway' }
      }
    }
  },
  {
    id: 'heistful-hustle',
    name: 'Heistful Hustle',
    description: 'Bella Ciao!',
    className: 'theme-heist',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#B0BEC5',
      background: '#4A3728'
    },
    font: 'Eurostile, sans-serif',
    preview: '🎭',
    emojis: ['🎭', '💰', '🔫', '🖴️', '📜'],
    category: 'Crime Drama',
    tagline: 'Bella Ciao!',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#FFFFFF', '#B0BEC5', '#4A3728'],
        font: { name: 'Eurostile, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎭', '💰', '🔫', '🖴️', '📜'],
        animations: { buttonHover: 'maskFlip', pageTransition: 'vaultSlide', loader: 'moneyFall' }
      },
      dark: {
        colors: ['#A1041B', '#D4A017', '#1C2526', '#2A3728', '#263238'],
        font: { name: 'Eurostile, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎭', '💰', '🔫', '🖴️', '📜'],
        animations: { buttonHover: 'maskFlip', pageTransition: 'vaultSlide', loader: 'moneyFall' }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#FFD700', '#4A3728'],
        font: { name: 'Eurostile, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎭', '💰', '🔫', '🖴️', '📜'],
        animations: { buttonHover: 'maskFlip', pageTransition: 'vaultSlide', loader: 'moneyFall' }
      }
    }
  },
  {
    id: 'witchers-wrath',
    name: "Witcher's Wrath",
    description: 'Destiny is a beast.',
    className: 'theme-witcher',
    colors: {
      primary: '#A68A64',
      secondary: '#FFD700',
      accent: '#4A3728',
      background: '#2A623D'
    },
    font: 'Cinzel, serif',
    preview: '⚔️',
    emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️'],
    category: 'Fantasy',
    tagline: 'Destiny is a beast.',
    modes: {
      light: {
        colors: ['#A68A64', '#FFD700', '#FFFFFF', '#4A3728', '#2A623D'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️'],
        animations: { buttonHover: 'swordGlow', pageTransition: 'mistFade', loader: 'medallionSpin' }
      },
      dark: {
        colors: ['#4A3728', '#D4A017', '#1C2526', '#2A5F26', '#3C2F2F'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️'],
        animations: { buttonHover: 'swordGlow', pageTransition: 'mistFade', loader: 'medallionSpin' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#A68A64', '#2A623D'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️'],
        animations: { buttonHover: 'swordGlow', pageTransition: 'mistFade', loader: 'medallionSpin' }
      }
    }
  },
  {
    id: 'dashing-deadpool',
    name: 'Dashing Deadpool',
    description: 'Maximum effort!',
    className: 'theme-deadpool',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#B0BEC5',
      background: '#4A4A4A'
    },
    font: 'Impact, sans-serif',
    preview: '🗡️',
    emojis: ['🗡️', '🔫', '😂', '💥', '🦁'],
    category: 'Action Comedy',
    tagline: 'Maximum effort!',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#FFFFFF', '#B0BEC5', '#4A4A4A'],
        font: { name: 'Impact, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🔫', '😂', '💥', '🦁'],
        animations: { buttonHover: 'chimichangaPop', pageTransition: 'sliceCut', loader: 'wadeSpin' }
      },
      dark: {
        colors: ['#A1041B', '#D4A017', '#1C2526', '#263B5B', '#2F2F2F'],
        font: { name: 'Impact, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🔫', '😂', '💥', '🦁'],
        animations: { buttonHover: 'chimichangaPop', pageTransition: 'sliceCut', loader: 'wadeSpin' }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#FFD700', '#4A4A4A'],
        font: { name: 'Impact, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🔫', '😂', '💥', '🦁'],
        animations: { buttonHover: 'chimichangaPop', pageTransition: 'sliceCut', loader: 'wadeSpin' }
      }
    }
  },
  {
    id: 'ghiblis-glow',
    name: "Ghibli's Glow",
    description: 'The wind rises, we must try to live.',
    className: 'theme-ghibli',
    colors: {
      primary: '#A3D39C',
      secondary: '#00A3AD',
      accent: '#FFD700',
      background: '#2A623D'
    },
    font: 'Anime Ace, sans-serif',
    preview: '🌸',
    emojis: ['🌸', '🐾', '🌿', '🪄', '🍃'],
    category: 'Animated Fantasy',
    tagline: 'The wind rises, we must try to live.',
    modes: {
      light: {
        colors: ['#A3D39C', '#00A3AD', '#FFFFFF', '#FFD700', '#2A623D'],
        font: { name: 'Anime Ace, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌸', '🐾', '🌿', '🪄', '🍃'],
        animations: { buttonHover: 'petalFloat', pageTransition: 'windFade', loader: 'totoroBounce' }
      },
      dark: {
        colors: ['#2A9D8F', '#01579B', '#1C2526', '#E9C46A', '#1B263B'],
        font: { name: 'Anime Ace, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌸', '🐾', '🌿', '🪄', '🍃'],
        animations: { buttonHover: 'petalFloat', pageTransition: 'windFade', loader: 'totoroBounce' }
      },
      highContrast: {
        colors: ['#A3D39C', '#000000', '#FFFFFF', '#00A3AD', '#2A623D'],
        font: { name: 'Anime Ace, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌸', '🐾', '🌿', '🪄', '🍃'],
        animations: { buttonHover: 'petalFloat', pageTransition: 'windFade', loader: 'totoroBounce' }
      }
    }
  },
  {
    id: 'jumajis-jungle',
    name: "Jumanji's Jungle",
    description: 'In the jungle, you must wait, until the dice read five or eight.',
    className: 'theme-jumanji',
    colors: {
      primary: '#2A623D',
      secondary: '#8B6F47',
      accent: '#D9A86C',
      background: '#FFD700'
    },
    font: 'Jungle Fever, sans-serif',
    preview: '🎲',
    emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️'],
    category: 'Adventure',
    tagline: 'In the jungle, you must wait, until the dice read five or eight.',
    modes: {
      light: {
        colors: ['#2A623D', '#8B6F47', '#FFFFFF', '#D9A86C', '#FFD700'],
        font: { name: 'Jungle Fever, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️'],
        animations: { buttonHover: 'diceRoll', pageTransition: 'jungleFade', loader: 'drumBeat' }
      },
      dark: {
        colors: ['#1A472A', '#5F4B2B', '#1C2526', '#A67B5B', '#D4A017'],
        font: { name: 'Jungle Fever, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️'],
        animations: { buttonHover: 'diceRoll', pageTransition: 'jungleFade', loader: 'drumBeat' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#2A623D', '#8B6F47'],
        font: { name: 'Jungle Fever, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️'],
        animations: { buttonHover: 'diceRoll', pageTransition: 'jungleFade', loader: 'drumBeat' }
      }
    }
  },
  {
    id: 'tragic-titanic',
    name: 'Tragic Titanic',
    description: "I'm the king of the world!",
    className: 'theme-titanic',
    colors: {
      primary: '#A3BFFA',
      secondary: '#FFD700',
      accent: '#D9C2A6',
      background: '#4A3728'
    },
    font: 'Great Vibes, cursive',
    preview: '🚢',
    emojis: ['🚢', '💎', '🌊', '❤️', '🎻'],
    category: 'Romance Drama',
    tagline: "I'm the king of the world!",
    modes: {
      light: {
        colors: ['#A3BFFA', '#FFD700', '#FFFFFF', '#D9C2A6', '#4A3728'],
        font: { name: 'Great Vibes, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚢', '💎', '🌊', '❤️', '🎻'],
        animations: { buttonHover: 'waveRipple', pageTransition: 'oceanFade', loader: 'shipSail' }
      },
      dark: {
        colors: ['#1B263B', '#D4A017', '#1C2526', '#8A7A6A', '#2A3728'],
        font: { name: 'Great Vibes, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚢', '💎', '🌊', '❤️', '🎻'],
        animations: { buttonHover: 'waveRipple', pageTransition: 'oceanFade', loader: 'shipSail' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#A3BFFA', '#4A3728'],
        font: { name: 'Great Vibes, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚢', '💎', '🌊', '❤️', '🎻'],
        animations: { buttonHover: 'waveRipple', pageTransition: 'oceanFade', loader: 'shipSail' }
      }
    }
  },
  {
    id: 'creeds-conquest',
    name: "Creed's Conquest",
    description: 'Your legacy is more than a name.',
    className: 'theme-creed',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#4A4A4A',
      background: '#B0BEC5'
    },
    font: 'Bebas Neue, sans-serif',
    preview: '🥊',
    emojis: ['🥊', '🏋️‍♂️', '🏟️', '💪', '🥇'],
    category: 'Sports Drama',
    tagline: 'Your legacy is more than a name.',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#FFFFFF', '#4A4A4A', '#B0BEC5'],
        font: { name: 'Bebas Neue, sans-serif', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🥊', '🏋️‍♂️', '🏟️', '💪', '🥇'],
        animations: { buttonHover: 'punchImpact', pageTransition: 'ringFade', loader: 'speedBag' }
      },
      dark: {
        colors: ['#A1041B', '#D4A017', '#1C2526', '#2F2F2F', '#263B5B'],
        font: { name: 'Bebas Neue, sans-serif', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🥊', '🏋️‍♂️', '🏟️', '💪', '🥇'],
        animations: { buttonHover: 'punchImpact', pageTransition: 'ringFade', loader: 'speedBag' }
      },
      highContrast: {
        colors: ['#D81F26', '#FFD700', '#000000', '#FFFFFF', '#4A4A4A'],
        font: { name: 'Bebas Neue, sans-serif', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🥊', '🏋️‍♂️', '🏟️', '💪', '🥇'],
        animations: { buttonHover: 'punchImpact', pageTransition: 'ringFade', loader: 'speedBag' }
      }
    }
  },
  {
    id: 'narcotic-narcos',
    name: 'Narcotic Narcos',
    description: 'Plata o plomo.',
    className: 'theme-narcos',
    colors: {
      primary: '#FFD700',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Oswald, sans-serif',
    preview: '🔫',
    emojis: ['🔫', '💸', '🚬', '🕴️', '🛩️'],
    category: 'Crime Drama',
    tagline: 'Plata o plomo.',
    modes: {
      light: {
        colors: ['#FFD700', '#8B6F47', '#FFFFFF', '#4A3728', '#3C2F2F'],
        font: { name: 'Oswald, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🔫', '💸', '🚬', '🕴️', '🛩️'],
        animations: { buttonHover: 'smokeSwirl', pageTransition: 'cartelFade', loader: 'planeFly' }
      },
      dark: {
        colors: ['#D4A017', '#5F4B2B', '#1A1A1A', '#2A3728', '#3C2F2F'],
        font: { name: 'Oswald, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🔫', '💸', '🚬', '🕴️', '🛩️'],
        animations: { buttonHover: 'smokeSwirl', pageTransition: 'cartelFade', loader: 'planeFly' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#8B6F47', '#3C2F2F'],
        font: { name: 'Oswald, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🔫', '💸', '🚬', '🕴️', '🛩️'],
        animations: { buttonHover: 'smokeSwirl', pageTransition: 'cartelFade', loader: 'planeFly' }
      }
    }
  },
  {
    id: 'jesters-joker',
    name: "Jester's Joker",
    description: 'Why so serious?',
    className: 'theme-joker',
    colors: {
      primary: '#4CAF50',
      secondary: '#D81F26',
      accent: '#FFD700',
      background: '#4A4A4A'
    },
    font: 'Creepster, cursive',
    preview: '🃏',
    emojis: ['🃏', '😂', '🎭', '🩸', '🌃'],
    category: 'Crime Drama',
    tagline: 'Why so serious?',
    modes: {
      light: {
        colors: ['#4CAF50', '#D81F26', '#FFFFFF', '#FFD700', '#4A4A4A'],
        font: { name: 'Creepster, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🃏', '😂', '🎭', '🩸', '🌃'],
        animations: { buttonHover: 'jokerLaugh', pageTransition: 'chaosFade', loader: 'cardFlip' }
      },
      dark: {
        colors: ['#2A5F31', '#A1041B', '#1C2526', '#D4A017', '#2F2F2F'],
        font: { name: 'Creepster, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🃏', '😂', '🎭', '🩸', '🌃'],
        animations: { buttonHover: 'jokerLaugh', pageTransition: 'chaosFade', loader: 'cardFlip' }
      },
      highContrast: {
        colors: ['#4CAF50', '#D81F26', '#000000', '#FFFFFF', '#FFD700'],
        font: { name: 'Creepster, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🃏', '😂', '🎭', '🩸', '🌃'],
        animations: { buttonHover: 'jokerLaugh', pageTransition: 'chaosFade', loader: 'cardFlip' }
      }
    }
  },
  {
    id: 'twisted-tenet',
    name: 'Twisted Tenet',
    description: "Don't try to understand it, feel it.",
    className: 'theme-tenet',
    colors: {
      primary: '#A3BFFA',
      secondary: '#D81F26',
      accent: '#4A4A4A',
      background: '#FFD700'
    },
    font: 'Futura, sans-serif',
    preview: '🕰️',
    emojis: ['🕰️', '🔄', '🛩️', '🕴️', '🌌'],
    category: 'Sci-Fi',
    tagline: "Don't try to understand it, feel it.",
    modes: {
      light: {
        colors: ['#A3BFFA', '#D81F26', '#FFFFFF', '#4A4A4A', '#FFD700'],
        font: { name: 'Futura, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕰️', '🔄', '🛩️', '🕴️', '🌌'],
        animations: { buttonHover: 'timeReverse', pageTransition: 'inversionFade', loader: 'clockSpin' }
      },
      dark: {
        colors: ['#1B263B', '#A1041B', '#1C2526', '#2F2F2F', '#D4A017'],
        font: { name: 'Futura, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕰️', '🔄', '🛩️', '🕴️', '🌌'],
        animations: { buttonHover: 'timeReverse', pageTransition: 'inversionFade', loader: 'clockSpin' }
      },
      highContrast: {
        colors: ['#A3BFFA', '#D81F26', '#000000', '#FFFFFF', '#FFD700'],
        font: { name: 'Futura, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕰️', '🔄', '🛩️', '🕴️', '🌌'],
        animations: { buttonHover: 'timeReverse', pageTransition: 'inversionFade', loader: 'clockSpin' }
      }
    }
  },
  {
    id: 'wistful-wandavision',
    name: 'Wistful WandaVision',
    description: 'What is grief, if not love persevering?',
    className: 'theme-wandavision',
    colors: {
      primary: '#D81F26',
      secondary: '#A3BFFA',
      accent: '#FFD700',
      background: '#4A3728'
    },
    font: 'American Typewriter, serif',
    preview: '🪄',
    emojis: ['🪄', '📺', '❤️', '🧙‍♀️', '🌌'],
    category: 'Superhero',
    tagline: 'What is grief, if not love persevering?',
    modes: {
      light: {
        colors: ['#D81F26', '#A3BFFA', '#FFFFFF', '#FFD700', '#4A3728'],
        font: { name: 'American Typewriter, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '📺', '❤️', '🧙‍♀️', '🌌'],
        animations: { buttonHover: 'hexGlow', pageTransition: 'tvStatic', loader: 'visionPhase' }
      },
      dark: {
        colors: ['#A1041B', '#1B263B', '#1C2526', '#D4A017', '#2A3728'],
        font: { name: 'American Typewriter, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '📺', '❤️', '🧙‍♀️', '🌌'],
        animations: { buttonHover: 'hexGlow', pageTransition: 'tvStatic', loader: 'visionPhase' }
      },
      highContrast: {
        colors: ['#D81F26', '#A3BFFA', '#000000', '#FFFFFF', '#FFD700'],
        font: { name: 'American Typewriter, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '📺', '❤️', '🧙‍♀️', '🌌'],
        animations: { buttonHover: 'hexGlow', pageTransition: 'tvStatic', loader: 'visionPhase' }
      }
    }
  },
  {
    id: 'rebel-robot',
    name: 'Rebel Robot',
    description: 'Hello, friend.',
    className: 'theme-robot',
    colors: {
      primary: '#00FF00',
      secondary: '#FF1E56',
      accent: '#4CAF50',
      background: '#0F3D3E'
    },
    font: 'VT323, monospace',
    preview: '💾',
    emojis: ['💾', '🖥️', '🕶️', '🔒', '🌐'],
    category: 'Sci-Fi',
    tagline: 'Hello, friend.',
    modes: {
      light: {
        colors: ['#00FF00', '#FF1E56', '#FFFFFF', '#4CAF50', '#0F3D3E'],
        font: { name: 'VT323, monospace', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔒', '🌐'],
        animations: { buttonHover: 'glitchHack', pageTransition: 'codeFlicker', loader: 'terminalBlink' }
      },
      dark: {
        colors: ['#00CC00', '#D81F26', '#1C2526', '#2A5F31', '#0B2A2A'],
        font: { name: 'VT323, monospace', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔒', '🌐'],
        animations: { buttonHover: 'glitchHack', pageTransition: 'codeFlicker', loader: 'terminalBlink' }
      },
      highContrast: {
        colors: ['#00FF00', '#FF1E56', '#000000', '#FFFFFF', '#4CAF50'],
        font: { name: 'VT323, monospace', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔒', '🌐'],
        animations: { buttonHover: 'glitchHack', pageTransition: 'codeFlicker', loader: 'terminalBlink' }
      }
    }
  },
  {
    id: 'mischievous-minions',
    name: 'Mischievous Minions',
    description: 'Bananaaaa!',
    className: 'theme-minions',
    colors: {
      primary: '#F4A261',
      secondary: '#00B7EB',
      accent: '#FFD700',
      background: '#4A4A4A'
    },
    font: 'Comic Sans MS, cursive',
    preview: '🍌',
    emojis: ['🍌', '😈', '👨‍🚀', '🦁', '🎉'],
    category: 'Animated Comedy',
    tagline: 'Bananaaaa!',
    modes: {
      light: {
        colors: ['#F4A261', '#00B7EB', '#FFFFFF', '#FFD700', '#4A4A4A'],
        font: { name: 'Comic Sans MS, cursive', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🍌', '😈', '👨‍🚀', '🦁', '🎉'],
        animations: { buttonHover: 'bananaBounce', pageTransition: 'minionRun', loader: 'goggleSpin' }
      },
      dark: {
        colors: ['#D98A40', '#0288D1', '#1C2526', '#D4A017', '#2F2F2F'],
        font: { name: 'Comic Sans MS, cursive', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🍌', '😈', '👨‍🚀', '🦁', '🎉'],
        animations: { buttonHover: 'bananaBounce', pageTransition: 'minionRun', loader: 'goggleSpin' }
      },
      highContrast: {
        colors: ['#F4A261', '#00B7EB', '#000000', '#FFFFFF', '#FFD700'],
        font: { name: 'Comic Sans MS, cursive', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🍌', '😈', '👨‍🚀', '🦁', '🎉'],
        animations: { buttonHover: 'bananaBounce', pageTransition: 'minionRun', loader: 'goggleSpin' }
      }
    }
  },
  {
    id: 'arcanes-aura',
    name: "Arcane's Aura",
    description: 'Every legend has a beginning.',
    className: 'theme-arcane',
    colors: {
      primary: '#2A9D8F',
      secondary: '#E9C46A',
      accent: '#F4A261',
      background: '#264653'
    },
    font: 'Anime Ace, sans-serif',
    preview: '⚙️',
    emojis: ['⚙️', '🪄', '💥', '🧙‍♀️', '🏙️'],
    category: 'Animated Fantasy',
    tagline: 'Every legend has a beginning.',
    modes: {
      light: {
        colors: ['#2A9D8F', '#E9C46A', '#FFFFFF', '#F4A261', '#264653'],
        font: { name: 'Anime Ace, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚙️', '🪄', '💥', '🧙‍♀️', '🏙️'],
        animations: { buttonHover: 'hexSpark', pageTransition: 'magicBurst', loader: 'gearSpin' }
      },
      dark: {
        colors: ['#2A7D6F', '#D98A40', '#1C2526', '#264653', '#1B263B'],
        font: { name: 'Anime Ace, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚙️', '🪄', '💥', '🧙‍♀️', '🏙️'],
        animations: { buttonHover: 'hexSpark', pageTransition: 'magicBurst', loader: 'gearSpin' }
      },
      highContrast: {
        colors: ['#2A9D8F', '#E9C46A', '#000000', '#FFFFFF', '#F4A261'],
        font: { name: 'Anime Ace, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚙️', '🪄', '💥', '🧙‍♀️', '🏙️'],
        animations: { buttonHover: 'hexSpark', pageTransition: 'magicBurst', loader: 'gearSpin' }
      }
    }
  },
  {
    id: 'rambunctious-rick',
    name: 'Rambunctious Rick',
    description: 'Wubba lubba dub dub!',
    className: 'theme-rick',
    colors: {
      primary: '#00B7EB',
      secondary: '#F4A261',
      accent: '#4CAF50',
      background: '#FFD700'
    },
    font: 'Get Schwifty, sans-serif',
    preview: '🚀',
    emojis: ['🚀', '🧪', '👽', '🌀', '🌌'],
    category: 'Sci-Fi Comedy',
    tagline: 'Wubba lubba dub dub!',
    modes: {
      light: {
        colors: ['#00B7EB', '#F4A261', '#FFFFFF', '#4CAF50', '#FFD700'],
        font: { name: 'Get Schwifty, sans-serif', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚀', '🧪', '👽', '🌀', '🌌'],
        animations: { buttonHover: 'portalPop', pageTransition: 'dimensionShift', loader: 'pickleSpin' }
      },
      dark: {
        colors: ['#0288D1', '#D98A40', '#1C2526', '#2A5F31', '#D4A017'],
        font: { name: 'Get Schwifty, sans-serif', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚀', '🧪', '👽', '🌀', '🌌'],
        animations: { buttonHover: 'portalPop', pageTransition: 'dimensionShift', loader: 'pickleSpin' }
      },
      highContrast: {
        colors: ['#00B7EB', '#F4A261', '#000000', '#FFFFFF', '#4CAF50'],
        font: { name: 'Get Schwifty, sans-serif', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚀', '🧪', '👽', '🌀', '🌌'],
        animations: { buttonHover: 'portalPop', pageTransition: 'dimensionShift', loader: 'pickleSpin' }
      }
    }
  },
  {
    id: 'sacred-syndicate',
    name: 'Sacred Syndicate',
    description: 'Jo bhi main bolta hoon, vahi sahi hai.',
    className: 'theme-syndicate',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#4A3728',
      background: '#8B6F47'
    },
    font: 'Noto Serif Devanagari, serif',
    preview: '🕴️',
    emojis: ['🕴️', '🔫', '🛕', '🌃', '🩸'],
    category: 'Crime Drama',
    tagline: 'Jo bhi main bolta hoon, vahi sahi hai.',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#FFFFFF', '#4A3728', '#8B6F47'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕴️', '🔫', '🛕', '🌃', '🩸'],
        animations: { buttonHover: 'bloodDrip', pageTransition: 'cityFade', loader: 'gunSpin' }
      },
      dark: {
        colors: ['#A1041B', '#D4A017', '#1C2526', '#2A3728', '#5F4B2B'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕴️', '🔫', '🛕', '🌃', '🩸'],
        animations: { buttonHover: 'bloodDrip', pageTransition: 'cityFade', loader: 'gunSpin' }
      },
      highContrast: {
        colors: ['#D81F26', '#FFD700', '#000000', '#FFFFFF', '#8B6F47'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕴️', '🔫', '🛕', '🌃', '🩸'],
        animations: { buttonHover: 'bloodDrip', pageTransition: 'cityFade', loader: 'gunSpin' }
      }
    }
  },
  {
    id: 'bountiful-bollywood',
    name: 'Bountiful Bollywood',
    description: 'Pyaar dosti hai.',
    className: 'theme-bollywood',
    colors: {
      primary: '#FFD700',
      secondary: '#D81F26',
      accent: '#00B7EB',
      background: '#A68A64'
    },
    font: 'Noto Serif Devanagari, serif',
    preview: '💃',
    emojis: ['💃', '🕺', '🎬', '🎶', '🌹'],
    category: 'Romance Drama',
    tagline: 'Pyaar dosti hai.',
    modes: {
      light: {
        colors: ['#FFD700', '#D81F26', '#FFFFFF', '#00B7EB', '#A68A64'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💃', '🕺', '🎬', '🎶', '🌹'],
        animations: { buttonHover: 'danceTwirl', pageTransition: 'songFade', loader: 'reelSpin' }
      },
      dark: {
        colors: ['#D4A017', '#A1041B', '#1C2526', '#0288D1', '#4A3728'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💃', '🕺', '🎬', '🎶', '🌹'],
        animations: { buttonHover: 'danceTwirl', pageTransition: 'songFade', loader: 'reelSpin' }
      },
      highContrast: {
        colors: ['#FFD700', '#D81F26', '#000000', '#FFFFFF', '#00B7EB'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💃', '🕺', '🎬', '🎶', '🌹'],
        animations: { buttonHover: 'danceTwirl', pageTransition: 'songFade', loader: 'reelSpin' }
      }
    }
  },
  {
    id: 'dharmas-delight',
    name: "Dharma's Delight",
    description: 'Kuch kuch hota hai.',
    className: 'theme-dharma',
    colors: {
      primary: '#E91E63',
      secondary: '#FFD700',
      accent: '#00B7EB',
      background: '#A3BFFA'
    },
    font: 'Noto Serif Devanagari, serif',
    preview: '💕',
    emojis: ['💕', '🎬', '💃', '🕺', '🌟'],
    category: 'Romance Drama',
    tagline: 'Kuch kuch hota hai.',
    modes: {
      light: {
        colors: ['#E91E63', '#FFD700', '#FFFFFF', '#00B7EB', '#A3BFFA'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💕', '🎬', '💃', '🕺', '🌟'],
        animations: { buttonHover: 'heartPulse', pageTransition: 'loveFade', loader: 'starSpin' }
      },
      dark: {
        colors: ['#B01B4A', '#D4A017', '#1C2526', '#0288D1', '#1B263B'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💕', '🎬', '💃', '🕺', '🌟'],
        animations: { buttonHover: 'heartPulse', pageTransition: 'loveFade', loader: 'starSpin' }
      },
      highContrast: {
        colors: ['#E91E63', '#FFD700', '#000000', '#FFFFFF', '#00B7EB'],
        font: { name: 'Noto Serif Devanagari, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💕', '🎬', '💃', '🕺', '🌟'],
        animations: { buttonHover: 'heartPulse', pageTransition: 'loveFade', loader: 'starSpin' }
      }
    }
  },
  // --- New Themes Start ---
  {
    id: 'bladerun',
    name: 'Blade Runner',
    description: 'Neo-noir, rain-soaked future.',
    className: 'theme-bladerun',
    colors: {
      primary: '#1B263B',
      secondary: '#FF3366',
      accent: '#00FFF7',
      background: '#232946'
    },
    font: 'Orbitron, sans-serif',
    preview: '',
    emojis: [],
    category: 'Sci-Fi',
    tagline: 'Neo-noir, rain-soaked future.',
    modes: {
      light: {
        colors: ['#1B263B', '#FF3366', '#232946', '#00FFF7', '#F5F5F5'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#232946', '#FF3366', '#1B263B', '#00FFF7', '#232946'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#00FFF7', '#000000', '#FFFFFF', '#FF3366', '#232946'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'lala',
    name: 'La La Land',
    description: 'A technicolor dream of jazz and love.',
    className: 'theme-lala',
    colors: {
      primary: '#5B2C6F',
      secondary: '#F7CAC9',
      accent: '#F9D423',
      background: '#2E1A47'
    },
    font: 'Parisienne, cursive',
    preview: '',
    emojis: [],
    category: 'Musical',
    tagline: 'A technicolor dream of jazz and love.',
    modes: {
      light: {
        colors: ['#5B2C6F', '#F7CAC9', '#2E1A47', '#F9D423', '#FFFFFF'],
        font: { name: 'Parisienne, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#2E1A47', '#F7CAC9', '#5B2C6F', '#F9D423', '#2E1A47'],
        font: { name: 'Parisienne, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#F9D423', '#000000', '#FFFFFF', '#5B2C6F', '#2E1A47'],
        font: { name: 'Parisienne, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'brbad',
    name: 'Breaking Bad',
    description: 'Say my name.',
    className: 'theme-brbad',
    colors: {
      primary: '#A4C639',
      secondary: '#222222',
      accent: '#F5F5F5',
      background: '#F8E16C'
    },
    font: 'Roboto Mono, monospace',
    preview: '',
    emojis: [],
    category: 'Crime Drama',
    tagline: 'Say my name.',
    modes: {
      light: {
        colors: ['#A4C639', '#222222', '#F8E16C', '#F5F5F5', '#FFFFFF'],
        font: { name: 'Roboto Mono, monospace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#222222', '#A4C639', '#F8E16C', '#F5F5F5', '#222222'],
        font: { name: 'Roboto Mono, monospace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#A4C639', '#000000', '#FFFFFF', '#F8E16C', '#222222'],
        font: { name: 'Roboto Mono, monospace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'barbie',
    name: 'Barbie',
    description: "Life in plastic, it's fantastic!",
    className: 'theme-barbie',
    colors: {
      primary: '#FF69B4',
      secondary: '#FFF0F5',
      accent: '#FFD1DC',
      background: '#FFFFFF'
    },
    font: 'Pacifico, cursive',
    preview: '',
    emojis: [],
    category: 'Fantasy',
    tagline: "Life in plastic, it's fantastic!",
    modes: {
      light: {
        colors: ['#FF69B4', '#FFF0F5', '#FFFFFF', '#FFD1DC', '#FFFFFF'],
        font: { name: 'Pacifico, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#FFF0F5', '#FF69B4', '#FFD1DC', '#FFFFFF', '#FFD1DC'],
        font: { name: 'Pacifico, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#FF69B4', '#000000', '#FFFFFF', '#FFD1DC', '#FFF0F5'],
        font: { name: 'Pacifico, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'wes',
    name: 'Wes Anderson',
    description: 'Symmetry and whimsy in every frame.',
    className: 'theme-wes',
    colors: {
      primary: '#F7C873',
      secondary: '#E07A5F',
      accent: '#81B29A',
      background: '#F2CC8F'
    },
    font: 'Quicksand, sans-serif',
    preview: '',
    emojis: [],
    category: 'Art House',
    tagline: 'Symmetry and whimsy in every frame.',
    modes: {
      light: {
        colors: ['#F7C873', '#E07A5F', '#F2CC8F', '#81B29A', '#FFFFFF'],
        font: { name: 'Quicksand, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#E07A5F', '#F7C873', '#F2CC8F', '#81B29A', '#E07A5F'],
        font: { name: 'Quicksand, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#F7C873', '#000000', '#FFFFFF', '#E07A5F', '#F2CC8F'],
        font: { name: 'Quicksand, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'cars',
    name: 'Cars (Pixar)',
    description: 'Speed. I am speed.',
    className: 'theme-cars',
    colors: {
      primary: '#E63946',
      secondary: '#F1FAEE',
      accent: '#FFD166',
      background: '#457B9D'
    },
    font: 'Bangers, cursive',
    preview: '',
    emojis: [],
    category: 'Animated',
    tagline: 'Speed. I am speed.',
    modes: {
      light: {
        colors: ['#E63946', '#F1FAEE', '#457B9D', '#FFD166', '#FFFFFF'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#457B9D', '#E63946', '#FFD166', '#F1FAEE', '#457B9D'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#FFD166', '#000000', '#FFFFFF', '#E63946', '#457B9D'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'jurassic',
    name: 'Jurassic Park',
    description: 'Life finds a way.',
    className: 'theme-jurassic',
    colors: {
      primary: '#2E7D32',
      secondary: '#C62828',
      accent: '#FFD600',
      background: '#212121'
    },
    font: 'Anton, sans-serif',
    preview: '',
    emojis: [],
    category: 'Adventure',
    tagline: 'Life finds a way.',
    modes: {
      light: {
        colors: ['#2E7D32', '#C62828', '#212121', '#FFD600', '#FFFFFF'],
        font: { name: 'Anton, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#212121', '#2E7D32', '#FFD600', '#C62828', '#212121'],
        font: { name: 'Anton, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#FFD600', '#000000', '#FFFFFF', '#2E7D32', '#212121'],
        font: { name: 'Anton, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'pirates',
    name: 'Pirates of the Caribbean',
    description: "A pirate's life for me.",
    className: 'theme-pirates',
    colors: {
      primary: '#2D2D2D',
      secondary: '#C49E60',
      accent: '#0077B6',
      background: '#1B263B'
    },
    font: 'Pirata One, cursive',
    preview: '',
    emojis: [],
    category: 'Adventure',
    tagline: "A pirate's life for me.",
    modes: {
      light: {
        colors: ['#2D2D2D', '#C49E60', '#1B263B', '#0077B6', '#FFFFFF'],
        font: { name: 'Pirata One, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#1B263B', '#2D2D2D', '#C49E60', '#0077B6', '#1B263B'],
        font: { name: 'Pirata One, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#C49E60', '#000000', '#FFFFFF', '#2D2D2D', '#1B263B'],
        font: { name: 'Pirata One, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'superman',
    name: 'Superman',
    description: 'Truth, justice, and hope.',
    className: 'theme-superman',
    colors: {
      primary: '#1976D2',
      secondary: '#E53935',
      accent: '#FFD600',
      background: '#F5F5F5'
    },
    font: 'Bangers, cursive',
    preview: '',
    emojis: [],
    category: 'Superhero',
    tagline: 'Truth, justice, and hope.',
    modes: {
      light: {
        colors: ['#1976D2', '#E53935', '#F5F5F5', '#FFD600', '#FFFFFF'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#E53935', '#1976D2', '#FFD600', '#F5F5F5', '#E53935'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#FFD600', '#000000', '#FFFFFF', '#1976D2', '#F5F5F5'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'slb',
    name: 'Sanjay Leela Bhansali',
    description: 'Opulence and drama, Bollywood style.',
    className: 'theme-slb',
    colors: {
      primary: '#B71C1C',
      secondary: '#FFD700',
      accent: '#1A237E',
      background: '#F3E5AB'
    },
    font: 'Dancing Script, cursive',
    preview: '',
    emojis: [],
    category: 'Bollywood',
    tagline: 'Opulence and drama, Bollywood style.',
    modes: {
      light: {
        colors: ['#B71C1C', '#FFD700', '#F3E5AB', '#1A237E', '#FFFFFF'],
        font: { name: 'Dancing Script, cursive', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#FFD700', '#B71C1C', '#1A237E', '#F3E5AB', '#FFD700'],
        font: { name: 'Dancing Script, cursive', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#B71C1C', '#F3E5AB'],
        font: { name: 'Dancing Script, cursive', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'rockstar',
    name: 'Rockstar',
    description: 'Music. Rebellion. Love.',
    className: 'theme-rockstar',
    colors: {
      primary: '#B71C1C',
      secondary: '#FFD600',
      accent: '#212121',
      background: '#1A1A1A'
    },
    font: 'Rock Salt, cursive',
    preview: '',
    emojis: [],
    category: 'Bollywood',
    tagline: 'Music. Rebellion. Love.',
    modes: {
      light: {
        colors: ['#B71C1C', '#FFD600', '#1A1A1A', '#212121', '#FFFFFF'],
        font: { name: 'Rock Salt, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#1A1A1A', '#B71C1C', '#FFD600', '#212121', '#1A1A1A'],
        font: { name: 'Rock Salt, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#FFD600', '#000000', '#FFFFFF', '#B71C1C', '#1A1A1A'],
        font: { name: 'Rock Salt, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'godfather',
    name: 'The Godfather',
    description: "An offer you can't refuse.",
    className: 'theme-godfather',
    colors: {
      primary: '#000000',
      secondary: '#B71C1C',
      accent: '#FFD600',
      background: '#F5F5F5'
    },
    font: 'Cinzel, serif',
    preview: '',
    emojis: [],
    category: 'Crime Drama',
    tagline: "An offer you can't refuse.",
    modes: {
      light: {
        colors: ['#000000', '#B71C1C', '#F5F5F5', '#FFD600', '#FFFFFF'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#B71C1C', '#000000', '#FFD600', '#F5F5F5', '#B71C1C'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#FFD600', '#000000', '#FFFFFF', '#B71C1C', '#F5F5F5'],
        font: { name: 'Cinzel, serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'odyssey',
    name: 'Space Odyssey',
    description: 'Beyond the infinite.',
    className: 'theme-odyssey',
    colors: {
      primary: '#000000',
      secondary: '#E53935',
      accent: '#1976D2',
      background: '#F5F5F5'
    },
    font: 'Orbitron, sans-serif',
    preview: '',
    emojis: [],
    category: 'Sci-Fi',
    tagline: 'Beyond the infinite.',
    modes: {
      light: {
        colors: ['#000000', '#E53935', '#F5F5F5', '#1976D2', '#FFFFFF'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#E53935', '#000000', '#1976D2', '#F5F5F5', '#E53935'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#1976D2', '#000000', '#FFFFFF', '#E53935', '#F5F5F5'],
        font: { name: 'Orbitron, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'scarface',
    name: 'Scarface',
    description: 'The world is yours.',
    className: 'theme-scarface',
    colors: {
      primary: '#000000',
      secondary: '#FFD600',
      accent: '#E53935',
      background: '#F5F5F5'
    },
    font: 'Oswald, sans-serif',
    preview: '',
    emojis: [],
    category: 'Crime Drama',
    tagline: 'The world is yours.',
    modes: {
      light: {
        colors: ['#000000', '#FFD600', '#F5F5F5', '#E53935', '#FFFFFF'],
        font: { name: 'Oswald, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#FFD600', '#000000', '#E53935', '#F5F5F5', '#FFD600'],
        font: { name: 'Oswald, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#E53935', '#000000', '#FFFFFF', '#FFD600', '#F5F5F5'],
        font: { name: 'Oswald, sans-serif', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  },
  {
    id: 'starwars',
    name: 'Star Wars',
    description: 'A long time ago in a galaxy far, far away…',
    className: 'theme-starwars',
    colors: {
      primary: '#000000',
      secondary: '#FFE81F',
      accent: '#1976D2',
      background: '#F5F5F5'
    },
    font: 'Bangers, cursive',
    preview: '',
    emojis: [],
    category: 'Sci-Fi',
    tagline: 'A long time ago in a galaxy far, far away…',
    modes: {
      light: {
        colors: ['#000000', '#FFE81F', '#F5F5F5', '#1976D2', '#FFFFFF'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      dark: {
        colors: ['#FFE81F', '#000000', '#1976D2', '#F5F5F5', '#FFE81F'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      },
      highContrast: {
        colors: ['#1976D2', '#000000', '#FFFFFF', '#FFE81F', '#F5F5F5'],
        font: { name: 'Bangers, cursive', weight: ['regular'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: [],
        animations: {}
      }
    }
  }
];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [isSecondaryMode, setIsSecondaryMode] = useState(false);
  const [customFont, setCustomFont] = useState('');

  useEffect(() => {
    const savedThemeId = localStorage.getItem('feelim_theme');
    const savedFont = localStorage.getItem('feelim_custom_font');
    const savedColorMode = localStorage.getItem('feelim_color_mode');
    
    if (savedThemeId) {
      const savedTheme = themes.find(theme => theme.id === savedThemeId);
      if (savedTheme) {
        setCurrentTheme(savedTheme);
      }
    }
    
    if (savedFont) {
      setCustomFont(savedFont);
    }
    
    if (savedColorMode === 'secondary') {
      setIsSecondaryMode(true);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    const mode = theme.modes.light;
    
    const fontToUse = customFont || mode.font.name;
    
    root.style.setProperty('--theme-primary', isSecondaryMode ? theme.colors.secondary : theme.colors.primary);
    root.style.setProperty('--theme-secondary', isSecondaryMode ? theme.colors.primary : theme.colors.secondary);
    root.style.setProperty('--theme-background', theme.colors.background);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--font-family', fontToUse);
    
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };
    
    const primaryColor = isSecondaryMode ? theme.colors.secondary : theme.colors.primary;
    const secondaryColor = isSecondaryMode ? theme.colors.primary : theme.colors.secondary;
    const backgroundRgb = hexToRgb(theme.colors.background);
    const accentRgb = hexToRgb(theme.colors.accent);
    
    const primaryRgb = hexToRgb(primaryColor);
    const secondaryRgb = hexToRgb(secondaryColor);
    
    if (primaryRgb) {
      root.style.setProperty('--theme-primary-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
    }
    if (secondaryRgb) {
      root.style.setProperty('--theme-secondary-rgb', `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`);
    }
    if (backgroundRgb) {
      root.style.setProperty('--theme-background-rgb', `${backgroundRgb.r}, ${backgroundRgb.g}, ${backgroundRgb.b}`);
    }
    if (accentRgb) {
      root.style.setProperty('--theme-accent-rgb', `${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}`);
    }
  };

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('feelim_theme', theme.id);
    applyTheme(theme);
  };

  const changeTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setTheme(theme);
    }
  };

  const toggleColorMode = () => {
    const newMode = !isSecondaryMode;
    setIsSecondaryMode(newMode);
    localStorage.setItem('feelim_color_mode', newMode ? 'secondary' : 'primary');
    applyTheme(currentTheme);
  };

  const setGoogleFont = (font: string) => {
    setCustomFont(font);
    localStorage.setItem('feelim_custom_font', font);
    
    const existingLink = document.querySelector(`link[href*="${encodeURIComponent(font)}"]`);
    if (!existingLink && font) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}:wght@400;700&display=swap`;
      document.head.appendChild(link);
    }
    
    applyTheme(currentTheme);
  };

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme, isSecondaryMode, customFont]);

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setTheme,
      changeTheme,
      themes,
      isSecondaryMode,
      toggleColorMode,
      customFont,
      setGoogleFont
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
