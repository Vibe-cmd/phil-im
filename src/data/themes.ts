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
  },
  {
    id: 'harry-potter',
    name: 'Hogwarts Harmony',
    description: 'Wizard parchment textures with vintage gold accents',
    className: 'theme-harry-potter',
    colors: {
      primary: '#D3A625',
      secondary: '#740001',
      accent: '#1A472A',
      background: '#0E1A40'
    },
    font: 'Cinzel',
    preview: '🏰 Magical World',
    emojis: ['🏰', '⚡', '🦉', '🪄'],
    category: 'Fantasy',
    tagline: 'The boy who lived... to watch great films',
    modes: {
      light: {
        colors: ['#D3A625', '#740001', '#1A472A', '#F5F0E8'],
        font: {
          name: 'Cinzel',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🏰', '⚡', '🦉'],
        animations: {
          buttonHover: 'scale(1.05) rotate(1deg)',
          pageTransition: 'magical-shimmer',
          loader: 'spell-cast'
        }
      },
      dark: {
        colors: ['#D3A625', '#740001', '#1A472A', '#0A0D1A'],
        font: {
          name: 'Cinzel',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🏰', '⚡', '🪄'],
        animations: {
          buttonHover: 'scale(1.05) rotate(-1deg)',
          pageTransition: 'magical-shimmer',
          loader: 'spell-cast'
        }
      },
      highContrast: {
        colors: ['#FFD700', '#FFFFFF', '#228B22', '#000080'],
        font: {
          name: 'Cinzel',
          weight: ['600'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['🏰', '⚡'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Wizard parchment textures, vintage gold accents',
    textColor: '#F5F0E8'
  },
  {
    id: 'black-panther',
    name: 'Vibrant Vibranium',
    description: 'Vibranium tech with African tribal geometry',
    className: 'theme-black-panther',
    colors: {
      primary: '#502379',
      secondary: '#C0C0C0',
      accent: '#D4AF37',
      background: '#000000'
    },
    font: 'Ubuntu',
    preview: '🐾 Wakanda Forever',
    emojis: ['🐾', '⚡', '💎', '🛡️'],
    category: 'Superhero',
    tagline: 'Wakanda Forever, Cinema Forever',
    modes: {
      light: {
        colors: ['#502379', '#C0C0C0', '#D4AF37', '#F0F0F0'],
        font: {
          name: 'Ubuntu',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🐾', '⚡', '💎'],
        animations: {
          buttonHover: 'scale(1.05) translateY(-2px)',
          pageTransition: 'tribal-slide',
          loader: 'vibranium-pulse'
        }
      },
      dark: {
        colors: ['#502379', '#C0C0C0', '#D4AF37', '#0A0A0A'],
        font: {
          name: 'Ubuntu',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🐾', '⚡', '🛡️'],
        animations: {
          buttonHover: 'scale(1.05) translateY(-2px)',
          pageTransition: 'tribal-slide',
          loader: 'vibranium-pulse'
        }
      },
      highContrast: {
        colors: ['#9370DB', '#FFFFFF', '#FFD700', '#000000'],
        font: {
          name: 'Ubuntu',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['🐾', '⚡'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Vibranium tech with African tribal geometry',
    textColor: '#F0F0F0'
  },
  {
    id: 'marvel',
    name: 'Mighty MCU',
    description: 'Comic clean UI with subtle sparkle and star patterns',
    className: 'theme-marvel',
    colors: {
      primary: '#ED1D24',
      secondary: '#152238',
      accent: '#C0C0C0',
      background: '#000000'
    },
    font: 'Roboto Condensed',
    preview: '🦸 Hero Universe',
    emojis: ['🦸', '⚡', '🌟', '💥'],
    category: 'Superhero',
    tagline: 'Assemble your ultimate watchlist',
    modes: {
      light: {
        colors: ['#ED1D24', '#152238', '#C0C0C0', '#F5F5F5'],
        font: {
          name: 'Roboto Condensed',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🦸', '⚡', '🌟'],
        animations: {
          buttonHover: 'scale(1.05) rotate(2deg)',
          pageTransition: 'hero-burst',
          loader: 'marvel-spin'
        }
      },
      dark: {
        colors: ['#ED1D24', '#152238', '#C0C0C0', '#0D0D0D'],
        font: {
          name: 'Roboto Condensed',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🦸', '⚡', '💥'],
        animations: {
          buttonHover: 'scale(1.05) rotate(-2deg)',
          pageTransition: 'hero-burst',
          loader: 'marvel-spin'
        }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFFFF', '#C0C0C0', '#000080'],
        font: {
          name: 'Roboto Condensed',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['🦸', '⚡'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Comic clean UI, subtle sparkle/gloss, star patterns',
    textColor: '#F5F5F5'
  },
  {
    id: 'loki',
    name: 'Luscious Loki',
    description: 'Norse runes with time-loop circle patterns and art-deco influences',
    className: 'theme-loki',
    colors: {
      primary: '#D4AF37',
      secondary: '#2C5234',
      accent: '#CD7F32',
      background: '#000000'
    },
    font: 'Playfair Display',
    preview: '🐍 God of Mischief',
    emojis: ['🐍', '⏰', '👑', '🌀'],
    category: 'Superhero',
    tagline: 'Glorious purpose meets glorious cinema',
    modes: {
      light: {
        colors: ['#D4AF37', '#2C5234', '#CD7F32', '#F8F5E4'],
        font: {
          name: 'Playfair Display',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '26px' }
        },
        emojis: ['🐍', '⏰', '👑'],
        animations: {
          buttonHover: 'scale(1.05) rotate(3deg)',
          pageTransition: 'time-loop',
          loader: 'loki-spiral'
        }
      },
      dark: {
        colors: ['#D4AF37', '#2C5234', '#CD7F32', '#0A0A0A'],
        font: {
          name: 'Playfair Display',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '26px' }
        },
        emojis: ['🐍', '⏰', '🌀'],
        animations: {
          buttonHover: 'scale(1.05) rotate(-3deg)',
          pageTransition: 'time-loop',
          loader: 'loki-spiral'
        }
      },
      highContrast: {
        colors: ['#FFD700', '#FFFFFF', '#CD853F', '#000000'],
        font: {
          name: 'Playfair Display',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '30px' }
        },
        emojis: ['🐍', '👑'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Norse runes, time-loop circle patterns, art-deco influences',
    textColor: '#F8F5E4'
  },
  {
    id: 'peaky-blinders',
    name: 'Pensive Peaky',
    description: 'Gritty vintage with smoky textures and sepia overlays',
    className: 'theme-peaky-blinders',
    colors: {
      primary: '#ECE7DC',
      secondary: '#7E675E',
      accent: '#708090',
      background: '#000000'
    },
    font: 'Crimson Text',
    preview: '🎩 By Order Of',
    emojis: ['🎩', '🚬', '⚔️', '🥃'],
    category: 'Crime',
    tagline: 'By order of the Peaky Blinders watchlist',
    modes: {
      light: {
        colors: ['#ECE7DC', '#7E675E', '#708090', '#F5F0E8'],
        font: {
          name: 'Crimson Text',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '22px' }
        },
        emojis: ['🎩', '🚬', '⚔️'],
        animations: {
          buttonHover: 'scale(1.03) translateY(-1px)',
          pageTransition: 'smoke-fade',
          loader: 'vintage-spin'
        }
      },
      dark: {
        colors: ['#ECE7DC', '#7E675E', '#708090', '#1A1A1A'],
        font: {
          name: 'Crimson Text',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '22px' }
        },
        emojis: ['🎩', '🚬', '🥃'],
        animations: {
          buttonHover: 'scale(1.03) translateY(-1px)',
          pageTransition: 'smoke-fade',
          loader: 'vintage-spin'
        }
      },
      highContrast: {
        colors: ['#FFFFFF', '#000000', '#808080', '#2F2F2F'],
        font: {
          name: 'Crimson Text',
          weight: ['600'],
          size: { small: '16px', medium: '18px', large: '26px' }
        },
        emojis: ['🎩', '⚔️'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Gritty vintage, smoky textures, sepia overlays',
    textColor: '#ECE7DC'
  },
  {
    id: 'squid-game',
    name: 'Squid Game',
    description: 'Minimal UI with game shapes and flat shadows',
    className: 'theme-squid-game',
    colors: {
      primary: '#FF007F',
      secondary: '#1E7A57',
      accent: '#FFFFFF',
      background: '#000000'
    },
    font: 'Noto Sans KR',
    preview: '🦑 Childhood Games',
    emojis: ['🦑', '🎮', '🔴', '🔺', '🟪'],
    category: 'Thriller',
    tagline: 'Welcome to the games',
    modes: {
      light: {
        colors: ['#FF007F', '#1E7A57', '#FFFFFF', '#F5F5F5'],
        font: {
          name: 'Noto Sans KR',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🦑', '🎮', '🔴'],
        animations: {
          buttonHover: 'scale(1.05)',
          pageTransition: 'game-transition',
          loader: 'shape-spin'
        }
      },
      dark: {
        colors: ['#FF007F', '#1E7A57', '#FFFFFF', '#0A0A0A'],
        font: {
          name: 'Noto Sans KR',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🦑', '🔺', '🟪'],
        animations: {
          buttonHover: 'scale(1.05)',
          pageTransition: 'game-transition',
          loader: 'shape-spin'
        }
      },
      highContrast: {
        colors: ['#FF0080', '#FFFFFF', '#000000', '#00FF00'],
        font: {
          name: 'Noto Sans KR',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['🦑', '🎮'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Minimal UI with game shapes (◯△▢), flat shadows',
    textColor: '#FFFFFF'
  },
  {
    id: 'game-of-thrones',
    name: 'Game of Thrones',
    description: 'Medieval textures with house sigils and weathered UI',
    className: 'theme-game-of-thrones',
    colors: {
      primary: '#A3BFD9',
      secondary: '#8B0000',
      accent: '#708090',
      background: '#2F4F4F'
    },
    font: 'Cinzel',
    preview: '🐉 Winter is Coming',
    emojis: ['🐉', '⚔️', '👑', '🏰', '🔥'],
    category: 'Fantasy',
    tagline: 'Winter is coming',
    modes: {
      light: {
        colors: ['#A3BFD9', '#8B0000', '#708090', '#F5F5F5'],
        font: {
          name: 'Cinzel',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '26px' }
        },
        emojis: ['🐉', '⚔️', '👑'],
        animations: {
          buttonHover: 'scale(1.03) rotate(1deg)',
          pageTransition: 'medieval-fade',
          loader: 'dragon-spin'
        }
      },
      dark: {
        colors: ['#A3BFD9', '#8B0000', '#708090', '#1A1A1A'],
        font: {
          name: 'Cinzel',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '26px' }
        },
        emojis: ['🐉', '🏰', '🔥'],
        animations: {
          buttonHover: 'scale(1.03) rotate(-1deg)',
          pageTransition: 'medieval-fade',
          loader: 'dragon-spin'
        }
      },
      highContrast: {
        colors: ['#87CEEB', '#FFFFFF', '#696969', '#000000'],
        font: {
          name: 'Cinzel',
          weight: ['600'],
          size: { small: '16px', medium: '18px', large: '30px' }
        },
        emojis: ['🐉', '⚔️'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Medieval textures, house sigils, weathered UI',
    textColor: '#F5F5F5'
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'Lush glowing plants with floating particles and tribal curves',
    className: 'theme-avatar',
    colors: {
      primary: '#1CA9C9',
      secondary: '#228B22',
      accent: '#8A2BE2',
      background: '#000000'
    },
    font: 'Ubuntu',
    preview: '🌿 Pandora Awaits',
    emojis: ['🌿', '🌊', '💙', '🦋', '✨'],
    category: 'Sci-Fi',
    tagline: 'I see you',
    modes: {
      light: {
        colors: ['#1CA9C9', '#228B22', '#8A2BE2', '#E0F6FF'],
        font: {
          name: 'Ubuntu',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🌿', '🌊', '💙'],
        animations: {
          buttonHover: 'scale(1.05) translateY(-2px)',
          pageTransition: 'nature-flow',
          loader: 'bio-pulse'
        }
      },
      dark: {
        colors: ['#1CA9C9', '#228B22', '#8A2BE2', '#0A0A0A'],
        font: {
          name: 'Ubuntu',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🌿', '🦋', '✨'],
        animations: {
          buttonHover: 'scale(1.05) translateY(-2px)',
          pageTransition: 'nature-flow',
          loader: 'bio-pulse'
        }
      },
      highContrast: {
        colors: ['#00BFFF', '#FFFFFF', '#9370DB', '#000000'],
        font: {
          name: 'Ubuntu',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['🌿', '💙'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Lush glowing plants, floating particles, tribal curves',
    textColor: '#E0F6FF'
  },
  {
    id: 'money-heist',
    name: 'Money Heist',
    description: 'Mask motif with heist blueprints and bold typography',
    className: 'theme-money-heist',
    colors: {
      primary: '#D91F26',
      secondary: '#000000',
      accent: '#FFFFFF',
      background: '#808080'
    },
    font: 'Oswald',
    preview: '🎭 La Casa de Papel',
    emojis: ['🎭', '💰', '🔴', '⚡', '💥'],
    category: 'Crime',
    tagline: 'Resistance is not futile, it is fertile',
    modes: {
      light: {
        colors: ['#D91F26', '#000000', '#FFFFFF', '#F5F5F5'],
        font: {
          name: 'Oswald',
          weight: ['300', '400', '600'],
          size: { small: '14px', medium: '18px', large: '28px' }
        },
        emojis: ['🎭', '💰', '🔴'],
        animations: {
          buttonHover: 'scale(1.05) rotate(2deg)',
          pageTransition: 'heist-slide',
          loader: 'mask-spin'
        }
      },
      dark: {
        colors: ['#D91F26', '#000000', '#FFFFFF', '#1A1A1A'],
        font: {
          name: 'Oswald',
          weight: ['300', '400', '600'],
          size: { small: '14px', medium: '18px', large: '28px' }
        },
        emojis: ['🎭', '⚡', '💥'],
        animations: {
          buttonHover: 'scale(1.05) rotate(-2deg)',
          pageTransition: 'heist-slide',
          loader: 'mask-spin'
        }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFFFF', '#000000', '#C0C0C0'],
        font: {
          name: 'Oswald',
          weight: ['600'],
          size: { small: '16px', medium: '20px', large: '32px' }
        },
        emojis: ['🎭', '💰'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Mask motif, heist blueprints, bold typography',
    textColor: '#FFFFFF'
  },
  {
    id: 'witcher',
    name: 'The Witcher',
    description: 'Sword and magic runes with fog textures and claw mark icons',
    className: 'theme-witcher',
    colors: {
      primary: '#A9A9A9',
      secondary: '#2E8B57',
      accent: '#F5F5F5',
      background: '#1C1C1C'
    },
    font: 'Cinzel',
    preview: '🗡️ Toss a Coin',
    emojis: ['🗡️', '🐺', '🔮', '⚡', '🌙'],
    category: 'Fantasy',
    tagline: 'Toss a coin to your witcher',
    modes: {
      light: {
        colors: ['#A9A9A9', '#2E8B57', '#F5F5F5', '#F8F8F8'],
        font: {
          name: 'Cinzel',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🗡️', '🐺', '🔮'],
        animations: {
          buttonHover: 'scale(1.03) rotate(1deg)',
          pageTransition: 'mist-fade',
          loader: 'rune-spin'
        }
      },
      dark: {
        colors: ['#A9A9A9', '#2E8B57', '#F5F5F5', '#0D0D0D'],
        font: {
          name: 'Cinzel',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🗡️', '⚡', '🌙'],
        animations: {
          buttonHover: 'scale(1.03) rotate(-1deg)',
          pageTransition: 'mist-fade',
          loader: 'rune-spin'
        }
      },
      highContrast: {
        colors: ['#DCDCDC', '#FFFFFF', '#228B22', '#000000'],
        font: {
          name: 'Cinzel',
          weight: ['600'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['🗡️', '🐺'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Sword and magic runes, fog textures, claw mark icons',
    textColor: '#F5F5F5'
  }
];
