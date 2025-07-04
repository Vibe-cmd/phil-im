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
    description: 'Digital rain effects with cyberpunk green',
    className: 'theme-matrix',
    colors: {
      primary: '#00FF00',
      secondary: '#000000',
      accent: '#FF0000',
      background: '#000000'
    },
    font: 'Courier New',
    preview: '💊 Digital Reality',
    emojis: ['💊', '🔋', '👁️', '🖥️'],
    category: 'Sci-Fi',
    tagline: 'There is no spoon, only great cinema',
    modes: {
      light: {
        colors: ['#00FF00', '#000000', '#FF0000', '#F0F8F0'],
        font: { name: 'Courier New', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💊', '🔋', '👁️'],
        animations: { buttonHover: 'matrix-glitch', pageTransition: 'digital-rain', loader: 'code-stream' }
      },
      dark: {
        colors: ['#00FF00', '#000000', '#FF0000', '#0A0A0A'],
        font: { name: 'Courier New', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💊', '🔋', '🖥️'],
        animations: { buttonHover: 'matrix-glitch', pageTransition: 'digital-rain', loader: 'code-stream' }
      },
      highContrast: {
        colors: ['#00FF00', '#FFFFFF', '#FF0000', '#000000'],
        font: { name: 'Courier New', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['💊', '👁️'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Digital rain effects with cyberpunk green',
    textColor: '#00FF00'
  },
  {
    id: 'hogwarts',
    name: 'Hogwarts Harmony',
    description: 'Magical parchment textures with floating elements',
    className: 'theme-hogwarts',
    colors: {
      primary: '#8B4513',
      secondary: '#DAA520',
      accent: '#800080',
      background: '#F5DEB3'
    },
    font: 'Cinzel',
    preview: '🪄 Magic Academy',
    emojis: ['🪄', '📜', '🦉', '⚡'],
    category: 'Fantasy',
    tagline: 'Happiness can be found even in the darkest of films',
    modes: {
      light: {
        colors: ['#8B4513', '#DAA520', '#800080', '#F5DEB3'],
        font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🪄', '📜', '🦉'],
        animations: { buttonHover: 'magical-sparkle', pageTransition: 'parchment-unfold', loader: 'quill-write' }
      },
      dark: {
        colors: ['#8B4513', '#DAA520', '#800080', '#2F1B14'],
        font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🪄', '📜', '⚡'],
        animations: { buttonHover: 'magical-sparkle', pageTransition: 'parchment-unfold', loader: 'quill-write' }
      },
      highContrast: {
        colors: ['#DAA520', '#FFFFFF', '#800080', '#000000'],
        font: { name: 'Cinzel', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🪄', '⚡'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Magical parchment textures with floating elements',
    textColor: '#8B4513'
  },
  {
    id: 'batman',
    name: 'Brooding Batman',
    description: 'Dark gothic architecture with bat silhouettes',
    className: 'theme-batman',
    colors: {
      primary: '#FFD700',
      secondary: '#000000',
      accent: '#808080',
      background: '#1C1C1C'
    },
    font: 'Oswald',
    preview: '🦇 Dark Knight',
    emojis: ['🦇', '🌃', '⚡', '🖤'],
    category: 'Superhero',
    tagline: 'I am vengeance, I am the night, I am cinema',
    modes: {
      light: {
        colors: ['#FFD700', '#000000', '#808080', '#F5F5F5'],
        font: { name: 'Oswald', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🦇', '🌃', '⚡'],
        animations: { buttonHover: 'bat-swoop', pageTransition: 'gotham-fade', loader: 'signal-beam' }
      },
      dark: {
        colors: ['#FFD700', '#000000', '#808080', '#0A0A0A'],
        font: { name: 'Oswald', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🦇', '🌃', '🖤'],
        animations: { buttonHover: 'bat-swoop', pageTransition: 'gotham-fade', loader: 'signal-beam' }
      },
      highContrast: {
        colors: ['#FFFF00', '#FFFFFF', '#C0C0C0', '#000000'],
        font: { name: 'Oswald', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🦇', '⚡'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Dark gothic architecture with bat silhouettes',
    textColor: '#FFD700'
  },
  {
    id: 'vibranium',
    name: 'Vibrant Vibranium',
    description: 'Wakandan patterns with purple energy glow',
    className: 'theme-vibranium',
    colors: {
      primary: '#8A2BE2',
      secondary: '#000000',
      accent: '#00FFFF',
      background: '#2F1B69'
    },
    font: 'Rajdhani',
    preview: '👑 Wakanda Forever',
    emojis: ['👑', '💎', '🌍', '⚡'],
    category: 'Superhero',
    tagline: 'Wakanda Forever, Cinema Forever',
    modes: {
      light: {
        colors: ['#8A2BE2', '#000000', '#00FFFF', '#F0E6FF'],
        font: { name: 'Rajdhani', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['👑', '💎', '🌍'],
        animations: { buttonHover: 'vibranium-pulse', pageTransition: 'wakanda-reveal', loader: 'energy-flow' }
      },
      dark: {
        colors: ['#8A2BE2', '#000000', '#00FFFF', '#1A0F33'],
        font: { name: 'Rajdhani', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['👑', '💎', '⚡'],
        animations: { buttonHover: 'vibranium-pulse', pageTransition: 'wakanda-reveal', loader: 'energy-flow' }
      },
      highContrast: {
        colors: ['#9370DB', '#FFFFFF', '#00FFFF', '#000000'],
        font: { name: 'Rajdhani', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['👑', '💎'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Wakandan patterns with purple energy glow',
    textColor: '#00FFFF'
  },
  {
    id: 'mcu',
    name: 'Mighty MCU',
    description: 'Heroic comic book styling with dynamic action lines',
    className: 'theme-mcu',
    colors: {
      primary: '#E50914',
      secondary: '#FFD700',
      accent: '#1E90FF',
      background: '#FFFFFF'
    },
    font: 'Roboto Condensed',
    preview: '⚡ Superhero Squad',
    emojis: ['⚡', '🛡️', '🔥', '💥'],
    category: 'Superhero',
    tagline: 'Avengers... assemble your watchlist!',
    modes: {
      light: {
        colors: ['#E50914', '#FFD700', '#1E90FF', '#FFFFFF'],
        font: { name: 'Roboto Condensed', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['⚡', '🛡️', '🔥'],
        animations: { buttonHover: 'heroic-impact', pageTransition: 'comic-zoom', loader: 'shield-spin' }
      },
      dark: {
        colors: ['#E50914', '#FFD700', '#1E90FF', '#1A1A1A'],
        font: { name: 'Roboto Condensed', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['⚡', '🛡️', '💥'],
        animations: { buttonHover: 'heroic-impact', pageTransition: 'comic-zoom', loader: 'shield-spin' }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFF00', '#0000FF', '#000000'],
        font: { name: 'Roboto Condensed', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['⚡', '🛡️'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Heroic comic book styling with dynamic action lines',
    textColor: '#000000'
  },
  {
    id: 'loki',
    name: 'Luscious Loki',
    description: 'Mischievous green and gold with temporal swirls',
    className: 'theme-loki',
    colors: {
      primary: '#228B22',
      secondary: '#FFD700',
      accent: '#000000',
      background: '#2F4F2F'
    },
    font: 'Playfair Display',
    preview: '🐍 God of Mischief',
    emojis: ['🐍', '👑', '⏰', '✨'],
    category: 'Superhero',
    tagline: 'Glorious purpose requires glorious entertainment',
    modes: {
      light: {
        colors: ['#228B22', '#FFD700', '#000000', '#F0FFF0'],
        font: { name: 'Playfair Display', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🐍', '👑', '⏰'],
        animations: { buttonHover: 'mischief-shimmer', pageTransition: 'timeline-branch', loader: 'horn-gleam' }
      },
      dark: {
        colors: ['#228B22', '#FFD700', '#000000', '#1A2A1A'],
        font: { name: 'Playfair Display', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🐍', '👑', '✨'],
        animations: { buttonHover: 'mischief-shimmer', pageTransition: 'timeline-branch', loader: 'horn-gleam' }
      },
      highContrast: {
        colors: ['#32CD32', '#FFFF00', '#FFFFFF', '#000000'],
        font: { name: 'Playfair Display', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🐍', '👑'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Mischievous green and gold with temporal swirls',
    textColor: '#FFD700'
  },
  {
    id: 'peaky',
    name: 'Pensive Peaky',
    description: 'Industrial Birmingham with vintage textures',
    className: 'theme-peaky',
    colors: {
      primary: '#8B4513',
      secondary: '#2F4F4F',
      accent: '#C0C0C0',
      background: '#696969'
    },
    font: 'Crimson Text',
    preview: '🎩 By Order',
    emojis: ['🎩', '🚬', '⚙️', '🌫️'],
    category: 'Crime',
    tagline: 'By order of the Peaky Blinders',
    modes: {
      light: {
        colors: ['#8B4513', '#2F4F4F', '#C0C0C0', '#F5F5DC'],
        font: { name: 'Crimson Text', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🎩', '🚬', '⚙️'],
        animations: { buttonHover: 'razor-glint', pageTransition: 'smoke-fade', loader: 'pocket-watch' }
      },
      dark: {
        colors: ['#8B4513', '#2F4F4F', '#C0C0C0', '#2A2A2A'],
        font: { name: 'Crimson Text', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🎩', '🚬', '🌫️'],
        animations: { buttonHover: 'razor-glint', pageTransition: 'smoke-fade', loader: 'pocket-watch' }
      },
      highContrast: {
        colors: ['#D2691E', '#FFFFFF', '#DCDCDC', '#000000'],
        font: { name: 'Crimson Text', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🎩', '⚙️'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Industrial Birmingham with vintage textures',
    textColor: '#C0C0C0'
  },
  {
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
        animations: { buttonHover: 'game-pulse', pageTransition: 'doll-turn', loader: 'marble-roll' }
      },
      dark: {
        colors: ['#E50914', '#32CD32', '#FFB6C1', '#2A2A2A'],
        font: { name: 'Noto Sans KR', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🔺', '🍪', '💰'],
        animations: { buttonHover: 'game-pulse', pageTransition: 'doll-turn', loader: 'marble-roll' }
      },
      highContrast: {
        colors: ['#FF0000', '#00FF00', '#FFFFFF', '#000000'],
        font: { name: 'Noto Sans KR', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🔺', '🎭'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Korean game aesthetics with childhood nostalgia',
    textColor: '#E50914'
  },
  {
    id: 'throne',
    name: "Throne's Triumph",
    description: 'Medieval heraldry with dragon flame accents',
    className: 'theme-throne',
    colors: {
      primary: '#8B0000',
      secondary: '#FFD700',
      accent: '#2F4F4F',
      background: '#1C1C1C'
    },
    font: 'Cinzel Decorative',
    preview: '🏰 Royal Drama',
    emojis: ['🏰', '🐉', '⚔️', '👑'],
    category: 'Fantasy',
    tagline: 'Winter is coming... to your watchlist',
    modes: {
      light: {
        colors: ['#8B0000', '#FFD700', '#2F4F4F', '#F5F5DC'],
        font: { name: 'Cinzel Decorative', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🏰', '🐉', '⚔️'],
        animations: { buttonHover: 'dragon-flame', pageTransition: 'castle-rise', loader: 'sword-clash' }
      },
      dark: {
        colors: ['#8B0000', '#FFD700', '#2F4F4F', '#0A0A0A'],
        font: { name: 'Cinzel Decorative', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🏰', '🐉', '👑'],
        animations: { buttonHover: 'dragon-flame', pageTransition: 'castle-rise', loader: 'sword-clash' }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFF00', '#FFFFFF', '#000000'],
        font: { name: 'Cinzel Decorative', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🏰', '🐉'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Medieval heraldry with dragon flame accents',
    textColor: '#FFD700'
  },
  {
    id: 'avatar',
    name: 'Azure Avatar',
    description: 'Pandoran nature with bioluminescent effects',
    className: 'theme-avatar',
    colors: {
      primary: '#00FFFF',
      secondary: '#228B22',
      accent: '#9370DB',
      background: '#000080'
    },
    font: 'Exo',
    preview: '🌿 Pandora World',
    emojis: ['🌿', '🌙', '💎', '🦋'],
    category: 'Sci-Fi',
    tagline: 'I see you... watching great movies',
    modes: {
      light: {
        colors: ['#00FFFF', '#228B22', '#9370DB', '#E0FFFF'],
        font: { name: 'Exo', weight: ['300', '400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌿', '🌙', '💎'],
        animations: { buttonHover: 'bio-glow', pageTransition: 'forest-whisper', loader: 'spirit-dance' }
      },
      dark: {
        colors: ['#00FFFF', '#228B22', '#9370DB', '#001140'],
        font: { name: 'Exo', weight: ['300', '400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌿', '🌙', '🦋'],
        animations: { buttonHover: 'bio-glow', pageTransition: 'forest-whisper', loader: 'spirit-dance' }
      },
      highContrast: {
        colors: ['#00FFFF', '#00FF00', '#FFFFFF', '#000000'],
        font: { name: 'Exo', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🌿', '🌙'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Pandoran nature with bioluminescent effects',
    textColor: '#00FFFF'
  },
  {
    id: 'heist',
    name: 'Heistful Hustle',
    description: 'Sleek casino vibes with neon money effects',
    className: 'theme-heist',
    colors: {
      primary: '#FFD700',
      secondary: '#8B0000',
      accent: '#000000',
      background: '#2F4F4F'
    },
    font: 'Bebas Neue',
    preview: '💰 Casino Royale',
    emojis: ['💰', '🎰', '🃏', '💎'],
    category: 'Crime',
    tagline: "Ocean's got nothing on your collection",
    modes: {
      light: {
        colors: ['#FFD700', '#8B0000', '#000000', '#FFFACD'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💰', '🎰', '🃏'],
        animations: { buttonHover: 'money-rain', pageTransition: 'card-flip', loader: 'slot-spin' }
      },
      dark: {
        colors: ['#FFD700', '#8B0000', '#000000', '#1A2A2A'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💰', '🎰', '💎'],
        animations: { buttonHover: 'money-rain', pageTransition: 'card-flip', loader: 'slot-spin' }
      },
      highContrast: {
        colors: ['#FFFF00', '#FF0000', '#FFFFFF', '#000000'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['💰', '🎰'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Sleek casino vibes with neon money effects',
    textColor: '#FFD700'
  },
  {
    id: 'deadpool',
    name: 'Dashing Deadpool',
    description: 'Comic book mayhem with irreverent humor',
    className: 'theme-deadpool',
    colors: {
      primary: '#E50914',
      secondary: '#000000',
      accent: '#FFD700',
      background: '#FFFFFF'
    },
    font: 'Bangers',
    preview: '💀 Maximum Effort',
    emojis: ['💀', '🗡️', '💥', '🤪'],
    category: 'Superhero',
    tagline: 'Maximum effort, maximum entertainment',
    modes: {
      light: {
        colors: ['#E50914', '#000000', '#FFD700', '#FFFFFF'],
        font: { name: 'Bangers', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💀', '🗡️', '💥'],
        animations: { buttonHover: 'chaos-shake', pageTransition: 'fourth-wall-break', loader: 'katana-spin' }
      },
      dark: {
        colors: ['#E50914', '#000000', '#FFD700', '#1A0A0A'],
        font: { name: 'Bangers', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💀', '🗡️', '🤪'],
        animations: { buttonHover: 'chaos-shake', pageTransition: 'fourth-wall-break', loader: 'katana-spin' }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFFFF', '#FFFF00', '#000000'],
        font: { name: 'Bangers', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['💀', '🗡️'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Comic book mayhem with irreverent humor',
    textColor: '#000000'
  },
  {
    id: 'ghibli',
    name: "Ghibli's Glow",
    description: 'Whimsical nature with hand-drawn warmth',
    className: 'theme-ghibli',
    colors: {
      primary: '#228B22',
      secondary: '#87CEEB',
      accent: '#FFB6C1',
      background: '#F0F8FF'
    },
    font: 'Kalam',
    preview: '🌸 Studio Magic',
    emojis: ['🌸', '🍃', '🦋', '✨'],
    category: 'Animation',
    tagline: 'A heart full of wonder, a library full of magic',
    modes: {
      light: {
        colors: ['#228B22', '#87CEEB', '#FFB6C1', '#F0F8FF'],
        font: { name: 'Kalam', weight: ['300', '400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌸', '🍃', '🦋'],
        animations: { buttonHover: 'gentle-float', pageTransition: 'petal-drift', loader: 'wind-swirl' }
      },
      dark: {
        colors: ['#228B22', '#87CEEB', '#FFB6C1', '#2A3A2A'],
        font: { name: 'Kalam', weight: ['300', '400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌸', '🍃', '✨'],
        animations: { buttonHover: 'gentle-float', pageTransition: 'petal-drift', loader: 'wind-swirl' }
      },
      highContrast: {
        colors: ['#006400', '#0000FF', '#FFFFFF', '#000000'],
        font: { name: 'Kalam', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🌸', '🍃'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Whimsical nature with hand-drawn warmth',
    textColor: '#228B22'
  },
  {
    id: 'jumanji',
    name: "Jumanji's Jungle",
    description: 'Adventure map with tribal patterns',
    className: 'theme-jumanji',
    colors: {
      primary: '#228B22',
      secondary: '#8B4513',
      accent: '#FFD700',
      background: '#2F4F2F'
    },
    font: 'Uncial Antiqua',
    preview: '🌴 Wild Adventure',
    emojis: ['🌴', '🎲', '🐘', '💎'],
    category: 'Adventure',
    tagline: 'A game for those who seek to find adventure',
    modes: {
      light: {
        colors: ['#228B22', '#8B4513', '#FFD700', '#F0FFF0'],
        font: { name: 'Uncial Antiqua', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌴', '🎲', '🐘'],
        animations: { buttonHover: 'jungle-shake', pageTransition: 'vine-swing', loader: 'drum-beat' }
      },
      dark: {
        colors: ['#228B22', '#8B4513', '#FFD700', '#1A2A1A'],
        font: { name: 'Uncial Antiqua', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌴', '🎲', '💎'],
        animations: { buttonHover: 'jungle-shake', pageTransition: 'vine-swing', loader: 'drum-beat' }
      },
      highContrast: {
        colors: ['#00FF00', '#A0522D', '#FFFF00', '#000000'],
        font: { name: 'Uncial Antiqua', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🌴', '🎲'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Adventure map with tribal patterns',
    textColor: '#FFD700'
  },
  {
    id: 'joker',
    name: "Jester's Joker",
    description: 'Chaotic clown aesthetic with urban decay',
    className: 'theme-joker',
    colors: {
      primary: '#228B22',
      secondary: '#8B008B',
      accent: '#FFD700',
      background: '#2F2F2F'
    },
    font: 'Creepster',
    preview: '🃏 Chaotic Laughter',
    emojis: ['🃏', '🎭', '🌃', '💀'],
    category: 'Crime',
    tagline: 'Why so serious about entertainment?',
    modes: {
      light: {
        colors: ['#228B22', '#8B008B', '#FFD700', '#F5F5F5'],
        font: { name: 'Creepster', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🃏', '🎭', '🌃'],
        animations: { buttonHover: 'maniac-laugh', pageTransition: 'chaos-swirl', loader: 'card-shuffle' }
      },
      dark: {
        colors: ['#228B22', '#8B008B', '#FFD700', '#1A1A1A'],
        font: { name: 'Creepster', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🃏', '🎭', '💀'],
        animations: { buttonHover: 'maniac-laugh', pageTransition: 'chaos-swirl', loader: 'card-shuffle' }
      },
      highContrast: {
        colors: ['#00FF00', '#FF00FF', '#FFFF00', '#000000'],
        font: { name: 'Creepster', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🃏', '🎭'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Chaotic clown aesthetic with urban decay',
    textColor: '#FFD700'
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
  },
  {
    id: 'simpsons',
    name: 'The Simpsons',
    description: 'Yellow family vibes with cartoon simplicity',
    className: 'theme-simpsons',
    colors: {
      primary: '#FFD90F',
      secondary: '#FF6A00',
      accent: '#009639',
      background: '#87CEEB'
    },
    font: 'Fredoka One',
    preview: '🍩 Springfield Life',
    emojis: ['🍩', '🏠', '📺', '🍺'],
    category: 'Animation',
    tagline: "D'oh! More great shows to watch",
    modes: {
      light: {
        colors: ['#FFD90F', '#FF6A00', '#009639', '#87CEEB'],
        font: { name: 'Fredoka One', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🍩', '🏠', '📺'],
        animations: { buttonHover: 'cartoon-bounce', pageTransition: 'couch-gag', loader: 'donut-roll' }
      },
      dark: {
        colors: ['#FFD90F', '#FF6A00', '#009639', '#4682B4'],
        font: { name: 'Fredoka One', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🍩', '🏠', '🍺'],
        animations: { buttonHover: 'cartoon-bounce', pageTransition: 'couch-gag', loader: 'donut-roll' }
      },
      highContrast: {
        colors: ['#FFFF00', '#FF4500', '#00FF00', '#000000'],
        font: { name: 'Fredoka One', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🍩', '🏠'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Yellow family vibes with cartoon simplicity',
    textColor: '#000000'
  },
  {
    id: 'blade-runner',
    name: 'Blade Runner',
    description: 'Neo-noir cyberpunk with rain and neon reflections',
    className: 'theme-blade-runner',
    colors: {
      primary: '#FF6B35',
      secondary: '#00CED1',
      accent: '#FFD700',
      background: '#2C2C2C'
    },
    font: 'Orbitron',
    preview: '🌧️ Cyberpunk Noir',
    emojis: ['🌧️', '🌃', '🤖', '💡'],
    category: 'Sci-Fi',
    tagline: 'More human than human entertainment',
    modes: {
      light: {
        colors: ['#FF6B35', '#00CED1', '#FFD700', '#F0F8FF'],
        font: { name: 'Orbitron', weight: ['300', '400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌧️', '🌃', '🤖'],
        animations: { buttonHover: 'neon-flicker', pageTransition: 'rain-drop', loader: 'spinner-blade' }
      },
      dark: {
        colors: ['#FF6B35', '#00CED1', '#FFD700', '#1A1A1A'],
        font: { name: 'Orbitron', weight: ['300', '400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🌧️', '🌃', '💡'],
        animations: { buttonHover: 'neon-flicker', pageTransition: 'rain-drop', loader: 'spinner-blade' }
      },
      highContrast: {
        colors: ['#FF4500', '#00FFFF', '#FFFF00', '#000000'],
        font: { name: 'Orbitron', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🌧️', '🤖'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Neo-noir cyberpunk with rain and neon reflections',
    textColor: '#00CED1'
  },
  {
    id: 'la-la-land',
    name: 'La La Land',
    description: 'Pastel dreamy colors with spotlight effects',
    className: 'theme-la-la-land',
    colors: {
      primary: '#FF69B4',
      secondary: '#87CEEB',
      accent: '#FFD700',
      background: '#FFF8DC'
    },
    font: 'Dancing Script',
    preview: '🎵 Musical Dreams',
    emojis: ['🎵', '🌟', '💃', '🎭'],
    category: 'Musical',
    tagline: "Here's to the ones who dream",
    modes: {
      light: {
        colors: ['#FF69B4', '#87CEEB', '#FFD700', '#FFF8DC'],
        font: { name: 'Dancing Script', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🎵', '🌟', '💃'],
        animations: { buttonHover: 'spotlight-dance', pageTransition: 'musical-swirl', loader: 'jazz-hands' }
      },
      dark: {
        colors: ['#FF69B4', '#87CEEB', '#FFD700', '#2F2F4F'],
        font: { name: 'Dancing Script', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🎵', '🌟', '🎭'],
        animations: { buttonHover: 'spotlight-dance', pageTransition: 'musical-swirl', loader: 'jazz-hands' }
      },
      highContrast: {
        colors: ['#FF1493', '#0000FF', '#FFFF00', '#000000'],
        font: { name: 'Dancing Script', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🎵', '🌟'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Pastel dreamy colors with spotlight effects',
    textColor: '#4B0082'
  },
  {
    id: 'breaking-bad',
    name: 'Breaking Bad',
    description: 'Desert meth lab aesthetic with chemical green',
    className: 'theme-breaking-bad',
    colors: {
      primary: '#32CD32',
      secondary: '#FFD700',
      accent: '#FF4500',
      background: '#8B4513'
    },
    font: 'Bebas Neue',
    preview: '🧪 Chemical Drama',
    emojis: ['🧪', '💰', '🏜️', '⚗️'],
    category: 'Crime',
    tagline: 'I am the one who watches',
    modes: {
      light: {
        colors: ['#32CD32', '#FFD700', '#FF4500', '#F5DEB3'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🧪', '💰', '🏜️'],
        animations: { buttonHover: 'chemical-bubble', pageTransition: 'desert-wind', loader: 'meth-cook' }
      },
      dark: {
        colors: ['#32CD32', '#FFD700', '#FF4500', '#2F1B14'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🧪', '💰', '⚗️'],
        animations: { buttonHover: 'chemical-bubble', pageTransition: 'desert-wind', loader: 'meth-cook' }
      },
      highContrast: {
        colors: ['#00FF00', '#FFFF00', '#FF0000', '#000000'],
        font: { name: 'Bebas Neue', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🧪', '💰'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Desert meth lab aesthetic with chemical green',
    textColor: '#F5DEB3'
  },
  {
    id: 'barbie',
    name: 'Barbie',
    description: 'Pink paradise with glamorous sparkles',
    className: 'theme-barbie',
    colors: {
      primary: '#FF69B4',
      secondary: '#FFB6C1',
      accent: '#FFFFFF',
      background: '#FFC0CB'
    },
    font: 'Pacifico',
    preview: '💖 Pink Paradise',
    emojis: ['💖', '👑', '💄', '✨'],
    category: 'Comedy',
    tagline: "Life in plastic, it's fantastic!",
    modes: {
      light: {
        colors: ['#FF69B4', '#FFB6C1', '#FFFFFF', '#FFC0CB'],
        font: { name: 'Pacifico', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💖', '👑', '💄'],
        animations: { buttonHover: 'sparkle-glitter', pageTransition: 'pink-swirl', loader: 'doll-spin' }
      },
      dark: {
        colors: ['#FF69B4', '#FFB6C1', '#FFFFFF', '#8B008B'],
        font: { name: 'Pacifico', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['💖', '👑', '✨'],
        animations: { buttonHover: 'sparkle-glitter', pageTransition: 'pink-swirl', loader: 'doll-spin' }
      },
      highContrast: {
        colors: ['#FF1493', '#FFFFFF', '#000000', '#FF69B4'],
        font: { name: 'Pacifico', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['💖', '👑'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Pink paradise with glamorous sparkles',
    textColor: '#FFFFFF'
  },
  {
    id: 'wes-anderson',
    name: 'Wes Anderson',
    description: 'Symmetrical composition with pastel color palettes',
    className: 'theme-wes-anderson',
    colors: {
      primary: '#F4A460',
      secondary: '#98FB98',
      accent: '#F0E68C',
      background: '#FFF8DC'
    },
    font: 'Playfair Display',
    preview: '🎨 Whimsical Symmetry',
    emojis: ['🎨', '🏨', '📚', '🎭'],
    category: 'Indie',
    tagline: 'Perfectly framed, perfectly curated',
    modes: {
      light: {
        colors: ['#F4A460', '#98FB98', '#F0E68C', '#FFF8DC'],
        font: { name: 'Playfair Display', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🎨', '🏨', '📚'],
        animations: { buttonHover: 'symmetrical-flip', pageTransition: 'vintage-fade', loader: 'ornate-spin' }
      },
      dark: {
        colors: ['#F4A460', '#98FB98', '#F0E68C', '#2F2F2F'],
        font: { name: 'Playfair Display', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🎨', '🏨', '🎭'],
        animations: { buttonHover: 'symmetrical-flip', pageTransition: 'vintage-fade', loader: 'ornate-spin' }
      },
      highContrast: {
        colors: ['#D2691E', '#00FF00', '#FFFF00', '#000000'],
        font: { name: 'Playfair Display', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🎨', '🏨'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Symmetrical composition with pastel color palettes',
    textColor: '#8B4513'
  },
  {
    id: 'cars',
    name: 'Cars (Pixar)',
    description: 'Racing stripes and automotive chrome',
    className: 'theme-cars',
    colors: {
      primary: '#FF0000',
      secondary: '#FFD700',
      accent: '#1E90FF',
      background: '#2F4F4F'
    },
    font: 'Racing Sans One',
    preview: '🏎️ Speed Racer',
    emojis: ['🏎️', '🏁', '⚡', '🏆'],
    category: 'Animation',
    tagline: 'Ka-chiga! Speed and entertainment!',
    modes: {
      light: {
        colors: ['#FF0000', '#FFD700', '#1E90FF', '#F0F8FF'],
        font: { name: 'Racing Sans One', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🏎️', '🏁', '⚡'],
        animations: { buttonHover: 'speed-boost', pageTransition: 'racing-stripes', loader: 'tire-spin' }
      },
      dark: {
        colors: ['#FF0000', '#FFD700', '#1E90FF', '#1A1A1A'],
        font: { name: 'Racing Sans One', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🏎️', '🏁', '🏆'],
        animations: { buttonHover: 'speed-boost', pageTransition: 'racing-stripes', loader: 'tire-spin' }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFF00', '#0000FF', '#000000'],
        font: { name: 'Racing Sans One', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🏎️', '🏁'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Racing stripes and automotive chrome',
    textColor: '#FFD700'
  },
  {
    id: 'jurassic-park',
    name: 'Jurassic Park',
    description: 'Prehistoric adventure with amber and fossil textures',
    className: 'theme-jurassic-park',
    colors: {
      primary: '#FF8C00',
      secondary: '#228B22',
      accent: '#8B4513',
      background: '#F5DEB3'
    },
    font: 'Cinzel',
    preview: '🦕 Dino Adventure',
    emojis: ['🦕', '🌿', '⚡', '🔬'],
    category: 'Adventure',
    tagline: 'Life finds a way... to entertain',
    modes: {
      light: {
        colors: ['#FF8C00', '#228B22', '#8B4513', '#F5DEB3'],
        font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🦕', '🌿', '⚡'],
        animations: { buttonHover: 'dino-stomp', pageTransition: 'amber-glow', loader: 'fossil-dig' }
      },
      dark: {
        colors: ['#FF8C00', '#228B22', '#8B4513', '#2F2F1A'],
        font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🦕', '🌿', '🔬'],
        animations: { buttonHover: 'dino-stomp', pageTransition: 'amber-glow', loader: 'fossil-dig' }
      },
      highContrast: {
        colors: ['#FF4500', '#00FF00', '#A0522D', '#000000'],
        font: { name: 'Cinzel', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🦕', '🌿'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Prehistoric adventure with amber and fossil textures',
    textColor: '#8B4513'
  },
  {
    id: 'pirates',
    name: 'Pirates of the Caribbean',
    description: 'Nautical adventure with treasure map aesthetics',
    className: 'theme-pirates',
    colors: {
      primary: '#8B4513',
      secondary: '#FFD700',
      accent: '#DC143C',
      background: '#2F4F4F'
    },
    font: 'Pirata One',
    preview: '🏴‍☠️ High Seas',
    emojis: ['🏴‍☠️', '⚓', '💰', '🗡️'],
    category: 'Adventure',
    tagline: 'Yo ho ho and a bottle of entertainment',
    modes: {
      light: {
        colors: ['#8B4513', '#FFD700', '#DC143C', '#F0F8FF'],
        font: { name: 'Pirata One', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🏴‍☠️', '⚓', '💰'],
        animations: { buttonHover: 'ship-rock', pageTransition: 'treasure-reveal', loader: 'compass-spin' }
      },
      dark: {
        colors: ['#8B4513', '#FFD700', '#DC143C', '#1A1A2E'],
        font: { name: 'Pirata One', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🏴‍☠️', '⚓', '🗡️'],
        animations: { buttonHover: 'ship-rock', pageTransition: 'treasure-reveal', loader: 'compass-spin' }
      },
      highContrast: {
        colors: ['#A0522D', '#FFFF00', '#FF0000', '#000000'],
        font: { name: 'Pirata One', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🏴‍☠️', '⚓'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Nautical adventure with treasure map aesthetics',
    textColor: '#FFD700'
  },
  {
    id: 'superman',
    name: 'Superman',
    description: 'Heroic red and blue with cape-flowing dynamics',
    className: 'theme-superman',
    colors: {
      primary: '#DC143C',
      secondary: '#0000FF',
      accent: '#FFD700',
      background: '#87CEEB'
    },
    font: 'Oswald',
    preview: '🦸‍♂️ Man of Steel',
    emojis: ['🦸‍♂️', '⚡', '🌍', '💪'],
    category: 'Superhero',
    tagline: 'Truth, justice, and great entertainment',
    modes: {
      light: {
        colors: ['#DC143C', '#0000FF', '#FFD700', '#87CEEB'],
        font: { name: 'Oswald', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🦸‍♂️', '⚡', '🌍'],
        animations: { buttonHover: 'super-flight', pageTransition: 'cape-swoosh', loader: 'earth-spin' }
      },
      dark: {
        colors: ['#DC143C', '#0000FF', '#FFD700', '#191970'],
        font: { name: 'Oswald', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🦸‍♂️', '⚡', '💪'],
        animations: { buttonHover: 'super-flight', pageTransition: 'cape-swoosh', loader: 'earth-spin' }
      },
      highContrast: {
        colors: ['#FF0000', '#0000FF', '#FFFF00', '#000000'],
        font: { name: 'Oswald', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🦸‍♂️', '⚡'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Heroic red and blue with cape-flowing dynamics',
    textColor: '#FFFFFF'
  },
  {
    id: 'slb',
    name: 'Sanjay Leela Bhansali',
    description: 'Grand palace aesthetics with mirror work and royal colors',
    className: 'theme-slb',
    colors: {
      primary: '#8B0000',
      secondary: '#FFD700',
      accent: '#4B0082',
      background: '#FFF8DC'
    },
    font: 'Cinzel Decorative',
    preview: '👑 Royal Grandeur',
    emojis: ['👑', '🏰', '💎', '🌹'],
    category: 'Romance',
    tagline: 'Magnificent tales of love and honor',
    modes: {
      light: {
        colors: ['#8B0000', '#FFD700', '#4B0082', '#FFF8DC'],
        font: { name: 'Cinzel Decorative', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['👑', '🏰', '💎'],
        animations: { buttonHover: 'royal-shimmer', pageTransition: 'palace-doors', loader: 'jewel-sparkle' }
      },
      dark: {
        colors: ['#8B0000', '#FFD700', '#4B0082', '#2F1B14'],
        font: { name: 'Cinzel Decorative', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['👑', '🏰', '🌹'],
        animations: { buttonHover: 'royal-shimmer', pageTransition: 'palace-doors', loader: 'jewel-sparkle' }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFF00', '#9370DB', '#000000'],
        font: { name: 'Cinzel Decorative', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['👑', '🏰'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Grand palace aesthetics with mirror work and royal colors',
    textColor: '#FFD700'
  },
  {
    id: 'rockstar',
    name: 'Rockstar',
    description: 'Music industry vibes with concert stage lighting',
    className: 'theme-rockstar',
    colors: {
      primary: '#8B0000',
      secondary: '#FFD700',
      accent: '#4169E1',
      background: '#000000'
    },
    font: 'Rock Salt',
    preview: '🎸 Music Magic',
    emojis: ['🎸', '🎤', '🌟', '🎵'],
    category: 'Musical',
    tagline: 'Rock on with epic entertainment',
    modes: {
      light: {
        colors: ['#8B0000', '#FFD700', '#4169E1', '#F5F5F5'],
        font: { name: 'Rock Salt', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🎸', '🎤', '🌟'],
        animations: { buttonHover: 'stage-lights', pageTransition: 'concert-flash', loader: 'guitar-strum' }
      },
      dark: {
        colors: ['#8B0000', '#FFD700', '#4169E1', '#0A0A0A'],
        font: { name: 'Rock Salt', weight: ['400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🎸', '🎤', '🎵'],
        animations: { buttonHover: 'stage-lights', pageTransition: 'concert-flash', loader: 'guitar-strum' }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFF00', '#0000FF', '#000000'],
        font: { name: 'Rock Salt', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🎸', '🎤'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Music industry vibes with concert stage lighting',
    textColor: '#FFD700'
  },
  {
    id: 'godfather',
    name: 'The Godfather',
    description: 'Classic mafia aesthetics with sepia tones',
    className: 'theme-godfather',
    colors: {
      primary: '#8B4513',
      secondary: '#FFD700',
      accent: '#2F4F4F',
      background: '#F5DEB3'
    },
    font: 'Cinzel',
    preview: '🤵 Family Honor',
    emojis: ['🤵', '🌹', '🍷', '⚖️'],
    category: 'Crime',
    tagline: 'An offer you cannot refuse',
    modes: {
      light: {
        colors: ['#8B4513', '#FFD700', '#2F4F4F', '#F5DEB3'],
        font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🤵', '🌹', '🍷'],
        animations: { buttonHover: 'respect-nod', pageTransition: 'family-fade', loader: 'ring-kiss' }
      },
      dark: {
        colors: ['#8B4513', '#FFD700', '#2F4F4F', '#2F1B14'],
        font: { name: 'Cinzel', weight: ['400', '600'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🤵', '🌹', '⚖️'],
        animations: { buttonHover: 'respect-nod', pageTransition: 'family-fade', loader: 'ring-kiss' }
      },
      highContrast: {
        colors: ['#A0522D', '#FFFF00', '#FFFFFF', '#000000'],
        font: { name: 'Cinzel', weight: ['600'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🤵', '🌹'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Classic mafia aesthetics with sepia tones',
    textColor: '#8B4513'
  },
  {
    id: 'space-odyssey',
    name: 'Space Odyssey',
    description: 'Retro-futuristic space exploration with HAL aesthetics',
    className: 'theme-space-odyssey',
    colors: {
      primary: '#FF0000',
      secondary: '#FFFFFF',
      accent: '#000000',
      background: '#2F2F2F'
    },
    font: 'Orbitron',
    preview: '🚀 2001 Vibes',
    emojis: ['🚀', '🤖', '🌌', '🔴'],
    category: 'Sci-Fi',
    tagline: 'My mind is going... to great cinema',
    modes: {
      light: {
        colors: ['#FF0000', '#FFFFFF', '#000000', '#F5F5F5'],
        font: { name: 'Orbitron', weight: ['300', '400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🚀', '🤖', '🌌'],
        animations: { buttonHover: 'hal-pulse', pageTransition: 'space-drift', loader: 'monolith-appear' }
      },
      dark: {
        colors: ['#FF0000', '#FFFFFF', '#000000', '#0A0A0A'],
        font: { name: 'Orbitron', weight: ['300', '400'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🚀', '🤖', '🔴'],
        animations: { buttonHover: 'hal-pulse', pageTransition: 'space-drift', loader: 'monolith-appear' }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFFFF', '#000000', '#FFFFFF'],
        font: { name: 'Orbitron', weight: ['400'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🚀', '🤖'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Retro-futuristic space exploration with HAL aesthetics',
    textColor: '#FFFFFF'
  },
  {
    id: 'scarface',
    name: 'Scarface',
    description: 'Miami vice aesthetic with neon and gold',
    className: 'theme-scarface',
    colors: {
      primary: '#FFD700',
      secondary: '#FF1493',
      accent: '#00FFFF',
      background: '#000000'
    },
    font: 'Oswald',
    preview: '🏖️ Miami Vice',
    emojis: ['🏖️', '💰', '🌴', '🕶️'],
    category: 'Crime',
    tagline: 'Say hello to great entertainment',
    modes: {
      light: {
        colors: ['#FFD700', '#FF1493', '#00FFFF', '#FFF8DC'],
        font: { name: 'Oswald', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🏖️', '💰', '🌴'],
        animations: { buttonHover: 'miami-flash', pageTransition: 'neon-fade', loader: 'palm-sway' }
      },
      dark: {
        colors: ['#FFD700', '#FF1493', '#00FFFF', '#0A0A0A'],
        font: { name: 'Oswald', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🏖️', '💰', '🕶️'],
        animations: { buttonHover: 'miami-flash', pageTransition: 'neon-fade', loader: 'palm-sway' }
      },
      highContrast: {
        colors: ['#FFFF00', '#FF0000', '#00FFFF', '#000000'],
        font: { name: 'Oswald', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🏖️', '💰'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Miami vice aesthetic with neon and gold',
    textColor: '#FFD700'
  },
  {
    id: 'star-wars',
    name: 'Star Wars',
    description: 'Galactic empire aesthetic with lightsaber glows',
    className: 'theme-star-wars',
    colors: {
      primary: '#FFD700',
      secondary: '#00FF00',
      accent: '#FF0000',
      background: '#000000'
    },
    font: 'Orbitron',
    preview: '⭐ Galaxy Far Away',
    emojis: ['⭐', '🚀', '⚔️', '🌌'],
    category: 'Sci-Fi',
    tagline: 'May the force be with your entertainment',
    modes: {
      light: {
        colors: ['#FFD700', '#00FF00', '#FF0000', '#F0F8FF'],
        font: { name: 'Orbitron', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['⭐', '🚀', '⚔️'],
        animations: { buttonHover: 'lightsaber-hum', pageTransition: 'hyperspace-jump', loader: 'force-spin' }
      },
      dark: {
        colors: ['#FFD700', '#00FF00', '#FF0000', '#0A0A0A'],
        font: { name: 'Orbitron', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['⭐', '🚀', '🌌'],
        animations: { buttonHover: 'lightsaber-hum', pageTransition: 'hyperspace-jump', loader: 'force-spin' }
      },
      highContrast: {
        colors: ['#FFFF00', '#00FF00', '#FF0000', '#000000'],
        font: { name: 'Orbitron', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['⭐', '🚀'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Galactic empire aesthetic with lightsaber glows',
    textColor: '#FFD700'
  },
  {
    id: 'game-of-thrones',
    name: 'Game of Thrones',
    description: 'Medieval houses with dragon fire and iron throne',
    className: 'theme-game-of-thrones',
    colors: {
      primary: '#8B0000',
      secondary: '#FFD700',
      accent: '#2F4F4F',
      background: '#1C1C1C'
    },
    font: 'Cinzel Decorative',
    preview: '🐉 Fire & Blood',
    emojis: ['🐉', '⚔️', '👑', '🔥'],
    category: 'Fantasy',
    tagline: 'When you play the game of shows, you win or you die',
    modes: {
      light: {
        colors: ['#8B0000', '#FFD700', '#2F4F4F', '#F5F5DC'],
        font: { name: 'Cinzel Decorative', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🐉', '⚔️', '👑'],
        animations: { buttonHover: 'dragon-breath', pageTransition: 'throne-rise', loader: 'crown-forge' }
      },
      dark: {
        colors: ['#8B0000', '#FFD700', '#2F4F4F', '#0A0A0A'],
        font: { name: 'Cinzel Decorative', weight: ['400', '700'], size: { small: '14px', medium: '16px', large: '24px' } },
        emojis: ['🐉', '⚔️', '🔥'],
        animations: { buttonHover: 'dragon-breath', pageTransition: 'throne-rise', loader: 'crown-forge' }
      },
      highContrast: {
        colors: ['#FF0000', '#FFFF00', '#FFFFFF', '#000000'],
        font: { name: 'Cinzel Decorative', weight: ['700'], size: { small: '16px', medium: '18px', large: '28px' } },
        emojis: ['🐉', '⚔️'],
        animations: { buttonHover: 'scale(1.1)', pageTransition: 'fade', loader: 'pulse' }
      }
    },
    designStyle: 'Medieval houses with dragon fire and iron throne',
    textColor: '#FFD700'
  }
];
