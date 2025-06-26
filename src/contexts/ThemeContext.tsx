
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
