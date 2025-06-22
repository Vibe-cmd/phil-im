
import { Album, Theme } from '@/types';

const STORAGE_KEYS = {
  ALBUMS: 'watchvault_albums',
  CURRENT_THEME: 'watchvault_theme',
  USER_PREFERENCES: 'watchvault_preferences'
};

export const storage = {
  // Albums
  getAlbums: (): Album[] => {
    try {
      const albums = localStorage.getItem(STORAGE_KEYS.ALBUMS);
      return albums ? JSON.parse(albums) : [];
    } catch (error) {
      console.error('Error loading albums:', error);
      return [];
    }
  },

  saveAlbums: (albums: Album[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.ALBUMS, JSON.stringify(albums));
    } catch (error) {
      console.error('Error saving albums:', error);
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
      albums: storage.getAlbums(),
      theme: storage.getCurrentTheme(),
      exportedAt: new Date().toISOString(),
      version: '1.0.0'
    };
    return JSON.stringify(data, null, 2);
  },

  importData: (jsonString: string): boolean => {
    try {
      const data = JSON.parse(jsonString);
      
      if (data.albums) {
        storage.saveAlbums(data.albums);
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
