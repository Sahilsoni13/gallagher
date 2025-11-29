import { useColorScheme } from '@/hooks/use-color-scheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colorScheme } from 'nativewind';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

type ThemeContextType = {
  themePreference: ThemePreference;
  resolvedTheme: 'light' | 'dark';
  setThemePreference: (preference: ThemePreference) => Promise<void>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = '@theme_preference';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [themePreference, setThemePreferenceState] =
    useState<ThemePreference>('system');
  const [isLoading, setIsLoading] = useState(true);

  // Load saved theme preference on mount
  useEffect(() => {
    loadThemePreference();
  }, []);

  // Calculate resolved theme based on preference and system theme
  const resolvedTheme: 'light' | 'dark' =
    themePreference === 'system'
      ? (systemColorScheme ?? 'light')
      : themePreference;

  // Update NativeWind colorScheme when resolvedTheme changes
  useEffect(() => {
    colorScheme.set(resolvedTheme);
  }, [resolvedTheme]);

  const loadThemePreference = async () => {
    try {
      const saved = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (
        saved &&
        (saved === 'light' || saved === 'dark' || saved === 'system')
      ) {
        setThemePreferenceState(saved as ThemePreference);
        // Initialize NativeWind colorScheme
        const initialTheme: 'light' | 'dark' =
          saved === 'system' ? (systemColorScheme ?? 'light') : saved;
        colorScheme.set(initialTheme);
      } else {
        // Initialize with system theme if no preference saved
        const initialTheme = systemColorScheme ?? 'light';
        colorScheme.set(initialTheme);
      }
    } catch (error) {
      console.error('Error loading theme preference:', error);
      // Fallback to system theme
      const initialTheme = systemColorScheme ?? 'light';
      colorScheme.set(initialTheme);
    } finally {
      setIsLoading(false);
    }
  };

  const setThemePreference = async (preference: ThemePreference) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, preference);
      setThemePreferenceState(preference);
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  // Don't render until theme is loaded
  if (isLoading) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        themePreference,
        resolvedTheme,
        setThemePreference,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
