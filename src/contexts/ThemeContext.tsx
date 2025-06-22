
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '@/types';
import { storage } from '@/lib/storage';

const themes: Theme[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'Clean and modern dark theme',
    className: '',
    colors: {
      primary: '#ec4899',
      secondary: '#64748b',
      accent: '#f472b6',
      background: '#0f172a'
    },
    font: 'Inter',
    preview: 'bg-gradient-to-br from-slate-900 to-slate-800'
  },
  {
    id: 'barbie',
    name: "Barbie's Beauty",
    description: 'Pink perfection with glitter and glamour',
    className: 'theme-barbie font-playfair',
    colors: {
      primary: '#ec4899',
      secondary: '#f472b6',
      accent: '#fbbf24',
      background: '#fdf2f8'
    },
    font: 'Playfair Display',
    preview: 'bg-barbie-gradient'
  },
  {
    id: 'breaking',
    name: 'Breaking Background',
    description: 'Mustard and green with gritty textures',
    className: 'theme-breaking font-orbitron',
    colors: {
      primary: '#eab308',
      secondary: '#0f172a',
      accent: '#22c55e',
      background: '#0f172a'
    },
    font: 'Orbitron',
    preview: 'bg-breaking-gradient'
  },
  {
    id: 'oppenheimer',
    name: 'Oppenhype',
    description: 'Muted neutrals with techy vibes',
    className: 'theme-oppenheimer font-orbitron',
    colors: {
      primary: '#f97316',
      secondary: '#475569',
      accent: '#fbbf24',
      background: '#0f172a'
    },
    font: 'Orbitron',
    preview: 'bg-oppenheimer-gradient'
  },
  {
    id: 'stranger',
    name: 'Stranger Sheets',
    description: 'Neon reds with retro horror vibes',
    className: 'theme-stranger font-creepster',
    colors: {
      primary: '#ef4444',
      secondary: '#7f1d1d',
      accent: '#fbbf24',
      background: '#7f1d1d'
    },
    font: 'Creepster',
    preview: 'bg-stranger-gradient'
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  changeTheme: (themeId: string) => void;
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

  useEffect(() => {
    const savedThemeId = storage.getCurrentTheme();
    const theme = themes.find(t => t.id === savedThemeId) || themes[0];
    setCurrentTheme(theme);
    applyTheme(theme);
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    themes.forEach(t => {
      if (t.className) {
        root.classList.remove(...t.className.split(' '));
      }
    });
    
    // Add new theme classes
    if (theme.className) {
      root.classList.add(...theme.className.split(' '));
    }
  };

  const changeTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      storage.setCurrentTheme(themeId);
      applyTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
