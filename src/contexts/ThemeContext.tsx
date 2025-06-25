import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '@/types';
import { storage } from '@/lib/storage';

// Complete theme collection with ALL themes from knowledge base
const themes: Theme[] = [
  {
    id: 'default',
    name: 'Default Dark',
    description: 'Clean and modern dark theme with subtle gradients',
    className: 'theme-default',
    colors: {
      primary: '#ec4899',
      secondary: '#64748b', 
      accent: '#f472b6',
      background: '#0f172a'
    },
    font: 'Inter',
    preview: 'bg-gradient-to-br from-slate-900 via-slate-800 to-pink-900',
    emojis: ['💫', '🌟', '✨', '🎨', '🌙'],
    category: 'Modern',
    tagline: 'Clean and elegant',
    modes: {
      light: {
        colors: ['#ec4899', '#64748b', '#f472b6', '#ffffff', '#0f172a'],
        font: { name: 'Inter', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💫', '🌟', '✨', '🎨', '🌙'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#ec4899', '#64748b', '#f472b6', '#0f172a', '#1e293b'],
        font: { name: 'Inter', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💫', '🌟', '✨', '🎨', '🌙'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#ec4899', '#000000', '#ffffff', '#f472b6', '#64748b'],
        font: { name: 'Inter', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💫', '🌟', '✨', '🎨', '🌙'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'spider-verse',
    name: 'Spectacular Spider-Verse',
    description: 'With great power comes great responsibility.',
    className: 'theme-spider-verse',
    colors: {
      primary: '#FF1E56',
      secondary: '#00B7EB',
      accent: '#F5E050',
      background: '#1a1a2e'
    },
    font: 'Anime Ace',
    preview: 'bg-gradient-to-br from-red-600 via-blue-500 to-yellow-400',
    emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
    category: 'Superhero',
    tagline: 'With great power comes great responsibility.',
    modes: {
      light: {
        colors: ['#FF1E56', '#00B7EB', '#FFFFFF', '#F5E050', '#FF6F61'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: { buttonHover: 'webSwing', pageTransition: 'comicPop', loader: 'spiderSpin' }
      },
      dark: {
        colors: ['#D81F26', '#0288D1', '#1C2526', '#E0C120', '#E64A45'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: { buttonHover: 'webSwing', pageTransition: 'comicPop', loader: 'spiderSpin' }
      },
      highContrast: {
        colors: ['#FF1E56', '#000000', '#FFFFFF', '#FFFF00', '#FF6F61'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: { buttonHover: 'webSwing', pageTransition: 'comicPop', loader: 'spiderSpin' }
      }
    }
  },
  {
    id: 'dune-desert',
    name: 'Dazzling Dune',
    description: 'The spice must flow.',
    className: 'theme-dune',
    colors: {
      primary: '#D9A86C',
      secondary: '#8B5523',
      accent: '#F4E4BC',
      background: '#3C2F2F'
    },
    font: 'Cinzel',
    preview: 'bg-gradient-to-br from-amber-600 via-orange-800 to-yellow-200',
    emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
    category: 'Fantasy',
    tagline: 'The spice must flow.',
    modes: {
      light: {
        colors: ['#D9A86C', '#8B5523', '#F4E4BC', '#FFFFFF', '#3C2F2F'],
        font: { name: 'Cinzel', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D9A86C', '#8B5523', '#F4E4BC', '#0f172a', '#3C2F2F'],
        font: { name: 'Cinzel', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D9A86C', '#000000', '#FFFFFF', '#F4E4BC', '#8B5523'],
        font: { name: 'Cinzel', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'interstellar-space',
    name: 'Intriguing Interstellar',
    description: 'We must reach for the stars.',
    className: 'theme-interstellar',
    colors: {
      primary: '#A3BFFA',
      secondary: '#3A5F7D',
      accent: '#F4A261',
      background: '#0B1C2E'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-blue-600 via-indigo-800 to-orange-400',
    emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
    category: 'Science Fiction',
    tagline: 'We must reach for the stars.',
    modes: {
      light: {
        colors: ['#A3BFFA', '#3A5F7D', '#F4A261', '#FFFFFF', '#0B1C2E'],
        font: { name: 'Orbitron', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#A3BFFA', '#3A5F7D', '#F4A261', '#0f172a', '#0B1C2E'],
        font: { name: 'Orbitron', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#A3BFFA', '#000000', '#FFFFFF', '#F4A261', '#3A5F7D'],
        font: { name: 'Orbitron', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'matrix-code',
    name: 'Mystical Matrix',
    description: 'There is no spoon.',
    className: 'theme-matrix',
    colors: {
      primary: '#4CAF50',
      secondary: '#00FF00',
      accent: '#2E7D32',
      background: '#0F3D3E'
    },
    font: 'VT323',
    preview: 'bg-gradient-to-br from-green-500 via-teal-800 to-black',
    emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
    category: 'Science Fiction',
    tagline: 'There is no spoon.',
    modes: {
      light: {
        colors: ['#4CAF50', '#00FF00', '#2E7D32', '#FFFFFF', '#0F3D3E'],
        font: { name: 'VT323', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#4CAF50', '#00FF00', '#2E7D32', '#0f172a', '#0F3D3E'],
        font: { name: 'VT323', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#4CAF50', '#000000', '#FFFFFF', '#00FF00', '#2E7D32'],
        font: { name: 'VT323', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'hogwarts-magic',
    name: 'Hogwarts Harmony',
    description: 'It does not do to dwell on dreams and forget to live.',
    className: 'theme-hogwarts',
    colors: {
      primary: '#A68A64',
      secondary: '#FFD700',
      accent: '#2A623D',
      background: '#4A3728'
    },
    font: 'Luminary',
    preview: 'bg-gradient-to-br from-amber-600 via-yellow-500 to-green-700',
    emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
    category: 'Fantasy',
    tagline: 'It does not do to dwell on dreams and forget to live.',
    modes: {
      light: {
        colors: ['#A68A64', '#FFD700', '#2A623D', '#FFFFFF', '#4A3728'],
        font: { name: 'Luminary', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#A68A64', '#FFD700', '#2A623D', '#0f172a', '#4A3728'],
        font: { name: 'Luminary', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#A68A64', '#000000', '#FFFFFF', '#FFD700', '#2A623D'],
        font: { name: 'Luminary', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'batman-dark',
    name: 'Brooding Batman',
    description: 'I am vengeance, I am the night, I am Batman!',
    className: 'theme-batman',
    colors: {
      primary: '#B0BEC5',
      secondary: '#4A4A4A',
      accent: '#FFCA28',
      background: '#1C2526'
    },
    font: 'Gotham',
    preview: 'bg-gradient-to-br from-gray-800 via-black to-yellow-600',
    emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
    category: 'Superhero',
    tagline: 'I am vengeance, I am the night, I am Batman!',
    modes: {
      light: {
        colors: ['#B0BEC5', '#4A4A4A', '#FFCA28', '#FFFFFF', '#1C2526'],
        font: { name: 'Gotham', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#B0BEC5', '#4A4A4A', '#FFCA28', '#0f172a', '#1C2526'],
        font: { name: 'Gotham', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#B0BEC5', '#000000', '#FFFFFF', '#FFCA28', '#4A4A4A'],
        font: { name: 'Gotham', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'wakanda-vibranium',
    name: 'Vibrant Vibranium',
    description: 'Wakanda forever!',
    className: 'theme-wakanda',
    colors: {
      primary: '#D4A017',
      secondary: '#6B3FA0',
      accent: '#FFD700',
      background: '#2C1A3D'
    },
    font: 'Futura',
    preview: 'bg-gradient-to-br from-purple-600 via-yellow-600 to-gold',
    emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
    category: 'Fantasy',
    tagline: 'Wakanda forever!',
    modes: {
      light: {
        colors: ['#D4A017', '#6B3FA0', '#FFD700', '#FFFFFF', '#2C1A3D'],
        font: { name: 'Futura', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D4A017', '#6B3FA0', '#FFD700', '#0f172a', '#2C1A3D'],
        font: { name: 'Futura', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D4A017', '#000000', '#FFFFFF', '#FFD700', '#6B3FA0'],
        font: { name: 'Futura', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'loki-mischief',
    name: 'Luscious Loki',
    description: 'I am burdened with glorious purpose.',
    className: 'theme-loki',
    colors: {
      primary: '#2A9D8F',
      secondary: '#E9C46A',
      accent: '#F4A261',
      background: '#264653'
    },
    font: 'Papyrus',
    preview: 'bg-gradient-to-br from-teal-600 via-yellow-500 to-orange-400',
    emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄'],
    category: 'Fantasy',
    tagline: 'I am burdened with glorious purpose.',
    modes: {
      light: {
        colors: ['#2A9D8F', '#E9C46A', '#F4A261', '#FFFFFF', '#264653'],
        font: { name: 'Papyrus', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#2A9D8F', '#E9C46A', '#F4A261', '#0f172a', '#264653'],
        font: { name: 'Papyrus', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#2A9D8F', '#000000', '#FFFFFF', '#F4A261', '#E9C46A'],
        font: { name: 'Papyrus', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'peaky-blinders',
    name: 'Pensive Peaky',
    description: 'By order of the Peaky Blinders.',
    className: 'theme-peaky',
    colors: {
      primary: '#D9C2A6',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Bebas Neue',
    preview: 'bg-gradient-to-br from-amber-700 via-brown-600 to-gray-800',
    emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️'],
    category: 'Crime',
    tagline: 'By order of the Peaky Blinders.',
    modes: {
      light: {
        colors: ['#D9C2A6', '#8B6F47', '#4A3728', '#FFFFFF', '#3C2F2F'],
        font: { name: 'Bebas Neue', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D9C2A6', '#8B6F47', '#4A3728', '#0f172a', '#3C2F2F'],
        font: { name: 'Bebas Neue', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D9C2A6', '#000000', '#FFFFFF', '#8B6F47', '#4A3728'],
        font: { name: 'Bebas Neue', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'mcu-avengers',
    name: 'Mighty MCU',
    description: 'Avengers, assemble!',
    className: 'theme-mcu',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#00B7EB',
      background: '#1C2526'
    },
    font: 'Avenir',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-blue-500',
    emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
    category: 'Superhero',
    tagline: 'Avengers, assemble!',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#00B7EB', '#FFFFFF', '#1C2526'],
        font: { name: 'Avenir', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D81F26', '#FFD700', '#00B7EB', '#0f172a', '#1C2526'],
        font: { name: 'Avenir', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#00B7EB', '#FFD700'],
        font: { name: 'Avenir', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'squid-game',
    name: 'Sinister Squid',
    description: 'Ready, set, play.',
    className: 'theme-squid',
    colors: {
      primary: '#E91E63',
      secondary: '#0288D1',
      accent: '#4CAF50',
      background: '#1C2526'
    },
    font: 'Roboto Condensed',
    preview: 'bg-gradient-to-br from-pink-600 via-blue-600 to-green-500',
    emojis: ['🎮', '🟥', '🟢', '🔺', '⬛'],
    category: 'Science Fiction',
    tagline: 'Ready, set, play.',
    modes: {
      light: {
        colors: ['#E91E63', '#0288D1', '#4CAF50', '#FFFFFF', '#1C2526'],
        font: { name: 'Roboto Condensed', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎮', '🟥', '🟢', '🔺', '⬛'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#E91E63', '#0288D1', '#4CAF50', '#0f172a', '#1C2526'],
        font: { name: 'Roboto Condensed', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎮', '🟥', '🟢', '🔺', '⬛'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#E91E63', '#000000', '#FFFFFF', '#4CAF50', '#0288D1'],
        font: { name: 'Roboto Condensed', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎮', '🟥', '🟢', '🔺', '⬛'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'game-of-thrones',
    name: "Throne's Triumph",
    description: 'Winter is coming.',
    className: 'theme-got',
    colors: {
      primary: '#FFD700',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Trajan Pro',
    preview: 'bg-gradient-to-br from-yellow-600 via-amber-700 to-gray-800',
    emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️'],
    category: 'Fantasy',
    tagline: 'Winter is coming.',
    modes: {
      light: {
        colors: ['#FFD700', '#8B6F47', '#4A3728', '#FFFFFF', '#3C2F2F'],
        font: { name: 'Trajan Pro', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#FFD700', '#8B6F47', '#4A3728', '#0f172a', '#3C2F2F'],
        font: { name: 'Trajan Pro', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#8B6F47', '#4A3728'],
        font: { name: 'Trajan Pro', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'avatar-pandora',
    name: 'Azure Avatar',
    description: 'We are one with the forest.',
    className: 'theme-avatar',
    colors: {
      primary: '#00A3AD',
      secondary: '#A3D39C',
      accent: '#4CAF50',
      background: '#1B263B'
    },
    font: 'Papyrus',
    preview: 'bg-gradient-to-br from-cyan-600 via-green-500 to-teal-800',
    emojis: ['🌍', '🐉', '🌿', '🪶', '🦋'],
    category: 'Fantasy',
    tagline: 'We are one with the forest.',
    modes: {
      light: {
        colors: ['#00A3AD', '#A3D39C', '#4CAF50', '#FFFFFF', '#1B263B'],
        font: { name: 'Papyrus', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌍', '🐉', '🌿', '🪶', '🦋'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#00A3AD', '#A3D39C', '#4CAF50', '#0f172a', '#1B263B'],
        font: { name: 'Papyrus', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌍', '🐉', '🌿', '🪶', '🦋'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#00A3AD', '#000000', '#FFFFFF', '#A3D39C', '#00A3AD'],
        font: { name: 'Papyrus', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌍', '🐉', '🌿', '🪶', '🦋'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'casa-de-papel',
    name: 'Heistful Hustle',
    description: 'Bella Ciao!',
    className: 'theme-casa',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#B0BEC5',
      background: '#4A3728'
    },
    font: 'Eurostile',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-gray-500',
    emojis: ['🎭', '💰', '🔫', '🕴️', '📜'],
    category: 'Crime',
    tagline: 'Bella Ciao!',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#B0BEC5', '#FFFFFF', '#4A3728'],
        font: { name: 'Eurostile', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎭', '💰', '🔫', '🕴️', '📜'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D81F26', '#FFD700', '#B0BEC5', '#0f172a', '#4A3728'],
        font: { name: 'Eurostile', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎭', '💰', '🔫', '🕴️', '📜'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#FFD700', '#B0BEC5'],
        font: { name: 'Eurostile', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎭', '💰', '🔫', '🕴️', '📜'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'witcher-geralt',
    name: "Witcher's Wrath",
    description: 'Destiny is a beast.',
    className: 'theme-witcher',
    colors: {
      primary: '#A68A64',
      secondary: '#FFD700',
      accent: '#4A3728',
      background: '#4A3728'
    },
    font: 'Cinzel',
    preview: 'bg-gradient-to-br from-amber-600 via-yellow-500 to-green-800',
    emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️'],
    category: 'Fantasy',
    tagline: 'Destiny is a beast.',
    modes: {
      light: {
        colors: ['#A68A64', '#FFD700', '#4A3728', '#FFFFFF', '#4A3728'],
        font: { name: 'Cinzel', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#A68A64', '#FFD700', '#4A3728', '#0f172a', '#4A3728'],
        font: { name: 'Cinzel', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#A68A64', '#000000', '#FFFFFF', '#FFD700', '#4A3728'],
        font: { name: 'Cinzel', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'deadpool-chaos',
    name: 'Dashing Deadpool',
    description: 'Maximum effort!',
    className: 'theme-deadpool',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#B0BEC5',
      background: '#4A4A4A'
    },
    font: 'Impact',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-gray-500',
    emojis: ['🗡️', '🔫', '😂', '💥', '🌮'],
    category: 'Superhero',
    tagline: 'Maximum effort!',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#B0BEC5', '#FFFFFF', '#4A4A4A'],
        font: { name: 'Impact', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🔫', '😂', '💥', '🌮'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D81F26', '#FFD700', '#B0BEC5', '#0f172a', '#4A4A4A'],
        font: { name: 'Impact', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🔫', '😂', '💥', '🌮'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#FFD700', '#B0BEC5'],
        font: { name: 'Impact', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🗡️', '🔫', '😂', '💥', '🌮'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'studio-ghibli',
    name: "Ghibli's Glow",
    description: 'The wind rises, we must try to live.',
    className: 'theme-ghibli',
    colors: {
      primary: '#A3D39C',
      secondary: '#00A3AD',
      accent: '#FFD700',
      background: '#2A623D'
    },
    font: 'Anime Ace',
    preview: 'bg-gradient-to-br from-green-400 via-cyan-500 to-yellow-400',
    emojis: ['🌸', '🐾', '🌿', '🪄', '🍃'],
    category: 'Fantasy',
    tagline: 'The wind rises, we must try to live.',
    modes: {
      light: {
        colors: ['#A3D39C', '#00A3AD', '#FFD700', '#FFFFFF', '#2A623D'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌸', '🐾', '🌿', '🪄', '🍃'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#A3D39C', '#00A3AD', '#FFD700', '#0f172a', '#2A623D'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌸', '🐾', '🌿', '🪄', '🍃'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#A3D39C', '#000000', '#FFFFFF', '#FFD700', '#00A3AD'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🌸', '🐾', '🌿', '🪄', '🍃'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'jumanji-jungle',
    name: "Jumanji's Jungle",
    description: 'In the jungle, you must wait, until the dice read five or eight.',
    className: 'theme-jumanji',
    colors: {
      primary: '#2A623D',
      secondary: '#8B6F47',
      accent: '#D9A86C',
      background: '#1A472A'
    },
    font: 'Jungle Fever',
    preview: 'bg-gradient-to-br from-green-700 via-amber-600 to-yellow-500',
    emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️'],
    category: 'Fantasy',
    tagline: 'In the jungle, you must wait, until the dice read five or eight.',
    modes: {
      light: {
        colors: ['#2A623D', '#8B6F47', '#D9A86C', '#FFFFFF', '#1A472A'],
        font: { name: 'Jungle Fever', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#2A623D', '#8B6F47', '#D9A86C', '#0f172a', '#1A472A'],
        font: { name: 'Jungle Fever', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#2A623D', '#000000', '#FFFFFF', '#D9A86C', '#8B6F47'],
        font: { name: 'Jungle Fever', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'titanic-romance',
    name: 'Tragic Titanic',
    description: "I'm the king of the world!",
    className: 'theme-titanic',
    colors: {
      primary: '#A3BFFA',
      secondary: '#FFD700',
      accent: '#D9C2A6',
      background: '#1B263B'
    },
    font: 'Great Vibes',
    preview: 'bg-gradient-to-br from-blue-400 via-yellow-500 to-amber-600',
    emojis: ['🚢', '💎', '🌊', '❤️', '🎻'],
    category: 'Fantasy',
    tagline: "I'm the king of the world!",
    modes: {
      light: {
        colors: ['#A3BFFA', '#FFD700', '#D9C2A6', '#FFFFFF', '#1B263B'],
        font: { name: 'Great Vibes', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚢', '💎', '🌊', '❤️', '🎻'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#A3BFFA', '#FFD700', '#D9C2A6', '#0f172a', '#1B263B'],
        font: { name: 'Great Vibes', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚢', '💎', '🌊', '❤️', '🎻'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#A3BFFA', '#000000', '#FFFFFF', '#D9C2A6', '#FFD700'],
        font: { name: 'Great Vibes', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚢', '💎', '🌊', '❤️', '🎻'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  // Adding all the missing themes from knowledge base
  {
    id: 'creed-conquest',
    name: "Creed's Conquest",
    description: 'Your legacy is more than a name.',
    className: 'theme-creed',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#4A4A4A',
      background: '#1C2526'
    },
    font: 'Bebas Neue',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-gray-600',
    emojis: ['🥊', '🏋️‍♂️', '🏟️', '💪', '🥇'],
    category: 'Superhero',
    tagline: 'Your legacy is more than a name.',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#4A4A4A', '#FFFFFF', '#1C2526'],
        font: { name: 'Bebas Neue', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🥊', '🏋️‍♂️', '🏟️', '💪', '🥇'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D81F26', '#FFD700', '#4A4A4A', '#0f172a', '#1C2526'],
        font: { name: 'Bebas Neue', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🥊', '🏋️‍♂️', '🏟️', '💪', '🥇'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#FFD700', '#4A4A4A'],
        font: { name: 'Bebas Neue', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🥊', '🏋️‍♂️', '🏟️', '💪', '🥇'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
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
    font: 'Oswald',
    preview: 'bg-gradient-to-br from-yellow-600 via-amber-700 to-brown-800',
    emojis: ['🔫', '💸', '🚬', '🕴️', '🛩️'],
    category: 'Crime',
    tagline: 'Plata o plomo.',
    modes: {
      light: {
        colors: ['#FFD700', '#8B6F47', '#4A3728', '#FFFFFF', '#3C2F2F'],
        font: { name: 'Oswald', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🔫', '💸', '🚬', '🕴️', '🛩️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#FFD700', '#8B6F47', '#4A3728', '#0f172a', '#3C2F2F'],
        font: { name: 'Oswald', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🔫', '💸', '🚬', '🕴️', '🛩️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#4A3728', '#8B6F47'],
        font: { name: 'Oswald', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🔫', '💸', '🚬', '🕴️', '🛩️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'jester-joker',
    name: "Jester's Joker",
    description: 'Why so serious?',
    className: 'theme-joker',
    colors: {
      primary: '#4CAF50',
      secondary: '#D81F26',
      accent: '#FFD700',
      background: '#1C2526'
    },
    font: 'Creepster',
    preview: 'bg-gradient-to-br from-green-500 via-red-600 to-yellow-500',
    emojis: ['🃏', '😂', '🎭', '🩸', '🌃'],
    category: 'Superhero',
    tagline: 'Why so serious?',
    modes: {
      light: {
        colors: ['#4CAF50', '#D81F26', '#FFD700', '#FFFFFF', '#1C2526'],
        font: { name: 'Creepster', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🃏', '😂', '🎭', '🩸', '🌃'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#4CAF50', '#D81F26', '#FFD700', '#0f172a', '#1C2526'],
        font: { name: 'Creepster', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🃏', '😂', '🎭', '🩸', '🌃'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#4CAF50', '#000000', '#FFFFFF', '#FFD700', '#D81F26'],
        font: { name: 'Creepster', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🃏', '😂', '🎭', '🩸', '🌃'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
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
      accent: '#FFD700',
      background: '#1B263B'
    },
    font: 'Futura',
    preview: 'bg-gradient-to-br from-blue-400 via-red-600 to-yellow-500',
    emojis: ['🕰️', '🔄', '🛩️', '🕴️', '🌌'],
    category: 'Fantasy',
    tagline: "Don't try to understand it, feel it.",
    modes: {
      light: {
        colors: ['#A3BFFA', '#D81F26', '#FFD700', '#FFFFFF', '#1B263B'],
        font: { name: 'Futura', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕰️', '🔄', '🛩️', '🕴️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#A3BFFA', '#D81F26', '#FFD700', '#0f172a', '#1B263B'],
        font: { name: 'Futura', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕰️', '🔄', '🛩️', '🕴️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#A3BFFA', '#000000', '#FFFFFF', '#FFD700', '#D81F26'],
        font: { name: 'Futura', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕰️', '🔄', '🛩️', '🕴️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
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
      background: '#1C2526'
    },
    font: 'American Typewriter',
    preview: 'bg-gradient-to-br from-red-600 via-blue-400 to-yellow-500',
    emojis: ['🪄', '📺', '❤️', '🧙‍♀️', '🌌'],
    category: 'Fantasy',
    tagline: 'What is grief, if not love persevering?',
    modes: {
      light: {
        colors: ['#D81F26', '#A3BFFA', '#FFD700', '#FFFFFF', '#1C2526'],
        font: { name: 'American Typewriter', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '📺', '❤️', '🧙‍♀️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D81F26', '#A3BFFA', '#FFD700', '#0f172a', '#1C2526'],
        font: { name: 'American Typewriter', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '📺', '❤️', '🧙‍♀️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#A3BFFA', '#D81F26'],
        font: { name: 'American Typewriter', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🪄', '📺', '❤️', '🧙‍♀️', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
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
    font: 'VT323',
    preview: 'bg-gradient-to-br from-green-500 via-red-500 to-green-600',
    emojis: ['💾', '🖥️', '🕶️', '🔒', '🌐'],
    category: 'Science Fiction',
    tagline: 'Hello, friend.',
    modes: {
      light: {
        colors: ['#00FF00', '#FF1E56', '#4CAF50', '#FFFFFF', '#0F3D3E'],
        font: { name: 'VT323', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔒', '🌐'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#00FF00', '#FF1E56', '#4CAF50', '#0f172a', '#0F3D3E'],
        font: { name: 'VT323', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔒', '🌐'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#00FF00', '#000000', '#FFFFFF', '#FF1E56', '#4CAF50'],
        font: { name: 'VT323', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💾', '🖥️', '🕶️', '🔒', '🌐'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
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
      background: '#1C2526'
    },
    font: 'Comic Sans MS',
    preview: 'bg-gradient-to-br from-orange-400 via-blue-500 to-yellow-400',
    emojis: ['🍌', '😈', '👨‍🚀', '🦁', '🎉'],
    category: 'Crime',
    tagline: 'Bananaaaa!',
    modes: {
      light: {
        colors: ['#F4A261', '#00B7EB', '#FFD700', '#FFFFFF', '#1C2526'],
        font: { name: 'Comic Sans MS', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🍌', '😈', '👨‍🚀', '🦁', '🎉'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#F4A261', '#00B7EB', '#FFD700', '#0f172a', '#1C2526'],
        font: { name: 'Comic Sans MS', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🍌', '😈', '👨‍🚀', '🦁', '🎉'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#F4A261', '#000000', '#FFFFFF', '#FFD700', '#00B7EB'],
        font: { name: 'Comic Sans MS', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🍌', '😈', '👨‍🚀', '🦁', '🎉'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'arcane-aura',
    name: "Arcane's Aura",
    description: 'Every legend has a beginning.',
    className: 'theme-arcane',
    colors: {
      primary: '#2A9D8F',
      secondary: '#E9C46A',
      accent: '#F4A261',
      background: '#1B263B'
    },
    font: 'Anime Ace',
    preview: 'bg-gradient-to-br from-teal-600 via-yellow-500 to-orange-400',
    emojis: ['⚙️', '🪄', '💥', '🧙‍♀️', '🏙️'],
    category: 'Fantasy',
    tagline: 'Every legend has a beginning.',
    modes: {
      light: {
        colors: ['#2A9D8F', '#E9C46A', '#F4A261', '#FFFFFF', '#1B263B'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚙️', '🪄', '💥', '🧙‍♀️', '🏙️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#2A9D8F', '#E9C46A', '#F4A261', '#0f172a', '#1B263B'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚙️', '🪄', '💥', '🧙‍♀️', '🏙️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#2A9D8F', '#000000', '#FFFFFF', '#F4A261', '#E9C46A'],
        font: { name: 'Anime Ace', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['⚙️', '🪄', '💥', '🧙‍♀️', '🏙️'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
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
      background: '#1C2526'
    },
    font: 'Get Schwifty',
    preview: 'bg-gradient-to-br from-blue-500 via-orange-400 to-green-500',
    emojis: ['🚀', '🧪', '👽', '🌀', '🌌'],
    category: 'Superhero',
    tagline: 'Wubba lubba dub dub!',
    modes: {
      light: {
        colors: ['#00B7EB', '#F4A261', '#4CAF50', '#FFFFFF', '#1C2526'],
        font: { name: 'Get Schwifty', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚀', '🧪', '👽', '🌀', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#00B7EB', '#F4A261', '#4CAF50', '#0f172a', '#1C2526'],
        font: { name: 'Get Schwifty', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚀', '🧪', '👽', '🌀', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#00B7EB', '#000000', '#FFFFFF', '#F4A261', '#4CAF50'],
        font: { name: 'Get Schwifty', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🚀', '🧪', '👽', '🌀', '🌌'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
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
      accent: '#8B6F47',
      background: '#2A3728'
    },
    font: 'Noto Serif Devanagari',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-amber-700',
    emojis: ['🕴️', '🔫', '🛕', '🌃', '🩸'],
    category: 'Crime',
    tagline: 'Jo bhi main bolta hoon, vahi sahi hai.',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#8B6F47', '#FFFFFF', '#2A3728'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕴️', '🔫', '🛕', '🌃', '🩸'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#D81F26', '#FFD700', '#8B6F47', '#0f172a', '#2A3728'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕴️', '🔫', '🛕', '🌃', '🩸'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#FFD700', '#8B6F47'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['🕴️', '🔫', '🛕', '🌃', '🩸'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
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
      background: '#1C2526'
    },
    font: 'Noto Serif Devanagari',
    preview: 'bg-gradient-to-br from-yellow-500 via-red-600 to-blue-500',
    emojis: ['💃', '🕺', '🎬', '🎶', '🌹'],
    category: 'Fantasy',
    tagline: 'Pyaar dosti hai.',
    modes: {
      light: {
        colors: ['#FFD700', '#D81F26', '#00B7EB', '#FFFFFF', '#1C2526'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💃', '🕺', '🎬', '🎶', '🌹'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#FFD700', '#D81F26', '#00B7EB', '#0f172a', '#1C2526'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💃', '🕺', '🎬', '🎶', '🌹'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#00B7EB', '#D81F26'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💃', '🕺', '🎬', '🎶', '🌹'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  },
  {
    id: 'dharma-delight',
    name: "Dharma's Delight",
    description: 'Kuch kuch hota hai.',
    className: 'theme-dharma',
    colors: {
      primary: '#E91E63',
      secondary: '#FFD700',
      accent: '#00B7EB',
      background: '#1C2526'
    },
    font: 'Noto Serif Devanagari',
    preview: 'bg-gradient-to-br from-pink-600 via-yellow-500 to-blue-500',
    emojis: ['💕', '🎬', '💃', '🕺', '🌟'],
    category: 'Fantasy',
    tagline: 'Kuch kuch hota hai.',
    modes: {
      light: {
        colors: ['#E91E63', '#FFD700', '#00B7EB', '#FFFFFF', '#1C2526'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💕', '🎬', '💃', '🕺', '🌟'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      dark: {
        colors: ['#E91E63', '#FFD700', '#00B7EB', '#0f172a', '#1C2526'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💕', '🎬', '💃', '🕺', '🌟'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      },
      highContrast: {
        colors: ['#E91E63', '#000000', '#FFFFFF', '#00B7EB', '#FFD700'],
        font: { name: 'Noto Serif Devanagari', weight: ['regular', 'bold'], size: { small: '14px', medium: '16px', large: '18px' } },
        emojis: ['💕', '🎬', '💃', '🕺', '🌟'],
        animations: { buttonHover: 'pulse', pageTransition: 'fade', loader: 'spin' }
      }
    }
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  changeTheme: (themeId: string) => void;
  isSecondaryMode: boolean;
  toggleColorMode: () => void;
  customFont: string;
  setGoogleFont: (fontName: string) => void;
  applyThemeEffects: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [isSecondaryMode, setIsSecondaryMode] = useState(false);
  const [customFont, setCustomFont] = useState<string>('');

  useEffect(() => {
    const savedThemeId = storage.getCurrentTheme();
    const theme = themes.find(t => t.id === savedThemeId) || themes[0];
    setCurrentTheme(theme);
    applyTheme(theme, isSecondaryMode);
  }, []);

  const loadGoogleFont = (fontName: string) => {
    const formattedFontName = fontName.replace(/\s+/g, '+');
    const linkId = `google-font-${formattedFontName}`;
    
    const existingLinks = document.querySelectorAll('[id^="google-font-"]');
    existingLinks.forEach(link => link.remove());
    
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${formattedFontName}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`;
    document.head.appendChild(link);
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0';
  };

  const createEmojiBackground = (emojis: string[]) => {
    const emojiElements = [];
    
    // Create more emojis for better visibility
    for (let i = 0; i < 25; i++) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const rotation = Math.random() * 360;
      const size = 24 + Math.random() * 16; // Bigger size
      const opacity = 0.08 + Math.random() * 0.07; // More visible
      const animationDuration = 20 + Math.random() * 15;
      const animationDelay = Math.random() * 10;
      
      emojiElements.push(`
        <div style="
          position: absolute;
          top: ${y}%;
          left: ${x}%;
          font-size: ${size}px;
          opacity: ${opacity};
          transform: rotate(${rotation}deg);
          pointer-events: none;
          animation: float ${animationDuration}s ease-in-out infinite;
          animation-delay: ${animationDelay}s;
          z-index: 1;
        ">${emoji}</div>
      `);
    }
    
    return emojiElements.join('');
  };

  const applyTheme = (theme: Theme, useSecondary: boolean = false, font?: string) => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove all theme classes first
    themes.forEach(t => {
      if (t.className) {
        root.classList.remove(...t.className.split(' '));
        body.classList.remove(...t.className.split(' '));
      }
    });
    
    // Add new theme classes
    if (theme.className) {
      root.classList.add(...theme.className.split(' '));
      body.classList.add(...theme.className.split(' '));
    }

    // Apply CSS variables
    const primaryColor = useSecondary ? theme.colors.secondary : theme.colors.primary;
    const secondaryColor = useSecondary ? theme.colors.primary : theme.colors.secondary;
    
    root.style.setProperty('--theme-primary', primaryColor);
    root.style.setProperty('--theme-secondary', secondaryColor);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--theme-background', theme.colors.background);
    
    root.style.setProperty('--theme-primary-rgb', hexToRgb(primaryColor));
    root.style.setProperty('--theme-secondary-rgb', hexToRgb(secondaryColor));
    root.style.setProperty('--theme-accent-rgb', hexToRgb(theme.colors.accent));
    root.style.setProperty('--theme-background-rgb', hexToRgb(theme.colors.background));

    // Apply custom font
    const fontToUse = font && font.trim() ? font : theme.font;
    if (fontToUse) {
      if (font && font.trim()) {
        loadGoogleFont(font);
      } else if (theme.font !== 'Inter') {
        loadGoogleFont(theme.font);
      }
      root.style.setProperty('--font-family', `"${fontToUse}", sans-serif`);
    }

    // Remove existing emoji background
    const existingEmojiContainer = document.getElementById('theme-emoji-background');
    if (existingEmojiContainer) {
      existingEmojiContainer.remove();
    }

    // Create emoji background
    const emojiContainer = document.createElement('div');
    emojiContainer.id = 'theme-emoji-background';
    emojiContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    `;
    
    emojiContainer.innerHTML = createEmojiBackground(theme.emojis || []);
    
    // Apply the theme background to the body - THIS IS THE KEY FIX
    body.style.background = `linear-gradient(135deg, ${theme.colors.background}, rgba(${hexToRgb(primaryColor)}, 0.15), rgba(${hexToRgb(theme.colors.accent)}, 0.08)) !important`;
    body.style.backgroundColor = theme.colors.background;
    body.style.minHeight = '100vh';
    body.style.fontFamily = `"${fontToUse}", sans-serif`;
    
    // Also apply to html element for full coverage
    root.style.backgroundColor = theme.colors.background;
    
    document.body.appendChild(emojiContainer);
    root.setAttribute('data-theme', theme.id);
    
    console.log(`Theme applied: ${theme.name}`, {
      primary: primaryColor,
      secondary: secondaryColor,
      accent: theme.colors.accent,
      background: theme.colors.background,
      font: fontToUse,
      emojis: theme.emojis
    });
  };

  const applyThemeEffects = () => {
    const themeElements = document.querySelectorAll('[style*="var(--theme"]');
    themeElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.display = 'none';
      element.offsetHeight;
      element.style.display = '';
    });
  };

  const changeTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      storage.setCurrentTheme(themeId);
      applyTheme(theme, isSecondaryMode, customFont);
      applyThemeEffects();
      console.log(`Changed to theme: ${theme.name}`);
    }
  };

  const toggleColorMode = () => {
    const newMode = !isSecondaryMode;
    setIsSecondaryMode(newMode);
    applyTheme(currentTheme, newMode, customFont);
  };

  const setGoogleFont = (fontName: string) => {
    setCustomFont(fontName);
    applyTheme(currentTheme, isSecondaryMode, fontName);
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      themes, 
      changeTheme, 
      isSecondaryMode, 
      toggleColorMode,
      customFont,
      setGoogleFont,
      applyThemeEffects
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

</edits_to_apply>
