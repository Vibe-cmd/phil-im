
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
  },
  {
    id: 'peaky',
    name: 'Peaky Palette',
    description: 'Coal grey, sepia, suit-texture overlays',
    className: 'theme-peaky font-playfair',
    colors: {
      primary: '#525252',
      secondary: '#a16207',
      accent: '#6b7280',
      background: '#1c1917'
    },
    font: 'Playfair Display',
    preview: 'bg-gradient-to-br from-stone-800 to-amber-800'
  },
  {
    id: 'marvelous',
    name: 'Marvelous Mood',
    description: 'Scarlet, gold, cosmic blue, dynamic fonts',
    className: 'theme-marvelous font-exo',
    colors: {
      primary: '#dc2626',
      secondary: '#fbbf24',
      accent: '#2563eb',
      background: '#0c0a09'
    },
    font: 'Exo 2',
    preview: 'bg-gradient-to-br from-red-600 to-blue-600'
  },
  {
    id: 'squid',
    name: 'Squid Style',
    description: 'Deep pink, black, game-like UI shapes',
    className: 'theme-squid font-oxanium',
    colors: {
      primary: '#db2777',
      secondary: '#000000',
      accent: '#f9a8d4',
      background: '#0a0a0a'
    },
    font: 'Oxanium',
    preview: 'bg-gradient-to-br from-pink-600 to-black'
  },
  {
    id: 'thrones',
    name: 'Thrones Theme',
    description: 'Stone grey, icy blue, medieval textures',
    className: 'theme-thrones font-cinzel-decorative',
    colors: {
      primary: '#64748b',
      secondary: '#0ea5e9',
      accent: '#94a3b8',
      background: '#1e293b'
    },
    font: 'Cinzel Decorative',
    preview: 'bg-gradient-to-br from-slate-600 to-sky-500'
  },
  {
    id: 'pandora',
    name: 'Pandora Pulse',
    description: 'Electric blue, bioluminescent glow',
    className: 'theme-pandora font-quicksand',
    colors: {
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      accent: '#38bdf8',
      background: '#0c4a6e'
    },
    font: 'Quicksand',
    preview: 'bg-gradient-to-br from-cyan-500 to-blue-800'
  },
  {
    id: 'money',
    name: 'Money Mode',
    description: 'Red, white, Dali mask icons',
    className: 'theme-money font-oswald',
    colors: {
      primary: '#ef4444',
      secondary: '#ffffff',
      accent: '#fecaca',
      background: '#7f1d1d'
    },
    font: 'Oswald',
    preview: 'bg-gradient-to-br from-red-500 to-white'
  },
  {
    id: 'witcher',
    name: 'Witcher Waves',
    description: 'Silver, black, stormy textures',
    className: 'theme-witcher font-abril',
    colors: {
      primary: '#94a3b8',
      secondary: '#000000',
      accent: '#6b7280',
      background: '#0f172a'
    },
    font: 'Abril Fatface',
    preview: 'bg-gradient-to-br from-slate-400 to-black'
  },
  {
    id: 'deadpool',
    name: 'Deadpool Drama',
    description: 'Black, red, comic grit textures',
    className: 'theme-deadpool font-bangers',
    colors: {
      primary: '#dc2626',
      secondary: '#000000',
      accent: '#ef4444',
      background: '#0a0a0a'
    },
    font: 'Bangers',
    preview: 'bg-gradient-to-br from-red-600 to-black'
  },
  {
    id: 'ghibli',
    name: 'Ghibli Garden',
    description: 'Soft greens, earthy beige, dreamy font',
    className: 'theme-ghibli font-comfortaa',
    colors: {
      primary: '#22c55e',
      secondary: '#d2b48c',
      accent: '#86efac',
      background: '#f0f9ff'
    },
    font: 'Comfortaa',
    preview: 'bg-gradient-to-br from-green-400 to-amber-200'
  },
  {
    id: 'jedi',
    name: 'Jedi Journey',
    description: 'Space black, blue, yellow crawl text',
    className: 'theme-jedi font-orbitron',
    colors: {
      primary: '#2563eb',
      secondary: '#fbbf24',
      accent: '#60a5fa',
      background: '#000000'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-blue-600 to-yellow-500'
  },
  {
    id: 'jumanji',
    name: 'Jumanji Jungle',
    description: 'Earthy greens, jungle leaves, rope accents',
    className: 'theme-jumanji font-advent',
    colors: {
      primary: '#16a34a',
      secondary: '#92400e',
      accent: '#4ade80',
      background: '#1c2e00'
    },
    font: 'Advent Pro',
    preview: 'bg-gradient-to-br from-green-600 to-amber-700'
  },
  {
    id: 'titanic',
    name: 'Titanic Tide',
    description: 'Ocean blue, aged white, classic serif',
    className: 'theme-titanic font-baskerville',
    colors: {
      primary: '#0369a1',
      secondary: '#f8fafc',
      accent: '#0ea5e9',
      background: '#1e3a8a'
    },
    font: 'Libre Baskerville',
    preview: 'bg-gradient-to-br from-blue-600 to-slate-100'
  },
  {
    id: 'creed',
    name: 'Creed Canvas',
    description: 'Blood red, punch-textures, bold fonts',
    className: 'theme-creed font-bebas',
    colors: {
      primary: '#dc2626',
      secondary: '#0a0a0a',
      accent: '#ef4444',
      background: '#450a0a'
    },
    font: 'Bebas Neue',
    preview: 'bg-gradient-to-br from-red-600 to-black'
  },
  {
    id: 'narcos',
    name: 'Narcos Noir',
    description: 'Cocaine white, bullet textures, gritty sans',
    className: 'theme-narcos font-archivo',
    colors: {
      primary: '#f8fafc',
      secondary: '#1c1917',
      accent: '#d6d3d1',
      background: '#292524'
    },
    font: 'Archivo Black',
    preview: 'bg-gradient-to-br from-slate-100 to-stone-800'
  },
  {
    id: 'joker',
    name: 'Joker Jolt',
    description: 'Deep purple, green, carnival chaos',
    className: 'theme-joker font-special',
    colors: {
      primary: '#7c3aed',
      secondary: '#22c55e',
      accent: '#a855f7',
      background: '#2e1065'
    },
    font: 'Special Elite',
    preview: 'bg-gradient-to-br from-purple-600 to-green-500'
  },
  {
    id: 'tenet',
    name: 'Tenet Twist',
    description: 'Reverse-gradient effects, grayscale overlays',
    className: 'theme-tenet font-orbitron',
    colors: {
      primary: '#6b7280',
      secondary: '#000000',
      accent: '#94a3b8',
      background: '#111827'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-gray-500 to-black'
  },
  {
    id: 'wanda',
    name: 'Wanda Warp',
    description: 'Retro-TV grain, glitch red/purple',
    className: 'theme-wanda font-major-mono',
    colors: {
      primary: '#dc2626',
      secondary: '#7c3aed',
      accent: '#ec4899',
      background: '#1f2937'
    },
    font: 'Major Mono Display',
    preview: 'bg-gradient-to-br from-red-600 to-purple-600'
  },
  {
    id: 'cyber',
    name: 'Cyber Circle',
    description: 'Acid teal, glitch pink, dark matrix-like UI',
    className: 'theme-cyber font-fira',
    colors: {
      primary: '#06b6d4',
      secondary: '#ec4899',
      accent: '#22d3ee',
      background: '#0a0a0a'
    },
    font: 'Fira Code',
    preview: 'bg-gradient-to-br from-cyan-500 to-pink-500'
  },
  {
    id: 'minion',
    name: 'Minion Mode',
    description: 'Banana yellow, denim blue, bubbly font',
    className: 'theme-minion font-baloo',
    colors: {
      primary: '#facc15',
      secondary: '#2563eb',
      accent: '#fde047',
      background: '#eff6ff'
    },
    font: 'Baloo 2',
    preview: 'bg-gradient-to-br from-yellow-400 to-blue-600'
  },
  {
    id: 'arcane',
    name: 'Arcane Aura',
    description: 'Electric blue, steampunk brass, comic-graffiti',
    className: 'theme-arcane font-russo',
    colors: {
      primary: '#2563eb',
      secondary: '#92400e',
      accent: '#60a5fa',
      background: '#1e1b4b'
    },
    font: 'Russo One',
    preview: 'bg-gradient-to-br from-blue-600 to-amber-700'
  },
  {
    id: 'rick',
    name: 'Rick Realm',
    description: 'Neon green, portal blue, glitchy black',
    className: 'theme-rick font-orbitron',
    colors: {
      primary: '#22c55e',
      secondary: '#2563eb',
      accent: '#10b981',
      background: '#0a0a0a'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-green-500 to-blue-600'
  },
  {
    id: 'sacred',
    name: 'Sacred Streets',
    description: 'Gritty saffron, dark red, urban noir overlays',
    className: 'theme-sacred font-rajdhani',
    colors: {
      primary: '#f59e0b',
      secondary: '#7f1d1d',
      accent: '#fbbf24',
      background: '#1c1917'
    },
    font: 'Rajdhani',
    preview: 'bg-gradient-to-br from-amber-500 to-red-800'
  },
  {
    id: 'bollywood',
    name: 'Bollywood Bliss',
    description: 'Vibrant red, marigold yellow, spotlight shimmer',
    className: 'theme-bollywood font-dancing',
    colors: {
      primary: '#dc2626',
      secondary: '#fbbf24',
      accent: '#f59e0b',
      background: '#7f1d1d'
    },
    font: 'Dancing Script',
    preview: 'bg-gradient-to-br from-red-600 to-yellow-500'
  },
  {
    id: 'desi',
    name: 'Desi Drama',
    description: 'Fuchsia pinks, golden glitter, rose petals',
    className: 'theme-desi font-playfair',
    colors: {
      primary: '#db2777',
      secondary: '#fbbf24',
      accent: '#f9a8d4',
      background: '#fdf2f8'
    },
    font: 'Playfair Display',
    preview: 'bg-gradient-to-br from-pink-600 to-yellow-500'
  },
  {
    id: 'lotus',
    name: 'Lotus Legend',
    description: 'Sun-baked beige, clay red, tricolor undertones',
    className: 'theme-lotus font-tienne',
    colors: {
      primary: '#ea580c',
      secondary: '#d2b48c',
      accent: '#fb923c',
      background: '#fef3c7'
    },
    font: 'Tienne',
    preview: 'bg-gradient-to-br from-orange-600 to-amber-200'
  },
  {
    id: 'ring',
    name: 'Ring Realms',
    description: 'Forest green, parchment cream, antique gold',
    className: 'theme-ring font-im-fell',
    colors: {
      primary: '#16a34a',
      secondary: '#fbbf24',
      accent: '#4ade80',
      background: '#f9fafb'
    },
    font: 'IM Fell English',
    preview: 'bg-gradient-to-br from-green-600 to-yellow-500'
  },
  {
    id: 'wes',
    name: 'Wes Whimsy',
    description: 'Muted pastel palette, symmetrical cards',
    className: 'theme-wes font-courier',
    colors: {
      primary: '#f3e8ff',
      secondary: '#86efac',
      accent: '#fed7aa',
      background: '#fef3c7'
    },
    font: 'Courier Prime',
    preview: 'bg-gradient-to-br from-purple-100 to-green-300'
  },
  {
    id: 'avenger',
    name: 'Avenger Aesthetic',
    description: 'Cosmic blue, Stark-tech silver, red accents',
    className: 'theme-avenger font-exo',
    colors: {
      primary: '#2563eb',
      secondary: '#94a3b8',
      accent: '#dc2626',
      background: '#0f172a'
    },
    font: 'Exo 2',
    preview: 'bg-gradient-to-br from-blue-600 to-slate-400'
  },
  {
    id: 'scarface',
    name: 'Scarlet Scarface',
    description: 'Monochrome black & white with blood red',
    className: 'theme-scarface font-unifraktur',
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      accent: '#dc2626',
      background: '#1f2937'
    },
    font: 'UnifrakturCook',
    preview: 'bg-gradient-to-br from-black to-white'
  },
  {
    id: 'up',
    name: 'Up Universe',
    description: 'Sky blue, warm balloon tones, floating effects',
    className: 'theme-up font-fredoka',
    colors: {
      primary: '#0ea5e9',
      secondary: '#facc15',
      accent: '#f472b6',
      background: '#f0f9ff'
    },
    font: 'Fredoka One',
    preview: 'bg-gradient-to-br from-sky-500 to-yellow-400'
  },
  {
    id: 'chrome',
    name: 'Chrome Cruise',
    description: 'Candy red, racetrack black, yellow checkers',
    className: 'theme-chrome font-russo',
    colors: {
      primary: '#dc2626',
      secondary: '#000000',
      accent: '#facc15',
      background: '#1f2937'
    },
    font: 'Russo One',
    preview: 'bg-gradient-to-br from-red-600 to-black'
  },
  {
    id: 'jurassic',
    name: 'Jurassic Jungle',
    description: 'Dino green, muddy brown, cracked earth patterns',
    className: 'theme-jurassic font-anton',
    colors: {
      primary: '#16a34a',
      secondary: '#92400e',
      accent: '#4ade80',
      background: '#1c2e00'
    },
    font: 'Anton',
    preview: 'bg-gradient-to-br from-green-600 to-amber-700'
  },
  {
    id: 'pirate',
    name: 'Pirate Paradise',
    description: 'Aged parchment beige, dark rum brown, golden compass',
    className: 'theme-pirate font-pirata',
    colors: {
      primary: '#92400e',
      secondary: '#fbbf24',
      accent: '#d2b48c',
      background: '#fef3c7'
    },
    font: 'Pirata One',
    preview: 'bg-gradient-to-br from-amber-700 to-yellow-500'
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
    const existingLink = document.getElementById(linkId);
    if (existingLink) {
      existingLink.remove();
    }
    
    // Add new font link
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${formattedFontName}:wght@400;500;600;700&display=swap`;
    document.head.appendChild(link);
  };

  const applyTheme = (theme: Theme, useSecondary: boolean = false, font?: string) => {
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

    // Apply dynamic CSS variables for theme colors
    if (useSecondary) {
      root.style.setProperty('--theme-primary', theme.colors.secondary);
      root.style.setProperty('--theme-secondary', theme.colors.primary);
    } else {
      root.style.setProperty('--theme-primary', theme.colors.primary);
      root.style.setProperty('--theme-secondary', theme.colors.secondary);
    }
    
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--theme-background', theme.colors.background);

    // Apply custom font if provided
    if (font && font.trim()) {
      loadGoogleFont(font);
      root.style.setProperty('--font-family', `"${font}", sans-serif`);
    } else {
      root.style.removeProperty('--font-family');
    }

    // Add theme-specific animations and effects
    root.setAttribute('data-theme', theme.id);
  };

  const changeTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      storage.setCurrentTheme(themeId);
      applyTheme(theme, isSecondaryMode, customFont);
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
      setGoogleFont
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
