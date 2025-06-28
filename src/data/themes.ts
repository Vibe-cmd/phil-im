
import { Theme } from '@/types';

export const themes: Theme[] = [
  {
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
  },
  {
    id: 'dune',
    name: 'Dazzling Dune',
    description: 'Futuristic minimalism with desert-textured background',
    className: 'theme-dune',
    colors: {
      primary: '#D7BFA5',
      secondary: '#C46A33',
      accent: '#6E8CA0',
      background: '#2B1810'
    },
    font: 'Orbitron',
    preview: '🏜️ Desert Sci-Fi',
    emojis: ['🏜️', '🌌', '🪐', '⚔️'],
    category: 'Sci-Fi',
    tagline: 'The spice must flow through your watchlist',
    modes: {
      light: {
        colors: ['#D7BFA5', '#C46A33', '#6E8CA0', '#F5F0E8'],
        font: {
          name: 'Orbitron',
          weight: ['300', '400', '700'],
          size: { small: '14px', medium: '16px', large: '28px' }
        },
        emojis: ['🏜️', '🌌', '🪐'],
        animations: {
          buttonHover: 'scale(1.05)',
          pageTransition: 'sand-drift',
          loader: 'desert-wind'
        }
      },
      dark: {
        colors: ['#D7BFA5', '#C46A33', '#6E8CA0', '#1A0F08'],
        font: {
          name: 'Orbitron',
          weight: ['300', '400', '700'],
          size: { small: '14px', medium: '16px', large: '28px' }
        },
        emojis: ['🏜️', '🌌', '⚔️'],
        animations: {
          buttonHover: 'scale(1.05)',
          pageTransition: 'sand-drift',
          loader: 'desert-wind'
        }
      },
      highContrast: {
        colors: ['#FFFFFF', '#FF8C00', '#4169E1', '#000000'],
        font: {
          name: 'Orbitron',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '32px' }
        },
        emojis: ['🏜️', '⚔️'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Futuristic minimalism with desert-textured background',
    textColor: '#F5F0E8'
  },
  {
    id: 'interstellar',
    name: 'Intriguing Interstellar',
    description: 'Clean space aesthetic with gravity lines and nebula gradients',
    className: 'theme-interstellar',
    colors: {
      primary: '#9DA5A7',
      secondary: '#0A2342',
      accent: '#4A90E2',
      background: '#000000'
    },
    font: 'Space Mono',
    preview: '🌌 Space Odyssey',
    emojis: ['🌌', '🚀', '⭐', '🌍'],
    category: 'Sci-Fi',
    tagline: 'Love transcends dimensions of space and time',
    modes: {
      light: {
        colors: ['#9DA5A7', '#0A2342', '#4A90E2', '#F8F9FA'],
        font: {
          name: 'Space Mono',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🌌', '🚀', '⭐'],
        animations: {
          buttonHover: 'scale(1.02) translateY(-2px)',
          pageTransition: 'cosmic-drift',
          loader: 'orbit'
        }
      },
      dark: {
        colors: ['#9DA5A7', '#0A2342', '#4A90E2', '#0D1117'],
        font: {
          name: 'Space Mono',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🌌', '🚀', '🌍'],
        animations: {
          buttonHover: 'scale(1.02) translateY(-2px)',
          pageTransition: 'cosmic-drift',
          loader: 'orbit'
        }
      },
      highContrast: {
        colors: ['#FFFFFF', '#000080', '#00BFFF', '#000000'],
        font: {
          name: 'Space Mono',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['🌌', '🚀'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Clean space aesthetic, gravity lines, subtle nebula gradient',
    textColor: '#E8E9EA'
  },
  {
    id: 'matrix',
    name: 'Mystical Matrix',
    description: 'Code rain effect with neon outlines and cyberpunk shadows',
    className: 'theme-matrix',
    colors: {
      primary: '#00FF41',
      secondary: '#000000',
      accent: '#00CC33',
      background: '#0D0D0D'
    },
    font: 'Courier New',
    preview: '💊 Digital Reality',
    emojis: ['💊', '🔢', '👓', '⚡'],
    category: 'Cyberpunk',
    tagline: 'There is no spoon, only great cinema',
    modes: {
      light: {
        colors: ['#00FF41', '#2D2D2D', '#00CC33', '#F0F0F0'],
        font: {
          name: 'Courier New',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '20px' }
        },
        emojis: ['💊', '🔢', '👓'],
        animations: {
          buttonHover: 'glitch-hover',
          pageTransition: 'matrix-rain',
          loader: 'code-stream'
        }
      },
      dark: {
        colors: ['#00FF41', '#000000', '#00CC33', '#0A0A0A'],
        font: {
          name: 'Courier New',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '20px' }
        },
        emojis: ['💊', '🔢', '⚡'],
        animations: {
          buttonHover: 'glitch-hover',
          pageTransition: 'matrix-rain',
          loader: 'code-stream'
        }
      },
      highContrast: {
        colors: ['#00FF00', '#FFFFFF', '#LIME', '#000000'],
        font: {
          name: 'Courier New',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '24px' }
        },
        emojis: ['💊', '🔢'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Code rain effect, neon outlines, cyberpunk shadows',
    textColor: '#00FF41'
  },
  {
    id: 'batman',
    name: 'Brooding Batman',
    description: 'Noir comic style with sharp shadows and bat-icon cutouts',
    className: 'theme-batman',
    colors: {
      primary: '#F5C518',
      secondary: '#0C1E33',
      accent: '#FFD700',
      background: '#000000'
    },
    font: 'Oswald',
    preview: '🦇 Dark Knight',
    emojis: ['🦇', '🌃', '⚡', '🖤'],
    category: 'Superhero',
    tagline: 'I am vengeance, I am the night, I am cinema',
    modes: {
      light: {
        colors: ['#F5C518', '#0C1E33', '#FFD700', '#2C2C2C'],
        font: {
          name: 'Oswald',
          weight: ['300', '400', '600'],
          size: { small: '14px', medium: '18px', large: '28px' }
        },
        emojis: ['🦇', '🌃', '⚡'],
        animations: {
          buttonHover: 'shadow-expand',
          pageTransition: 'bat-swoop',
          loader: 'bat-signal'
        }
      },
      dark: {
        colors: ['#F5C518', '#0C1E33', '#FFD700', '#050505'],
        font: {
          name: 'Oswald',
          weight: ['300', '400', '600'],
          size: { small: '14px', medium: '18px', large: '28px' }
        },
        emojis: ['🦇', '🌃', '🖤'],
        animations: {
          buttonHover: 'shadow-expand',
          pageTransition: 'bat-swoop',
          loader: 'bat-signal'
        }
      },
      highContrast: {
        colors: ['#FFFF00', '#FFFFFF', '#FFD700', '#000000'],
        font: {
          name: 'Oswald',
          weight: ['600'],
          size: { small: '16px', medium: '20px', large: '32px' }
        },
        emojis: ['🦇', '⚡'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Noir comic style, sharp shadows, bat-icon cutouts',
    textColor: '#F5C518'
  }
];
