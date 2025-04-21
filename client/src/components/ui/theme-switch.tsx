import { useContext } from "react";
import { ThemeContext } from "@/context/theme-context";
import { themes, ThemeOption } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";
import { Palette, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeSwitch() {
  const { currentTheme, changeTheme, isDarkTheme } = useContext(ThemeContext);

  // Group themes by type
  const lightThemes = themes.filter(theme => !theme.isDark);
  const darkThemes = themes.filter(theme => theme.isDark);
  
  // Group themes by color families
  const blueThemes = themes.filter(theme => theme.name.includes("Blue") || theme.name.includes("Turquoise"));
  const orangeThemes = themes.filter(theme => theme.name.includes("Orange") || theme.name.includes("Tangerine") || theme.name.includes("Sunset"));
  const greenThemes = themes.filter(theme => theme.name.includes("Green") || theme.name.includes("Emerald"));
  const fluorThemes = themes.filter(theme => theme.name.includes("Fluorescent") || theme.name.includes("Neon") || theme.name.includes("Electric"));
  
  // Create a theme item component for reuse
  const ThemeItem = ({ theme }: { theme: ThemeOption }) => {
    const isDark = theme.isDark || false;
    
    return (
      <DropdownMenuItem
        onClick={() => changeTheme(theme)}
        className="flex items-center gap-2 cursor-pointer py-2"
      >
        {isDark ? (
          <div 
            className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center" 
            style={{ backgroundColor: '#111827' }}
          >
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: theme.primary }}
            />
          </div>
        ) : (
          <div 
            className="w-5 h-5 rounded-full border border-gray-200" 
            style={{ backgroundColor: theme.primary }}
          />
        )}
        <span className="font-medium">{theme.name}</span>
        {currentTheme.name === theme.name && (
          <span className="ml-auto">✓</span>
        )}
      </DropdownMenuItem>
    );
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium text-white bg-gray-800 px-3 py-1 rounded-t-md shadow-md">
          Try 10 Themes
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="default"
              className={`rounded-md shadow-lg border-2 flex items-center gap-2 px-4 py-2 rounded-t-none ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white'}`}
              style={{ borderColor: currentTheme.primary }}
            >
              {isDarkTheme ? (
                <Moon className="h-5 w-5" style={{ color: currentTheme.primary }} />
              ) : (
                <Sun className="h-5 w-5" style={{ color: currentTheme.primary }} />
              )}
              <span className="font-medium" style={{ color: currentTheme.primary }}>
                {currentTheme.name}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 max-h-[400px] overflow-y-auto">
            <DropdownMenuLabel>Orange & Amber</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {orangeThemes.map(theme => <ThemeItem key={theme.name} theme={theme} />)}
            
            <DropdownMenuLabel className="mt-2">Fluorescent & Neon</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {fluorThemes.map(theme => <ThemeItem key={theme.name} theme={theme} />)}
            
            <DropdownMenuLabel className="mt-2">Blues & Turquoise</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {blueThemes.map(theme => <ThemeItem key={theme.name} theme={theme} />)}
            
            <DropdownMenuLabel className="mt-2">Green Themes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {greenThemes.map(theme => <ThemeItem key={theme.name} theme={theme} />)}
            
            <DropdownMenuLabel className="mt-2">Other Light Themes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {lightThemes
              .filter(theme => 
                !blueThemes.includes(theme) && 
                !greenThemes.includes(theme) &&
                !orangeThemes.includes(theme) &&
                !fluorThemes.includes(theme)
              )
              .map(theme => <ThemeItem key={theme.name} theme={theme} />)
            }
            
            <DropdownMenuLabel className="mt-2">Other Dark Themes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {darkThemes
              .filter(theme => 
                !blueThemes.includes(theme) && 
                !greenThemes.includes(theme) &&
                !orangeThemes.includes(theme) &&
                !fluorThemes.includes(theme)
              )
              .map(theme => <ThemeItem key={theme.name} theme={theme} />)
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
