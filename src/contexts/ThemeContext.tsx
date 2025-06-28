
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '@/types';
import { themes } from '@/data/themes';

interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  changeTheme: (themeId: string) => void;
  isSecondaryMode: boolean;
  toggleColorMode: () => void;
  customFont: string;
  setGoogleFont: (fontName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const loadGoogleFont = (fontName: string) => {
  if (!fontName || fontName === 'Inter') return;
  
  const existingLink = document.querySelector(`link[href*="${fontName}"]`);
  if (existingLink) return;
  
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(' ', '+')}:wght@300;400;600;700&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [isSecondaryMode, setIsSecondaryMode] = useState(false);
  const [customFont, setCustomFont] = useState('Inter');

  useEffect(() => {
    // Load saved theme
    const savedThemeId = localStorage.getItem('cinelibrary-theme');
    const savedSecondaryMode = localStorage.getItem('cinelibrary-secondary-mode') === 'true';
    const savedFont = localStorage.getItem('cinelibrary-font') || 'Inter';
    
    if (savedThemeId) {
      const theme = themes.find(t => t.id === savedThemeId);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
    
    setIsSecondaryMode(savedSecondaryMode);
    setCustomFont(savedFont);
    loadGoogleFont(savedFont);
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    const body = document.body;
    
    // Remove all theme classes
    body.className = body.className.replace(/theme-\w+/g, '');
    
    // Add current theme class
    body.classList.add(currentTheme.className);
    
    // Apply CSS variables
    const colors = isSecondaryMode ? 
      {
        primary: currentTheme.colors.secondary,
        secondary: currentTheme.colors.primary,
        accent: currentTheme.colors.accent,
        background: currentTheme.colors.background
      } : currentTheme.colors;
    
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-background', colors.background);
    
    // Convert hex to RGB for rgba usage
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
        '0, 0, 0';
    };
    
    root.style.setProperty('--theme-primary-rgb', hexToRgb(colors.primary));
    root.style.setProperty('--theme-secondary-rgb', hexToRgb(colors.secondary));
    root.style.setProperty('--theme-accent-rgb', hexToRgb(colors.accent));
    root.style.setProperty('--theme-background-rgb', hexToRgb(colors.background));
    
    // Apply font
    const fontFamily = customFont === 'Inter' ? currentTheme.font : customFont;
    root.style.setProperty('--font-family', `'${fontFamily}', sans-serif`);
    loadGoogleFont(fontFamily);
    
  }, [currentTheme, isSecondaryMode, customFont]);

  const changeTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('cinelibrary-theme', themeId);
    }
  };

  const toggleColorMode = () => {
    const newMode = !isSecondaryMode;
    setIsSecondaryMode(newMode);
    localStorage.setItem('cinelibrary-secondary-mode', newMode.toString());
  };

  const setGoogleFont = (fontName: string) => {
    setCustomFont(fontName);
    localStorage.setItem('cinelibrary-font', fontName);
    loadGoogleFont(fontName);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      themes,
      changeTheme,
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
