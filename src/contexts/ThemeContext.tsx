
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
      primary: '#FF1E56',
      secondary: '#00B7EB',
      accent: '#F5E050',
      background: '#FFFFFF'
    },
    font: 'Anime Ace',
    preview: '🕷️',
    emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
    category: 'Superhero',
    tagline: 'With great power comes great responsibility.',
    modes: {
      light: {
        colors: ['#FF1E56', '#00B7EB', '#FFFFFF', '#F5E050', '#FF6F61'],
        font: {
          name: 'Anime Ace',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: {
          buttonHover: 'webSwing',
          pageTransition: 'comicPop',
          loader: 'spiderSpin'
        }
      },
      dark: {
        colors: ['#D81F26', '#0288D1', '#1C2526', '#E0C120', '#E64A45'],
        font: {
          name: 'Anime Ace',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: {
          buttonHover: 'webSwing',
          pageTransition: 'comicPop',
          loader: 'spiderSpin'
        }
      },
      highContrast: {
        colors: ['#FF1E56', '#000000', '#FFFFFF', '#FFFF00', '#FF6F61'],
        font: {
          name: 'Anime Ace',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆'],
        animations: {
          buttonHover: 'webSwing',
          pageTransition: 'comicPop',
          loader: 'spiderSpin'
        }
      }
    }
  },
  {
    id: 'dazzling-dune',
    name: 'Dazzling Dune',
    description: 'The spice must flow.',
    className: 'theme-dune',
    colors: {
      primary: '#D9A86C',
      secondary: '#8B5523',
      accent: '#A67B5B',
      background: '#F4E4BC'
    },
    font: 'Cinzel',
    preview: '🏜️',
    emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
    category: 'Sci-Fi',
    tagline: 'The spice must flow.',
    modes: {
      light: {
        colors: ['#D9A86C', '#8B5523', '#F4E4BC', '#FFFFFF', '#A67B5B'],
        font: {
          name: 'Cinzel',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: {
          buttonHover: 'sandSwirl',
          pageTransition: 'desertFade',
          loader: 'spiceGlow'
        }
      },
      dark: {
        colors: ['#A67B5B', '#5A3A1A', '#3C2F2F', '#1C2526', '#8B5523'],
        font: {
          name: 'Cinzel',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: {
          buttonHover: 'sandSwirl',
          pageTransition: 'desertFade',
          loader: 'spiceGlow'
        }
      },
      highContrast: {
        colors: ['#D9A86C', '#000000', '#FFFFFF', '#8B5523', '#A67B5B'],
        font: {
          name: 'Cinzel',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌'],
        animations: {
          buttonHover: 'sandSwirl',
          pageTransition: 'desertFade',
          loader: 'spiceGlow'
        }
      }
    }
  },
  {
    id: 'intriguing-interstellar',
    name: 'Intriguing Interstellar',
    description: 'We must reach for the stars.',
    className: 'theme-interstellar',
    colors: {
      primary: '#A3BFFA',
      secondary: '#3A5F7D',
      accent: '#F4A261',
      background: '#FFFFFF'
    },
    font: 'Orbitron',
    preview: '🌌',
    emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
    category: 'Sci-Fi',
    tagline: 'We must reach for the stars.',
    modes: {
      light: {
        colors: ['#A3BFFA', '#3A5F7D', '#F4A261', '#FFFFFF', '#D9D9D9'],
        font: {
          name: 'Orbitron',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: {
          buttonHover: 'starPulse',
          pageTransition: 'wormholeZoom',
          loader: 'orbitSpin'
        }
      },
      dark: {
        colors: ['#0B1C2E', '#2A4059', '#D98A40', '#1C2526', '#4A4A4A'],
        font: {
          name: 'Orbitron',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: {
          buttonHover: 'starPulse',
          pageTransition: 'wormholeZoom',
          loader: 'orbitSpin'
        }
      },
      highContrast: {
        colors: ['#A3BFFA', '#000000', '#FFFFFF', '#F4A261', '#D9D9D9'],
        font: {
          name: 'Orbitron',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀'],
        animations: {
          buttonHover: 'starPulse',
          pageTransition: 'wormholeZoom',
          loader: 'orbitSpin'
        }
      }
    }
  },
  {
    id: 'mystical-matrix',
    name: 'Mystical Matrix',
    description: 'There is no spoon.',
    className: 'theme-matrix',
    colors: {
      primary: '#4CAF50',
      secondary: '#00FF00',
      accent: '#2E7D32',
      background: '#FFFFFF'
    },
    font: 'VT323',
    preview: '💾',
    emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
    category: 'Sci-Fi',
    tagline: 'There is no spoon.',
    modes: {
      light: {
        colors: ['#4CAF50', '#00FF00', '#FFFFFF', '#2E7D32', '#D9D9D9'],
        font: {
          name: 'VT323',
          weight: ['regular'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: {
          buttonHover: 'glitch',
          pageTransition: 'digitalRain',
          loader: 'codeScroll'
        }
      },
      dark: {
        colors: ['#0F3D3E', '#00CC00', '#1A1A1A', '#1B5E20', '#263238'],
        font: {
          name: 'VT323',
          weight: ['regular'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: {
          buttonHover: 'glitch',
          pageTransition: 'digitalRain',
          loader: 'codeScroll'
        }
      },
      highContrast: {
        colors: ['#00FF00', '#000000', '#FFFFFF', '#4CAF50', '#2E7D32'],
        font: {
          name: 'VT323',
          weight: ['regular'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐'],
        animations: {
          buttonHover: 'glitch',
          pageTransition: 'digitalRain',
          loader: 'codeScroll'
        }
      }
    }
  },
  {
    id: 'hogwarts-harmony',
    name: 'Hogwarts Harmony',
    description: 'It does not do to dwell on dreams and forget to live.',
    className: 'theme-hogwarts',
    colors: {
      primary: '#A68A64',
      secondary: '#FFD700',
      accent: '#2A623D',
      background: '#FFFFFF'
    },
    font: 'Luminary, serif',
    preview: '🪄',
    emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
    category: 'Fantasy',
    tagline: 'It does not do to dwell on dreams and forget to live.',
    modes: {
      light: {
        colors: ['#A68A64', '#FFD700', '#FFFFFF', '#2A623D', '#740001'],
        font: {
          name: 'Luminary, serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: {
          buttonHover: 'sparkle',
          pageTransition: 'wandWave',
          loader: 'owlFlight'
        }
      },
      dark: {
        colors: ['#4A3728', '#D4A017', '#1A472A', '#1C2526', '#5C0000'],
        font: {
          name: 'Luminary, serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: {
          buttonHover: 'sparkle',
          pageTransition: 'wandWave',
          loader: 'owlFlight'
        }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#2A623D', '#740001'],
        font: {
          name: 'Luminary, serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🪄', '⚡', '🦁', '🏰', '📖'],
        animations: {
          buttonHover: 'sparkle',
          pageTransition: 'wandWave',
          loader: 'owlFlight'
        }
      }
    }
  },
  {
    id: 'brooding-batman',
    name: 'Brooding Batman',
    description: 'I am vengeance, I am the night, I am Batman!',
    className: 'theme-batman',
    colors: {
      primary: '#B0BEC5',
      secondary: '#4A4A4A',
      accent: '#FFCA28',
      background: '#FFFFFF'
    },
    font: 'Gotham, sans-serif',
    preview: '🦇',
    emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
    category: 'Superhero',
    tagline: 'I am vengeance, I am the night, I am Batman!',
    modes: {
      light: {
        colors: ['#B0BEC5', '#4A4A4A', '#FFFFFF', '#FFCA28', '#2F4F4F'],
        font: {
          name: 'Gotham, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: {
          buttonHover: 'shadowPulse',
          pageTransition: 'nightFade',
          loader: 'batSignal'
        }
      },
      dark: {
        colors: ['#1C2526', '#2F4F4F', '#263238', '#E0A800', '#4A4A4A'],
        font: {
          name: 'Gotham, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: {
          buttonHover: 'shadowPulse',
          pageTransition: 'nightFade',
          loader: 'batSignal'
        }
      },
      highContrast: {
        colors: ['#FFCA28', '#000000', '#FFFFFF', '#4A4A4A', '#2F4F4F'],
        font: {
          name: 'Gotham, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓'],
        animations: {
          buttonHover: 'shadowPulse',
          pageTransition: 'nightFade',
          loader: 'batSignal'
        }
      }
    }
  },
  {
    id: 'vibrant-vibranium',
    name: 'Vibrant Vibranium',
    description: 'Wakanda forever!',
    className: 'theme-vibranium',
    colors: {
      primary: '#D4A017',
      secondary: '#6B3FA0',
      accent: '#FFD700',
      background: '#FFFFFF'
    },
    font: 'Futura, sans-serif',
    preview: '🐆',
    emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
    category: 'Superhero',
    tagline: 'Wakanda forever!',
    modes: {
      light: {
        colors: ['#D4A017', '#6B3FA0', '#FFFFFF', '#FFD700', '#2C1A3D'],
        font: {
          name: 'Futura, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: {
          buttonHover: 'vibraniumGlow',
          pageTransition: 'tribalFade',
          loader: 'pantherProwl'
        }
      },
      dark: {
        colors: ['#2C1A3D', '#4B2A70', '#1C2526', '#D4A017', '#B38C00'],
        font: {
          name: 'Futura, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: {
          buttonHover: 'vibraniumGlow',
          pageTransition: 'tribalFade',
          loader: 'pantherProwl'
        }
      },
      highContrast: {
        colors: ['#FFD700', '#000000', '#FFFFFF', '#6B3FA0', '#2C1A3D'],
        font: {
          name: 'Futura, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️'],
        animations: {
          buttonHover: 'vibraniumGlow',
          pageTransition: 'tribalFade',
          loader: 'pantherProwl'
        }
      }
    }
  },
  {
    id: 'mighty-mcu',
    name: 'Mighty MCU',
    description: 'Avengers, assemble!',
    className: 'theme-mcu',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#00B7EB',
      background: '#FFFFFF'
    },
    font: 'Avenir, sans-serif',
    preview: '🦸‍♂️',
    emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
    category: 'Superhero',
    tagline: 'Avengers, assemble!',
    modes: {
      light: {
        colors: ['#D81F26', '#FFD700', '#FFFFFF', '#00B7EB', '#4CAF50'],
        font: {
          name: 'Avenir, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: {
          buttonHover: 'heroPulse',
          pageTransition: 'infinityWarp',
          loader: 'arcReactor'
        }
      },
      dark: {
        colors: ['#A1041B', '#D4A017', '#1C2526', '#0288D1', '#2A5F31'],
        font: {
          name: 'Avenir, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: {
          buttonHover: 'heroPulse',
          pageTransition: 'infinityWarp',
          loader: 'arcReactor'
        }
      },
      highContrast: {
        colors: ['#D81F26', '#000000', '#FFFFFF', '#FFD700', '#4CAF50'],
        font: {
          name: 'Avenir, sans-serif',
          weight: ['regular', 'bold'],
          size: {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
        },
        emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌'],
        animations: {
          buttonHover: 'heroPulse',
          pageTransition: 'infinityWarp',
          loader: 'arcReactor'
        }
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
    const mode = theme.modes.light; // Default to light mode
    
    // Use custom font if available, otherwise use theme font
    const fontToUse = customFont || mode.font.name;
    
    root.style.setProperty('--theme-primary', isSecondaryMode ? theme.colors.secondary : theme.colors.primary);
    root.style.setProperty('--theme-secondary', isSecondaryMode ? theme.colors.primary : theme.colors.secondary);
    root.style.setProperty('--theme-background', theme.colors.background);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--font-family', fontToUse);
    
    // Set RGB values for transparency usage
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
    
    const primaryRgb = hexToRgb(primaryColor);
    const secondaryRgb = hexToRgb(secondaryColor);
    
    if (primaryRgb) {
      root.style.setProperty('--theme-primary-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
    }
    if (secondaryRgb) {
      root.style.setProperty('--theme-secondary-rgb', `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`);
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
    
    // Add Google Font link to head if it doesn't exist
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
