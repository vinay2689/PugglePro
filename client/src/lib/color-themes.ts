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
  // Theme 1: Ocean Blue
  {
    name: "Ocean Blue",
    primary: "#3B82F6",
    primaryLight: "#93C5FD",
    primaryDark: "#1E40AF",
    secondary: "#FBBF24",
    accent: "#10B981",
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#F9FAFB"
  },
  
  // Theme 2: Emerald Green
  {
    name: "Emerald Green",
    primary: "#059669",
    primaryLight: "#6EE7B7",
    primaryDark: "#065F46",
    secondary: "#F97316",
    accent: "#8B5CF6",
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#ECFDF5"
  },
  
  // Theme 3: Royal Purple
  {
    name: "Royal Purple",
    primary: "#7C3AED",
    primaryLight: "#C4B5FD",
    primaryDark: "#5B21B6",
    secondary: "#EC4899",
    accent: "#2563EB",
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#F5F3FF"
  },
  
  // Theme 4: Ruby Red
  {
    name: "Ruby Red",
    primary: "#DC2626",
    primaryLight: "#FCA5A5",
    primaryDark: "#991B1B",
    secondary: "#2563EB",
    accent: "#059669",
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#FEF2F2"
  },
  
  // Theme 5: Windsurf Dark
  {
    name: "Windsurf Dark",
    primary: "#0AC5B3",    // Teal/turquoise from the Windsurf site
    primaryLight: "#2FDECF",
    primaryDark: "#09A597",
    secondary: "#F24E1E",  // Orange accent for contrast
    accent: "#FFFFFF",     // White accent for high contrast
    textLight: "#FFFFFF",  // White text for dark background
    textDark: "#E6E6E6",   // Light gray for secondary text
    background: "#0A0A0A",  // Nearly black background
    isDark: true
  },
  
  // Theme 6: Midnight Blue
  {
    name: "Midnight Blue",
    primary: "#4F46E5",
    primaryLight: "#A5B4FC",
    primaryDark: "#3730A3",
    secondary: "#F59E0B",
    accent: "#EC4899",
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#F8FAFC"
  },
  
  // Theme 7: Dark Mode
  {
    name: "Dark Mode",
    primary: "#6D28D9",    // Purple
    primaryLight: "#A78BFA",
    primaryDark: "#4C1D95",
    secondary: "#FCD34D",  // Yellow
    accent: "#EC4899",     // Pink
    textLight: "#FFFFFF",
    textDark: "#E5E7EB",
    background: "#111827", // Dark blue/gray
    isDark: true
  },
  
  // Theme 8: Corporate
  {
    name: "Corporate",
    primary: "#0284C7",    // Professional blue
    primaryLight: "#7DD3FC",
    primaryDark: "#0369A1",
    secondary: "#A855F7",  // Purple accent
    accent: "#84CC16",     // Green accent
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#F8FAFC"
  }
];
