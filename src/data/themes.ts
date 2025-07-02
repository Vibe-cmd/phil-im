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
    name: 'Sinister Squid',
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
    name: "Throne's Triumph",
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
    name: 'Azure Avatar',
    description: 'Lush glowing plants with floating particles and tribal curves',
    className: 'theme-avatar',
    colors: {
      primary: '#1CA9C9',
      secondary: '#228B22',
      accent: '#8A2BE2',
      background: '#000000'
    },
    font: 'Papyrus',
    preview: '🌿 Pandora Awaits',
    emojis: ['🌿', '🌊', '💙', '🦋', '✨'],
    category: 'Sci-Fi',
    tagline: 'I see you',
    modes: {
      light: {
        colors: ['#1CA9C9', '#228B22', '#8A2BE2', '#E0F6FF'],
        font: {
          name: 'Papyrus',
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
          name: 'Papyrus',
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
          name: 'Papyrus',
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
    name: 'Heistful Hustle',
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
    name: "Witcher's Wrath",
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
  },
  {
    id: 'deadpool',
    name: 'Dashing Deadpool',
    description: 'Cracked graffiti with comic sarcasm and bold fonts',
    className: 'theme-deadpool',
    colors: {
      primary: '#B80000',
      secondary: '#808080',
      accent: '#FFFFFF',
      background: '#000000'
    },
    font: 'Bangers',
    preview: '💀 Maximum Effort',
    emojis: ['💀', '🔫', '💥', '🎭', '🩸'],
    category: 'Superhero',
    tagline: 'Maximum effort',
    modes: {
      light: {
        colors: ['#B80000', '#808080', '#FFFFFF', '#F5F5F5'],
        font: {
          name: 'Bangers',
          weight: ['400'],
          size: { small: '14px', medium: '18px', large: '32px' }
        },
        emojis: ['💀', '🔫', '💥'],
        animations: {
          buttonHover: 'scale(1.1) rotate(5deg)',
          pageTransition: 'comic-pop',
          loader: 'chaotic-spin'
        }
      },
      dark: {
        colors: ['#B80000', '#808080', '#FFFFFF', '#0A0A0A'],
        font: {
          name: 'Bangers',
          weight: ['400'],
          size: { small: '14px', medium: '18px', large: '32px' }
        },
        emojis: ['💀', '🎭', '🩸'],
        animations: {
          buttonHover: 'scale(1.1) rotate(-5deg)',
          pageTransition: 'comic-pop',
          loader: 'chaotic-spin'
        }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFFFF', '#000000', '#C0C0C0'],
        font: {
          name: 'Bangers',
          weight: ['400'],
          size: { small: '16px', medium: '20px', large: '36px' }
        },
        emojis: ['💀', '💥'],
        animations: {
          buttonHover: 'scale(1.15)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Cracked graffiti, comic sarcasm, bold fonts',
    textColor: '#FFFFFF'
  },
  {
    id: 'ghibli',
    name: "Ghibli's Glow",
    description: 'Watercolor textures with clouds and hand-drawn edges',
    className: 'theme-ghibli',
    colors: {
      primary: '#A8D5BA',
      secondary: '#DEB887',
      accent: '#A9D3F5',
      background: '#FFFDD0'
    },
    font: 'Kalam',
    preview: '🌸 Magical Worlds',
    emojis: ['🌸', '🌿', '☁️', '🦋', '✨'],
    category: 'Animation',
    tagline: 'Always believe in yourself',
    modes: {
      light: {
        colors: ['#A8D5BA', '#DEB887', '#A9D3F5', '#FFFEF7'],
        font: {
          name: 'Kalam',
          weight: ['300', '400', '700'],
          size: { small: '14px', medium: '16px', large: '22px' }
        },
        emojis: ['🌸', '🌿', '☁️'],
        animations: {
          buttonHover: 'scale(1.02) translateY(-1px)',
          pageTransition: 'cloud-drift',
          loader: 'nature-bloom'
        }
      },
      dark: {
        colors: ['#A8D5BA', '#DEB887', '#A9D3F5', '#2F3E1F'],
        font: {
          name: 'Kalam',
          weight: ['300', '400', '700'],
          size: { small: '14px', medium: '16px', large: '22px' }
        },
        emojis: ['🌸', '🦋', '✨'],
        animations: {
          buttonHover: 'scale(1.02) translateY(-1px)',
          pageTransition: 'cloud-drift',
          loader: 'nature-bloom'
        }
      },
      highContrast: {
        colors: ['#228B22', '#FFFFFF', '#4169E1', '#000000'],
        font: {
          name: 'Kalam',
          weight: ['600'],
          size: { small: '16px', medium: '18px', large: '26px' }
        },
        emojis: ['🌸', '🌿'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Watercolor texture, clouds, hand-drawn edges',
    textColor: '#2F3E1F'
  },
  {
    id: 'jumanji',
    name: "Jumanji's Jungle",
    description: 'Nature leaves with wooden textures and safari borders',
    className: 'theme-jumanji',
    colors: {
      primary: '#228B22',
      secondary: '#8B4513',
      accent: '#FFD700',
      background: '#D2B48C'
    },
    font: 'Cinzel',
    preview: '🦁 Welcome to the Jungle',
    emojis: ['🦁', '🌿', '🥁', '🐒', '🌴'],
    category: 'Adventure',
    tagline: 'Welcome to the jungle',
    modes: {
      light: {
        colors: ['#228B22', '#8B4513', '#FFD700', '#F5F5DC'],
        font: {
          name: 'Cinzel',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🦁', '🌿', '🥁'],
        animations: {
          buttonHover: 'scale(1.05) rotate(1deg)',
          pageTransition: 'jungle-swing',
          loader: 'drum-beat'
        }
      },
      dark: {
        colors: ['#228B22', '#8B4513', '#FFD700', '#1F2F1F'],
        font: {
          name: 'Cinzel',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '24px' }
        },
        emojis: ['🦁', '🐒', '🌴'],
        animations: {
          buttonHover: 'scale(1.05) rotate(-1deg)',
          pageTransition: 'jungle-swing',
          loader: 'drum-beat'
        }
      },
      highContrast: {
        colors: ['#00FF00', '#FFFFFF', '#FFFF00', '#000000'],
        font: {
          name: 'Cinzel',
          weight: ['600'],
          size: { small: '16px', medium: '18px', large: '28px' }
        },
        emojis: ['🦁', '🌿'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Nature leaves, wooden textures, safari borders',
    textColor: '#1F2F1F'
  },
  {
    id: 'titanic',
    name: 'Tragic Titanic',
    description: 'Art Nouveau frames with faded photos and romantic textures',
    className: 'theme-titanic',
    colors: {
      primary: '#1B263B',
      secondary: '#FFC0CB',
      accent: '#F8F4E3',
      background: '#0B1E35'
    },
    font: 'Playfair Display',
    preview: '🚢 My Heart Will Go On',
    emojis: ['🚢', '💙', '💎', '🌊', '⭐'],
    category: 'Romance',
    tagline: 'My heart will go on',
    modes: {
      light: {
        colors: ['#1B263B', '#FFC0CB', '#F8F4E3', '#F8F8FF'],
        font: {
          name: 'Playfair Display',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '26px' }
        },
        emojis: ['🚢', '💙', '💎'],
        animations: {
          buttonHover: 'scale(1.03) translateY(-2px)',
          pageTransition: 'ocean-wave',
          loader: 'romantic-fade'
        }
      },
      dark: {
        colors: ['#1B263B', '#FFC0CB', '#F8F4E3', '#0A0A1A'],
        font: {
          name: 'Playfair Display',
          weight: ['400', '700'],
          size: { small: '14px', medium: '16px', large: '26px' }
        },
        emojis: ['🚢', '🌊', '⭐'],
        animations: {
          buttonHover: 'scale(1.03) translateY(-2px)',
          pageTransition: 'ocean-wave',
          loader: 'romantic-fade'
        }
      },
      highContrast: {
        colors: ['#000080', '#FFFFFF', '#FFD700', '#000000'],
        font: {
          name: 'Playfair Display',
          weight: ['700'],
          size: { small: '16px', medium: '18px', large: '30px' }
        },
        emojis: ['🚢', '💙'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Art Nouveau frames, faded photos, romantic textures',
    textColor: '#F8F4E3'
  },
  {
    id: 'creed',
    name: "Creed's Conquest",
    description: 'Athletic minimalism with spotlight background and gloves icon',
    className: 'theme-creed',
    colors: {
      primary: '#D62828',
      secondary: '#4682B4',
      accent: '#708090',
      background: '#000000'
    },
    font: 'Oswald',
    preview: '🥊 Go the Distance',
    emojis: ['🥊', '🏃', '🏆', '💪', '⭐'],
    category: 'Sports',
    tagline: 'Go the distance',
    modes: {
      light: {
        colors: ['#D62828', '#4682B4', '#708090', '#F5F5F5'],
        font: {
          name: 'Oswald',
          weight: ['300', '400', '600'],
          size: { small: '14px', medium: '18px', large: '28px' }
        },
        emojis: ['🥊', '🏃', '🏆'],
        animations: {
          buttonHover: 'scale(1.05) translateY(-3px)',
          pageTransition: 'athletic-slide',
          loader: 'training-pulse'
        }
      },
      dark: {
        colors: ['#D62828', '#4682B4', '#708090', '#0A0A0A'],
        font: {
          name: 'Oswald',
          weight: ['300', '400', '600'],
          size: { small: '14px', medium: '18px', large: '28px' }
        },
        emojis: ['🥊', '💪', '⭐'],
        animations: {
          buttonHover: 'scale(1.05) translateY(-3px)',
          pageTransition: 'athletic-slide',
          loader: 'training-pulse'
        }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFFFF', '#0000FF', '#000000'],
        font: {
          name: 'Oswald',
          weight: ['600'],
          size: { small: '16px', medium: '20px', large: '32px' }
        },
        emojis: ['🥊', '🏆'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Athletic minimalism, spotlight background, gloves icon',
    textColor: '#F5F5F5'
  },
  {
    id: 'narcos',
    name: 'Narcotic Narcos',
    description: 'Newspaper clippings with crime dossier look',
    className: 'theme-narcos',
    colors: {
      primary: '#EDEDED',
      secondary: '#8B0000',
      accent: '#A0522D',
      background: '#556B2F'
    },
    font: 'Bebas Neue',
    preview: '📰 Plata o Plomo',
    emojis: ['📰', '🔫', '💰', '🚁', '⚖️'],
    category: 'Crime',
    tagline: 'Plata o plomo',
    modes: {
      light: {
        colors: ['#EDEDED', '#8B0000', '#A0522D', '#F5F5F5'],
        font: {
          name: 'Bebas Neue',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '22px' }
        },
        emojis: ['📰', '🔫', '💰'],
        animations: {
          buttonHover: 'scale(1.02) rotate(1deg)',
          pageTransition: 'newspaper-flip',
          loader: 'typewriter'
        }
      },
      dark: {
        colors: ['#EDEDED', '#8B0000', '#A0522D', '#2F2F1F'],
        font: {
          name: 'Bebas Neue',
          weight: ['400', '600'],
          size: { small: '14px', medium: '16px', large: '22px' }
        },
        emojis: ['📰', '🚁', '⚖️'],
        animations: {
          buttonHover: 'scale(1.02) rotate(-1deg)',
          pageTransition: 'newspaper-flip',
          loader: 'typewriter'
        }
      },
      highContrast: {
        colors: ['#FFFFFF', '#000000', '#8B4513', '#2F4F2F'],
        font: {
          name: 'Bebas Neue',
          weight: ['600'],
          size: { small: '16px', medium: '18px', large: '26px' }
        },
        emojis: ['📰', '🔫'],
        animations: {
          buttonHover: 'scale(1.1)',
          pageTransition: 'fade',
          loader: 'pulse'
        }
      }
    },
    designStyle: 'Newspaper clippings, crime dossier look',
    textColor: '#2F2F1F'
  },
  {
    id: 'joker',
    name: "Jester's Joker",
    description: 'Chaotic graffiti with madness patterns and neon chaos',
    className: 'theme-joker',
    colors: {
      primary: '#32CD32',
      secondary: '#800080',
      accent: '#FF69B4',
      background: '#000000'
    },
    font: 'Creepster',
    preview: '🃏 Why So Serious?',
    emojis: ['🃏', '🎭', '💀', '🔥', '😈'],
    category: 'Thriller',
    tagline: 'Why so serious?',
    modes: {
      light: {
        colors: ['#32CD32', '#800080', '#FF69B4', '#F5F5F5'],
        font: { name: 'Creepster', weight: ['400'], size: { small: '14px', medium: '20px', large: '36px' } },
        emojis: ['🃏', '🎭', '💀'],
        animations: { buttonHover: 'scale(1.1) rotate(10deg)', pageTransition: 'chaos-spin', loader: 'maniacal-laugh' }
      },
      dark: {
        colors: ['#32CD32', '#800080', '#FF69B4', '#0A0A0A'],
        font: { name: 'Creepster', weight: ['400'], size: { small: '14px', medium: '20px', large: '36px' } },
        emojis: ['🃏', '🔥', '😈'],
        animations: { buttonHover: 'scale(1.1) rotate(-10deg)', pageTransition: 'chaos-spin', loader: 'maniacal-laugh' }
      },
      highContrast: {
        colors: ['#00FF00', '#FFFFFF', '#FF1493', '#000000'],
        font: { name: 'Creepster', weight: ['400'], size: { small: '16px', medium: '22px', large: '40px' } },
        emojis: ['🃏', '🎭'],
        animations: { buttonHover: 'scale(1.15)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Chaotic graffiti, madness patterns, neon chaos',
    textColor: '#FFFFFF'
  },
  {
    id: 'tenet',
    name: 'Twisted Tenet',
    description: 'Time inversion effects with palindrome UI elements',
    className: 'theme-tenet',
    colors: {
      primary: '#C0C0C0',
      secondary: '#4169E1',
      accent: '#FF4500',
      background: '#000000'
    },
    font: 'Exo 2',
    preview: '⏰ Don\'t Think, Feel',
    emojis: ['⏰', '🔄', '🌀', '⚡', '🎯'],
    category: 'Sci-Fi',
    tagline: 'Don\'t try to understand it, feel it',
    modes: {
      light: {
        colors: ['#C0C0C0', '#4169E1', '#FF4500', '#F5F5F5'],
        font: { name: 'Exo 2', weight: ['300', '400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['⏰', '🔄', '🌀'],
        animations: { buttonHover: 'scale(1.05) rotateY(180deg)', pageTransition: 'time-reverse', loader: 'temporal-loop' }
      },
      dark: {
        colors: ['#C0C0C0', '#4169E1', '#FF4500', '#0A0A0A'],
        font: { name: 'Exo 2', weight: ['300', '400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['⏰', '⚡', '🎯'],
        animations: { buttonHover: 'scale(1.05) rotateY(-180deg)', pageTransition: 'time-reverse', loader: 'temporal-loop' }
      },
      highContrast: {
        colors: ['#FFFFFF', '#0000FF', '#FF6600', '#000000'],
        font: { name: 'Exo 2', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['⏰', '🔄'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Time inversion effects, palindrome UI elements',
    textColor: '#F5F5F5'
  }
];
