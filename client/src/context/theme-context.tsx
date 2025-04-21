import { createContext, useState, useEffect, ReactNode } from "react";
import { themes, ThemeOption } from "@/lib/color-themes";

interface ThemeContextProps {
  currentTheme: ThemeOption;
  changeTheme: (theme: ThemeOption) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: themes[0],
  changeTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(themes[0]);

  const changeTheme = (theme: ThemeOption) => {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--primary-light', theme.primaryLight);
    document.documentElement.style.setProperty('--primary-dark', theme.primaryDark);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    setCurrentTheme(theme);
  };

  useEffect(() => {
    // Initialize theme
    changeTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
