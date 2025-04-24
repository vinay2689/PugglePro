export interface ThemeOption {
  name: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  textLight: string;
  textDark: string;
  background: string;
  isDark?: boolean;
}

export const themes: ThemeOption[] = [
  // Turquoise Dark - The only theme
  {
    name: "Turquoise Dark",
    primary: "#0AC5B3",    // Teal/turquoise color
    primaryLight: "#2FDECF",
    primaryDark: "#09A597",
    secondary: "#F24E1E",  // Orange accent for contrast
    accent: "#FFFFFF",     // White accent for high contrast
    textLight: "#FFFFFF",  // White text for dark background
    textDark: "#E6E6E6",   // Light gray for secondary text
    background: "#0A0A0A",  // Nearly black background
    isDark: true
  }
];
