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
  
  // Theme 5: Midnight
  {
    name: "Midnight",
    primary: "#4F46E5",
    primaryLight: "#A5B4FC",
    primaryDark: "#3730A3",
    secondary: "#F59E0B",
    accent: "#EC4899",
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#F8FAFC"
  }
];
