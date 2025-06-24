
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
  // Superhero Themes
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
    id: 'loki-mischief',
    name: 'Luscious Loki',
    description: 'I am burdened with glorious purpose - Emerald and gold trickster vibes',
    className: 'theme-loki',
    colors: {
      primary: '#2A9D8F',
      secondary: '#E9C46A',
      accent: '#F4A261',
      background: '#264653'
    },
    font: 'Cinzel',
    preview: 'bg-gradient-to-br from-teal-600 via-yellow-400 to-orange-400'
  },
  {
    id: 'mcu-mighty',
    name: 'Mighty MCU',
    description: 'Avengers, assemble! - Classic Marvel colors with cosmic energy',
    className: 'theme-mcu',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#00B7EB',
      background: '#0f172a'
    },
    font: 'Exo 2',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-blue-500'
  },
  {
    id: 'deadpool-chaos',
    name: 'Dashing Deadpool',
    description: 'Maximum effort! - Chaotic red and black with comic book energy',
    className: 'theme-deadpool',
    colors: {
      primary: '#D81F26',
      secondary: '#000000',
      accent: '#FFD700',
      background: '#1a1a1a'
    },
    font: 'Bangers',
    preview: 'bg-gradient-to-br from-red-600 via-black to-yellow-500'
  },
  // Sci-Fi Themes
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
    id: 'interstellar-space',
    name: 'Intriguing Interstellar',
    description: 'We must reach for the stars - Cosmic blues with time distortion effects',
    className: 'theme-interstellar',
    colors: {
      primary: '#A3BFFA',
      secondary: '#3A5F7D',
      accent: '#F4A261',
      background: '#1B263B'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-blue-400 via-slate-600 to-orange-400'
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
    id: 'tenet-inversion',
    name: 'Twisted Tenet',
    description: "Don't try to understand it, feel it - Temporal inversion aesthetics",
    className: 'theme-tenet',
    colors: {
      primary: '#A3BFFA',
      secondary: '#D81F26',
      accent: '#4A4A4A',
      background: '#1B263B'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-blue-400 via-red-600 to-gray-600'
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
  // Fantasy Themes
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
    id: 'witcher-silver',
    name: "Witcher's Wrath",
    description: 'Destiny is a beast - Silver swords and monster hunting',
    className: 'theme-witcher',
    colors: {
      primary: '#A68A64',
      secondary: '#FFD700',
      accent: '#4A3728',
      background: '#2A623D'
    },
    font: 'Cinzel',
    preview: 'bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-800'
  },
  {
    id: 'thrones-winter',
    name: "Throne's Triumph",
    description: 'Winter is coming - Medieval fantasy with icy blues and gold',
    className: 'theme-thrones',
    colors: {
      primary: '#FFD700',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Cinzel Decorative',
    preview: 'bg-gradient-to-br from-yellow-500 via-amber-700 to-amber-900'
  },
  {
    id: 'avatar-pandora',
    name: 'Azure Avatar',
    description: 'We are one with the forest - Bioluminescent blues and forest greens',
    className: 'theme-avatar',
    colors: {
      primary: '#00A3AD',
      secondary: '#A3D39C',
      accent: '#4CAF50',
      background: '#2A623D'
    },
    font: 'Quicksand',
    preview: 'bg-gradient-to-br from-cyan-600 via-green-400 to-green-700'
  },
  {
    id: 'ghibli-nature',
    name: "Ghibli's Glow",
    description: 'The wind rises, we must try to live - Soft pastels and nature magic',
    className: 'theme-ghibli',
    colors: {
      primary: '#A3D39C',
      secondary: '#00A3AD',
      accent: '#FFD700',
      background: '#2A623D'
    },
    font: 'Comfortaa',
    preview: 'bg-gradient-to-br from-green-300 via-cyan-500 to-yellow-400'
  },
  // Crime Drama Themes
  {
    id: 'peaky-blinders',
    name: 'Pensive Peaky',
    description: 'By order of the Peaky Blinders - 1920s Birmingham grit',
    className: 'theme-peaky',
    colors: {
      primary: '#D9C2A6',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Bebas Neue',
    preview: 'bg-gradient-to-br from-amber-200 via-amber-700 to-amber-900'
  },
  {
    id: 'money-heist',
    name: 'Heistful Hustle',
    description: 'Bella Ciao! - Spanish resistance with red masks and gold',
    className: 'theme-heist',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#B0BEC5',
      background: '#4A3728'
    },
    font: 'Oswald',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-slate-400'
  },
  {
    id: 'narcos-cartel',
    name: 'Narcotic Narcos',
    description: 'Plata o plomo - Colombian cartel gold and danger',
    className: 'theme-narcos',
    colors: {
      primary: '#FFD700',
      secondary: '#8B6F47',
      accent: '#4A3728',
      background: '#3C2F2F'
    },
    font: 'Oswald',
    preview: 'bg-gradient-to-br from-yellow-500 via-amber-700 to-amber-900'
  },
  {
    id: 'sacred-games',
    name: 'Sacred Syndicate',
    description: 'Jo bhi main bolta hoon, vahi sahi hai - Mumbai underworld saffron and red',
    className: 'theme-sacred',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#4A3728',
      background: '#8B6F47'
    },
    font: 'Rajdhani',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-amber-700'
  },
  {
    id: 'joker-chaos',
    name: "Jester's Joker",
    description: 'Why so serious? - Chaotic purples and greens with madness',
    className: 'theme-joker',
    colors: {
      primary: '#4CAF50',
      secondary: '#D81F26',
      accent: '#FFD700',
      background: '#4A4A4A'
    },
    font: 'Special Elite',
    preview: 'bg-gradient-to-br from-green-500 via-red-600 to-yellow-500'
  },
  // Thriller Themes
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
  },
  {
    id: 'wandavision-retro',
    name: 'Wistful WandaVision',
    description: 'What is grief, if not love persevering? - Retro TV aesthetics',
    className: 'theme-wanda',
    colors: {
      primary: '#D81F26',
      secondary: '#A3BFFA',
      accent: '#FFD700',
      background: '#4A3728'
    },
    font: 'American Typewriter',
    preview: 'bg-gradient-to-br from-red-600 via-blue-400 to-yellow-500'
  },
  // Animated Themes
  {
    id: 'minions-banana',
    name: 'Mischievous Minions',
    description: 'Bananaaaa! - Yellow chaos with denim blue accents',
    className: 'theme-minions',
    colors: {
      primary: '#F4A261',
      secondary: '#00B7EB',
      accent: '#FFD700',
      background: '#4A4A4A'
    },
    font: 'Baloo 2',
    preview: 'bg-gradient-to-br from-orange-400 via-blue-500 to-yellow-400'
  },
  {
    id: 'arcane-steampunk',
    name: "Arcane's Aura",
    description: 'Every legend has a beginning - Steampunk magic with electric blues',
    className: 'theme-arcane',
    colors: {
      primary: '#2A9D8F',
      secondary: '#E9C46A',
      accent: '#F4A261',
      background: '#264653'
    },
    font: 'Russo One',
    preview: 'bg-gradient-to-br from-teal-600 via-yellow-400 to-orange-400'
  },
  {
    id: 'rick-morty',
    name: 'Rambunctious Rick',
    description: 'Wubba lubba dub dub! - Scientific chaos with portal green',
    className: 'theme-rick',
    colors: {
      primary: '#00B7EB',
      secondary: '#F4A261',
      accent: '#4CAF50',
      background: '#FFD700'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-blue-500 via-orange-400 to-green-500'
  },
  // Bollywood Themes
  {
    id: 'bollywood-classic',
    name: 'Bountiful Bollywood',
    description: 'Pyaar dosti hai - Classic red and gold with dance energy',
    className: 'theme-bollywood',
    colors: {
      primary: '#FFD700',
      secondary: '#D81F26',
      accent: '#00B7EB',
      background: '#A68A64'
    },
    font: 'Dancing Script',
    preview: 'bg-gradient-to-br from-yellow-500 via-red-600 to-blue-500'
  },
  {
    id: 'dharma-romance',
    name: "Dharma's Delight",
    description: 'Kuch kuch hota hai - Romantic pinks with golden hearts',
    className: 'theme-dharma',
    colors: {
      primary: '#E91E63',
      secondary: '#FFD700',
      accent: '#00B7EB',
      background: '#A3BFFA'
    },
    font: 'Playfair Display',
    preview: 'bg-gradient-to-br from-pink-600 via-yellow-500 to-blue-400'
  },
  // Adventure Themes
  {
    id: 'jumanji-jungle',
    name: "Jumanji's Jungle",
    description: 'In the jungle you must wait, until the dice read five or eight',
    className: 'theme-jumanji',
    colors: {
      primary: '#2A623D',
      secondary: '#8B6F47',
      accent: '#D9A86C',
      background: '#FFD700'
    },
    font: 'Advent Pro',
    preview: 'bg-gradient-to-br from-green-700 via-amber-700 to-yellow-500'
  },
  {
    id: 'titanic-ocean',
    name: 'Tragic Titanic',
    description: "I'm the king of the world! - Ocean blues with romantic elegance",
    className: 'theme-titanic',
    colors: {
      primary: '#A3BFFA',
      secondary: '#FFD700',
      accent: '#D9C2A6',
      background: '#4A3728'
    },
    font: 'Libre Baskerville',
    preview: 'bg-gradient-to-br from-blue-400 via-yellow-500 to-amber-200'
  },
  // Sports Drama
  {
    id: 'creed-boxing',
    name: "Creed's Conquest",
    description: 'Your legacy is more than a name - Boxing ring reds with determination',
    className: 'theme-creed',
    colors: {
      primary: '#D81F26',
      secondary: '#FFD700',
      accent: '#4A4A4A',
      background: '#B0BEC5'
    },
    font: 'Bebas Neue',
    preview: 'bg-gradient-to-br from-red-600 via-yellow-500 to-gray-400'
  },
  // Classic Themes  
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
    id: 'breaking-bad',
    name: 'Breaking Background',
    description: 'I am the one who knocks - Chemistry green with desert yellow',
    className: 'theme-breaking',
    colors: {
      primary: '#eab308',
      secondary: '#0f172a',
      accent: '#22c55e',
      background: '#0f172a'
    },
    font: 'Bebas Neue',
    preview: 'bg-gradient-to-br from-yellow-500 via-black to-green-500'
  },
  {
    id: 'oppenheimer-atomic',
    name: 'Oppenhype',
    description: 'Now I am become Death, destroyer of worlds - Atomic orange with steel',
    className: 'theme-oppenheimer',
    colors: {
      primary: '#f97316',
      secondary: '#475569',
      accent: '#fbbf24',
      background: '#0f172a'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-orange-500 via-slate-600 to-yellow-400'
  },
  {
    id: 'stranger-things',
    name: 'Stranger Sheets',
    description: 'Friends don\'t lie - 80s neon with Upside Down darkness',
    className: 'theme-stranger',
    colors: {
      primary: '#ef4444',
      secondary: '#7f1d1d',
      accent: '#fbbf24',
      background: '#7f1d1d'
    },
    font: 'Orbitron',
    preview: 'bg-gradient-to-br from-red-500 via-red-800 to-yellow-400'
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

  const createThemeParticles = (themeId: string) => {
    // Remove existing particles
    const existingParticles = document.querySelector('.theme-particles');
    if (existingParticles) {
      existingParticles.remove();
    }

    // Create theme-specific particle effects
    const particleContainer = document.createElement('div');
    particleContainer.className = 'theme-particles';
    
    // Theme-specific particle creation
    const particleConfigs = {
      'matrix-code': { char: '01', color: '#00FF00', count: 50 },
      'spider-verse': { char: '🕷️', color: '#FF1E56', count: 20 },
      'hogwarts-magic': { char: '✨', color: '#FFD700', count: 30 },
      'dune-desert': { char: '🌟', color: '#D9A86C', count: 25 },
      'cyberpunk-neon': { char: '⚡', color: '#06b6d4', count: 35 }
    };

    const config = particleConfigs[themeId as keyof typeof particleConfigs];
    if (config) {
      for (let i = 0; i < config.count; i++) {
        const particle = document.createElement('div');
        particle.textContent = config.char;
        particle.style.cssText = `
          position: absolute;
          color: ${config.color};
          font-size: ${Math.random() * 20 + 10}px;
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;
          animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
          opacity: 0.3;
          pointer-events: none;
        `;
        particleContainer.appendChild(particle);
      }
    }
    
    document.body.appendChild(particleContainer);
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

    // Apply comprehensive CSS variables
    const primaryColor = useSecondary ? theme.colors.secondary : theme.colors.primary;
    const secondaryColor = useSecondary ? theme.colors.primary : theme.colors.secondary;
    
    root.style.setProperty('--theme-primary', primaryColor);
    root.style.setProperty('--theme-secondary', secondaryColor);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--theme-background', theme.colors.background);
    
    // RGB values for better alpha support
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0';
    };
    
    root.style.setProperty('--theme-primary-rgb', hexToRgb(primaryColor));
    root.style.setProperty('--theme-secondary-rgb', hexToRgb(secondaryColor));
    root.style.setProperty('--theme-accent-rgb', hexToRgb(theme.colors.accent));

    // Apply custom font
    const fontToUse = font && font.trim() ? font : theme.font;
    if (fontToUse) {
      if (font && font.trim()) {
        loadGoogleFont(font);
      }
      root.style.setProperty('--font-family', `"${fontToUse}", sans-serif`);
    }

    // Theme-specific background patterns and effects
    const bodyStyles = {
      'matrix-code': 'radial-gradient(circle at 20% 50%, rgba(0, 255, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 0, 0.1) 0%, transparent 50%)',
      'spider-verse': 'linear-gradient(45deg, rgba(255, 30, 86, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0, 183, 235, 0.1) 25%, transparent 25%)',
      'cyberpunk-neon': 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))',
      'hogwarts-magic': 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
      'dune-desert': 'linear-gradient(to bottom, rgba(217, 168, 108, 0.1), rgba(139, 111, 71, 0.1))'
    };

    const bodyStyle = bodyStyles[theme.id as keyof typeof bodyStyles];
    if (bodyStyle) {
      document.body.style.backgroundImage = bodyStyle;
    } else {
      document.body.style.backgroundImage = `linear-gradient(135deg, ${theme.colors.background}, rgba(${hexToRgb(secondaryColor)}, 0.1))`;
    }

    // Add theme data attribute for CSS targeting
    root.setAttribute('data-theme', theme.id);
    
    // Create theme-specific particles
    setTimeout(() => createThemeParticles(theme.id), 100);
  };

  const applyThemeEffects = () => {
    // Dynamic theme-based cursor effects
    const style = document.createElement('style');
    style.innerHTML = `
      [data-theme="${currentTheme.id}"] * {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="${currentTheme.colors.primary}" opacity="0.5"/></svg>'), auto;
      }
      
      [data-theme="${currentTheme.id}"] button:hover {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="${currentTheme.colors.accent}" opacity="0.8"/></svg>'), pointer;
      }
    `;
    document.head.appendChild(style);
  };

  const changeTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      storage.setCurrentTheme(themeId);
      applyTheme(theme, isSecondaryMode, customFont);
      applyThemeEffects();
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
