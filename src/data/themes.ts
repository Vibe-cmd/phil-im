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
    id: 'wandavision',
    name: 'Wandavision',
    description: '50s retro + glitch effect, old TV borders',
    className: 'theme-wandavision',
    colors: {
      primary: '#B30000',
      secondary: '#DCDCDC',
      accent: '#3B9C9C',
      background: '#F5F5F5'
    },
    font: 'Dancing Script',
    preview: '📺 Reality Magic',
    emojis: ['📺', '✨', '💫', '🏠'],
    category: 'Superhero',
    tagline: 'We interrupt this program... for great entertainment',
    modes: {
      light: {
        colors: ['#B30000', '#DCDCDC', '#3B9C9C', '#F5F5F5'],
        font: {
          name: 'Dancing Script',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['📺', '✨', '💫'],
        animations: {
          buttonHover: 'glitch-hover',
          pageTransition: 'tv-static',
          loader: 'retro-scan'
        }
      },
      dark: {
        colors: ['#B30000', '#DCDCDC', '#3B9C9C', '#2A2A2A'],
        font: {
          name: 'Dancing Script',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['📺', '✨', '🏠'],
        animations: {
          buttonHover: 'glitch-hover',
          pageTransition: 'tv-static',
          loader: 'retro-scan'
        }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFFFF', '#00FFFF', '#000000'],
        font: {
          name: 'Dancing Script',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['📺', '✨'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: '50s retro + glitch effect, old TV borders',
    textColor: '#F5F5F5'
  },
  {
    id: 'minions',
    name: 'Minions',
    description: 'Rounded shapes, bubbles, cartoon shadows',
    className: 'theme-minions',
    colors: {
      primary: '#F5E050',
      secondary: '#1F3A93',
      accent: '#FFFFFF',
      background: '#87CEEB'
    },
    font: 'Bebas Neue',
    preview: '🍌 Banana Chaos',
    emojis: ['🍌', '👓', '😄', '🎉'],
    category: 'Animation',
    tagline: 'Banana! La la la la cinema!',
    modes: {
      light: {
        colors: ['#F5E050', '#1F3A93', '#FFFFFF', '#87CEEB'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🍌', '👓', '😄'],
        animations: { buttonHover: 'bounce-bubble', pageTransition: 'goggle-spin', loader: 'banana-dance' }
      },
      dark: {
        colors: ['#F5E050', '#1F3A93', '#FFFFFF', '#4682B4'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🍌', '👓', '🎉'],
        animations: { buttonHover: 'bounce-bubble', pageTransition: 'goggle-spin', loader: 'banana-dance' }
      },
      highContrast: {
        colors: ['#FFFF00', '#000080', '#FFFFFF', '#000000'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🍌', '👓'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Rounded shapes, bubbles, cartoon shadows',
    textColor: '#2F4F4F'
  },
  {
    id: 'arcane',
    name: 'Arcane',
    description: 'Grunge-meets-steampunk, painterly brushstroke textures',
    className: 'theme-arcane',
    colors: {
      primary: '#4B2E83',
      secondary: '#B8860B',
      accent: '#008080',
      background: '#1C1C1C'
    },
    font: 'Exo 2',
    preview: '🔮 Hextech Magic',
    emojis: ['🔮', '⚙️', '💎', '🌟'],
    category: 'Animation',
    tagline: 'In the game of progress, there are no winners',
    modes: {
      light: {
        colors: ['#4B2E83', '#B8860B', '#008080', '#F0F0F0'],
        font: { name: 'Exo 2', weight: ['300', '400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🔮', '⚙️', '💎'],
        animations: { buttonHover: 'hextech-glow', pageTransition: 'steampunk-gear', loader: 'crystal-pulse' }
      },
      dark: {
        colors: ['#4B2E83', '#B8860B', '#008080', '#0A0A0A'],
        font: { name: 'Exo 2', weight: ['300', '400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🔮', '⚙️', '🌟'],
        animations: { buttonHover: 'hextech-glow', pageTransition: 'steampunk-gear', loader: 'crystal-pulse' }
      },
      highContrast: {
        colors: ['#9370DB', '#FFD700', '#00FFFF', '#000000'],
        font: { name: 'Exo 2', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🔮', '⚙️'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Grunge-meets-steampunk, painterly brushstroke textures',
    textColor: '#F0F8FF'
  },
  {
    id: 'rick-morty',
    name: 'Rick and Morty',
    description: 'Cartoon sci-fi chaos, portal rings, gooey effects',
    className: 'theme-rick-morty',
    colors: {
      primary: '#7CFC00',
      secondary: '#00BFFF',
      accent: '#8A2BE2',
      background: '#FFFF00'
    },
    font: 'Rock Salt',
    preview: '🧪 Science Chaos',
    emojis: ['🧪', '🌀', '👽', '🚀'],
    category: 'Animation',
    tagline: 'Wubba lubba dub dub... great entertainment!',
    modes: {
      light: {
        colors: ['#7CFC00', '#00BFFF', '#8A2BE2', '#FFFF00'],
        font: { name: 'Rock Salt', weight: ['400'], size: { small: '12px', medium: '14px', large: '20px' } },
        emojis: ['🧪', '🌀', '👽'],
        animations: { buttonHover: 'portal-spin', pageTransition: 'dimension-hop', loader: 'burp-bounce' }
      },
      dark: {
        colors: ['#7CFC00', '#00BFFF', '#8A2BE2', '#2F4F2F'],
        font: { name: 'Rock Salt', weight: ['400'], size: { small: '12px', medium: '14px', large: '20px' } },
        emojis: ['🧪', '🌀', '🚀'],
        animations: { buttonHover: 'portal-spin', pageTransition: 'dimension-hop', loader: 'burp-bounce' }
      },
      highContrast: {
        colors: ['#00FF00', '#0000FF', '#FF00FF', '#000000'],
        font: { name: 'Rock Salt', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🧪', '👽'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Cartoon sci-fi chaos, portal rings, gooey effects',
    textColor: '#000000'
  },
  {
    id: 'sacred-games',
    name: 'Sacred Games',
    description: 'Gritty, noir Mumbai backdrop, gritty grain overlay',
    className: 'theme-sacred-games',
    colors: {
      primary: '#FF9933',
      secondary: '#1E3D59',
      accent: '#800000',
      background: '#C9B037'
    },
    font: 'Noto Sans',
    preview: '🌃 Sacred Games',
    emojis: ['🌃', '🔫', '🏛️', '📱'],
    category: 'Crime',
    tagline: 'Kabhi kabhi lagta hai apun hi bhagwan hai',
    modes: {
      light: {
        colors: ['#FF9933', '#1E3D59', '#800000', '#C9B037'],
        font: { name: 'Noto Sans', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌃', '🔫', '🏛️'],
        animations: { buttonHover: 'gritty-shake', pageTransition: 'mumbai-fade', loader: 'neon-flicker' }
      },
      dark: {
        colors: ['#FF9933', '#1E3D59', '#800000', '#2A2A2A'],
        font: { name: 'Noto Sans', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌃', '🔫', '📱'],
        animations: { buttonHover: 'gritty-shake', pageTransition: 'mumbai-fade', loader: 'neon-flicker' }
      },
      highContrast: {
        colors: ['#FF6600', '#FFFFFF', '#FF0000', '#000000'],
        font: { name: 'Noto Sans', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🌃', '🔫'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Gritty, noir Mumbai backdrop, gritty grain overlay',
    textColor: '#F5F5F5'
  },
  {
    id: 'bollywood-romance',
    name: 'Bollywood Romance',
    description: 'Glowy bokeh lights, ornate borders, love-drenched curves',
    className: 'theme-bollywood-romance',
    colors: {
      primary: '#FF69B4',
      secondary: '#FFD700',
      accent: '#FFE5B4',
      background: '#FFF5E1'
    },
    font: 'Dancing Script',
    preview: '💃 Dance Magic',
    emojis: ['💃', '🌺', '🎵', '✨'],
    category: 'Musical',
    tagline: 'Bollywood ki duniya mein aapka swagat hai',
    modes: {
      light: {
        colors: ['#FF69B4', '#FFD700', '#FFE5B4', '#FFF5E1'],
        font: { name: 'Dancing Script', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💃', '🌺', '🎵'],
        animations: { buttonHover: 'bollywood-dance', pageTransition: 'marigold-burst', loader: 'tabla-beat' }
      },
      dark: {
        colors: ['#FF69B4', '#FFD700', '#FFE5B4', '#8B4513'],
        font: { name: 'Dancing Script', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💃', '🌺', '✨'],
        animations: { buttonHover: 'bollywood-dance', pageTransition: 'marigold-burst', loader: 'tabla-beat' }
      },
      highContrast: {
        colors: ['#FF1493', '#FFD700', '#FFFFFF', '#000000'],
        font: { name: 'Dancing Script', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['💃', '🌺'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Glowy bokeh lights, ornate borders, love-drenched curves',
    textColor: '#8B4513'
  }
];