
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '@/types';
import { storage } from '@/lib/storage';

// Enhanced theme structure based on project knowledge
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
    preview: 'bg-gradient-to-br from-slate-900 via-slate-800 to-pink-900'
  },
  {
    id: 'spider-verse',
    name: 'Spectacular Spider-Verse',
    description: 'With great power comes great responsibility - Comic book vibes with web patterns',
    className: 'theme-spider-verse',
    colors: {
      primary: '#FF1E56',
      secondary: '#00B7EB',
      accent: '#F5E050',
      background: '#1a1a2e'
    },
    font: 'Bungee',
    preview: 'bg-gradient-to-br from-red-600 via-blue-500 to-yellow-400'
  },
  {
    id: 'batman-dark',
    name: 'Brooding Batman',
    description: 'I am vengeance, I am the night - Gotham City darkness with yellow accents',
    className: 'theme-batman',
    colors: {
      primary: '#2F4F4F',
      secondary: '#000000',
      accent: '#FFCA28',
      background: '#000000'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-gray-800 via-black to-yellow-600'
  },
  {
    id: 'wakanda-vibranium',
    name: 'Vibrant Vibranium',
    description: 'Wakanda forever! - African-inspired with royal purples and gold',
    className: 'theme-wakanda',
    colors: {
      primary: '#6B3FA0',
      secondary: '#D4A017',
      accent: '#FFD700',
      background: '#2C1A3D'
    },
    font: 'Raleway',
    preview: 'bg-gradient-to-br from-purple-600 via-yellow-600 to-gold'
  },
  {
    id: 'matrix-code',
    name: 'Mystical Matrix',
    description: 'There is no spoon - Digital rain and neon green code',
    className: 'theme-matrix',
    colors: {
      primary: '#00FF00',
      secondary: '#0F3D3E',
      accent: '#4CAF50',
      background: '#000000'
    },
    font: 'Share Tech Mono',
    preview: 'bg-gradient-to-br from-green-500 via-teal-800 to-black'
  },
  {
    id: 'dune-desert',
    name: 'Dazzling Dune',
    description: 'The spice must flow - Desert sands and deep space blues',
    className: 'theme-dune',
    colors: {
      primary: '#D9A86C',
      secondary: '#8B5523',
      accent: '#F4E4BC',
      background: '#3C2F2F'
    },
    font: 'Cinzel',
    preview: 'bg-gradient-to-br from-amber-600 via-orange-800 to-yellow-200'
  },
  {
    id: 'hogwarts-magic',
    name: 'Hogwarts Harmony',
    description: 'It does not do to dwell on dreams and forget to live - Magical castle vibes',
    className: 'theme-hogwarts',
    colors: {
      primary: '#A68A64',
      secondary: '#FFD700',
      accent: '#2A623D',
      background: '#4A3728'
    },
    font: 'Cinzel',
    preview: 'bg-gradient-to-br from-amber-600 via-yellow-500 to-green-700'
  },
  {
    id: 'cyberpunk-neon',
    name: 'Rebel Robot',
    description: 'Hello, friend - Cyberpunk neon with digital glitch effects',
    className: 'theme-cyberpunk',
    colors: {
      primary: '#06b6d4',
      secondary: '#ec4899',
      accent: '#22d3ee',
      background: '#0a0a0a'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-cyan-500 via-pink-500 to-cyan-300'
  },
  {
    id: 'barbie-pink',
    name: "Barbie's Beauty",
    description: 'Pink perfection with glitter and glamour - Iconic Barbie aesthetics',
    className: 'theme-barbie',
    colors: {
      primary: '#ec4899',
      secondary: '#f472b6',
      accent: '#fbbf24',
      background: '#fdf2f8'
    },
    font: 'Playfair Display',
    preview: 'bg-gradient-to-br from-pink-500 via-pink-400 to-yellow-400'
  },
  {
    id: 'squid-game',
    name: 'Sinister Squid',
    description: 'Ready, set, play - Korean death games with pink and teal',
    className: 'theme-squid',
    colors: {
      primary: '#E91E63',
      secondary: '#0288D1',
      accent: '#4CAF50',
      background: '#FFD700'
    },
    font: 'Oxanium',
    preview: 'bg-gradient-to-br from-pink-600 via-blue-600 to-green-500'
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
    
    // Remove existing custom font link
    const existingLinks = document.querySelectorAll('[id^="google-font-"]');
    existingLinks.forEach(link => link.remove());
    
    // Add new font link
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

  const applyTheme = (theme: Theme, useSecondary: boolean = false, font?: string) => {
    const root = document.documentElement;
    
    // Remove all theme classes first
    themes.forEach(t => {
      if (t.className) {
        root.classList.remove(...t.className.split(' '));
      }
    });
    
    // Add new theme classes
    if (theme.className) {
      root.classList.add(...theme.className.split(' '));
    }

    // Apply comprehensive CSS variables
    const primaryColor = useSecondary ? theme.colors.secondary : theme.colors.primary;
    const secondaryColor = useSecondary ? theme.colors.primary : theme.colors.secondary;
    
    root.style.setProperty('--theme-primary', primaryColor);
    root.style.setProperty('--theme-secondary', secondaryColor);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--theme-background', theme.colors.background);
    
    // RGB values for better alpha support
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

    // Apply background based on theme
    document.body.style.background = `linear-gradient(135deg, ${theme.colors.background}, rgba(${hexToRgb(primaryColor)}, 0.1))`;
    
    // Add theme data attribute for CSS targeting
    root.setAttribute('data-theme', theme.id);
    
    console.log(`Theme applied: ${theme.name}`, {
      primary: primaryColor,
      secondary: secondaryColor,
      accent: theme.colors.accent,
      background: theme.colors.background,
      font: fontToUse
    });
  };

  const applyThemeEffects = () => {
    // Force re-render of theme-dependent elements
    const themeElements = document.querySelectorAll('[style*="var(--theme"]');
    themeElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.display = 'none';
      element.offsetHeight; // Force reflow
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
