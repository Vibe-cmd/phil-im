import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '@/types';
import { storage } from '@/lib/storage';

// Complete theme collection with all mentioned themes
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
    preview: 'bg-gradient-to-br from-slate-900 via-slate-800 to-pink-900',
    emojis: ['💫', '🌟', '✨', '🎨', '🌙']
  },
  {
    id: 'spider-verse',
    name: 'Spectacular Spider-Verse',
    description: 'With great power comes great responsibility.',
    className: 'theme-spider-verse',
    colors: {
      primary: '#FF1E56',
      secondary: '#00B7EB',
      accent: '#F5E050',
      background: '#1a1a2e'
    },
    font: 'Anime Ace',
    preview: 'bg-gradient-to-br from-red-600 via-blue-500 to-yellow-400',
    emojis: ['🕷️', '🕸️', '🎨', '🦸‍♂️', '🌆']
  },
  {
    id: 'dune-desert',
    name: 'Dazzling Dune',
    description: 'The spice must flow.',
    className: 'theme-dune',
    colors: {
      primary: '#D9A86C',
      secondary: '#8B5523',
      accent: '#F4E4BC',
      background: '#3C2F2F'
    },
    font: 'Cinzel',
    preview: 'bg-gradient-to-br from-amber-600 via-orange-800 to-yellow-200',
    emojis: ['🏜️', '🪐', '🛸', '⚔️', '🌌']
  },
  {
    id: 'interstellar-space',
    name: 'Intriguing Interstellar',
    description: 'We must reach for the stars.',
    className: 'theme-interstellar',
    colors: {
      primary: '#A3BFFA',
      secondary: '#3A5F7D',
      accent: '#F4A261',
      background: '#0B1C2E'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-blue-600 via-indigo-800 to-orange-400',
    emojis: ['🌌', '🕰️', '🚀', '🌍', '🌀']
  },
  {
    id: 'matrix-code',
    name: 'Mystical Matrix',
    description: 'There is no spoon.',
    className: 'theme-matrix',
    colors: {
      primary: '#4CAF50',
      secondary: '#00FF00',
      accent: '#2E7D32',
      background: '#0F3D3E'
    },
    font: 'VT323',
    preview: 'bg-gradient-to-br from-green-500 via-teal-800 to-black',
    emojis: ['💾', '🖥️', '🕶️', '🔢', '🌐']
  },
  {
    id: 'hogwarts-magic',
    name: 'Hogwarts Harmony',
    description: 'It does not do to dwell on dreams and forget to live.',
    className: 'theme-hogwarts',
    colors: {
      primary: '#A68A64',
      secondary: '#FFD700',
      accent: '#2A623D',
      background: '#4A3728'
    },
    font: 'Luminary',
    preview: 'bg-gradient-to-br from-amber-600 via-yellow-500 to-green-700',
    emojis: ['🪄', '⚡', '🦁', '🏰', '📖']
  },
  {
    id: 'batman-dark',
    name: 'Brooding Batman',
    description: 'I am vengeance, I am the night, I am Batman!',
    className: 'theme-batman',
    colors: {
      primary: '#B0BEC5',
      secondary: '#4A4A4A',
      accent: '#FFCA28',
      background: '#1C2526'
    },
    font: 'Gotham',
    preview: 'bg-gradient-to-br from-gray-800 via-black to-yellow-600',
    emojis: ['🦇', '🌃', '🕵️‍♂️', '🃏', '🚓']
  },
  {
    id: 'wakanda-vibranium',
    name: 'Vibrant Vibranium',
    description: 'Wakanda forever!',
    className: 'theme-wakanda',
    colors: {
      primary: '#D4A017',
      secondary: '#6B3FA0',
      accent: '#FFD700',
      background: '#2C1A3D'
    },
    font: 'Futura',
    preview: 'bg-gradient-to-br from-purple-600 via-yellow-600 to-gold',
    emojis: ['🐆', '👑', '🌍', '🛡️', '⚔️']
  },
  {
    id: 'loki-mischief',
    name: 'Luscious Loki',
    description: 'I am burdened with glorious purpose.',
    className: 'theme-loki',
    colors: {
      primary: '#2A9D8F',
      secondary: '#E9C46A',
      accent: '#F4A261',
      background: '#264653'
    },
    font: 'Papyrus',
    preview: 'bg-gradient-to-br from-teal-600 via-yellow-500 to-orange-400',
    emojis: ['🗡️', '🕰️', '👑', '🐍', '🪄']
  },
  {
    id: 'peaky-blinders',
    name: 'Pensive Peaky',
    description: 'By order of the Peaky Blinders.',
    className: 'theme-peaky',
    colors: {
      primary: '#D9C2A6',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Bebas Neue',
    preview: 'bg-gradient-to-br from-amber-700 via-brown-600 to-gray-800',
    emojis: ['🧢', '🚬', '🔫', '🥃', '🕴️']
  },
  {
    id: 'mcu-avengers',
    name: 'Mighty MCU',
    description: 'Avengers, assemble!',
    className: 'theme-mcu',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#00B7EB',
      background: '#1C2526'
    },
    font: 'Avenir',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-blue-500',
    emojis: ['🦸‍♂️', '🛡️', '⚡', '🔨', '🌌']
  },
  {
    id: 'squid-game',
    name: 'Sinister Squid',
    description: 'Ready, set, play.',
    className: 'theme-squid',
    colors: {
      primary: '#E91E63',
      secondary: '#0288D1',
      accent: '#4CAF50',
      background: '#FFD700'
    },
    font: 'Roboto Condensed',
    preview: 'bg-gradient-to-br from-pink-600 via-blue-600 to-green-500',
    emojis: ['🎮', '🟥', '🟢', '🔺', '⬛']
  },
  {
    id: 'game-of-thrones',
    name: "Throne's Triumph",
    description: 'Winter is coming.',
    className: 'theme-got',
    colors: {
      primary: '#FFD700',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Trajan Pro',
    preview: 'bg-gradient-to-br from-yellow-600 via-amber-700 to-gray-800',
    emojis: ['👑', '🐉', '⚔️', '🛡️', '❄️']
  },
  {
    id: 'avatar-pandora',
    name: 'Azure Avatar',
    description: 'We are one with the forest.',
    className: 'theme-avatar',
    colors: {
      primary: '#00A3AD',
      secondary: '#A3D39C',
      accent: '#4CAF50',
      background: '#2A623D'
    },
    font: 'Papyrus',
    preview: 'bg-gradient-to-br from-cyan-600 via-green-500 to-teal-800',
    emojis: ['🌍', '🐉', '🌿', '🪶', '🦋']
  },
  {
    id: 'casa-de-papel',
    name: 'Heistful Hustle',
    description: 'Bella Ciao!',
    className: 'theme-casa',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#B0BEC5',
      background: '#4A3728'
    },
    font: 'Eurostile',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-gray-500',
    emojis: ['🎭', '💰', '🔫', '🕴️', '📜']
  },
  {
    id: 'witcher-geralt',
    name: "Witcher's Wrath",
    description: 'Destiny is a beast.',
    className: 'theme-witcher',
    colors: {
      primary: '#A68A64',
      secondary: '#FFD700',
      accent: '#4A3728',
      background: '#2A623D'
    },
    font: 'Cinzel',
    preview: 'bg-gradient-to-br from-amber-600 via-yellow-500 to-green-800',
    emojis: ['⚔️', '🐺', '🪄', '👑', '🧙‍♂️']
  },
  {
    id: 'deadpool-chaos',
    name: 'Dashing Deadpool',
    description: 'Maximum effort!',
    className: 'theme-deadpool',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#B0BEC5',
      background: '#4A4A4A'
    },
    font: 'Impact',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-gray-500',
    emojis: ['🗡️', '🔫', '😂', '💥', '🌮']
  },
  {
    id: 'studio-ghibli',
    name: "Ghibli's Glow",
    description: 'The wind rises, we must try to live.',
    className: 'theme-ghibli',
    colors: {
      primary: '#A3D39C',
      secondary: '#00A3AD',
      accent: '#FFD700',
      background: '#2A623D'
    },
    font: 'Anime Ace',
    preview: 'bg-gradient-to-br from-green-400 via-cyan-500 to-yellow-400',
    emojis: ['🌸', '🐾', '🌿', '🪄', '🍃']
  },
  {
    id: 'jumanji-jungle',
    name: "Jumanji's Jungle",
    description: 'In the jungle, you must wait, until the dice read five or eight.',
    className: 'theme-jumanji',
    colors: {
      primary: '#2A623D',
      secondary: '#8B6F47',
      accent: '#D9A86C',
      background: '#FFD700'
    },
    font: 'Jungle Fever',
    preview: 'bg-gradient-to-br from-green-700 via-amber-600 to-yellow-500',
    emojis: ['🎲', '🦒', '🌴', '🪐', '🗺️']
  },
  {
    id: 'titanic-romance',
    name: 'Tragic Titanic',
    description: "I'm the king of the world!",
    className: 'theme-titanic',
    colors: {
      primary: '#A3BFFA',
      secondary: '#FFD700',
      accent: '#D9C2A6',
      background: '#4A3728'
    },
    font: 'Great Vibes',
    preview: 'bg-gradient-to-br from-blue-400 via-yellow-500 to-amber-600',
    emojis: ['🚢', '💎', '🌊', '❤️', '🎻']
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

  const createEmojiBackground = (emojis: string[]) => {
    // Create subtle emoji background pattern
    const emojiElements = emojis.map((emoji, index) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const rotation = Math.random() * 360;
      const size = 20 + Math.random() * 10;
      const opacity = 0.03 + Math.random() * 0.02;
      
      return `<div style="
        position: absolute;
        top: ${y}%;
        left: ${x}%;
        font-size: ${size}px;
        opacity: ${opacity};
        transform: rotate(${rotation}deg);
        pointer-events: none;
        animation: float ${15 + Math.random() * 10}s ease-in-out infinite;
        animation-delay: ${index * 2}s;
      ">${emoji}</div>`;
    }).join('');
    
    return emojiElements;
  };

  const applyTheme = (theme: Theme, useSecondary: boolean = false, font?: string) => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove all theme classes first
    themes.forEach(t => {
      if (t.className) {
        root.classList.remove(...t.className.split(' '));
        body.classList.remove(...t.className.split(' '));
      }
    });
    
    // Add new theme classes
    if (theme.className) {
      root.classList.add(...theme.className.split(' '));
      body.classList.add(...theme.className.split(' '));
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

    // Remove existing emoji background
    const existingEmojiContainer = document.getElementById('theme-emoji-background');
    if (existingEmojiContainer) {
      existingEmojiContainer.remove();
    }

    // Create and apply theme-specific background with emojis
    const emojiContainer = document.createElement('div');
    emojiContainer.id = 'theme-emoji-background';
    emojiContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    `;
    
    // Generate multiple sets of emojis for better coverage
    let emojiHTML = '';
    for (let set = 0; set < 3; set++) {
      emojiHTML += createEmojiBackground(theme.emojis || []);
    }
    emojiContainer.innerHTML = emojiHTML;
    
    // Apply theme background
    body.style.background = `linear-gradient(135deg, ${theme.colors.background}, rgba(${hexToRgb(primaryColor)}, 0.1), rgba(${hexToRgb(theme.colors.accent)}, 0.05))`;
    body.style.minHeight = '100vh';
    body.style.fontFamily = `"${fontToUse}", sans-serif`;
    
    // Insert emoji background
    document.body.appendChild(emojiContainer);
    
    // Add theme data attribute for CSS targeting
    root.setAttribute('data-theme', theme.id);
    
    console.log(`Theme applied: ${theme.name}`, {
      primary: primaryColor,
      secondary: secondaryColor,
      accent: theme.colors.accent,
      background: theme.colors.background,
      font: fontToUse,
      emojis: theme.emojis
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
