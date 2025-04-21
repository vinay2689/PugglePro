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
  
  // Theme 3: Tangerine Orange
  {
    name: "Tangerine Orange",
    primary: "#F97316",    // Vibrant orange
    primaryLight: "#FDBA74",
    primaryDark: "#C2410C",
    secondary: "#0EA5E9",  // Sky blue for contrast
    accent: "#8B5CF6",     // Purple accent
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#FFF7ED"  // Warm light background
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
  
  // Theme 5: Turquoise Dark
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
  },
  
  // Theme 6: Fluorescent Green
  {
    name: "Fluorescent Green",
    primary: "#4ADE80",    // Bright green
    primaryLight: "#86EFAC",
    primaryDark: "#16A34A",
    secondary: "#F472B6",  // Pink for contrast
    accent: "#2563EB",     // Blue accent
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#F0FDF4"  // Light green tint background
  },
  
  // Theme 7: Burnt Orange Dark
  {
    name: "Burnt Orange Dark",
    primary: "#EA580C",    // Burnt orange
    primaryLight: "#FB923C",
    primaryDark: "#9A3412",
    secondary: "#22D3EE",  // Cyan for contrast
    accent: "#A3E635",     // Lime accent
    textLight: "#FFFFFF",
    textDark: "#E5E7EB",
    background: "#1C1917", // Very dark brown
    isDark: true
  },
  
  // Theme 8: Fluorescent Pink
  {
    name: "Fluorescent Pink",
    primary: "#EC4899",    // Bright pink
    primaryLight: "#F9A8D4",
    primaryDark: "#BE185D",
    secondary: "#3B82F6",  // Blue for contrast
    accent: "#10B981",     // Green accent
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#FDF2F8"  // Light pink tint
  },
  
  // Theme 9: Neon Sunset
  {
    name: "Neon Sunset",
    primary: "#F59E0B",    // Amber/gold
    primaryLight: "#FCD34D",
    primaryDark: "#B45309",
    secondary: "#EC4899",  // Pink secondary
    accent: "#8B5CF6",     // Purple accent
    textLight: "#FFFFFF",  
    textDark: "#E5E7EB",
    background: "#18181B", // Dark gray
    isDark: true
  },
  
  // Theme 10: Electric Blue
  {
    name: "Electric Blue",
    primary: "#0EA5E9",    // Bright blue
    primaryLight: "#7DD3FC",
    primaryDark: "#0369A1",
    secondary: "#F97316",  // Orange for contrast
    accent: "#A855F7",     // Purple accent
    textLight: "#F9FAFB",
    textDark: "#111827",
    background: "#F0F9FF"  // Light blue tint
  }
];
