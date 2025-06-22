
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
  },
  {
    id: 'spider',
    name: 'Spider Style',
    description: 'Neon purple, cyan, comic halftones',
    className: 'theme-spider font-bungee',
    colors: {
      primary: '#a855f7',
      secondary: '#06b6d4',
      accent: '#ec4899',
      background: '#0f0f23'
    },
    font: 'Bungee',
    preview: 'bg-spider-gradient'
  },
  {
    id: 'dune',
    name: 'Dune Dazzle',
    description: 'Desert sand, deep blues, minimalist design',
    className: 'theme-dune font-cinzel',
    colors: {
      primary: '#d97706',
      secondary: '#1e40af',
      accent: '#f59e0b',
      background: '#1e293b'
    },
    font: 'Cinzel',
    preview: 'bg-dune-gradient'
  },
  {
    id: 'nolan',
    name: 'Nolan Nights',
    description: 'Dark purples, navy, space gradients',
    className: 'theme-nolan font-montserrat',
    colors: {
      primary: '#7c3aed',
      secondary: '#1e3a8a',
      accent: '#6366f1',
      background: '#0f172a'
    },
    font: 'Montserrat',
    preview: 'bg-nolan-gradient'
  },
  {
    id: 'matrix',
    name: 'Matrix Mode',
    description: 'Black & neon green, digital noise overlays',
    className: 'theme-matrix font-share-tech',
    colors: {
      primary: '#22c55e',
      secondary: '#000000',
      accent: '#10b981',
      background: '#000000'
    },
    font: 'Share Tech Mono',
    preview: 'bg-matrix-gradient'
  },
  {
    id: 'potter',
    name: 'Potter Pages',
    description: 'Burgundy, gold, parchment beige, magical serif',
    className: 'theme-potter font-cormorant',
    colors: {
      primary: '#7c2d12',
      secondary: '#fbbf24',
      accent: '#f3e8ff',
      background: '#fef3c7'
    },
    font: 'Cormorant Garamond',
    preview: 'bg-potter-gradient'
  },
  {
    id: 'gotham',
    name: 'Gotham Glow',
    description: 'Jet black, blood red, stark white',
    className: 'theme-gotham font-anton',
    colors: {
      primary: '#dc2626',
      secondary: '#000000',
      accent: '#ffffff',
      background: '#000000'
    },
    font: 'Anton',
    preview: 'bg-gotham-gradient'
  },
  {
    id: 'wakanda',
    name: 'Wakanda Wave',
    description: 'Purple, gold, tribal patterns',
    className: 'theme-wakanda font-raleway',
    colors: {
      primary: '#7c3aed',
      secondary: '#fbbf24',
      accent: '#a855f7',
      background: '#1a1a2e'
    },
    font: 'Raleway',
    preview: 'bg-wakanda-gradient'
  },
  {
    id: 'loki',
    name: 'Loki Layers',
    description: 'Emerald green, bronze, fractal patterns',
    className: 'theme-loki font-garamond',
    colors: {
      primary: '#059669',
      secondary: '#92400e',
      accent: '#10b981',
      background: '#0f2027'
    },
    font: 'EB Garamond',
    preview: 'bg-loki-gradient'
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  changeTheme: (themeId: string) => void;
  isSecondaryMode: boolean;
  toggleColorMode: () => void;
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

  useEffect(() => {
    const savedThemeId = storage.getCurrentTheme();
    const theme = themes.find(t => t.id === savedThemeId) || themes[0];
    setCurrentTheme(theme);
    applyTheme(theme, isSecondaryMode);
  }, []);

  const applyTheme = (theme: Theme, useSecondary: boolean = false) => {
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

    // Apply color mode
    if (useSecondary) {
      root.style.setProperty('--primary', theme.colors.secondary);
      root.style.setProperty('--secondary', theme.colors.primary);
    } else {
      root.style.setProperty('--primary', theme.colors.primary);
      root.style.setProperty('--secondary', theme.colors.secondary);
    }
  };

  const changeTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      storage.setCurrentTheme(themeId);
      applyTheme(theme, isSecondaryMode);
    }
  };

  const toggleColorMode = () => {
    const newMode = !isSecondaryMode;
    setIsSecondaryMode(newMode);
    applyTheme(currentTheme, newMode);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, changeTheme, isSecondaryMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
