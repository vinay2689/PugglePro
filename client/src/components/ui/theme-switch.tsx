import { useContext } from "react";
import { ThemeContext } from "@/context/theme-context";
import { themes } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeSwitch() {
  const { currentTheme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium text-white bg-gray-800 px-3 py-1 rounded-t-md shadow-md">
          Try 5 Themes
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="default"
              className="bg-white rounded-md shadow-lg border-2 flex items-center gap-2 px-4 py-2 rounded-t-none"
              style={{ borderColor: currentTheme.primary }}
            >
              <Palette className="h-5 w-5" style={{ color: currentTheme.primary }} />
              <span className="font-medium" style={{ color: currentTheme.primary }}>
                {currentTheme.name}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Select a Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.name}
                onClick={() => changeTheme(theme)}
                className="flex items-center gap-2 cursor-pointer py-2"
              >
                <div 
                  className="w-5 h-5 rounded-full border border-gray-200" 
                  style={{ backgroundColor: theme.primary }}
                />
                <span className="font-medium">{theme.name}</span>
                {currentTheme.name === theme.name && (
                  <span className="ml-auto">✓</span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
