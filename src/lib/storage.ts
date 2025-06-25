
import { Album, Theme } from '@/types';

const STORAGE_KEYS = {
  CINE_LIBRARIES: 'feelim_cine_libraries',
  CURRENT_THEME: 'feelim_theme',
  USER_PREFERENCES: 'feelim_preferences'
};

export const storage = {
  // Albums
  getAlbums: (): Album[] => {
    try {
      const libraries = localStorage.getItem(STORAGE_KEYS.CINE_LIBRARIES);
      return libraries ? JSON.parse(libraries) : [];
    } catch (error) {
      console.error('Error loading CineLibraries:', error);
      return [];
    }
  },

  saveAlbums: (libraries: Album[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.CINE_LIBRARIES, JSON.stringify(libraries));
    } catch (error) {
      console.error('Error saving CineLibraries:', error);
    }
  },

  // Theme
  getCurrentTheme: (): string => {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_THEME) || 'default';
  },

  setCurrentTheme: (themeId: string): void => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_THEME, themeId);
  },

  // Backup & Export
  exportData: (): string => {
    const data = {
      cineLibraries: storage.getAlbums(),
      theme: storage.getCurrentTheme(),
      exportedAt: new Date().toISOString(),
      version: '2.0.0',
      appName: 'फीLim'
    };
    return JSON.stringify(data, null, 2);
  },

  importData: (jsonString: string): boolean => {
    try {
      const data = JSON.parse(jsonString);
      
      if (data.cineLibraries || data.albums) {
        storage.saveAlbums(data.cineLibraries || data.albums);
      }
      
      if (data.theme) {
        storage.setCurrentTheme(data.theme);
      }
      
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }
};
