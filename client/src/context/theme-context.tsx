import { createContext, useState, useEffect, ReactNode } from "react";
import { themes, ThemeOption } from "@/lib/color-themes";

interface ThemeContextProps {
  currentTheme: ThemeOption;
  changeTheme: (theme: ThemeOption) => void;
  isDarkTheme: boolean;
}

// There's only one theme now - Turquoise Dark
const turquoiseDarkTheme = themes[0];

const defaultContext: ThemeContextProps = {
  currentTheme: turquoiseDarkTheme,
  changeTheme: () => {},
  isDarkTheme: true
};

export const ThemeContext = createContext<ThemeContextProps>(defaultContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always use Turquoise Dark theme - no switching possible
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(turquoiseDarkTheme);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  const changeTheme = (theme: ThemeOption) => {
    // Set CSS variables for theme colors
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--primary-light', theme.primaryLight);
    document.documentElement.style.setProperty('--primary-dark', theme.primaryDark);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--text-light', theme.textLight);
    document.documentElement.style.setProperty('--text-dark', theme.textDark);
    document.documentElement.style.setProperty('--background', theme.background);
    
    // Apply dark theme if specified
    const isDark = theme.isDark || false;
    setIsDarkTheme(isDark);
    
    // Apply dark mode to body
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.documentElement.style.backgroundColor = theme.background;
      document.body.style.backgroundColor = theme.background;
      document.body.style.color = theme.textLight;
    } else {
      document.body.classList.remove('dark-theme');
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
    
    // Save theme preference to localStorage
    try {
      localStorage.setItem('puggle-theme', JSON.stringify(theme));
    } catch (e) {
      // If localStorage is not available, quietly fail
      console.log('Could not save theme to localStorage');
    }
    
    setCurrentTheme(theme);
  };

  useEffect(() => {
    // Always apply the Turquoise Dark theme immediately
    changeTheme(turquoiseDarkTheme);
    
    // Force dark theme application
    document.documentElement.style.backgroundColor = turquoiseDarkTheme.background;
    document.body.style.backgroundColor = turquoiseDarkTheme.background;
    document.body.style.color = turquoiseDarkTheme.textLight;
    document.body.classList.add('dark-theme');
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
